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
        className="flex flex-col sm:flex-row gap-2 mt-8"
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
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
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
          className="rounded-md bg-white border-red-400 border px-3.5 py-2.5 text-sm font-semibold hover:text-white text-red-400 shadow-sm hover:bg-red-400 disabled:text-gray-500 disabled:bg-gray-200 disabled:border-gray-400 disabled:pointer-events-none"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-2">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </>
  );
}
