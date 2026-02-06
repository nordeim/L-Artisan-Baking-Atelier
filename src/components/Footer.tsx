import { cn } from "@/utils/cn";

interface FooterProps {
  isLight: boolean;
}

const FOOTER_LINKS = {
  Atelier: ["Our Story", "Philosophy", "Careers", "Press"],
  Courses: ["Sourdough", "Viennoiserie", "Heritage", "Chocolatier"],
  Community: ["Alumni Network", "Events", "Blog", "Gift Cards"],
  Contact: ["hello@lartisan.sg", "+65 6234 8910", "Dempsey Hill", "Singapore 249676"],
};

export function Footer({ isLight }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative border-t py-16 md:py-20",
        isLight ? "border-[#D8D0BC]" : "border-void-border"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top: Logo + Links Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span
                className={cn(
                  "font-heading text-lg tracking-[0.05em]",
                  isLight ? "text-[#2C2A24]" : "text-[#E8E2D0]"
                )}
              >
                L'Artisan
              </span>
            </div>
            <p
              className={cn(
                "font-sans text-xs leading-relaxed max-w-[200px]",
                isLight ? "text-[#6B6558]" : "text-[#5A5548]"
              )}
            >
              Singapore's distinguished atelier for the art of artisan baking. Est. 2019.
            </p>

            {/* Peranakan diamond mark */}
            <div className="mt-6 flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2 w-2 rotate-45",
                    isLight ? "bg-[#8C7A3C]/20" : "bg-gold/10"
                  )}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className={cn(
                  "font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] mb-4",
                  isLight ? "text-[#8C7A3C]" : "text-gold/50"
                )}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={cn(
                        "font-sans text-xs transition-colors duration-300",
                        isLight
                          ? "text-[#6B6558] hover:text-[#2C2A24]"
                          : "text-[#5A5548] hover:text-[#C8C2B0]"
                      )}
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row",
            isLight ? "border-[#D8D0BC]/60" : "border-void-border/60"
          )}
        >
          <p
            className={cn(
              "font-sans text-[0.6rem] uppercase tracking-[0.2em]",
              isLight ? "text-[#8C7A3C]/40" : "text-[#3A3830]"
            )}
          >
            © {year} L'Artisan Baking Atelier. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Instagram", "Pinterest", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className={cn(
                  "font-sans text-[0.6rem] uppercase tracking-[0.15em] transition-colors duration-300",
                  isLight
                    ? "text-[#6B6558] hover:text-[#8C7A3C]"
                    : "text-[#3A3830] hover:text-gold/60"
                )}
                onClick={(e) => e.preventDefault()}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
