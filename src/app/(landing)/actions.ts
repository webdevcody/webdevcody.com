"use server";

import { subscribeUserCase } from "@/use-cases/subscriptions";

export async function subscribeAction({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  await subscribeUserCase({
    token,
    email,
  });
}
