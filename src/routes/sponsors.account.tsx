import { createFileRoute } from "@tanstack/react-router";
import { SponsorAccountPanel } from "@/components/sponsors/sponsor-account-panel";
import Link from "@/components/link";
import { getSponsorDashboard } from "@/server/sponsor-functions";

export const Route = createFileRoute("/sponsors/account")({
  loader: async () => getSponsorDashboard(),
  head: () => ({ meta: [{ title: "Sponsor Account - webdevcody" }] }),
  component: SponsorAccountPage,
});

function SponsorAccountPage() {
  const dashboard = Route.useLoaderData();

  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">Sponsor account</span>
        <h1 className="mt-3 text-4xl sm:text-5xl">Manage sponsor details</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Upload your sponsor image, update the company link used in video
          descriptions and pinned comments, or open Stripe billing to cancel at
          any point.
        </p>

        {!dashboard.session ? (
          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl">Sign in required</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Use the same sponsor account you used at checkout to manage your
              subscription and marketing assets.
            </p>
            <Link
              href="/sponsors/login?redirect=/sponsors/account"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Sign in
            </Link>
          </div>
        ) : (
          <SponsorAccountPanel dashboard={dashboard} />
        )}
      </div>
    </div>
  );
}
