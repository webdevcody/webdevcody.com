import { createFileRoute } from "@tanstack/react-router";
import { getSponsorsPublicData } from "@/server/sponsor-functions";
import { useObsSponsors } from "@/hooks/use-obs-sponsors";
import type { SponsorPublicSlot } from "@/server/sponsors";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/obs/video")({
  loader: async () => getSponsorsPublicData(),
  head: () => ({
    meta: [
      { title: "Video sponsor board - webdevcody" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: VideoSponsorBoard,
});

function VideoSponsorBoard() {
  const { slots: loadedSlots } = Route.useLoaderData();
  const slots = useObsSponsors(loadedSlots);
  const mainSlot = slots.find((slot) => slot.tier === "main");
  const secondarySlots = slots.filter((slot) => slot.tier === "secondary");

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-background px-16 py-12">
      <div className="grid-backdrop absolute inset-0 opacity-40" />

      <header className="relative flex items-end justify-between">
        <div>
          <span className="eyebrow">webdevcody.com</span>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-5xl">
            Thanks to our sponsors
          </h1>
        </div>
        <p className="pb-1 font-mono text-sm text-muted-foreground">
          webdevcody.com/sponsors
        </p>
      </header>

      {slots.length === 0 ? (
        <div className="relative flex flex-1 items-center justify-center">
          <p className="text-2xl text-muted-foreground">
            Sponsor slots are open at webdevcody.com/sponsors
          </p>
        </div>
      ) : (
        <div className="relative mt-10 flex min-h-0 flex-1 flex-col gap-8">
          {mainSlot ? (
            <section className="flex min-h-0 flex-[3] flex-col">
              <span className="eyebrow text-accent">Main sponsor</span>
              <SponsorTile slot={mainSlot} featured className="mt-3 flex-1" />
            </section>
          ) : null}

          {secondarySlots.length > 0 ? (
            <section className="flex min-h-0 flex-[2] flex-col">
              <span className="eyebrow">Sponsors</span>
              <div
                className={cn(
                  "mt-3 grid flex-1 gap-6",
                  secondarySlots.length === 1 && "grid-cols-1",
                  secondarySlots.length === 2 && "grid-cols-2",
                  secondarySlots.length >= 3 && "grid-cols-2 grid-rows-2"
                )}
              >
                {secondarySlots.map((slot) => (
                  <SponsorTile key={slot.id} slot={slot} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      )}
    </div>
  );
}

function SponsorTile({
  slot,
  featured = false,
  className,
}: {
  slot: SponsorPublicSlot;
  featured?: boolean;
  className?: string;
}) {
  const sponsor = slot.sponsor;

  if (!sponsor) {
    return null;
  }

  return (
    <article
      className={cn(
        "relative min-h-0 overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
    >
      {sponsor.assetUrl ? (
        <>
          <img
            src={sponsor.assetUrl}
            alt={sponsor.companyName}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-10">
            <p
              className={cn(
                "font-heading font-semibold tracking-tight text-foreground",
                featured ? "text-3xl" : "text-xl"
              )}
            >
              {sponsor.companyName}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
          <p
            className={cn(
              "font-heading font-semibold tracking-tight text-foreground",
              featured ? "text-6xl" : "text-3xl"
            )}
          >
            {sponsor.companyName}
          </p>
          {sponsor.companyUrl ? (
            <p
              className={cn(
                "font-mono text-muted-foreground",
                featured ? "text-lg" : "text-sm"
              )}
            >
              {formatSponsorUrl(sponsor.companyUrl)}
            </p>
          ) : null}
        </div>
      )}
    </article>
  );
}

function formatSponsorUrl(url: string) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
