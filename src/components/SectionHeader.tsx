import { cn } from "@/utils/cn";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  isLight?: boolean;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, subtitle, isLight, align = "center" }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-base mb-16 md:mb-20",
        isVisible && "reveal-visible",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {/* Overline Label */}
      <span
        className={cn(
          "inline-block font-sans text-[0.625rem] font-semibold uppercase tracking-[0.3em] mb-4",
          isLight ? "text-[#8C7A3C]" : "text-gold"
        )}
      >
        {label}
      </span>

      {/* Decorative Line */}
      <div className={cn("flex items-center gap-4 mb-6", align === "center" && "justify-center")}>
        <div className={cn("h-px w-12", isLight ? "bg-[#8C7A3C]/30" : "bg-gold/20")} />
        <div className={cn("h-1 w-1 rotate-45", isLight ? "bg-[#8C7A3C]/50" : "bg-gold/30")} />
        <div className={cn("h-px w-12", isLight ? "bg-[#8C7A3C]/30" : "bg-gold/20")} />
      </div>

      {/* Title */}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl letterpress",
          isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-xl font-sans text-sm leading-relaxed md:text-base",
            align === "center" && "mx-auto",
            isLight ? "text-[#6B6558]" : "text-[#8A8475]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
