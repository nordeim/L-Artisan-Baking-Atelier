import { useState, useCallback } from "react";
import { cn } from "@/utils/cn";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CornerFlourish } from "./CornerFlourish";

type FormState = "idle" | "loading" | "success" | "error";

interface NewsletterSectionProps {
  isLight: boolean;
}

export function NewsletterSection({ isLight }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim() || formState === "loading") return;

      setFormState("loading");

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormState("success");
        setEmail("");
      } catch {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    },
    [email, formState]
  );

  return (
    <section id="newsletter" className="relative py-[var(--spacing-section)]">
      <div className="section-divider mb-16" aria-hidden="true" />

      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "reveal-base relative p-8 md:p-14",
            isVisible && "reveal-visible",
            isLight
              ? "border border-[#D8D0BC]"
              : "border border-void-border"
          )}
        >
          {/* Corner flourishes */}
          <CornerFlourish position="top-left" isLight={isLight} />
          <CornerFlourish position="top-right" isLight={isLight} />
          <CornerFlourish position="bottom-left" isLight={isLight} />
          <CornerFlourish position="bottom-right" isLight={isLight} />

          <div className="text-center">
            {/* Label */}
            <span
              className={cn(
                "inline-block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.35em] mb-4",
                isLight ? "text-[#8C7A3C]" : "text-gold/60"
              )}
            >
              Join the Atelier
            </span>

            {/* Title */}
            <h2
              className={cn(
                "font-heading text-2xl md:text-3xl lg:text-4xl letterpress mb-4",
                isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
              )}
            >
              The Baker's Gazette
            </h2>

            {/* Subtitle */}
            <p
              className={cn(
                "font-sans text-sm leading-relaxed max-w-md mx-auto mb-8",
                isLight ? "text-[#6B6558]" : "text-[#7A7568]"
              )}
            >
              Seasonal recipes, technique deep-dives, and exclusive early access to new courses.
              Delivered with the care of a hand-scored loaf.
            </p>

            {/* Form */}
            {formState === "success" ? (
              <div className="flex flex-col items-center gap-3 py-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border",
                    isLight ? "border-[#5B8C5A]/30 text-[#5B8C5A]" : "border-[#5B8C5A]/20 text-[#7CB56C]"
                  )}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p
                  className={cn(
                    "font-sans text-sm",
                    isLight ? "text-[#4A6741]" : "text-[#7CB56C]"
                  )}
                >
                  Welcome to the atelier. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className={cn(
                    "newsletter-input flex-1",
                    formState === "error" && "border-[#A04040]! animate-[shake_0.5s_ease]"
                  )}
                  disabled={formState === "loading"}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="btn-gold whitespace-nowrap"
                  disabled={formState === "loading"}
                >
                  <span className="flex items-center gap-2">
                    {formState === "loading" ? (
                      <>
                        <svg
                          className="h-3 w-3 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" opacity="0.3" />
                          <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                        Joining…
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </span>
                </button>
              </form>
            )}

            {formState === "error" && (
              <p className="mt-3 font-sans text-xs text-[#A04040]">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
