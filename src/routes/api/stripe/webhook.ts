import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/env";

export const Route = createFileRoute("/api/stripe/webhook")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const signature = request.headers.get("stripe-signature");

        if (!signature || !env.STRIPE_WEBHOOK_SECRET) {
          return Response.json(
            { error: "Stripe webhook signature is not configured." },
            { status: 400 }
          );
        }

        let event;
        try {
          const { getStripe } = await import("@/lib/stripe");
          const rawBody = await request.text();
          event = getStripe().webhooks.constructEvent(
            rawBody,
            signature,
            env.STRIPE_WEBHOOK_SECRET
          );
        } catch (error) {
          console.error("Stripe webhook verification failed", error);
          return Response.json(
            { error: "Invalid Stripe webhook signature." },
            { status: 400 }
          );
        }

        try {
          const { handleStripeSponsorEvent, recordStripeEvent } = await import(
            "@/server/stripe-sponsors"
          );
          const isNewEvent = await recordStripeEvent(event);

          if (isNewEvent) {
            await handleStripeSponsorEvent(event);
          }

          return Response.json({ received: true, duplicate: !isNewEvent });
        } catch (error) {
          console.error("Stripe webhook processing failed", {
            eventId: event.id,
            eventType: event.type,
            error,
          });

          return Response.json(
            { error: "Could not process Stripe webhook." },
            { status: 500 }
          );
        }
      },
    },
  },
});
