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

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>YouTube</title>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

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

              <div className="flex gap-8 items-center">
                <Link
                  href="https://youtube.com/@webdevcody"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon className="w-6 h-6 stroke-white hover:stroke-blue-400" />
                </Link>

                <Link
                  className=""
                  href="https://x.com/@webdevcody"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="w-6 h-6 stroke-white hover:stroke-blue-400" />
                </Link>
              </div>
            </div>
          </header>

          {children}
        </Providers>
      </body>
    </html>
  );
}
