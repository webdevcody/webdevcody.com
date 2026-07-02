import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { SPONSOR_NAME_PLACEHOLDER } from "@/lib/sponsors/slots";
import type { SponsorPublicSlot } from "@/server/sponsors";

const REFRESH_INTERVAL_MS = 60_000;

// OBS browser sources stay loaded for hours, so re-run the route loader on an
// interval to pick up sponsor changes without reloading the source.
export function useObsSponsors(slots: SponsorPublicSlot[]) {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.invalidate();
    }, REFRESH_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [router]);

  return slots.filter(isDisplayableSponsorSlot);
}

// Only slots with a paying sponsor who has entered a display name belong on
// stream — a claimed-but-onboarding slot would otherwise render placeholder
// copy on video.
function isDisplayableSponsorSlot(slot: SponsorPublicSlot) {
  return (
    slot.availability === "sponsored" &&
    slot.sponsor !== null &&
    slot.sponsor.companyName !== SPONSOR_NAME_PLACEHOLDER
  );
}
