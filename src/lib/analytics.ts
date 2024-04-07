export async function sendEvent(key: string) {
  if (process.env.NEXT_PUBLIC_IS_LOCAL) return;
  await fetch("https://projectplannerai.com/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key,
      projectId: process.env.NEXT_PUBLIC_PLANNER_ID,
    }),
  });
}
