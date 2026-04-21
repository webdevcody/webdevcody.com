import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

export function Avatar({
  src = "/wdc.jpeg",
  alt,
  size = 320,
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden rounded-2xl border border-border",
        className
      )}
      style={{ width: size, height: size, maxWidth: "100%" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        priority
        className="relative object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/20" />
    </div>
  );
}
