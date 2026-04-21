import { GithubIcon, YoutubeIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { MessageCircleHeart } from "lucide-react";
import FeedbackButton from "./feedback-button";
import MobileMenu from "./mobile-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="overflow-hidden rounded-lg border border-border">
            <Image
              src="/wdc.jpeg"
              width="32"
              height="32"
              alt="Web Dev Cody logo"
            />
          </div>
          <span className="font-semibold text-foreground">
            Cody Seibert
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <FeedbackButton
            triggerContent={
              <button
                title="Leave Suggestion"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <MessageCircleHeart size={18} />
              </button>
            }
          />

          <Link
            href="https://youtube.com/@webdevcody"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
            aria-label="YouTube"
          >
            <YoutubeIcon className="h-[18px] w-[18px] fill-current" />
          </Link>

          <Link
            href="https://github.com/webdevcody"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
            aria-label="GitHub"
          >
            <GithubIcon className="h-[18px] w-[18px] fill-current" />
          </Link>

          <div className="rounded-full">
            <ModeToggle />
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
