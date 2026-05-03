import Link from "@/components/link";
import { Lightbulb, ArrowRight } from "lucide-react";

export default function VideoSuggestionCTA() {
  return (
    <section className="pb-16 pt-4">
      <div className="container mx-auto px-6">
        <Link
          href="https://suggestions.webdevcody.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex w-fit items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground"
        >
          <Lightbulb className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>
            Have a video idea?{" "}
            <span className="text-foreground group-hover:text-accent">
              Submit a suggestion
            </span>
          </span>
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
