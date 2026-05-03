"use client";

import { useReCaptcha } from "@/lib/recaptcha";
import { useTransition } from "react";
import { subscribeAction } from "@/server/subscribe";
import { useToast } from "@/components/ui/use-toast";

export function SubscribeForm() {
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha, isConfigured } = useReCaptcha();
  const { toast } = useToast();

  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get("email");
        let token: string | undefined;

        try {
          token = isConfigured
            ? await executeRecaptcha("form_submit")
            : undefined;
        } catch {
          toast({
            title: "Could not verify submission",
            description: "Please refresh the page and try again.",
            variant: "destructive",
          });
          return;
        }

        startTransition(() => {
          subscribeAction({ data: {
            email: email as string, token },
          }).then(() => {
            form.reset();
            toast({
              title: "Subscribed!",
              description: "You are now subscribed to the newsletter.",
              variant: "success",
            });
          }).catch(() => {
            toast({
              title: "Could not subscribe",
              description: "Please refresh the page and try again.",
              variant: "destructive",
            });
          });
        });
      }}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background placeholder:text-muted-foreground/70 transition-colors focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30"
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
