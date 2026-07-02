"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { SPONSOR_AGREEMENT_VERSION } from "@/lib/sponsors/agreement";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

type SponsorCheckoutButtonProps = {
  slotId: string;
  availability: "available" | "reserved" | "sponsored";
  sponsorAgreementAccepted: boolean;
  className?: string;
};

export function SponsorCheckoutButton({
  slotId,
  availability,
  sponsorAgreementAccepted,
  className,
}: SponsorCheckoutButtonProps) {
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const [isStartingCheckout, setIsStartingCheckout] = useState(false);
  const { toast } = useToast();

  const isAgreementRequired =
    availability === "available" && Boolean(session) && !sponsorAgreementAccepted;
  const isDisabled =
    availability !== "available" ||
    isSessionPending ||
    isStartingCheckout ||
    isAgreementRequired;

  const label =
    availability === "available"
      ? session
        ? isAgreementRequired
          ? "Accept terms to claim"
          : "Claim slot"
        : "Sign in to claim"
      : availability === "reserved"
        ? "Checkout pending"
        : "Sponsored";

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={async () => {
        if (!session) {
          window.location.href = `/sponsors/login?redirect=/sponsors&slot=${slotId}`;
          return;
        }

        setIsStartingCheckout(true);
        try {
          const response = await fetch("/api/sponsors/checkout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              slotId,
              sponsorAgreementAccepted: true,
              sponsorAgreementVersion: SPONSOR_AGREEMENT_VERSION,
            }),
          });

          const result = (await response.json()) as {
            url?: string;
            error?: string;
          };

          if (!response.ok || !result.url) {
            throw new Error(result.error || "Could not start checkout.");
          }

          window.location.href = result.url;
        } catch (error) {
          toast({
            title: "Checkout could not start",
            description:
              error instanceof Error
                ? error.message
                : "Please refresh the page and try again.",
            variant: "destructive",
          });
          setIsStartingCheckout(false);
        }
      }}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {isStartingCheckout ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      )}
      {label}
    </button>
  );
}
