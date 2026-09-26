import { trustPoints, whyChooseUs } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function TrustAndWhy() {
  return (
    <>
      <Section tone="ink" id="trust">
        <div className="container-wide">
          <SectionHeader
            light
            eyebrow="Trust"
            title="Your Financial Information Stays Confidential."
            description="Financial services require trust. We keep client information confidential and handle documents through structured internal processes — without exaggerated security claims."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-display text-xl text-paper">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="why-us">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Where We Add Value"
            title="Why Clients Choose Us"
            description="Meaningful differences — not generic claims."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-[1.5rem] border border-line bg-surface p-6">
                  <p className="text-xs font-bold tracking-[0.14em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
