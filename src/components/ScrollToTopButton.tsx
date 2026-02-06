import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

interface ScrollToTopButtonProps {
  isLight: boolean;
}

export function ScrollToTopButton({ isLight }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center border transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        isLight
          ? "border-[#D8D0BC] bg-white/80 text-[#8C7A3C] hover:border-[#8C7A3C]/40 backdrop-blur-sm"
          : "border-void-border bg-void-light/80 text-gold/40 hover:text-gold hover:border-gold/20 backdrop-blur-sm"
      )}
      aria-label="Scroll to top"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
