import { LegalDoc, LegalH2, LegalP, LegalUl } from "@/components/legal/LegalDoc";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: `Professional disclaimer for ${siteConfig.legalName}, Chartered Accountants — website content, tools and communications.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalDoc
      title="Disclaimer"
      description="Important limitations on website content, tools, case studies and professional communications."
    >
      <LegalP>
        Please read this Disclaimer carefully before using the website of{" "}
        <strong className="text-ink">{siteConfig.legalName}</strong>, {siteConfig.designation}, or
        relying on any information published here.
      </LegalP>

      <LegalH2>1. General information only</LegalH2>
      <LegalP>
        Content on this website — including service descriptions, articles, sample dashboards,
        case studies and examples — is for general information and marketing. It is{" "}
        <strong className="text-ink">not</strong> legal, tax, accounting, investment or other
        professional advice for any specific person or entity.
      </LegalP>

      <LegalH2>2. Laws and rates change</LegalH2>
      <LegalP>
        Income-tax, GST, company law, labour and other compliance rules in India are amended from
        time to time. Due dates, forms, rates and interpretations may differ from what is shown
        on the website. Always confirm the current position for your facts.
      </LegalP>

      <LegalH2>3. No guarantee of outcomes</LegalH2>
      <LegalUl
        items={[
          "Case studies are illustrative of work approaches and clarity gained; they do not promise identical results",
          "We do not claim guaranteed tax savings, refunds, or dispute outcomes unless expressly stated in a written engagement",
          "Business results depend on your operations, data quality, timelines and third-party actions",
        ]}
      />

      <LegalH2>4. Calculators and estimates</LegalH2>
      <LegalP>
        Online calculators produce rough estimates only. They may ignore special provisions,
        exemptions, surcharges, cess, entity structure, assessment history and documentation
        quality. Use them for discussion — not for final payment or filing.
      </LegalP>

      <LegalH2>5. Professional engagement required</LegalH2>
      <LegalP>
        Formal advice, opinions, attestations, filings and representations are provided only
        under an agreed professional engagement, based on documents and information you supply,
        and subject to the Firm’s terms of engagement and professional standards.
      </LegalP>

      <LegalH2>6. Client responsibility for information</LegalH2>
      <LegalP>
        Where we are engaged, the quality of deliverables depends on timely, complete and
        accurate information from you. The Firm is not responsible for consequences arising from
        incomplete, delayed or incorrect data provided by the client or third parties.
      </LegalP>

      <LegalH2>7. Communications</LegalH2>
      <LegalP>
        Email, WhatsApp and phone are convenient but not always appropriate for highly sensitive
        material. Prefer agreed secure channels for critical documents. Do not treat informal
        chat replies as final professional opinions unless confirmed in writing as such.
      </LegalP>

      <LegalH2>8. Third-party portals</LegalH2>
      <LegalP>
        Government and banking portals (GST, Income Tax, MCA, etc.) are controlled by respective
        authorities. Downtime, OTP issues, portal errors or policy changes outside our control
        may affect timelines.
      </LegalP>

      <LegalH2>9. Limitation</LegalH2>
      <LegalP>
        To the maximum extent permitted by law, {siteConfig.legalName} and {siteConfig.partnerName}{" "}
        disclaim liability for decisions taken solely on the basis of website content or tool
        outputs without an active professional engagement.
      </LegalP>

      <LegalH2>10. Acceptance</LegalH2>
      <LegalP>
        By using this website, you acknowledge that you have read this Disclaimer together with
        our Privacy Policy and Terms of Use.
      </LegalP>
    </LegalDoc>
  );
}
