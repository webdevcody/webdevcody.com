import Link from "@/components/link";
import { GithubIcon, XIcon, YoutubeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SocialStripProps {
  links?: SocialLink[];
  className?: string;
  size?: "sm" | "md";
}

const defaultLinks: SocialLink[] = [
  {
    label: "YouTube",
    href: "https://youtube.com/@webdevcody",
    icon: YoutubeIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/webdevcody",
    icon: GithubIcon,
  },
  {
    label: "X",
    href: "https://x.com/webdevcody",
    icon: XIcon,
  },
];

export function SocialStrip({
  links = defaultLinks,
  className,
  size = "md",
}: SocialStripProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const buttonSize = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-accent/60 hover:text-accent",
              buttonSize
            )}
          >
            <Icon className={cn(iconSize, "fill-current")} />
          </Link>
        );
      })}
    </div>
  );
}
