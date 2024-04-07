import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "./providers";
import { SendEventOnLoad } from "./send-event-on-load";

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
          <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between py-2">
              <Link href="/" className="flex items-center gap-4">
                <Image
                  src="/wdc.jpeg"
                  width="50"
                  height="50"
                  alt="web dev cody logo"
                  className="rounded-full"
                />
                WebDevCody.com
              </Link>
            </div>
          </header>

          {children}
        </Providers>
      </body>
    </html>
  );
}
