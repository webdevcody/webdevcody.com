"use client";

import Link from "next/link";
import Image from "next/image";
import { GithubIcon, YoutubeIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-500/10" />
      <div className="relative border-t border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 transition-colors duration-200 shadow-[0_-1px_12px_0_rgba(0,0,0,0.03)] dark:shadow-[0_-1px_12px_0_rgba(0,0,0,0.1)]">
        <div className="container px-6 pt-12 pb-8 mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-4 mb-6">
                <div className="rounded-lg overflow-hidden ring-1 ring-border/40">
                  <Image
                    src="/wdc.jpeg"
                    width="40"
                    height="40"
                    alt="web dev cody logo"
                    className="hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Web Dev Cody
                </span>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 max-w-md">
                Helping developers level up their skills through tutorials,
                courses, and products. Join me on this journey of continuous
                learning and improvement.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://youtube.com/@webdevcody"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-muted/80 transition-colors group"
                  aria-label="Visit WebDevCody YouTube Channel"
                >
                  <YoutubeIcon className="w-5 h-5 text-muted-foreground dark:fill-white group-hover:text-red-500 transition-colors duration-200" />
                </a>
                <a
                  href="https://github.com/webdevcody"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-muted/80 transition-colors group"
                  aria-label="Visit WebDevCody GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5 fill-black dark:fill-white group-hover:text-primary transition-colors duration-200" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Products
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://projectplannerai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      Project Planner AI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://icongeneratorai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      Icon Generator AI
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Courses
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/courses"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      All Courses
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://webdevcody.gumroad.com/l/beginner-react-challenges-collection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      React Challenges
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://webdevcody.gumroad.com/l/jipjfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      T3 Stack Tutorial
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fulfillment-policy"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      Fulfillment Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground order-2 md:order-1">
                © {currentYear} Seibert Software Solutions, LLC. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6 order-1 md:order-2">
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
                <a
                  href="mailto:webdevcody@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  webdevcody@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
