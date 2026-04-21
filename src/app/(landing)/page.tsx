import { AboutSection } from "./_compoents/about";
import FeaturedCourses from "./_compoents/featured-courses";
import FeaturedProducts from "./_compoents/featured-products";
import HeroSection from "./_compoents/hero-section";
import LatestVideo from "./_compoents/latest-video";
import NewsletterSection from "./_compoents/newsletter-section";
import VideoSuggestionCTA from "./_compoents/video-suggestion-cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <FeaturedCourses />
      <LatestVideo />
      <AboutSection />
      <NewsletterSection />
      <VideoSuggestionCTA />
    </main>
  );
}
