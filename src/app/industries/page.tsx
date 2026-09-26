import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { IndustriesSelector } from "@/components/home/IndustriesSelector";
import { industries } from "@/data/industries";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "CA support for startups, SMEs, e-commerce, restaurants, manufacturing, healthcare and more — tailored to how your business operates.",
  path: "/industries",
});

export default function IndustriesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Industries"
        title="Built for businesses of every stage."
        description="Select a category below to see the financial workstreams that usually matter most."
      />
      <IndustriesSelector />
      <Section tone="surface">
        <div className="container-wide grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.slug} className="rounded-2xl border border-line bg-paper p-5">
              <h2 className="font-display text-xl">{industry.title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{industry.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
