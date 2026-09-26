import { PageHero } from "@/components/ui/PageHero";
import { ContactExperience } from "@/components/home/ContactExperience";
import { Section } from "@/components/ui/Section";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book Consultation",
  description: "Request a consultation with CA Bhitick Sethia for your business.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Book Consultation", path: "/book-consultation" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Book Consultation"
        title="Request a consultation with a CA."
        description="Share what you need help with. We’ll review and suggest the right next step — call, document checklist or engagement discussion."
      />
      <Section tone="surface" className="!pt-10">
        <div className="container-wide">
          <ContactExperience embedded />
        </div>
      </Section>
    </>
  );
}
