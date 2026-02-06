import { cn } from "@/utils/cn";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHeader } from "./SectionHeader";
import { CornerFlourish } from "./CornerFlourish";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: "FOUNDATION" | "ADVANCED" | "EXCLUSIVE" | "MASTER";
  duration: string;
  level: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Artisan Sourdough Mastery",
    description: "Unlock the ancient craft of wild fermentation. From starter cultivation to the perfect crumb structure.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&q=80",
    badge: "FOUNDATION",
    duration: "8 Weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Viennoiserie & Lamination",
    description: "Master the 27-layer technique. Croissants, pain au chocolat, and danish — with butter precision.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop&q=80",
    badge: "ADVANCED",
    duration: "10 Weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Heritage Kaya & Pandan",
    description: "Singapore's soul in every layer. Nonya kaya tarts, pandan chiffon, and ondeh-ondeh reinvented.",
    image: "https://images.unsplash.com/photo-1486427944544-d2c246c4df4c?w=600&h=400&fit=crop&q=80",
    badge: "EXCLUSIVE",
    duration: "6 Weeks",
    level: "All Levels",
  },
  {
    id: 4,
    title: "Chocolatier's Codex",
    description: "Tempering, ganache architecture, and bonbon artistry. The complete chocolate master programme.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=400&fit=crop&q=80",
    badge: "MASTER",
    duration: "12 Weeks",
    level: "Advanced",
  },
];

const BADGE_STYLES: Record<Course["badge"], { dark: string; light: string }> = {
  FOUNDATION: {
    dark: "bg-gold/10 text-gold border border-gold/20",
    light: "bg-[#8C7A3C]/10 text-[#8C7A3C] border border-[#8C7A3C]/20",
  },
  ADVANCED: {
    dark: "bg-[#4A6741]/20 text-[#7CB56C] border border-[#5B8C5A]/20",
    light: "bg-[#4A6741]/10 text-[#4A6741] border border-[#4A6741]/20",
  },
  EXCLUSIVE: {
    dark: "bg-[#6B3A3A]/20 text-[#C47070] border border-[#A04040]/20",
    light: "bg-[#8C4444]/10 text-[#8C4444] border border-[#8C4444]/20",
  },
  MASTER: {
    dark: "bg-[#3A4A6B]/20 text-[#7090C4] border border-[#4060A0]/20",
    light: "bg-[#3A4A6B]/10 text-[#3A4A6B] border border-[#3A4A6B]/20",
  },
};

interface CourseCardProps {
  course: Course;
  index: number;
  isLight: boolean;
}

function CourseCard({ course, index, isLight }: CourseCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "course-card reveal-base group",
        isVisible && "reveal-visible",
        `stagger-${index + 1}`
      )}
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-smooth)] group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className={cn(
            "absolute inset-0",
            isLight
              ? "bg-gradient-to-t from-white/60 via-transparent to-transparent"
              : "bg-gradient-to-t from-void-light/80 via-transparent to-transparent"
          )}
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={cn(
              "badge",
              isLight ? BADGE_STYLES[course.badge].light : BADGE_STYLES[course.badge].dark
            )}
          >
            {course.badge}
          </span>
        </div>
        {/* Corner flourish on hover */}
        <div className="absolute bottom-2 right-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <CornerFlourish position="bottom-right" isLight={isLight} className="!opacity-40" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className={cn(
            "font-heading text-lg md:text-xl mb-3",
            isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
          )}
        >
          {course.title}
        </h3>
        <p
          className={cn(
            "font-sans text-sm leading-relaxed mb-5",
            isLight ? "text-[#6B6558]" : "text-[#7A7568]"
          )}
        >
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "font-sans text-[0.65rem] uppercase tracking-[0.15em]",
                isLight ? "text-[#8C7A3C]" : "text-gold/60"
              )}
            >
              {course.duration}
            </span>
            <span className={cn("h-3 w-px", isLight ? "bg-[#D8D0BC]" : "bg-void-border")} />
            <span
              className={cn(
                "font-sans text-[0.65rem] uppercase tracking-[0.15em]",
                isLight ? "text-[#6B6558]" : "text-[#5A5548]"
              )}
            >
              {course.level}
            </span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className={cn(
              "transition-all duration-300 group-hover:translate-x-1",
              isLight ? "stroke-[#8C7A3C]" : "stroke-gold/40 group-hover:stroke-gold"
            )}
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface CoursesSectionProps {
  isLight: boolean;
}

export function CoursesSection({ isLight }: CoursesSectionProps) {
  return (
    <section id="courses" className="relative py-[var(--spacing-section)]">
      {/* Section divider */}
      <div className="section-divider mb-16" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Curated Programme"
          title="The Artisan's Curriculum"
          subtitle="Four meticulously designed programmes, each a journey from technique to artistry. Small cohorts. Personal mentorship. Uncompromising standards."
          isLight={isLight}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  );
}
