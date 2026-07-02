import Stripe from "stripe";
import { env } from "@/env";

let stripe: Stripe | null = null;

export function getStripe() {
  if (!env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is required for sponsor billing.");
  }

  stripe ??= new Stripe(env.STRIPE_SECRET_KEY);
  return stripe;
}
