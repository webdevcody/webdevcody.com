import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { env } from "@/env";
import { SPONSOR_AGREEMENT_VERSION } from "@/lib/sponsors/agreement";

const CheckoutInputSchema = z.object({
  slotId: z.enum([
    "main",
    "secondary-1",
    "secondary-2",
    "secondary-3",
    "secondary-4",
  ]),
  sponsorAgreementAccepted: z.literal(true),
  sponsorAgreementVersion: z.literal(SPONSOR_AGREEMENT_VERSION),
});

export const Route = createFileRoute("/api/sponsors/checkout")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const {
          attachCheckoutSession,
          clearPendingSponsorship,
          createPendingSponsorship,
          ensureSponsorAccountForUser,
          getSponsorStripeCustomerId,
          requireSponsorSession,
        } = await import("@/server/sponsors");
        const { getStripe } = await import("@/lib/stripe");

        try {
          const user = await requireSponsorSession(request);
          const body = CheckoutInputSchema.parse(await request.json());
          const sponsorAgreementAcceptedAt = new Date();
          const sponsorAgreementMetadata = {
            sponsorAgreementAccepted: "true",
            sponsorAgreementVersion: body.sponsorAgreementVersion,
            sponsorAgreementAcceptedAt:
              sponsorAgreementAcceptedAt.toISOString(),
          };

          await ensureSponsorAccountForUser(user);
          const stripeCustomerId = await getSponsorStripeCustomerId(user.id);
          const pending = await createPendingSponsorship({
            slotId: body.slotId,
            userId: user.id,
            sponsorAgreementVersion: body.sponsorAgreementVersion,
            sponsorAgreementAcceptedAt,
          });

          try {
            const origin = getAppUrl(request);
            const session = await getStripe().checkout.sessions.create({
              mode: "subscription",
              customer: stripeCustomerId ?? undefined,
              customer_email: stripeCustomerId ? undefined : user.email,
              client_reference_id: user.id,
              line_items: [
                {
                  price_data: {
                    currency: "usd",
                    unit_amount: pending.slot.priceMonthlyCents,
                    recurring: {
                      interval: "month",
                    },
                    product_data: {
                      name: `${pending.slot.title} - webdevcody`,
                      description: "Monthly YouTube sponsorship for webdevcody.",
                      metadata: {
                        slotId: pending.slot.id,
                        sponsorshipId: pending.sponsorshipId,
                        ...sponsorAgreementMetadata,
                      },
                    },
                  },
                  quantity: 1,
                },
              ],
              metadata: {
                userId: user.id,
                slotId: pending.slot.id,
                sponsorshipId: pending.sponsorshipId,
                ...sponsorAgreementMetadata,
              },
              subscription_data: {
                metadata: {
                  userId: user.id,
                  slotId: pending.slot.id,
                  sponsorshipId: pending.sponsorshipId,
                  ...sponsorAgreementMetadata,
                },
              },
              success_url: `${origin}/sponsors/account?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${origin}/sponsors?checkout=cancelled`,
              expires_at: Math.floor(pending.checkoutExpiresAt.getTime() / 1000),
            });

            if (!session.url) {
              throw new Error("Stripe did not return a Checkout URL.");
            }

            await attachCheckoutSession({
              sponsorshipId: pending.sponsorshipId,
              checkoutSessionId: session.id,
              userId: user.id,
            });

            return Response.json({ url: session.url });
          } catch (error) {
            await clearPendingSponsorship(pending.sponsorshipId);
            throw error;
          }
        } catch (error) {
          return toErrorResponse(error);
        }
      },
    },
  },
});

function getAppUrl(request: Request) {
  return env.APP_URL ?? env.BETTER_AUTH_URL ?? new URL(request.url).origin;
}

function toErrorResponse(error: unknown) {
  if (isSponsorRequestError(error)) {
    return Response.json({ error: error.message }, { status: error.status });
  }

  if (error instanceof z.ZodError) {
    return Response.json(
      { error: getCheckoutValidationMessage(error) },
      { status: 400 }
    );
  }

  console.error("Sponsor checkout failed", error);
  return Response.json(
    { error: "Could not start sponsor checkout." },
    { status: 500 }
  );
}

function getCheckoutValidationMessage(error: z.ZodError) {
  const invalidField = error.issues.find((issue) => issue.path[0]);

  if (invalidField?.path[0] === "sponsorAgreementAccepted") {
    return "Accept the sponsor placement terms before checkout.";
  }

  if (invalidField?.path[0] === "sponsorAgreementVersion") {
    return "Refresh the page and accept the latest sponsor placement terms.";
  }

  return "Invalid checkout request.";
}

function isSponsorRequestError(
  error: unknown
): error is Error & { status: number } {
  return (
    error instanceof Error &&
    "status" in error &&
    typeof error.status === "number"
  );
}
