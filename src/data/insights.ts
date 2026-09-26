export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: "what-is-gstr-3b",
    title: "What is GSTR-3B?",
    excerpt: "A simple explanation of the monthly GST summary return most businesses file.",
    category: "GST",
    date: "2026-03-12",
    readTime: "4 min",
    content: [
      "GSTR-3B is a monthly (or quarterly, for some small taxpayers) summary return where you declare outward supplies, input tax credit and pay GST.",
      "Think of it as the short form that settles your GST for the period — sales GST minus eligible credit, then pay the difference.",
      "Filing on time matters. Late filing attracts interest and late fees, and repeated delays can invite notices.",
      "At Bhitick Sethia & Associates, we prepare GSTR-3B from your books, reconcile with invoices and file before due dates so you stay compliant without the month-end scramble.",
    ],
  },
  {
    slug: "understand-profit-and-loss",
    title: "How to Understand Your Profit & Loss Statement",
    excerpt: "Revenue is not profit. Here is how to read a P&L like a business owner.",
    category: "Business Finance",
    date: "2026-02-28",
    readTime: "5 min",
    content: [
      "A Profit & Loss statement shows income and expenses over a period — usually a month or year.",
      "Start at the top: revenue (what customers paid or were billed). Then subtract cost of sales to get gross profit.",
      "Next come operating expenses — rent, salaries, marketing, software. What remains is operating profit before tax and interest.",
      "If you only track sales, you can grow revenue and still lose money. A clean P&L tells you whether the business is actually profitable.",
    ],
  },
  {
    slug: "revenue-vs-profit",
    title: "Difference Between Revenue and Profit",
    excerpt: "Why a busy business can still be short of cash — and what to watch.",
    category: "Business Finance",
    date: "2026-02-10",
    readTime: "3 min",
    content: [
      "Revenue is money earned from sales. Profit is what remains after costs and expenses.",
      "You can have high revenue and low (or negative) profit if costs, discounts, returns or overheads eat the margin.",
      "Cash is different again — customers may pay later, while you pay suppliers and GST now.",
      "Good accounting separates these clearly so you do not confuse being busy with being healthy.",
    ],
  },
  {
    slug: "when-business-needs-audit",
    title: "When Does a Business Need an Audit?",
    excerpt: "Statutory, tax and voluntary audits — explained without legal jargon.",
    category: "Audit",
    date: "2026-01-22",
    readTime: "5 min",
    content: [
      "Some businesses must get audited under company law or tax law based on turnover, capital or other conditions.",
      "Even when not mandatory, banks, investors and buyers often ask for audited financials.",
      "An audit is not only a formality — it checks whether books reflect reality and highlights control gaps.",
      "If you are unsure whether an audit applies to you, we review your situation and explain the requirement in plain language.",
    ],
  },
  {
    slug: "documents-businesses-should-maintain",
    title: "What Documents Should Businesses Maintain?",
    excerpt: "A practical checklist for invoices, banks, GST and company records.",
    category: "Compliance",
    date: "2026-01-08",
    readTime: "6 min",
    content: [
      "Keep sales invoices, purchase bills, expense proofs and bank statements organised by month.",
      "For GST: maintain outward and inward invoices, e-way bills where applicable, and reconciliation workings.",
      "For companies: keep incorporation docs, board minutes, share registers and ROC acknowledgements.",
      "Digital folders with clear naming beat scattered WhatsApp forwards. We help clients set a simple document system they can actually follow.",
    ],
  },
  {
    slug: "startup-accounting-basics",
    title: "Accounting Basics Every Startup Founder Should Know",
    excerpt: "Books, GST, runway and MIS — the minimum finance stack before you scale.",
    category: "Startup",
    date: "2025-12-18",
    readTime: "5 min",
    content: [
      "Open dedicated business banking. Mix personal and business cash and you lose clarity fast.",
      "Record every sale and expense monthly — even if volume is small. Catch-up accounting before funding is painful.",
      "Register for GST when required, and file on time. Investors notice compliance hygiene.",
      "Ask for a simple monthly MIS: cash, burn, runway, revenue and major expenses. That is enough to steer early decisions.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export const insightCategories = [
  "GST",
  "Income Tax",
  "Business Finance",
  "Compliance",
  "Startup",
  "Accounting",
  "Audit",
  "Company Law",
] as const;
