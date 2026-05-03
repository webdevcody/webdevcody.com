import { env } from "@/env";

export async function sendEvent(key: string) {
  if (env.VITE_IS_LOCAL) return;
  await fetch("https://projectplannerai.com/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key,
      projectId: env.VITE_PLANNER_ID,
    }),
  });
}
