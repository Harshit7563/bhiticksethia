import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getInsight, insights } from "@/data/insights";
import { articleSchema, breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    keywords: [article.category, article.title],
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${article.slug}` },
  ]);
  const articleLd = articleSchema({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    datePublished: article.date,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <PageHero eyebrow={article.category} title={article.title} description={article.excerpt}>
        <p className="mt-4 text-sm text-muted-soft">
          {article.date} · {article.readTime} read
        </p>
      </PageHero>
      <Section>
        <article className="container-wide max-w-3xl prose-simple">
          {article.content.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <div className="mt-10 rounded-2xl border border-line bg-accent-soft p-6">
            <p className="font-display text-xl text-ink">Want this applied to your business?</p>
            <p className="mt-2 text-muted">
              We can review your situation and explain the next steps in plain language.
            </p>
            <div className="mt-4">
              <Button href="/contact">Talk to Our Team</Button>
            </div>
          </div>
          <p className="mt-8">
            <Link href="/insights" className="font-semibold text-accent hover:underline">
              ← Back to insights
            </Link>
          </p>
        </article>
      </Section>
    </>
  );
}
