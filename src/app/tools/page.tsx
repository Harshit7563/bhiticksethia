import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { toolIds, toolMeta } from "@/data/tools";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Financial Tools",
  description:
    "GST, tax estimate, profit, EMI, TDS, break-even and working capital calculators for Indian businesses.",
  path: "/tools",
});

export default function ToolsPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Smart Financial Tools"
        title="Quick estimates. Clear next step."
        description="Use these calculators for rough planning. When you want a CA to review the numbers, request a consultation."
      />
      <Section>
        <div className="container-wide grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolIds.map((id) => (
            <Link
              key={id}
              href={`/tools/${id}`}
              className="rounded-[1.5rem] border border-line bg-surface p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            >
              <h2 className="font-display text-2xl">{toolMeta[id].title}</h2>
              <p className="mt-3 text-muted text-sm leading-relaxed">{toolMeta[id].description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
