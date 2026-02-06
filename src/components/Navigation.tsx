import { useState, useEffect, useCallback } from "react";
import { cn } from "@/utils/cn";

interface NavigationProps {
  isLight: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { id: "courses", label: "Courses" },
  { id: "mentors", label: "Mentors" },
  { id: "testimonials", label: "Voices" },
  { id: "newsletter", label: "Atelier" },
];

export function Navigation({ isLight, onToggleTheme }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={cn("nav-glass fixed top-0 left-0 right-0 z-50", scrolled && "scrolled")}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Peranakan diamond mark */}
            <div className="relative h-8 w-8">
              <div
                className={cn(
                  "absolute inset-1 rotate-45 border transition-all duration-500",
                  isLight
                    ? "border-[#8C7A3C]/60 group-hover:border-[#8C7A3C]"
                    : "border-gold/40 group-hover:border-gold"
                )}
              />
              <div
                className={cn(
                  "absolute inset-2.5 rotate-45 transition-all duration-500",
                  isLight
                    ? "bg-[#8C7A3C]/20 group-hover:bg-[#8C7A3C]/40"
                    : "bg-gold/10 group-hover:bg-gold/25"
                )}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading text-sm tracking-[0.08em]",
                  isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
                )}
              >
                L'Artisan
              </span>
              <span
                className={cn(
                  "font-sans text-[0.5rem] font-semibold uppercase tracking-[0.3em]",
                  isLight ? "text-[#8C7A3C]" : "text-gold/60"
                )}
              >
                Baking Atelier
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={cn(
                  "relative font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                  activeSection === id
                    ? isLight
                      ? "text-[#8C7A3C]"
                      : "text-gold"
                    : isLight
                      ? "text-[#6B6558] hover:text-[#2C2A24]"
                      : "text-[#6B6558] hover:text-[#C8C2B0]"
                )}
              >
                {label}
                {activeSection === id && (
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-px",
                      isLight ? "bg-[#8C7A3C]" : "bg-gold"
                    )}
                  />
                )}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300",
                isLight
                  ? "border-[#8C7A3C]/20 text-[#8C7A3C] hover:bg-[#8C7A3C]/10"
                  : "border-gold/15 text-gold/50 hover:text-gold hover:border-gold/30"
              )}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
              isLight ? "text-[#2C2A24]" : "text-[#C8C2B0]"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block h-px w-5 transition-all duration-300",
                isLight ? "bg-[#2C2A24]" : "bg-[#C8C2B0]",
                mobileOpen && "translate-y-[4px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 transition-all duration-300",
                isLight ? "bg-[#2C2A24]" : "bg-[#C8C2B0]",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 transition-all duration-300",
                isLight ? "bg-[#2C2A24]" : "bg-[#C8C2B0]",
                mobileOpen && "-translate-y-[4px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn("mobile-menu-overlay", mobileOpen && "active")} role="dialog" aria-modal="true">
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "font-heading text-2xl tracking-[0.1em] transition-colors duration-300",
                isLight ? "text-[#2C2A24] hover:text-[#8C7A3C]" : "text-[#C8C2B0] hover:text-gold"
              )}
            >
              {label}
            </button>
          ))}
          <button
            onClick={onToggleTheme}
            className={cn(
              "mt-4 font-sans text-xs uppercase tracking-[0.2em]",
              isLight ? "text-[#8C7A3C]" : "text-gold/60"
            )}
          >
            {isLight ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </>
  );
}
