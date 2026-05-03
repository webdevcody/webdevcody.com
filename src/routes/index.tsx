import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/landing/about";
import FeaturedCourses from "@/components/landing/featured-courses";
import FeaturedProducts from "@/components/landing/featured-products";
import HeroSection from "@/components/landing/hero-section";
import LatestVideo from "@/components/landing/latest-video";
import NewsletterSection from "@/components/landing/newsletter-section";
import VideoSuggestionCTA from "@/components/landing/video-suggestion-cta";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewsletterSection />
      <FeaturedProducts />
      <FeaturedCourses />
      <LatestVideo />
      <AboutSection />
      <VideoSuggestionCTA />
    </div>
  );
}
