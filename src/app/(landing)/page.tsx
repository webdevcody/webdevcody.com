"use client";

import { AboutSection } from "./_compoents/about";
import HeroSection from "./_compoents/hero-section";
import NewsletterSection from "./_compoents/newsletter-section";
import VideoSuggestionCTA from "./_compoents/video-suggestion-cta";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <HeroSection />
      <NewsletterSection />
      <VideoSuggestionCTA />
      <AboutSection />
    </main>
  );
}
