"use client";

import { useState } from "react";
import { CreditCard, Loader2, Upload } from "lucide-react";
import type { SponsorDashboard } from "@/server/sponsors";
import {
  formatSponsorPrice,
  getSlotDimensions,
} from "@/lib/sponsors/slots";
import { useToast } from "@/components/ui/use-toast";

type SponsorAccountPanelProps = {
  dashboard: SponsorDashboard;
};

export function SponsorAccountPanel({ dashboard }: SponsorAccountPanelProps) {
  const { toast } = useToast();
  const [savingId, setSavingId] = useState<string | null>(null);
  const [isOpeningPortal, setIsOpeningPortal] = useState(false);

  const activeSponsorships = dashboard.sponsorships.filter(
    (sponsorship) =>
      sponsorship.status === "active" || sponsorship.status === "trialing"
  );

  async function openBillingPortal() {
    setIsOpeningPortal(true);
    try {
      const response = await fetch("/api/sponsors/portal", {
        method: "POST",
      });
      const result = (await response.json()) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !result.url) {
        throw new Error(result.error || "Could not open billing portal.");
      }

      window.location.href = result.url;
    } catch (error) {
      toast({
        title: "Billing portal unavailable",
        description:
          error instanceof Error
            ? error.message
            : "Please refresh the page and try again.",
        variant: "destructive",
      });
      setIsOpeningPortal(false);
    }
  }

  if (!dashboard.session) {
    return null;
  }

  return (
    <div className="mt-10 grid gap-6">
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Signed in as</p>
          <p className="font-medium text-foreground">
            {dashboard.session.user.email}
          </p>
        </div>
        <button
          type="button"
          onClick={openBillingPortal}
          disabled={isOpeningPortal || !dashboard.account?.stripeCustomerId}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isOpeningPortal ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <CreditCard className="h-4 w-4" aria-hidden="true" />
          )}
          Manage billing
        </button>
      </div>

      {activeSponsorships.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-2xl">No active sponsor slots yet</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Once checkout completes, your active sponsor slot will appear here
            for company details and image upload.
          </p>
        </div>
      ) : null}

      {activeSponsorships.map((sponsorship) => (
        <form
          key={sponsorship.id}
          className="rounded-lg border border-border bg-card p-6"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);
            formData.set("sponsorshipId", sponsorship.id);
            setSavingId(sponsorship.id);

            try {
              const response = await fetch("/api/sponsors/assets", {
                method: "POST",
                body: formData,
              });
              const result = (await response.json()) as {
                error?: string;
              };

              if (!response.ok) {
                throw new Error(result.error || "Could not save sponsor info.");
              }

              toast({
                title: "Sponsor details saved",
                description:
                  "Your company details and sponsor image are ready for review.",
                variant: "success",
              });
            } catch (error) {
              toast({
                title: "Could not save sponsor details",
                description:
                  error instanceof Error
                    ? error.message
                    : "Please refresh the page and try again.",
                variant: "destructive",
              });
            } finally {
              setSavingId(null);
            }
          }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="eyebrow">{sponsorship.status}</p>
              <h2 className="mt-2 text-2xl">{sponsorship.slotTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {formatSponsorPrice(sponsorship.priceMonthlyCents)} per month,
                image size {getSlotDimensions(sponsorship)}.
              </p>
            </div>
            {sponsorship.assetId ? (
              <img
                src={`/api/sponsors/assets/${sponsorship.assetId}`}
                alt=""
                className="mt-4 h-16 w-40 rounded-md border border-border object-cover sm:mt-0"
              />
            ) : null}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Company name
              <input
                name="companyName"
                type="text"
                required
                defaultValue={dashboard.account?.companyName ?? ""}
                className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground/70 focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Company link
              <input
                name="companyUrl"
                type="url"
                required
                defaultValue={dashboard.account?.companyUrl ?? ""}
                placeholder="https://example.com"
                className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground/70 focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-medium text-foreground">
            Marketing image
            <input
              name="image"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="rounded-md border border-border bg-background px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground"
            />
          </label>

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            After purchase, email Cody an ad banner if you prefer. You can also
            ask Cody to use your logo and product name instead.
          </p>

          <button
            type="submit"
            disabled={savingId === sponsorship.id}
            className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {savingId === sponsorship.id ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Upload className="h-4 w-4" aria-hidden="true" />
            )}
            Save sponsor details
          </button>
        </form>
      ))}
    </div>
  );
}
