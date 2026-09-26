import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { insightCategories, insights } from "@/data/insights";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Simple explanations of GST, income tax, accounting, audit and business finance for Indian business owners.",
  path: "/insights",
});

export default function InsightsPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Knowledge Hub"
        title="Finance explained in business language."
        description="Editorial-style guides for GST, tax, accounting and compliance — written for normal business owners."
      />
      <Section>
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {insights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="rounded-[1.5rem] border border-line bg-surface p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {article.category}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-snug">{article.title}</h2>
                <p className="mt-3 text-muted leading-relaxed">{article.excerpt}</p>
                <p className="mt-4 text-sm text-muted-soft">
                  {article.date} · {article.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
