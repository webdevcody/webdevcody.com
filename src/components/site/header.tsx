import { GithubIcon, YoutubeIcon } from "@/components/icons";
import Image from "@/components/image";
import Link from "@/components/link";
import { profile } from "@/data/profile";
import { products } from "@/data/products";
import { courses } from "@/data/courses";
import { ModeToggle } from "@/components/site/mode-toggle";
import { MessageCircleHeart } from "lucide-react";
import FeedbackButton from "@/components/site/feedback-button";
import MobileMenu from "@/components/site/mobile-menu";
import { NavDropdown, type NavDropdownItem } from "@/components/site/nav-dropdown";

export default function Header() {
  const productItems: NavDropdownItem[] = products.map((product) => ({
    title: product.title,
    description: product.tagline,
    href: `/products/${product.slug}`,
  }));

  const courseItems: NavDropdownItem[] = courses.map((course) => ({
    title: course.shortTitle,
    description: course.description,
    href: `/courses/${course.slug}`,
  }));

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
            {profile.siteTitle}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <NavDropdown
            label="Products"
            items={productItems}
            viewAllHref="/products"
            viewAllLabel="View all products"
          />
          <NavDropdown
            label="Courses"
            items={courseItems}
            viewAllHref="/courses"
            viewAllLabel="View all courses"
          />
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
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
