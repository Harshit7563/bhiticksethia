import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getService, services } from "@/data/services";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [service.title, "CA services", "Chartered Accountant"],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero eyebrow="Service" title={service.title} description={service.summary}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Talk to a CA</Button>
          <Button href="/services" variant="secondary">
            All Services
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Block title="What is this?" body={service.what} />
            <Block title="Why do I need it?" body={service.why} />
            <Block title="What problem does it solve?" body={service.problem} />
            <Block title="What will your firm do?" body={service.whatWeDo} />
          </div>
          <div>
            <div className="rounded-[1.5rem] border border-line bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">
                Includes
              </p>
              <ul className="mt-4 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="rounded-xl bg-paper px-4 py-3 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-line bg-ink p-6 text-paper">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
                Visual flow
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {service.visualFlow.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/15 px-3 py-1.5 text-sm">
                      {step}
                    </span>
                    {i < service.visualFlow.length - 1 ? (
                      <span className="text-paper/30">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-wide mt-12">
          <Link href="/contact" className="text-sm font-semibold text-accent hover:underline">
            Request a consultation for {service.shortTitle} →
          </Link>
        </div>
      </Section>
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="mt-2 text-muted leading-relaxed">{body}</p>
    </div>
  );
}
