import { verifyRecaptcha } from "@/services/captcha";
import {
  deleteSubscription,
  getSubscriptionByUnsubscribeId,
} from "@/data-access/subscriptions";
import { env } from "@/env";

export async function subscribeUserCase({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  await verifyRecaptcha(token, env.RECAPTCHA_SECRET);

  const params = new URLSearchParams();
  params.append("email", email);
  await fetch(env.MAILING_LIST_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.MAILING_LIST_PASSWORD}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });
}

export async function unsubscribeUserCase(unsubscribeId: string) {
  const subscription = await getSubscriptionByUnsubscribeId(unsubscribeId);

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  await deleteSubscription(subscription.email);
}
