import {
  Outlet,
  HeadContent,
  Scripts,
  Link,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import appCss from "@/styles/app.css?url";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Toaster } from "@/components/ui/toaster";
import { SendEventOnLoad } from "@/components/send-event-on-load";
import { profile } from "@/data/profile";

const queryClient = new QueryClient();

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: `${profile.siteTitle} — Software engineer, creator, founder`,
      },
      {
        name: "description",
        content:
          "I'm Cody Seibert. I build SaaS products, teach web development on YouTube, and publish courses that help developers level up faster.",
      },
      {
        property: "og:title",
        content: `${profile.siteTitle} — Software engineer, creator, founder`,
      },
      {
        property: "og:description",
        content:
          "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers.",
      },
      { property: "og:url", content: "https://webdevcody.com" },
      { property: "og:site_name", content: profile.siteTitle },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: `${profile.siteTitle} — Software engineer, creator, founder`,
      },
      {
        name: "twitter:description",
        content:
          "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700&family=Oxanium:wght@200;300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-6 px-6 py-32 text-center">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
      >
        Back home
      </Link>
    </section>
  );
}

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <SendEventOnLoad eventKey={"page load"} />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 bg-background">{children}</main>
              <Footer />
            </div>
          </QueryClientProvider>
        </ThemeProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}
