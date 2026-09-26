import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "GST, income tax, accounting, audit, ROC compliance, payroll, registration, MIS and financial advisory — explained in plain language.",
  path: "/services",
});

export default function ServicesPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="What We Can Help You With"
        title="Everything your business needs financially."
        description="Every service answers four questions: what it is, why you need it, what problem it solves, and what we do."
      />
      <Section>
        <div className="container-wide grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-[1.5rem] border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[var(--shadow)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {service.shortTitle}
              </p>
              <h2 className="mt-2 font-display text-2xl group-hover:text-accent-deep">
                {service.title}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{service.summary}</p>
              <p className="mt-4 text-sm font-semibold text-ink">See How We Can Help →</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
