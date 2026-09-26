import { financePartnerPoints } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinancePartner() {
  return (
    <Section tone="surface" id="finance-partner">
      <div className="container-wide">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <SectionHeader
            eyebrow="Strategic Finance Partner"
            title="More Than a CA Firm — Your Outsourced Finance Function."
            description="Expert bookkeeping, tax, compliance and advisory delivered accurately and on time. We handle the numbers so you can grow the business — without the overhead of a full in-house finance team."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end lg:pb-14">
            <Button href="/book-consultation" size="lg">
              Schedule a Call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {financePartnerPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05}>
              <article className="h-full border-t border-line pt-5">
                <p className="text-[0.7rem] font-bold tracking-[0.14em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
