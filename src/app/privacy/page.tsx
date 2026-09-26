import { LegalDoc, LegalH2, LegalP, LegalUl } from "@/components/legal/LegalDoc";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy of ${siteConfig.legalName}, Chartered Accountants, Udaipur — how we collect, use and protect your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      description="How Bhitick Sethia & Associates collects, uses, stores and protects personal and business information."
    >
      <LegalP>
        This Privacy Policy applies to the website and communication channels of{" "}
        <strong className="text-ink">{siteConfig.legalName}</strong> (“the Firm”, “we”, “us”),
        Chartered Accountants, operated by {siteConfig.partnerName}, with offices in Udaipur,
        Rajasthan.
      </LegalP>

      <LegalH2>1. Who we are</LegalH2>
      <LegalP>
        We are a professional chartered accountancy practice providing services such as taxation,
        GST, accounting, audit support, company compliance and financial advisory. As a CA firm,
        we are also bound by professional confidentiality and ethical obligations applicable to
        Chartered Accountants in India.
      </LegalP>

      <LegalH2>2. Information we collect</LegalH2>
      <LegalP>We may collect information that you voluntarily provide, including:</LegalP>
      <LegalUl
        items={[
          "Name, phone number, email address and city",
          "Business type, approximate turnover range and nature of enquiry",
          "Messages, documents or details shared for consultation or engagement",
          "Communication records via phone, WhatsApp, email or contact forms",
        ]}
      />
      <LegalP>
        If you become a client, we may also process business and financial records necessary to
        deliver professional services (for example invoices, bank statements, GST data, tax
        filings and company documents), under the agreed engagement.
      </LegalP>

      <LegalH2>3. How we use your information</LegalH2>
      <LegalUl
        items={[
          "To respond to enquiries and schedule consultations",
          "To understand your requirements and propose suitable professional services",
          "To perform agreed accounting, tax, compliance or advisory work",
          "To communicate filing updates, document requests and professional correspondence",
          "To maintain records required under applicable law and professional standards",
        ]}
      />
      <LegalP>
        We do <strong className="text-ink">not sell</strong> your personal information to third
        parties for marketing.
      </LegalP>

      <LegalH2>4. Confidentiality</LegalH2>
      <LegalP>
        Client information shared during a professional engagement is treated as confidential,
        subject to:
      </LegalP>
      <LegalUl
        items={[
          "Applicable Indian laws",
          "Professional obligations of Chartered Accountants",
          "Any lawful requirement to disclose (for example, to tax/regulatory authorities where legally required)",
          "Disclosure with your consent, or to persons you authorise",
        ]}
      />

      <LegalH2>5. Sharing of information</LegalH2>
      <LegalP>We may share information only when necessary, such as with:</LegalP>
      <LegalUl
        items={[
          "Authorised team members working on your matter",
          "Government portals or authorities for filings you have instructed us to make",
          "Service providers who support IT, email or document storage, under confidentiality expectations",
          "Professional advisers (for example legal counsel) where required for your matter",
        ]}
      />

      <LegalH2>6. Data security</LegalH2>
      <LegalP>
        We take reasonable organisational and technical steps to protect information against
        unauthorised access, loss or misuse. No method of transmission or storage is completely
        secure; we encourage clients to share sensitive documents through agreed channels only.
      </LegalP>

      <LegalH2>7. Retention</LegalH2>
      <LegalP>
        We retain enquiry and client records for as long as needed to provide services, resolve
        queries, meet legal/professional retention requirements, or as otherwise agreed in the
        engagement. When retention is no longer required, we take reasonable steps to delete or
        securely dispose of records.
      </LegalP>

      <LegalH2>8. Your choices</LegalH2>
      <LegalP>
        You may request access to, correction of, or deletion of personal information you have
        shared with us through the website, subject to legal and professional record-keeping
        requirements. For such requests, contact us using the details below.
      </LegalP>

      <LegalH2>9. Website and cookies</LegalH2>
      <LegalP>
        Our website may use essential technical cookies or analytics to improve performance and
        understand usage. You can control cookies through your browser settings. Contact forms
        and calculators process only the data you enter.
      </LegalP>

      <LegalH2>10. Children’s privacy</LegalH2>
      <LegalP>
        Our services are intended for business owners and adults. We do not knowingly collect
        personal information from children.
      </LegalP>

      <LegalH2>11. Changes to this policy</LegalH2>
      <LegalP>
        We may update this Privacy Policy from time to time. The revised version will be posted
        on this page with an updated effective date.
      </LegalP>
    </LegalDoc>
  );
}
