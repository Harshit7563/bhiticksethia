import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { team } from "@/data/content";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Bhitick Sethia & Associates is a CA firm in Udaipur — clear communication, proactive compliance and practical financial advice for modern businesses.",
  path: "/about",
  keywords: ["About CA firm", "Chartered Accountants Udaipur", "CA Bhitick Sethia"],
});

export default function AboutPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="About the Firm"
        title="A CA Firm Built Around Modern Businesses."
        description="We believe business owners deserve finance partners who explain clearly, file on time and understand how the business actually works — not only how the forms look."
      />

      <Section>
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="prose-simple">
            <h2 className="font-display text-3xl text-ink mb-4">Our philosophy</h2>
            <p>
              Complex finance becomes useful only when it is visually and verbally simple. At{" "}
              {siteConfig.name}, we organise accounts, manage compliance and translate numbers
              into decisions founders can act on.
            </p>
            <p>
              Led by {siteConfig.partnerName}, the practice supports taxation, GST, accounting,
              audit readiness and advisory for startups, SMEs and growing businesses.
            </p>
            <p>
              Based in {siteConfig.address.city}, Rajasthan — with offices at Shrinath Marg and
              Shobhagpura — we also support clients remotely across India.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Udaipur", "Head office city"],
              ["2 offices", "Shrinath Marg & Shobhagpura"],
              ["CA practice", "Taxation to advisory"],
              ["Clear language", "Business-first explanations"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-line bg-surface p-5">
                <p className="font-display text-xl">{title}</p>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container-wide mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-line bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {siteConfig.address.label}
            </p>
            <p className="mt-3 font-medium leading-relaxed">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city} - {siteConfig.address.zip} (Raj.)
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-line bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {siteConfig.addressSecondary.label}
            </p>
            <p className="mt-3 font-medium leading-relaxed">
              {siteConfig.addressSecondary.street}
              <br />
              {siteConfig.addressSecondary.city} - {siteConfig.addressSecondary.zip} (Raj.)
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" id="team">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl">Leadership</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Professional guidance with clear specialisation and accountable communication.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[1.5rem] border border-line bg-paper p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <div
                  className="flex h-36 items-end rounded-2xl bg-gradient-to-br from-navy to-ink-soft p-4 text-paper"
                  aria-hidden
                >
                  <span className="font-display text-3xl">BS</span>
                </div>
                <h3 className="mt-4 font-display text-xl">{member.name}</h3>
                <p className="text-sm text-accent font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-muted">{member.qualification}</p>
                <p className="mt-1 text-sm text-muted">{member.expertise}</p>
                <p className="mt-1 text-sm text-muted">{member.specialization}</p>
                <div className="mt-4 space-y-1 text-sm">
                  <a className="block font-medium underline" href={`tel:${siteConfig.phoneRaw}`}>
                    {siteConfig.phone}
                  </a>
                  <a className="block font-medium underline break-all" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact">Talk to Our Team</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
