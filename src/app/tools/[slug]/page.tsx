import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FinancialTool } from "@/components/tools/FinancialTool";
import { toolIds, toolMeta, type ToolId } from "@/data/tools";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return toolIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!toolIds.includes(slug as ToolId)) return {};
  const meta = toolMeta[slug as ToolId];
  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/tools/${slug}`,
  });
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!toolIds.includes(slug as ToolId)) notFound();
  const meta = toolMeta[slug as ToolId];

  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: meta.title, path: `/tools/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero eyebrow="Financial Tool" title={meta.title} description={meta.description} />
      <Section>
        <div className="container-wide max-w-3xl">
          <FinancialTool toolId={slug as ToolId} />
        </div>
      </Section>
    </>
  );
}
