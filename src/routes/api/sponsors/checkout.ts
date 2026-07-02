import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { env } from "@/env";

const CheckoutInputSchema = z.object({
  slotId: z.enum([
    "main",
    "secondary-1",
    "secondary-2",
    "secondary-3",
    "secondary-4",
  ]),
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

          await ensureSponsorAccountForUser(user);
          const stripeCustomerId = await getSponsorStripeCustomerId(user.id);
          const pending = await createPendingSponsorship({
            slotId: body.slotId,
            userId: user.id,
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
                      name: `${pending.slot.title} - Agentic Jumpstart + webdevcody`,
                      description:
                        "Monthly YouTube sponsorship across Agentic Jumpstart and webdevcody.",
                      metadata: {
                        slotId: pending.slot.id,
                        sponsorshipId: pending.sponsorshipId,
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
              },
              subscription_data: {
                metadata: {
                  userId: user.id,
                  slotId: pending.slot.id,
                  sponsorshipId: pending.sponsorshipId,
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
    return Response.json({ error: "Invalid checkout request." }, { status: 400 });
  }

  console.error("Sponsor checkout failed", error);
  return Response.json(
    { error: "Could not start sponsor checkout." },
    { status: 500 }
  );
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
