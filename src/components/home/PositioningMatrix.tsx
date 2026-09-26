import { positioningOptions } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PositioningMatrix() {
  return (
    <Section id="why-bsa">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why We're the Right Fit"
          title="Premium Finance Support — Without the Wrong Trade-offs."
          description="Compare common ways businesses handle accounts and compliance. We sit where capability and accountability meet."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {positioningOptions.map((option, i) => {
            const highlighted = option.tone === "accent";
            return (
              <Reveal key={option.id} delay={i * 0.05}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-[1.5rem] border p-5 md:p-6",
                    highlighted
                      ? "border-accent bg-accent text-white shadow-[0_20px_50px_var(--accent-glow)]"
                      : "border-line bg-surface",
                  )}
                >
                  <p
                    className={cn(
                      "text-[0.65rem] font-bold uppercase tracking-[0.14em]",
                      highlighted ? "text-white/75" : "text-muted-soft",
                    )}
                  >
                    {option.badge}
                  </p>
                  <h3
                    className={cn(
                      "mt-3 font-display text-xl leading-snug",
                      highlighted ? "text-white" : "text-ink",
                    )}
                  >
                    {option.title}
                  </h3>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {option.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "rounded-xl px-3 py-2.5 text-sm leading-snug",
                          highlighted
                            ? "bg-white/15 text-white/95"
                            : "bg-paper text-muted",
                        )}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
