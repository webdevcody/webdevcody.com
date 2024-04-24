import { verifyRecaptcha } from "@/services/captcha";
import {
  deleteSubscription,
  getSubscriptionByEmail,
  getSubscriptionByUnsubscribeId,
  saveSubscription,
} from "@/data-access/subscriptions";
import { env } from "@/env";
import { v4 as uuidv4 } from "uuid";

export async function subscribeUserCase({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  await verifyRecaptcha(token, env.RECAPTCHA_SECRET);

  const subscription = await getSubscriptionByEmail(email);

  if (subscription) {
    return;
  }

  const unsubscribeId = uuidv4();

  await saveSubscription(email, unsubscribeId);
}

export async function unsubscribeUserCase(unsubscribeId: string) {
  const subscription = await getSubscriptionByUnsubscribeId(unsubscribeId);

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  await deleteSubscription(subscription.email);
}
