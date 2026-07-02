import { createFileRoute } from "@tanstack/react-router";
import { eq } from "drizzle-orm";
import { env } from "@/env";

export const Route = createFileRoute("/api/sponsors/portal")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const { db } = await import("@/db");
        const { sponsorAccounts } = await import("@/db/schema");
        const { getStripe } = await import("@/lib/stripe");
        const { requireSponsorSession } = await import("@/server/sponsors");

        try {
          const user = await requireSponsorSession(request);
          const [account] = await db
            .select({
              stripeCustomerId: sponsorAccounts.stripeCustomerId,
            })
            .from(sponsorAccounts)
            .where(eq(sponsorAccounts.userId, user.id))
            .limit(1);

          if (!account?.stripeCustomerId) {
            return Response.json(
              { error: "No Stripe customer found for this account." },
              { status: 404 }
            );
          }

          const origin = env.APP_URL ?? env.BETTER_AUTH_URL ?? new URL(request.url).origin;
          const portal = await getStripe().billingPortal.sessions.create({
            customer: account.stripeCustomerId,
            return_url: `${origin}/sponsors/account`,
          });

          return Response.json({ url: portal.url });
        } catch (error) {
          if (isSponsorRequestError(error)) {
            return Response.json(
              { error: error.message },
              { status: error.status }
            );
          }

          console.error("Sponsor portal session failed", error);
          return Response.json(
            { error: "Could not open the billing portal." },
            { status: 500 }
          );
        }
      },
    },
  },
});

function isSponsorRequestError(
  error: unknown
): error is Error & { status: number } {
  return (
    error instanceof Error &&
    "status" in error &&
    typeof error.status === "number"
  );
}
