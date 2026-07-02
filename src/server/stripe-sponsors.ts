import type Stripe from "stripe";
import { and, eq, inArray, ne } from "drizzle-orm";
import { db } from "@/db";
import {
  sponsorAccounts,
  sponsorships,
  stripeEvents,
} from "@/db/schema";
import { ACTIVE_SPONSORSHIP_STATUSES } from "@/lib/sponsors/slots";
import { getStripe } from "@/lib/stripe";

type SponsorBillingStatus =
  | "active"
  | "trialing"
  | "payment_failed"
  | "canceled"
  | "incomplete"
  | "incomplete_expired"
  | "past_due"
  | "unpaid"
  | "paused"
  | "released";

type SubscriptionWithLegacyPeriods = Stripe.Subscription & {
  current_period_start?: number | null;
  current_period_end?: number | null;
};

type InvoiceWithSubscription = Stripe.Invoice & {
  subscription?: string | Stripe.Subscription | null;
  parent?: {
    subscription_details?: {
      subscription?: string | Stripe.Subscription | null;
    } | null;
  } | null;
};

export async function recordStripeEvent(event: Stripe.Event) {
  const [inserted] = await db
    .insert(stripeEvents)
    .values({
      id: event.id,
      type: event.type,
    })
    .onConflictDoNothing()
    .returning({ id: stripeEvents.id });

  return Boolean(inserted);
}

export async function handleStripeSponsorEvent(event: Stripe.Event) {
  switch (event.type) {
    case "checkout.session.completed":
      await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
      break;
    case "checkout.session.expired":
      await handleCheckoutExpired(event.data.object as Stripe.Checkout.Session);
      break;
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      await upsertSponsorshipFromSubscription(
        event.data.object as Stripe.Subscription
      );
      break;
    case "invoice.paid":
      await handleInvoicePaid(event.data.object as Stripe.Invoice);
      break;
    case "invoice.payment_failed":
      await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
      break;
    default:
      break;
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const sponsorshipId = session.metadata?.sponsorshipId;
  const subscriptionId = getObjectId(session.subscription);
  const customerId = getObjectId(session.customer);

  if (!sponsorshipId || !subscriptionId) {
    return;
  }

  await db
    .update(sponsorships)
    .set({
      stripeCheckoutSessionId: session.id,
      stripeSubscriptionId: subscriptionId,
      stripeCustomerId: customerId,
      updatedAt: new Date(),
    })
    .where(eq(sponsorships.id, sponsorshipId));

  if (customerId) {
    await updateSponsorCustomerForSponsorship(sponsorshipId, customerId);
  }

  const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
  await upsertSponsorshipFromSubscription(subscription);
}

async function handleCheckoutExpired(session: Stripe.Checkout.Session) {
  const sponsorshipId = session.metadata?.sponsorshipId;

  if (!sponsorshipId) {
    return;
  }

  await db
    .update(sponsorships)
    .set({
      status: "incomplete_expired",
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(sponsorships.id, sponsorshipId),
        eq(sponsorships.status, "pending_checkout")
      )
    );
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  const subscriptionId = getInvoiceSubscriptionId(invoice);

  if (!subscriptionId) {
    return;
  }

  const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
  await upsertSponsorshipFromSubscription(subscription);
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId = getInvoiceSubscriptionId(invoice);

  if (!subscriptionId) {
    return;
  }

  await db
    .update(sponsorships)
    .set({
      status: "payment_failed",
      updatedAt: new Date(),
    })
    .where(eq(sponsorships.stripeSubscriptionId, subscriptionId));
}

async function upsertSponsorshipFromSubscription(
  subscription: Stripe.Subscription
) {
  const sponsorshipId = subscription.metadata?.sponsorshipId;
  const subscriptionId = subscription.id;
  const customerId = getObjectId(subscription.customer);
  const status = normalizeSubscriptionStatus(subscription.status);
  const period = getSubscriptionPeriod(subscription);

  const [target] = sponsorshipId
    ? await db
        .select({
          id: sponsorships.id,
          userId: sponsorships.userId,
          slotId: sponsorships.slotId,
        })
        .from(sponsorships)
        .where(eq(sponsorships.id, sponsorshipId))
        .limit(1)
    : await db
        .select({
          id: sponsorships.id,
          userId: sponsorships.userId,
          slotId: sponsorships.slotId,
        })
        .from(sponsorships)
        .where(eq(sponsorships.stripeSubscriptionId, subscriptionId))
        .limit(1);

  if (!target) {
    return;
  }

  if (customerId) {
    await setSponsorCustomer(target.userId, customerId);
  }

  if (isActiveStatus(status)) {
    await activateSponsorship({
      sponsorshipId: target.id,
      slotId: target.slotId,
      subscriptionId,
      customerId,
      status,
      period,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      canceledAt: subscription.canceled_at
        ? new Date(subscription.canceled_at * 1000)
        : null,
    });
    return;
  }

  await db
    .update(sponsorships)
    .set({
      status,
      stripeSubscriptionId: subscriptionId,
      stripeCustomerId: customerId,
      currentPeriodStart: period.start,
      currentPeriodEnd: period.end,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      canceledAt: subscription.canceled_at
        ? new Date(subscription.canceled_at * 1000)
        : status === "canceled"
          ? new Date()
          : null,
      updatedAt: new Date(),
    })
    .where(eq(sponsorships.id, target.id));
}

async function activateSponsorship(input: {
  sponsorshipId: string;
  slotId: string;
  subscriptionId: string;
  customerId: string | null;
  status: "active" | "trialing";
  period: { start: Date | null; end: Date | null };
  cancelAtPeriodEnd: boolean;
  canceledAt: Date | null;
}) {
  await db.transaction(async (tx) => {
    const [blocking] = await tx
      .select({ id: sponsorships.id })
      .from(sponsorships)
      .where(
        and(
          eq(sponsorships.slotId, input.slotId),
          ne(sponsorships.id, input.sponsorshipId),
          inArray(sponsorships.status, [
            "pending_checkout",
            ...ACTIVE_SPONSORSHIP_STATUSES,
          ])
        )
      )
      .limit(1);

    if (blocking) {
      await tx
        .update(sponsorships)
        .set({
          status: "released",
          stripeSubscriptionId: input.subscriptionId,
          stripeCustomerId: input.customerId,
          updatedAt: new Date(),
        })
        .where(eq(sponsorships.id, input.sponsorshipId));
      return;
    }

    await tx
      .update(sponsorships)
      .set({
        status: input.status,
        stripeSubscriptionId: input.subscriptionId,
        stripeCustomerId: input.customerId,
        currentPeriodStart: input.period.start,
        currentPeriodEnd: input.period.end,
        cancelAtPeriodEnd: input.cancelAtPeriodEnd,
        canceledAt: input.canceledAt,
        updatedAt: new Date(),
      })
      .where(eq(sponsorships.id, input.sponsorshipId));
  });
}

async function updateSponsorCustomerForSponsorship(
  sponsorshipId: string,
  customerId: string
) {
  const [target] = await db
    .select({ userId: sponsorships.userId })
    .from(sponsorships)
    .where(eq(sponsorships.id, sponsorshipId))
    .limit(1);

  if (target) {
    await setSponsorCustomer(target.userId, customerId);
  }
}

async function setSponsorCustomer(userId: string, stripeCustomerId: string) {
  await db
    .update(sponsorAccounts)
    .set({
      stripeCustomerId,
      updatedAt: new Date(),
    })
    .where(eq(sponsorAccounts.userId, userId));
}

function normalizeSubscriptionStatus(
  status: Stripe.Subscription.Status
): SponsorBillingStatus {
  if (status === "active" || status === "trialing") {
    return status;
  }

  if (
    status === "incomplete" ||
    status === "incomplete_expired" ||
    status === "past_due" ||
    status === "unpaid" ||
    status === "paused" ||
    status === "canceled"
  ) {
    return status;
  }

  return "released";
}

function getSubscriptionPeriod(subscription: Stripe.Subscription) {
  const legacy = subscription as SubscriptionWithLegacyPeriods;
  const firstItem = subscription.items.data[0];

  return {
    start: fromUnixSeconds(
      legacy.current_period_start ?? firstItem?.current_period_start ?? null
    ),
    end: fromUnixSeconds(
      legacy.current_period_end ?? firstItem?.current_period_end ?? null
    ),
  };
}

function getInvoiceSubscriptionId(invoice: Stripe.Invoice) {
  const invoiceWithSubscription = invoice as InvoiceWithSubscription;

  return (
    getObjectId(invoiceWithSubscription.subscription) ??
    getObjectId(invoiceWithSubscription.parent?.subscription_details?.subscription)
  );
}

function getObjectId(
  value: string | { id: string } | null | undefined
): string | null {
  if (typeof value === "string") {
    return value;
  }

  return value?.id ?? null;
}

function fromUnixSeconds(seconds: number | null | undefined) {
  return seconds ? new Date(seconds * 1000) : null;
}

function isActiveStatus(
  status: SponsorBillingStatus
): status is "active" | "trialing" {
  return status === "active" || status === "trialing";
}
