import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { HeroScrollStory } from "@/components/home/HeroScrollStory";
import { Problems } from "@/components/home/Problems";
import { FinancePartner } from "@/components/home/FinancePartner";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AccountingCapabilities } from "@/components/home/AccountingCapabilities";
import { IndustriesSelector } from "@/components/home/IndustriesSelector";
import { SpeakBusiness } from "@/components/home/SpeakBusiness";
import { BusinessJourney } from "@/components/home/BusinessJourney";
import { PositioningMatrix } from "@/components/home/PositioningMatrix";
import { TrustAndWhy } from "@/components/home/TrustAndWhy";
import { ComplianceCalendar } from "@/components/home/ComplianceCalendar";
import { ToolsPreview } from "@/components/home/ToolsPreview";
import { PortalPreview } from "@/components/home/PortalPreview";
import { Testimonials, CaseStudiesPreview, AboutTeaser } from "@/components/home/Stories";
import { Faq } from "@/components/home/Faq";
import { ContactExperience } from "@/components/home/ContactExperience";

const FinancialHealth = dynamic(
  () => import("@/components/home/FinancialHealth").then((m) => m.FinancialHealth),
  { ssr: true },
);
const DocumentOrganisation = dynamic(
  () => import("@/components/home/DocumentOrganisation").then((m) => m.DocumentOrganisation),
  { ssr: true },
);
const BeforeAfter = dynamic(
  () => import("@/components/home/BeforeAfter").then((m) => m.BeforeAfter),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroScrollStory />
      <Problems />
      <FinancePartner />
      <ServicesPreview />
      <AccountingCapabilities />
      <FinancialHealth />
      <IndustriesSelector />
      <SpeakBusiness />
      <BusinessJourney />
      <DocumentOrganisation />
      <BeforeAfter />
      <PositioningMatrix />
      <TrustAndWhy />
      <ComplianceCalendar />
      <ToolsPreview />
      <PortalPreview />
      <Testimonials />
      <CaseStudiesPreview />
      <AboutTeaser />
      <Faq />
      <ContactExperience />
    </>
  );
}
