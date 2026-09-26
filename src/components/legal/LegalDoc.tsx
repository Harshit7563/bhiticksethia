import { type ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export function LegalDoc({
  title,
  description,
  effectiveDate = "18 September 2026",
  children,
}: {
  title: string;
  description: string;
  effectiveDate?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description}>
        <p className="mt-4 text-sm text-muted-soft">
          Effective date: {effectiveDate} · {siteConfig.legalName}, {siteConfig.designation}
        </p>
      </PageHero>
      <Section>
        <article className="container-wide max-w-3xl space-y-8 text-[1.02rem] leading-relaxed text-muted">
          {children}
          <div className="rounded-2xl border border-line bg-surface p-5 text-sm">
            <p className="font-semibold text-ink">Contact for policy questions</p>
            <p className="mt-2">
              {siteConfig.partnerName}
              <br />
              {siteConfig.legalName}
              <br />
              <a className="underline text-ink" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              {" · "}
              <a className="underline text-ink" href={`tel:${siteConfig.phoneRaw}`}>
                {siteConfig.phone}
              </a>
              <br />
              {siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.zip}{" "}
              (Raj.)
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl text-ink !mt-2">{children}</h2>;
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-muted leading-relaxed">{children}</p>;
}

export function LegalUl({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
