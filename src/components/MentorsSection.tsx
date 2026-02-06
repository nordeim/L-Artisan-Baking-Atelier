import { cn } from "@/utils/cn";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHeader } from "./SectionHeader";

interface Mentor {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  accolades: string[];
}

const MENTORS: Mentor[] = [
  {
    id: 1,
    name: "Chef Isabelle Tan",
    title: "Master Artisan",
    bio: "Third-generation Peranakan baker. 22 years perfecting the intersection of French technique and Nonya heritage.",
    image: "https://images.unsplash.com/photo-1595257841889-eca2678571fa?w=300&h=300&fit=crop&q=80&crop=face",
    accolades: ["James Beard Award", "Michelin Bib Gourmand"],
  },
  {
    id: 2,
    name: "Chef Marcus Ng",
    title: "Fermentation Alchemist",
    bio: "Pioneer of Singapore's sourdough renaissance. His starters have been cultivated continuously for 14 years.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&q=80&crop=face",
    accolades: ["Asia's 50 Best", "Grain Innovator Award"],
  },
  {
    id: 3,
    name: "Chef Amélie Dubois",
    title: "Viennoiserie Virtuoso",
    bio: "Trained at Lenôtre Paris. Architect of the 32-layer lamination technique now taught worldwide.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80&crop=face",
    accolades: ["Coupe du Monde", "MOF Finalist"],
  },
];

interface MentorCardProps {
  mentor: Mentor;
  index: number;
  isLight: boolean;
}

function MentorCard({ mentor, index, isLight }: MentorCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-base group text-center",
        isVisible && "reveal-visible",
        `stagger-${index + 1}`
      )}
    >
      {/* Portrait with concentric rings */}
      <div className="mentor-portrait mx-auto mb-8">
        {/* Concentric rings */}
        <div
          className={cn(
            "absolute -inset-3 rounded-full border opacity-0 transition-opacity duration-700 group-hover:opacity-100",
            isLight ? "border-[#8C7A3C]/15" : "border-gold/10"
          )}
          style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute -inset-6 rounded-full border opacity-0 transition-opacity duration-700 group-hover:opacity-100",
            isLight ? "border-[#8C7A3C]/10" : "border-gold/5"
          )}
          style={{ animation: "pulse-ring 3s ease-in-out infinite 0.5s" }}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute -inset-9 rounded-full border opacity-0 transition-opacity duration-700 group-hover:opacity-100",
            isLight ? "border-[#8C7A3C]/5" : "border-gold/3"
          )}
          style={{ animation: "pulse-ring 3s ease-in-out infinite 1s" }}
          aria-hidden="true"
        />
        <img
          src={mentor.image}
          alt={`Portrait of ${mentor.name}`}
          loading="lazy"
        />
      </div>

      {/* Name */}
      <h3
        className={cn(
          "font-heading text-xl md:text-2xl mb-1",
          isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
        )}
      >
        {mentor.name}
      </h3>

      {/* Title */}
      <span
        className={cn(
          "inline-block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] mb-4",
          isLight ? "text-[#8C7A3C]" : "text-gold/60"
        )}
      >
        {mentor.title}
      </span>

      {/* Bio */}
      <p
        className={cn(
          "font-sans text-sm leading-relaxed mb-5 max-w-xs mx-auto",
          isLight ? "text-[#6B6558]" : "text-[#7A7568]"
        )}
      >
        {mentor.bio}
      </p>

      {/* Accolades */}
      <div className="flex flex-wrap justify-center gap-2">
        {mentor.accolades.map((acc) => (
          <span
            key={acc}
            className={cn(
              "font-sans text-[0.55rem] uppercase tracking-[0.15em] py-1 px-2.5 border",
              isLight
                ? "border-[#D8D0BC] text-[#8C7A3C]"
                : "border-void-border text-[#6B6558]"
            )}
          >
            {acc}
          </span>
        ))}
      </div>
    </div>
  );
}

interface MentorsSectionProps {
  isLight: boolean;
}

export function MentorsSection({ isLight }: MentorsSectionProps) {
  return (
    <section id="mentors" className="relative py-[var(--spacing-section)]">
      <div className="section-divider mb-16" aria-hidden="true" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeader
          label="The Atelier's Masters"
          title="Guided by Virtuosos"
          subtitle="Each mentor brings decades of mastery, cultural heritage, and an unwavering commitment to elevating every student's craft."
          isLight={isLight}
        />

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          {MENTORS.map((mentor, i) => (
            <MentorCard key={mentor.id} mentor={mentor} index={i} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  );
}
