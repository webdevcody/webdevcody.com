import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./_components/header";
import { Footer } from "./_components/footer";
import { SendEventOnLoad } from "@/components/send-event-on-load";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import MobileMenu from "./_components/mobile-menu";
import Link from "next/link";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WebDevCody.com",
  description: "My personal website for my youtube channel",
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Script
        id="sensei-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.sherpa = {
              siteId: 'kn71crk59a0zv8epkwygcc9ay57ect8j'
            }
          `,
        }}
      />
      <Script src="https://thesitesherpa.com/widget.js"></Script> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
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
