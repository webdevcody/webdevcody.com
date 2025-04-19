import { useReCaptcha } from "next-recaptcha-v3";
import { useEffect, useState, useTransition } from "react";
import { subscribeAction } from "../actions";
import { sendEvent } from "@/lib/analytics";
import { useToast } from "@/components/ui/use-toast";

export function SubscribeForm() {
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useReCaptcha();
  const { toast } = useToast();

  return (
    <>
      <form
        className="flex flex-col sm:flex-row gap-3 mt-8"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const token = await executeRecaptcha("form_submit");
          const email = formData.get("email");
          startTransition(() => {
            subscribeAction({
              email: email as string,
              token,
            }).then(() => {
              sendEvent("user subscribed");
              form.reset();
              toast({
                title: "Subscribed!",
                description: "You are now subscribed to the newsletter.",
                variant: "success",
              });
            });
          });
        }}
      >
        <div className="flex-1">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            className="w-full px-4 py-2.5 bg-white dark:bg-background border border-border/40 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-lg outline-none transition-colors duration-200 placeholder:text-muted-foreground/70"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2.5 font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-primary/10 hover:shadow-primary/20"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p className="text-xs text-muted-foreground mt-2">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/90 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/90 hover:underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </>
  );
}
