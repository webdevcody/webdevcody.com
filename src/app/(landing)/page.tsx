"use client";

import { AboutSection } from "./_compoents/about";
import HeroSection from "./_compoents/hero-section";
import NewsletterSection from "./_compoents/newsletter-section";

export default function Home() {
  return (
    <main className="py-24 flex flex-col gap-24 container mx-auto">
      <HeroSection />
      <NewsletterSection />
      <AboutSection />
    </main>
  );
}
