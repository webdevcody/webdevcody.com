"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ProjectCardData {
  title: string;
  tagline: string;
  url: string;
  image?: string;
  tags?: string[];
  status?: "Live" | "Beta" | "New";
}

interface ProjectCardProps {
  project: ProjectCardData;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;
  const initial = project.title.charAt(0).toUpperCase();

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5",
        className
      )}
      aria-label={`${project.title} — ${project.tagline} (opens in new tab)`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {showImage ? (
          <Image
            src={project.image!}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
            <div className="absolute inset-0 dot-backdrop opacity-50" />
            <span className="relative font-heading text-7xl font-semibold tracking-tight text-accent/80">
              {initial}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
        {project.status ? (
          <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight
            className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        {project.tags && project.tags.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
