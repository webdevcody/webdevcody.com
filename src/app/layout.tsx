import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./_components/header";
import { Footer } from "./_components/footer";
import { SendEventOnLoad } from "@/components/send-event-on-load";
import { Inter, Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cody Seibert — Software engineer, creator, founder",
    template: "%s — Cody Seibert",
  },
  description:
    "I'm Cody Seibert. I build SaaS products, teach web development on YouTube, and publish courses that help developers level up faster.",
  metadataBase: new URL("https://webdevcody.com"),
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon.ico" },
  ],
  openGraph: {
    title: "Cody Seibert — Software engineer, creator, founder",
    description:
      "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers.",
    url: "https://webdevcody.com",
    siteName: "Web Dev Cody",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cody Seibert — Software engineer, creator, founder",
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
          fontSerif.variable
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
