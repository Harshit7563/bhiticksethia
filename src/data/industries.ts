export type Industry = {
  slug: string;
  title: string;
  description: string;
  focus: string[];
};

export const industries: Industry[] = [
  {
    slug: "startups",
    title: "Startups",
    description: "From company registration to funding-ready MIS — finance that keeps pace with growth.",
    focus: [
      "Company registration",
      "Accounting setup",
      "GST",
      "Funding documentation",
      "MIS",
      "Tax planning",
      "Compliance",
    ],
  },
  {
    slug: "small-businesses",
    title: "Small Businesses",
    description: "Practical books, GST and tax support without enterprise complexity.",
    focus: ["Bookkeeping", "GST returns", "Income tax", "Bank reconciliation", "Basic MIS"],
  },
  {
    slug: "smes",
    title: "SMEs",
    description: "Structured accounting, audits and compliance for growing mid-sized companies.",
    focus: ["Monthly closes", "Audit readiness", "ROC", "Payroll", "Tax planning", "Cash-flow reporting"],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    description: "Marketplace and payment-gateway chaos, organised into clear books.",
    focus: [
      "Marketplace reconciliation",
      "Payment gateway settlement",
      "GST",
      "Refunds",
      "Inventory accounting",
      "TDS",
      "Cash flow",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    description: "Store sales, inventory and GST brought into one reliable view.",
    focus: ["POS sales", "Inventory", "GST", "Vendor payments", "Margin tracking"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Costing, stock, GST and working capital for production businesses.",
    focus: ["Job costing", "Stock valuation", "GST", "Vendor TDS", "Working capital"],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    description: "Daily sales, POS, vendors and payroll — reconciled and understandable.",
    focus: [
      "POS accounting",
      "Daily sales reconciliation",
      "GST",
      "Vendor payments",
      "Payroll",
      "Profit analysis",
    ],
  },
  {
    slug: "fintech",
    title: "Fintech",
    description: "Compliance-heavy operations with reporting investors and regulators expect.",
    focus: ["Revenue recognition", "GST", "Audit", "Regulatory reporting", "MIS"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Project accounting, TDS and compliance for developers and brokers.",
    focus: ["Project books", "TDS", "GST", "RERA-related docs", "Cash tracking"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Clinic and hospital finances with clear billing, payroll and tax.",
    focus: ["Billing reconciliation", "GST where applicable", "Payroll", "Expense control"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description: "Firms, agencies and consultants with project-wise profit clarity.",
    focus: ["Project P&L", "GST", "TDS", "Retainers", "Partner drawings"],
  },
  {
    slug: "growing-companies",
    title: "Growing Companies",
    description: "Systems that scale — from founder-led books to professional finance ops.",
    focus: ["Process setup", "Multi-entity", "Audit", "Advisory", "Board MIS"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
