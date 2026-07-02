export type SponsorSlotId =
  | "main"
  | "secondary-1"
  | "secondary-2"
  | "secondary-3"
  | "secondary-4";

export const SPONSOR_SLOT_DEFINITIONS = [
  {
    id: "main",
    tier: "main",
    title: "Main Sponsor",
    description: "Always displayed on live streams and featured first.",
    position: 1,
    priceMonthlyCents: 500000,
    width: 1920,
    height: 600,
  },
  {
    id: "secondary-1",
    tier: "secondary",
    title: "Sponsor Slot 1",
    description: "Rotates through the live stream sponsor carousel.",
    position: 2,
    priceMonthlyCents: 250000,
    width: 1200,
    height: 300,
  },
  {
    id: "secondary-2",
    tier: "secondary",
    title: "Sponsor Slot 2",
    description: "Rotates through the live stream sponsor carousel.",
    position: 3,
    priceMonthlyCents: 250000,
    width: 1200,
    height: 300,
  },
  {
    id: "secondary-3",
    tier: "secondary",
    title: "Sponsor Slot 3",
    description: "Rotates through the live stream sponsor carousel.",
    position: 4,
    priceMonthlyCents: 250000,
    width: 1200,
    height: 300,
  },
  {
    id: "secondary-4",
    tier: "secondary",
    title: "Sponsor Slot 4",
    description: "Rotates through the live stream sponsor carousel.",
    position: 5,
    priceMonthlyCents: 250000,
    width: 1200,
    height: 300,
  },
] as const;

export const ACTIVE_SPONSORSHIP_STATUSES = ["active", "trialing"] as const;

export const BLOCKING_SPONSORSHIP_STATUSES = [
  "pending_checkout",
  ...ACTIVE_SPONSORSHIP_STATUSES,
] as const;

export function formatSponsorPrice(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function getSlotDimensions(slot: { width: number; height: number }) {
  return `${slot.width}x${slot.height}`;
}
