import { PageHero } from "@/components/ui/PageHero";
import { ContactExperience } from "@/components/home/ContactExperience";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema, createMetadata, faqSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell us what you need help with — GST, tax, accounting, audit, compliance or advisory. Reach CA Bhitick Sethia in Udaipur.",
  path: "/contact",
});

const faqs = [
  {
    question: "How soon will someone respond?",
    answer:
      "We typically respond within one business day. Urgent notices can be flagged in the form.",
  },
  {
    question: "Where are you based?",
    answer: `Our offices are in Udaipur — Shrinath Marg (HO) and Shobhagpura. We also support clients remotely across India.`,
  },
  {
    question: "What should I keep ready for the first call?",
    answer:
      "A short description of your business, current GST/tax status if known, and the main problem you want solved.",
  },
];

export default function ContactPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell Us What You Need Help With."
        description={`Call ${siteConfig.phone} / ${siteConfig.phoneAlt}, email ${siteConfig.email}, or use the conversational form below.`}
      />
      <Section tone="surface" className="!pt-10">
        <div className="container-wide">
          <ContactExperience embedded />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-line bg-paper p-5">
                <h2 className="font-display text-lg">{faq.question}</h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
