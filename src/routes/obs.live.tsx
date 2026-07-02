import { createFileRoute } from "@tanstack/react-router";
import { getSponsorsPublicData } from "@/server/sponsor-functions";
import { useObsSponsors } from "@/hooks/use-obs-sponsors";

export const Route = createFileRoute("/obs/live")({
  loader: async () => getSponsorsPublicData(),
  head: () => ({
    meta: [
      { title: "Live sponsor overlay - webdevcody" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LiveSponsorOverlay,
});

function LiveSponsorOverlay() {
  const { slots: loadedSlots } = Route.useLoaderData();
  const slots = useObsSponsors(loadedSlots);
  const mainSponsor = slots.find((slot) => slot.tier === "main")?.sponsor;

  if (!mainSponsor) {
    return null;
  }

  return (
    <div className="fixed left-6 top-6 flex items-center gap-3 rounded-lg border border-border bg-card/90 px-5 py-3 shadow-lg backdrop-blur">
      <span className="eyebrow whitespace-nowrap">Sponsored by:</span>
      <span className="whitespace-nowrap font-heading text-2xl font-semibold tracking-tight text-foreground">
        {mainSponsor.companyName}
      </span>
    </div>
  );
}
