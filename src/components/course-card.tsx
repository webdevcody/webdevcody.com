"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface CourseCardData {
  title: string;
  description: string;
  url: string;
  image?: string;
  platform?: string;
  featured?: boolean;
}

interface CourseCardProps {
  course: CourseCardData;
  variant?: "horizontal" | "featured";
  className?: string;
}

export function CourseCard({
  course,
  variant = "horizontal",
  className,
}: CourseCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = course.image && !imageFailed;
  const initial = course.title.charAt(0).toUpperCase();

  if (variant === "featured") {
    return (
      <Link
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 md:grid-cols-[1.1fr_1fr] md:gap-10 md:p-8",
          className
        )}
        aria-label={`${course.title} (opens in new tab)`}
      >
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-accent">Featured course</span>
              {course.platform ? (
                <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {course.platform}
                </span>
              ) : null}
            </div>
            <h3 className="font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
              {course.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {course.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            View course
            <ArrowUpRight
              className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
          {showImage ? (
            <Image
              src={course.image!}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
              <span className="font-serif text-7xl text-accent/80">
                {initial}
              </span>
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-6",
        className
      )}
      aria-label={`${course.title} (opens in new tab)`}
    >
      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:h-32 sm:w-56">
        {showImage ? (
          <Image
            src={course.image!}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, 224px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
            <span className="font-serif text-5xl text-accent/80">
              {initial}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
            {course.title}
          </h3>
          <ArrowUpRight
            className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>
        {course.platform ? (
          <span className="mt-1 inline-flex w-fit rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {course.platform}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
