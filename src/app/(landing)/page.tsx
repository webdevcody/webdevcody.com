"use client";

import HeroSection from "./_compoents/hero-section";
import NewsletterSection from "./_compoents/newsletter-section";

export default function Home() {
  return (
    <main className="py-24 flex flex-col gap-12 container mx-auto">
      <HeroSection />
      <NewsletterSection />
    </main>
  );
}
