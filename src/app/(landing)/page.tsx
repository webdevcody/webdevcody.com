"use client";

import { AboutSection } from "./_compoents/about";
import HeroSection from "./_compoents/hero-section";
import NewsletterSection from "./_compoents/newsletter-section";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <HeroSection />
      <NewsletterSection />
      <AboutSection />
    </main>
  );
}
