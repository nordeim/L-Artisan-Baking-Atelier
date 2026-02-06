import { useTheme } from "@/hooks/useTheme";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { MentorsSection } from "@/components/MentorsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export function App() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <>
      {/* Atmospheric layers */}
      <div className="atelier-atmosphere" aria-hidden="true" />
      <div className="volumetric-light" aria-hidden="true" />
      <GrainOverlay />

      {/* Navigation */}
      <Navigation isLight={isLight} onToggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection isLight={isLight} />
        <CoursesSection isLight={isLight} />
        <MentorsSection isLight={isLight} />
        <TestimonialsSection isLight={isLight} />
        <NewsletterSection isLight={isLight} />
      </main>

      {/* Footer */}
      <Footer isLight={isLight} />

      {/* Utilities */}
      <ScrollToTopButton isLight={isLight} />
    </>
  );
}
