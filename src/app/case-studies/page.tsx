import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/data/content";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "How Bhitick Sethia & Associates helps e-commerce, restaurants and startups organise books, compliance and financial visibility.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Case Studies"
        title="Clarity stories from modern businesses."
        description="We do not invent fake savings percentages. These studies focus on the problems we solved and the visibility clients gained."
      />
      <Section>
        <div className="container-wide space-y-6">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="rounded-[1.75rem] border border-line bg-surface p-6 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {study.industry}
              </p>
              <h2 className="mt-3 font-display text-3xl">{study.title}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-soft">
                    Problem
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-soft">
                    Work
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-muted">
                    {study.work.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-soft">
                    Result
                  </h3>
                  <p className="mt-2 font-medium leading-relaxed">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
          <Button href="/contact">Talk to a CA About Your Situation</Button>
        </div>
      </Section>
    </>
  );
}
