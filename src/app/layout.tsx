import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./_components/header";
import { Footer } from "./_components/footer";
import { SendEventOnLoad } from "@/components/send-event-on-load";
import { Oxanium } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { profile } from "@/data/profile";

const fontSans = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.siteTitle} — Software engineer, creator, founder`,
    template: `%s — ${profile.siteTitle}`,
  },
  description:
    "I'm Cody Seibert. I build SaaS products, teach web development on YouTube, and publish courses that help developers level up faster.",
  metadataBase: new URL("https://webdevcody.com"),
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon.ico" },
  ],
  openGraph: {
    title: `${profile.siteTitle} — Software engineer, creator, founder`,
    description:
      "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers.",
    url: "https://webdevcody.com",
    siteName: profile.siteTitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.siteTitle} — Software engineer, creator, founder`,
    description:
      "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <SendEventOnLoad eventKey={"page load"} />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-background">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
