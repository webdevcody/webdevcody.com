import { env } from "@/env";

export async function sendEvent(key: string) {
  if (env.NEXT_PUBLIC_IS_LOCAL) return;
  await fetch("https://projectplannerai.com/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key,
      projectId: env.NEXT_PUBLIC_PLANNER_ID,
    }),
  });
}
