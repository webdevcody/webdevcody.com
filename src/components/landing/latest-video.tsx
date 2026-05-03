import Link from "@/components/link";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export default function LatestVideo() {
  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="On the channel"
              title="Latest video"
              description="I publish deep-dive tutorials and project walkthroughs on web development, AI, and shipping software. New videos weekly."
            />
            <Link
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Subscribe on YouTube
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${profile.featuredVideoId}?si=nUyS2-DCZCw2qj1Z`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
