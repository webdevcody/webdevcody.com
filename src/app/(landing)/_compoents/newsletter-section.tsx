import { SubscribeForm } from "@/app/(landing)/_compoents/subscribe-form";
import { env } from "@/env";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function NewsletterSection() {
  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 dot-backdrop opacity-40" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <span className="eyebrow">The newsletter</span>
            <h2 className="text-balance text-3xl sm:text-4xl">
              Coding tips, delivered.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Occasional emails with practical tips, new course announcements,
              and behind-the-scenes on the products I&apos;m building. No spam,
              unsubscribe anytime.
            </p>

            <ReCaptchaProvider
              reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            >
              <div id="recaptcha-container" />
              <SubscribeForm />
            </ReCaptchaProvider>
            <p className="max-w-md text-xs text-muted-foreground/70">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
