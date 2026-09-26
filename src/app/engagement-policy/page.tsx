import { LegalDoc, LegalH2, LegalP, LegalUl } from "@/components/legal/LegalDoc";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Engagement & Confidentiality Policy",
  description: `How professional engagements work at ${siteConfig.legalName}, Chartered Accountants, Udaipur.`,
  path: "/engagement-policy",
});

export default function EngagementPolicyPage() {
  return (
    <LegalDoc
      title="Engagement & Confidentiality Policy"
      description="How we start work, protect client information, and set expectations for professional services."
    >
      <LegalP>
        This policy explains how <strong className="text-ink">{siteConfig.legalName}</strong>{" "}
        (“the Firm”) typically engages with clients. Specific terms for each assignment are
        confirmed in writing for that engagement.
      </LegalP>

      <LegalH2>1. Starting an engagement</LegalH2>
      <LegalUl
        items={[
          "You share your requirement (GST, tax, accounting, audit, compliance, advisory, etc.)",
          "We discuss scope, timelines, documents needed and professional fees",
          "Work begins after mutual confirmation / engagement acceptance",
          "Urgent notice or deadline matters may be prioritised by agreement",
        ]}
      />

      <LegalH2>2. Scope of work</LegalH2>
      <LegalP>
        We work only within the agreed scope. Additional filings, notices, audits or advisory
        beyond the original scope may require a revised fee and timeline confirmation.
      </LegalP>

      <LegalH2>3. Your responsibilities</LegalH2>
      <LegalUl
        items={[
          "Provide complete, accurate and timely documents and information",
          "Respond to clarification requests within agreed timelines",
          "Ensure authorised signatories are available for filings and attestations",
          "Pay professional fees as agreed",
        ]}
      />

      <LegalH2>4. Confidentiality</LegalH2>
      <LegalP>
        Client business and financial information is treated as confidential professional
        material. Access is limited to persons working on your matter, except where disclosure
        is legally required, authorised by you, or necessary to complete filings you have
        instructed.
      </LegalP>

      <LegalH2>5. Fees and billing</LegalH2>
      <LegalP>
        Fees depend on nature of work, volume, urgency and complexity. Estimates may be shared
        before engagement. Invoices are payable as per agreed terms. Government fees, portal
        charges and third-party costs (if any) are usually extra and payable by the client.
      </LegalP>

      <LegalH2>6. Documents and records</LegalH2>
      <LegalP>
        You should retain originals of your business records. We may keep working copies as
        needed for the engagement and professional retention norms. On request and subject to
        fee clearance / legal limits, we can help return or share copies of documents we hold
        for your matter.
      </LegalP>

      <LegalH2>7. Ending an engagement</LegalH2>
      <LegalP>
        Either party may end an ongoing engagement with reasonable notice, subject to completion
        of critical pending filings already accepted, fee settlement for work done, and handover
        of documents as practicable. Statutory deadlines remain the client’s responsibility if
        engagement ends mid-cycle.
      </LegalP>

      <LegalH2>8. Relationship with website policies</LegalH2>
      <LegalP>
        This policy should be read with our Privacy Policy, Terms of Use and Disclaimer. Where
        an engagement letter conflicts with general website content, the engagement terms for
        that assignment prevail.
      </LegalP>
    </LegalDoc>
  );
}
