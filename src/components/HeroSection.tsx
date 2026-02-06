import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useHeritageParticles } from "@/hooks/useHeritageParticles";
import { CornerFlourish } from "./CornerFlourish";

interface HeroSectionProps {
  isLight: boolean;
}

export function HeroSection({ isLight }: HeroSectionProps) {
  const canvasRef = useHeritageParticles(isLight);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Volumetric light cone */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(184,134,11,0.06) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Corner Flourishes */}
        <div className="pointer-events-none absolute -inset-8 md:-inset-16">
          <CornerFlourish position="top-left" isLight={isLight} />
          <CornerFlourish position="top-right" isLight={isLight} />
          <CornerFlourish position="bottom-left" isLight={isLight} />
          <CornerFlourish position="bottom-right" isLight={isLight} />
        </div>

        {/* Overline */}
        <div
          className={cn(
            "transition-all duration-1000 ease-[var(--ease-dramatic)]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span
            className={cn(
              "inline-block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.45em]",
              isLight ? "text-[#8C7A3C]" : "text-gold/70"
            )}
          >
            Singapore's Distinguished
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={cn(
            "mt-6 font-heading transition-all duration-[1.2s] ease-[var(--ease-dramatic)]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "0.15s" }}
        >
          <span
            className={cn(
              "block text-5xl md:text-7xl lg:text-8xl xl:text-9xl letterpress",
              isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
            )}
          >
            L'Artisan
          </span>
          <span className="block mt-1 md:mt-2">
            <span className="text-gold-shimmer text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading italic">
              Baking
            </span>
          </span>
          <span
            className={cn(
              "block mt-1 md:mt-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl letterpress",
              isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
            )}
          >
            Atelier
          </span>
        </h1>

        {/* Decorative diamond divider */}
        <div
          className={cn(
            "flex items-center justify-center gap-3 mt-8 md:mt-12 transition-all duration-1000 ease-[var(--ease-dramatic)]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className={cn("h-px w-16 md:w-24", isLight ? "bg-[#8C7A3C]/25" : "bg-gold/15")} />
          <div className={cn("h-1.5 w-1.5 rotate-45", isLight ? "bg-[#8C7A3C]/40" : "bg-gold/25")} />
          <div className={cn("h-px w-16 md:w-24", isLight ? "bg-[#8C7A3C]/25" : "bg-gold/15")} />
        </div>

        {/* Subheadline */}
        <p
          className={cn(
            "mx-auto mt-6 max-w-lg font-sans text-sm leading-relaxed md:text-base transition-all duration-1000 ease-[var(--ease-dramatic)]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            isLight ? "text-[#6B6558]" : "text-[#8A8475]"
          )}
          style={{ transitionDelay: "0.55s" }}
        >
          Where heritage meets mastery. Immerse yourself in the art of artisan baking
          through cinematic courses crafted by world-class mentors.
        </p>

        {/* CTA */}
        <div
          className={cn(
            "mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-[var(--ease-dramatic)]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "0.7s" }}
        >
          <button
            className="btn-gold"
            onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Explore Courses</span>
          </button>
          <button
            className={cn(
              "font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 py-3 px-4",
              isLight
                ? "text-[#6B6558] hover:text-[#8C7A3C]"
                : "text-[#6B6558] hover:text-gold"
            )}
            onClick={() => document.getElementById("mentors")?.scrollIntoView({ behavior: "smooth" })}
          >
            Meet the Mentors →
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000",
          loaded ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: "1.2s" }}
      >
        <span
          className={cn(
            "font-sans text-[0.55rem] uppercase tracking-[0.3em]",
            isLight ? "text-[#8C7A3C]/40" : "text-gold/20"
          )}
        >
          Scroll
        </span>
        <div
          className={cn(
            "h-8 w-px",
            isLight ? "bg-gradient-to-b from-[#8C7A3C]/30 to-transparent" : "bg-gradient-to-b from-gold/15 to-transparent"
          )}
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
