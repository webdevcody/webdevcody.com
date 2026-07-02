import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ExternalLink, RadioTower } from "lucide-react";
import { YoutubeIcon } from "@/components/icons";
import { SponsorCheckoutButton } from "@/components/sponsors/sponsor-checkout-button";
import Link from "@/components/link";
import {
  SPONSOR_AGREEMENT_CHECKBOX_LABEL,
  SPONSOR_AGREEMENT_TERMS,
  SPONSOR_AGREEMENT_VERSION,
} from "@/lib/sponsors/agreement";
import {
  formatSponsorPrice,
  getSlotDimensions,
} from "@/lib/sponsors/slots";
import {
  type SponsorPublicSlot,
} from "@/server/sponsors";
import { getSponsorsPublicData } from "@/server/sponsor-functions";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sponsors")({
  loader: async () => getSponsorsPublicData(),
  head: () => ({
    meta: [
      { title: "Sponsors - webdevcody" },
      {
        name: "description",
        content: "Monthly YouTube sponsorship slots for webdevcody.",
      },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  const { slots } = Route.useLoaderData();
  const [isSponsorAgreementAccepted, setIsSponsorAgreementAccepted] =
    useState(false);
  const mainSlot = slots.find((slot) => slot.id === "main");
  const secondarySlots = slots.filter((slot) => slot.id !== "main");
  const hasAvailableSlots = slots.some(
    (slot) => slot.availability === "available"
  );

  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Monthly sponsor slots</span>
            <h1 className="mt-4 text-balance text-4xl sm:text-6xl">
              Sponsor webdevcody
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your company is featured on the webdevcody YouTube channel.
              Sponsor mentions run roughly 30 seconds near the start of videos,
              with your company name and link in descriptions and pinned
              comments.
            </p>
          </div>
          <Link
            href="/sponsors/account"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Sponsor account
          </Link>
        </div>

        <div className="mt-10 grid gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "webdevcody YouTube placement",
            "Video description link and company name",
            "Pinned comment placement",
            "Live stream sponsored-by carousel",
          ].map((benefit) => (
            <div key={benefit} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {hasAvailableSlots ? (
          <section
            aria-labelledby="sponsor-agreement-title"
            className="mt-8 rounded-lg border border-border bg-card p-6"
          >
            <span className="eyebrow">Sponsor agreement</span>
            <h2 id="sponsor-agreement-title" className="mt-3 text-2xl">
              Required before checkout
            </h2>

            <div className="mt-5 grid gap-4">
              {SPONSOR_AGREEMENT_TERMS.map((term) => (
                <div key={term.title} className="grid gap-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {term.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {term.body}
                  </p>
                </div>
              ))}
            </div>

            <label className="mt-6 flex items-start gap-3 rounded-md border border-border bg-background p-4">
              <input
                type="checkbox"
                checked={isSponsorAgreementAccepted}
                onChange={(event) =>
                  setIsSponsorAgreementAccepted(event.currentTarget.checked)
                }
                className="mt-1 h-4 w-4 rounded border-border accent-current"
              />
              <span className="grid gap-1">
                <span className="text-sm font-semibold text-foreground">
                  {SPONSOR_AGREEMENT_CHECKBOX_LABEL}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Agreement version {SPONSOR_AGREEMENT_VERSION}
                </span>
              </span>
            </label>
          </section>
        ) : null}

        <div className="mt-12 grid gap-4">
          {mainSlot ? (
            <SponsorSlotBox
              slot={mainSlot}
              sponsorAgreementAccepted={isSponsorAgreementAccepted}
              featured
            />
          ) : null}

          <div className="grid gap-4">
            {secondarySlots.map((slot) => (
              <SponsorSlotBox
                key={slot.id}
                slot={slot}
                sponsorAgreementAccepted={isSponsorAgreementAccepted}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 rounded-lg border border-border bg-card p-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <YoutubeIcon
              className="mt-1 h-5 w-5 fill-current text-accent"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-lg">Video placement</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Sponsor callouts are included near the start of webdevcody
                videos for the month you sponsor.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RadioTower
              className="mt-1 h-5 w-5 text-accent"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-lg">Live streams</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Live streams include a rotating sponsored-by carousel. The main
                sponsor stays displayed while secondary sponsors rotate.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ExternalLink
              className="mt-1 h-5 w-5 text-accent"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-lg">After checkout</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Upload your image in the sponsor account area, email Cody a
                banner, or ask Cody to use your logo and product name. Cancel
                any time through Stripe billing.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Questions or custom creative? Email{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-foreground hover:text-accent"
          >
            {profile.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}

function SponsorSlotBox({
  slot,
  sponsorAgreementAccepted,
  featured = false,
}: {
  slot: SponsorPublicSlot;
  sponsorAgreementAccepted: boolean;
  featured?: boolean;
}) {
  const isAvailable = slot.availability === "available";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-card",
        featured ? "min-h-[280px]" : "min-h-[160px]"
      )}
    >
      {slot.sponsor?.assetUrl ? (
        <img
          src={slot.sponsor.assetUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      ) : (
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      )}
      <div className="absolute inset-0 bg-background/70" />

      <div
        className={cn(
          "relative flex min-h-[160px] flex-col justify-between gap-6 p-5 sm:p-6",
          featured && "min-h-[280px] sm:p-8"
        )}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs font-medium text-muted-foreground">
              {slot.tier === "main" ? "Main slot" : "Secondary slot"}
            </span>
            <span className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs font-medium text-muted-foreground">
              {getSlotDimensions(slot)}
            </span>
          </div>

          <h2 className={cn("mt-4", featured ? "text-4xl" : "text-2xl")}>
            {slot.sponsor?.companyName ?? slot.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {slot.sponsor
              ? "Active monthly sponsor on webdevcody."
              : slot.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Monthly slot</p>
            <p className="text-2xl font-semibold text-foreground">
              {formatSponsorPrice(slot.priceMonthlyCents)}
            </p>
            {!isAvailable ? (
              <p className="mt-1 text-xs text-muted-foreground">
                {slot.availability === "reserved"
                  ? "A checkout is currently in progress."
                  : "This slot is currently claimed."}
              </p>
            ) : null}
          </div>

          {slot.sponsor?.companyUrl ? (
            <a
              href={slot.sponsor.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Visit sponsor
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <SponsorCheckoutButton
              slotId={slot.id}
              availability={slot.availability}
              sponsorAgreementAccepted={sponsorAgreementAccepted}
            />
          )}
        </div>
      </div>
    </article>
  );
}
