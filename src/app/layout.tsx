import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./_components/header";
import { Footer } from "./_components/footer";
import { SendEventOnLoad } from "@/components/send-event-on-load";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SendEventOnLoad eventKey={"page load"} />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
