export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  what: string;
  why: string;
  problem: string;
  whatWeDo: string;
  includes: string[];
  visualFlow: string[];
};

export const services: Service[] = [
  {
    slug: "gst-indirect-tax",
    title: "GST & Indirect Tax",
    shortTitle: "GST",
    summary:
      "We handle GST returns, reconciliation, notices and compliance so your business stays updated and avoids unnecessary penalties.",
    what: "Goods and Services Tax filing, reconciliation and notice handling for your business.",
    why: "Missed or incorrect GST filings lead to interest, penalties and notices from the department.",
    problem: "GST return kab file karna hai? Reconcile kaise karein?",
    whatWeDo:
      "We prepare and file your returns, match invoices with GSTR-2A/2B, handle notices and keep your GST books clean.",
    includes: [
      "Monthly / Quarterly filing",
      "GSTR-1",
      "GSTR-3B",
      "Reconciliation",
      "GST Notices",
      "Annual Return",
    ],
    visualFlow: ["Invoice", "GST Calculation", "Return", "Filed Successfully"],
  },
  {
    slug: "income-tax",
    title: "Income Tax",
    shortTitle: "Income Tax",
    summary:
      "We estimate tax early, file returns correctly and help you plan so tax season does not surprise your cash flow.",
    what: "Income tax computation, return filing and planning for businesses and founders.",
    why: "Without planning, tax outflow can disrupt cash and create last-minute stress.",
    problem: "Tax kitna pay karna padega?",
    whatWeDo:
      "We review your books, compute liability, file returns, respond to notices and suggest lawful planning options.",
    includes: [
      "Advance tax planning",
      "ITR filing",
      "Tax computation",
      "Notice response",
      "TDS coordination",
      "Assessment support",
    ],
    visualFlow: ["Income", "Deductions", "Tax Estimate", "Return Filed"],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    shortTitle: "Accounting",
    summary:
      "We maintain clean books so you always know revenue, expenses, profit and cash — not just sales.",
    what: "Day-to-day recording of sales, purchases, expenses and bank entries.",
    why: "Messy books hide losses, delay GST/tax filings and block funding or loans.",
    problem: "Accounts properly maintained hain?",
    whatWeDo:
      "We organise invoices, post entries, reconcile banks and give you monthly financial clarity.",
    includes: [
      "Sales & purchase books",
      "Expense tracking",
      "Bank entries",
      "Ledger maintenance",
      "Monthly closes",
      "Financial reports",
    ],
    visualFlow: ["Sales + Purchases + Expenses", "Books", "Financial Reports"],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortTitle: "Audit",
    summary:
      "We verify your numbers independently so banks, investors and regulators can trust your financials.",
    what: "Independent review of transactions, controls and financial statements.",
    why: "Many businesses need statutory or tax audits; others want assurance before funding or sale.",
    problem: "Books aur bank statement match ho rahe hain?",
    whatWeDo:
      "We examine records, test transactions, raise observations and deliver a clear audit report.",
    includes: [
      "Statutory audit",
      "Tax audit",
      "Internal review",
      "Bank confirmations",
      "Observation reports",
      "Final attestation",
    ],
    visualFlow: ["Transactions", "Verification", "Audit", "Final Report"],
  },
  {
    slug: "company-roc-compliance",
    title: "Company & ROC Compliance",
    shortTitle: "ROC",
    summary:
      "We keep your company filings on track — AGM, AOC-4, MGT-7 and director KYC — without last-minute panic.",
    what: "Mandatory filings and secretarial compliance for private limited and LLP entities.",
    why: "ROC delays invite penalties and can block banking, fundraising or company changes.",
    problem: "Company compliance pending toh nahi?",
    whatWeDo:
      "We track due dates, prepare forms, coordinate with directors and file with MCA on time.",
    includes: [
      "AOC-4 / MGT-7",
      "DIR-3 KYC",
      "Board resolutions",
      "AGM support",
      "DIN / DSC help",
      "Event-based filings",
    ],
    visualFlow: ["Due Dates", "Documents", "MCA Filing", "Compliant"],
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    shortTitle: "Payroll",
    summary:
      "We run payroll accurately with TDS, PF and compliance so salary day stays smooth for your team.",
    what: "Salary processing, statutory deductions and payroll reporting.",
    why: "Payroll mistakes hurt employee trust and create TDS/PF compliance issues.",
    problem: "Salary, TDS aur PF sahi calculate ho rahe hain?",
    whatWeDo:
      "We process monthly payroll, compute deductions, generate payslips and file related returns.",
    includes: [
      "Salary processing",
      "Payslips",
      "TDS on salary",
      "PF / ESI coordination",
      "Form 16 support",
      "Payroll MIS",
    ],
    visualFlow: ["Attendance", "Salary Calc", "Deductions", "Payslips"],
  },
  {
    slug: "business-registration",
    title: "Business Registration",
    shortTitle: "Registration",
    summary:
      "We help you set up the right structure — private limited, LLP, GST or sole prop — with clean documentation.",
    what: "Company, LLP, GST and related registrations for new and expanding businesses.",
    why: "Wrong structure or incomplete paperwork slows banking, contracts and growth.",
    problem: "Kaunsa structure sahi hai business ke liye?",
    whatWeDo:
      "We advise on structure, prepare documents, file registrations and hand over a ready-to-operate setup.",
    includes: [
      "Private Limited / LLP",
      "GST registration",
      "PAN / TAN",
      "Shop & establishment",
      "MSME registration",
      "Bank account support docs",
    ],
    visualFlow: ["Structure Choice", "Documents", "Filing", "Ready to Operate"],
  },
  {
    slug: "financial-advisory",
    title: "Financial Advisory",
    shortTitle: "Advisory",
    summary:
      "We translate your numbers into decisions — pricing, cash flow, expansion and funding readiness.",
    what: "Business-focused advice based on your actual financial position.",
    why: "Revenue alone does not mean profit. Decisions need clear numbers.",
    problem: "Business profitable hai ya sirf revenue aa raha hai?",
    whatWeDo:
      "We analyse margins, cash, tax and growth options, then explain recommendations in plain language.",
    includes: [
      "Margin analysis",
      "Cash-flow planning",
      "Expansion modelling",
      "Funding readiness",
      "Cost structure review",
      "Owner draws planning",
    ],
    visualFlow: ["Numbers", "Insights", "Options", "Decision"],
  },
  {
    slug: "mis-reporting",
    title: "MIS & Reporting",
    shortTitle: "MIS",
    summary:
      "Monthly dashboards that show what is working, what is leaking and where cash is stuck.",
    what: "Regular management reports tailored to how you run the business.",
    why: "Without MIS, you react late — after cash is already tight.",
    problem: "Cash flow kahan ja raha hai?",
    whatWeDo:
      "We build simple monthly packs covering P&L, cash, receivables, payables and GST.",
    includes: [
      "Monthly P&L",
      "Cash position",
      "Receivables ageing",
      "Payables summary",
      "GST liability view",
      "KPI dashboards",
    ],
    visualFlow: ["Data", "Dashboard", "Insights", "Action"],
  },
  {
    slug: "bank-reconciliation",
    title: "Bank Reconciliation",
    shortTitle: "Bank Reco",
    summary:
      "We match every bank line so your books reflect real money — not just recorded invoices.",
    what: "Matching bank statements with your accounting books.",
    why: "Unmatched entries hide missing payments, duplicate expenses and cash leaks.",
    problem: "Books aur bank statement match ho rahe hain?",
    whatWeDo:
      "We reconcile accounts, clear pending items and flag unusual transactions early.",
    includes: [
      "Monthly reconciliation",
      "Uncleared cheques",
      "Gateway settlements",
      "Fee matching",
      "Suspense clearance",
      "Exception reports",
    ],
    visualFlow: ["Bank Statement", "Books", "Match", "Clean Balance"],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    shortTitle: "Tax Planning",
    summary:
      "Lawful planning through the year so tax is expected, not a year-end shock.",
    what: "Forward-looking review of deductions, structure and timing.",
    why: "Reactive tax work costs more cash and creates avoidable stress.",
    problem: "Tax liability pehle se pata ho sakti hai?",
    whatWeDo:
      "We estimate liability quarterly, review eligible claims and align filings with cash flow.",
    includes: [
      "Quarterly estimates",
      "Deduction review",
      "Structure checks",
      "Advance tax calendar",
      "Capex timing",
      "Owner compensation planning",
    ],
    visualFlow: ["Projection", "Options", "Plan", "Lower Surprise"],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    shortTitle: "Startups",
    summary:
      "Registration to MIS to funding docs — financial foundations built for early-stage teams.",
    what: "End-to-end finance setup for startups and growing companies.",
    why: "Founders lose time and credibility when books and compliance lag growth.",
    problem: "Funding ke pehle books ready hain?",
    whatWeDo:
      "We set up accounting, GST, payroll, MIS and documentation investors expect to see.",
    includes: [
      "Company setup",
      "Accounting system",
      "GST & tax",
      "Cap table support docs",
      "Investor MIS",
      "Due diligence prep",
    ],
    visualFlow: ["Setup", "Books", "MIS", "Investor Ready"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
