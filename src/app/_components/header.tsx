import { GithubIcon, XIcon, YoutubeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { MessageCircleHeart } from "lucide-react";
import FeedbackButton from "./feedback-button";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-4 transition-colors duration-200"
        >
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="nav-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            HOME
          </Link>
          <Link
            href="/courses"
            className="nav-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            COURSES
          </Link>
          <Link
            href="/products"
            className="nav-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            MY PRODUCTS
          </Link>
          <Link
            href="/contact"
            className="nav-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            CONTACT
          </Link>
          <Link
            href="https://suggestions.webdevcody.com"
            className="nav-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            SUBMIT VIDEO SUGGESTION
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <FeedbackButton
            triggerContent={
              <button
                title="Leave Suggestion"
                className="rounded-lg p-2 hover:bg-muted/80 transition-colors"
              >
                <MessageCircleHeart
                  size={20}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                />
              </button>
            }
          />

          <Link
            href="https://youtube.com/@webdevcody"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block rounded-lg p-2 hover:bg-muted/80 transition-colors group"
          >
            <YoutubeIcon className="w-5 h-5 text-muted-foreground dark:fill-white group-hover:text-red-500 transition-colors duration-200" />
          </Link>

          <Link
            className="hidden md:block rounded-lg p-2 hover:bg-muted/80 transition-colors group"
            href="https://github.com/webdevcody"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-5 h-5 fill-black dark:fill-white group-hover:text-primary transition-colors duration-200" />
          </Link>

          <div className="rounded-lg p-1 hover:bg-muted/80 transition-colors">
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
