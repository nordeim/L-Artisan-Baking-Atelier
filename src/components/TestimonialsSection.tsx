import { cn } from "@/utils/cn";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHeader } from "./SectionHeader";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "The sourdough programme didn't just teach me to bake — it taught me to listen. To the dough, to the timing, to the silence between folds. I'll never bake the same way again.",
    author: "Priya Menon",
    location: "Tiong Bahru, Singapore",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&q=80&crop=face",
  },
  {
    id: 2,
    quote: "Chef Dubois' lamination technique is architectural. Each layer is deliberate, each fold a meditation. After 10 weeks, my croissants rivaled anything I'd tasted in Paris.",
    author: "James Lim Wei Kiat",
    location: "Bukit Timah, Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80&crop=face",
  },
  {
    id: 3,
    quote: "The heritage course reconnected me with my grandmother's recipes, but elevated them with technique I never knew existed. Kaya will never be 'just kaya' to me again.",
    author: "Sarah Chen Mei Ling",
    location: "Katong, Singapore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80&crop=face",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isLight: boolean;
}

function TestimonialCard({ testimonial, index, isLight }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "testimonial-card reveal-base",
        isVisible && "reveal-visible",
        `stagger-${index + 1}`
      )}
    >
      {/* Floating quotation mark */}
      <div
        className={cn(
          "absolute -top-4 -left-1 font-heading text-6xl leading-none select-none pointer-events-none",
          isLight ? "text-[#8C7A3C]/10" : "text-gold/8"
        )}
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: `${index * 0.7}s` }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Quote */}
      <blockquote
        className={cn(
          "relative font-sans text-sm leading-[1.8] italic mb-6",
          isLight ? "text-[#4A4640]" : "text-[#9A9488]"
        )}
      >
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className={cn(
            "h-10 w-10 rounded-full object-cover border-2",
            isLight ? "border-[#D8D0BC]" : "border-void-border"
          )}
          loading="lazy"
        />
        <div>
          <p
            className={cn(
              "font-heading text-sm",
              isLight ? "text-[#2C2A24]" : "text-[#C8C2B0]"
            )}
          >
            {testimonial.author}
          </p>
          <p
            className={cn(
              "font-sans text-[0.6rem] uppercase tracking-[0.15em]",
              isLight ? "text-[#8C7A3C]" : "text-gold/40"
            )}
          >
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsSectionProps {
  isLight: boolean;
}

export function TestimonialsSection({ isLight }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="relative py-[var(--spacing-section)]">
      <div className="section-divider mb-16" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Voices from the Atelier"
          title="In Their Own Words"
          subtitle="The truest measure of mastery is transformation. Hear from those who have walked the path."
          isLight={isLight}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  );
}
