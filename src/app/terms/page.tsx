import { LegalDoc, LegalH2, LegalP, LegalUl } from "@/components/legal/LegalDoc";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: `Website Terms of Use for ${siteConfig.legalName}, Chartered Accountants, Udaipur.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Use"
      description="Rules for using the website, tools and content of Bhitick Sethia & Associates."
    >
      <LegalP>
        Welcome to the website of <strong className="text-ink">{siteConfig.legalName}</strong>{" "}
        (“the Firm”, “we”, “us”), {siteConfig.designation}. By accessing or using this website,
        you agree to these Terms of Use. If you do not agree, please do not use the site.
      </LegalP>

      <LegalH2>1. About the website</LegalH2>
      <LegalP>
        This website provides general information about our firm, services, insights and
        illustrative financial tools. Content is for awareness and business communication. It is
        not a substitute for personalised professional advice.
      </LegalP>

      <LegalH2>2. No automatic client relationship</LegalH2>
      <LegalP>
        Visiting this website, filling a contact form, using a calculator, calling, or messaging
        us does <strong className="text-ink">not</strong> by itself create a Chartered Accountant–
        client relationship. A professional engagement begins only when:
      </LegalP>
      <LegalUl
        items={[
          "Scope of work is discussed and mutually agreed",
          "An engagement confirmation / engagement letter (or equivalent written acceptance) is in place",
          "Required information and documents are provided by you",
        ]}
      />

      <LegalH2>3. Accuracy of information</LegalH2>
      <LegalP>
        We try to keep website content reasonably accurate and updated. However, tax laws, GST
        rules, ROC requirements and compliance due dates change. Always verify current law and
        your specific facts with a qualified professional before acting.
      </LegalP>

      <LegalH2>4. Financial tools and calculators</LegalH2>
      <LegalP>
        GST, tax estimate, profit, EMI, TDS, break-even and similar tools on this site are for{" "}
        <strong className="text-ink">illustrative / educational</strong> use only. Results are
        approximate and may not reflect exemptions, special rates, entity type, regime choice or
        other case-specific factors. Do not rely on calculator output for filing, payment or
        investment decisions without professional review.
      </LegalP>

      <LegalH2>5. User responsibilities</LegalH2>
      <LegalUl
        items={[
          "Provide true and complete information in forms and communications",
          "Do not misuse the website, attempt unauthorised access, or disrupt services",
          "Do not upload unlawful, harmful or infringing content",
          "Keep your own copies of important documents you share with us",
        ]}
      />

      <LegalH2>6. Intellectual property</LegalH2>
      <LegalP>
        Website design, text, graphics, logos and brand elements of {siteConfig.legalName} are
        protected. You may not copy, republish or commercially reuse them without prior written
        permission, except for personal, non-commercial viewing.
      </LegalP>

      <LegalH2>7. Third-party links</LegalH2>
      <LegalP>
        The site may link to third-party websites (for example government portals). We are not
        responsible for their content, policies or availability.
      </LegalP>

      <LegalH2>8. Limitation of liability</LegalH2>
      <LegalP>
        To the fullest extent permitted by law, the Firm is not liable for any loss or damage
        arising from use of, or reliance on, website content, tools, or temporary unavailability
        of the site. Professional liability, if any, for engaged work is governed by the terms
        of that specific engagement and applicable law — not by these website Terms alone.
      </LegalP>

      <LegalH2>9. Governing law</LegalH2>
      <LegalP>
        These Terms are governed by the laws of India. Subject to applicable law, courts at
        Udaipur, Rajasthan shall have jurisdiction over disputes relating to use of this website.
      </LegalP>

      <LegalH2>10. Changes</LegalH2>
      <LegalP>
        We may revise these Terms of Use at any time by updating this page. Continued use of the
        website after changes means you accept the updated Terms.
      </LegalP>
    </LegalDoc>
  );
}
