import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

export const getSponsorsPublicData = createServerFn({ method: "GET" }).handler(
  async () => {
    const { getSponsorPublicSlots } = await import("@/server/sponsors");
    return { slots: await getSponsorPublicSlots() };
  }
);

export const getSponsorDashboard = createServerFn({ method: "GET" }).handler(
  async () => {
    const { getSponsorDashboardForRequest } = await import("@/server/sponsors");
    return getSponsorDashboardForRequest(getRequest());
  }
);
