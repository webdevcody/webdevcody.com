"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Globe, Loader2, Mail } from "lucide-react";
import { z } from "zod";
import { GithubIcon } from "@/components/icons";
import Link from "@/components/link";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const SearchSchema = z.object({
  redirect: z.string().optional(),
  slot: z.string().optional(),
});

export const Route = createFileRoute("/sponsors/login")({
  validateSearch: (search) => SearchSchema.parse(search),
  head: () => ({ meta: [{ title: "Sponsor Login - webdevcody" }] }),
  component: SponsorLoginPage,
});

function SponsorLoginPage() {
  const search = Route.useSearch();
  const redirect = normalizeRedirect(search.redirect);
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const { toast } = useToast();
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const name = String(formData.get("name") ?? "");
    setIsSubmitting(true);

    try {
      const result =
        mode === "sign-in"
          ? await authClient.signIn.email({
              email,
              password,
              callbackURL: redirect,
            })
          : await authClient.signUp.email({
              name,
              email,
              password,
              callbackURL: redirect,
            });

      if (result.error) {
        throw new Error(result.error.message || "Authentication failed.");
      }

      window.location.href = redirect;
    } catch (error) {
      toast({
        title: "Could not sign in",
        description:
          error instanceof Error
            ? error.message
            : "Please check your details and try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  }

  async function signInWithProvider(provider: "github" | "google") {
    setIsSubmitting(true);
    try {
      const result = await authClient.signIn.social({
        provider,
        callbackURL: redirect,
      });

      if (result.error) {
        throw new Error(result.error.message || "Authentication failed.");
      }
    } catch (error) {
      toast({
        title: "Could not start sign in",
        description:
          error instanceof Error
            ? error.message
            : "Please refresh the page and try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-md">
        <Link
          href="/sponsors"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Back to sponsors
        </Link>

        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <span className="eyebrow">Sponsor account</span>
          <h1 className="mt-3 text-3xl">Sign in to claim a slot</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A sponsor account is required before checkout so your company,
            subscription, and marketing assets stay tied to the slot you buy.
          </p>

          {!isSessionPending && session ? (
            <div className="mt-6 rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">Signed in as</p>
              <p className="mt-1 font-medium text-foreground">
                {session.user.email}
              </p>
              <Link
                href={redirect}
                className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Continue
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-6 grid gap-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => signInWithProvider("github")}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <GithubIcon className="h-4 w-4" />
                  Continue with GitHub
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => signInWithProvider("google")}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  Continue with Google
                </button>
              </div>

              <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <div className="h-px flex-1 bg-border" />
                Email
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-2 rounded-md border border-border bg-background p-1">
                <button
                  type="button"
                  onClick={() => setMode("sign-in")}
                  className={cn(
                    "rounded px-3 py-2 text-sm font-medium transition-colors",
                    mode === "sign-in"
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setMode("sign-up")}
                  className={cn(
                    "rounded px-3 py-2 text-sm font-medium transition-colors",
                    mode === "sign-up"
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Create account
                </button>
              </div>

              <form className="mt-5 grid gap-4" onSubmit={handleEmailSubmit}>
                {mode === "sign-up" ? (
                  <label className="grid gap-2 text-sm font-medium text-foreground">
                    Name
                    <input
                      name="name"
                      type="text"
                      required
                      className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground/70 focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30"
                    />
                  </label>
                ) : null}
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground/70 focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Password
                  <input
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground/70 focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  )}
                  {mode === "sign-in" ? "Sign in" : "Create account"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function normalizeRedirect(value: string | undefined) {
  if (value?.startsWith("/") && !value.startsWith("//")) {
    return value;
  }

  return "/sponsors";
}
