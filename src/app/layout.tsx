import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebDevCody.com",
  description: "My personal website for my youtube channel",
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
