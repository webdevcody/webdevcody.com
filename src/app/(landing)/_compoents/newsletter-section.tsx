import { SubscribeForm } from "@/app/(landing)/_compoents/subscribe-form";
import { env } from "@/env";
import { CalendarIcon, HandIcon } from "lucide-react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="relative isolate mt-28">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="gradient-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Subscribe to my newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              If you are interested in getting updates when I publish new
              courses or wanting useful coding tips and tricks, be sure to
              subscribe to my newsletter below!
            </p>
            <ReCaptchaProvider
              reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            >
              <style jsx global>{`
                .grecaptcha-badge {
                  visibility: hidden;
                }
                .grecaptcha-badge::after {
                  content: "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.";
                  visibility: visible;
                  display: block;
                  font-size: 12px;
                  color: #666;
                  margin-top: 8px;
                }
              `}</style>
              <div id="recaptcha-container" className="mt-2"></div>
              <SubscribeForm />
            </ReCaptchaProvider>
          </div>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="feature-card">
              <div className="rounded-lg p-2 ring-1 ring-white/10 inline-flex">
                <CalendarIcon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-foreground">
                Coding Advice
              </dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Periodic emails with coding tips, tricks, and advice you
                won&apos;t find anywhere else
              </dd>
            </div>
            <div className="feature-card">
              <div className="rounded-lg p-2 ring-1 ring-white/10 inline-flex">
                <HandIcon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-foreground">Updates</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                When I launch a new course or something important, I can update
                you via email
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
