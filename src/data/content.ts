export const problems = [
  {
    id: "gst",
    question: "GST return kab file karna hai?",
    pendingLabel: "GST Return Pending",
    solvedLabel: "GST Filing Completed",
    solution: "We manage your GST filing, reconciliation and compliance.",
    service: "GST",
  },
  {
    id: "tax",
    question: "Tax kitna pay karna padega?",
    pendingLabel: "Tax Liability Unknown",
    solvedLabel: "Tax Estimate Ready",
    solution: "We compute liability early and help you plan cash for advance tax.",
    service: "Income Tax",
  },
  {
    id: "accounts",
    question: "Accounts properly maintained hain?",
    pendingLabel: "Books Incomplete",
    solvedLabel: "Books Organised",
    solution: "We maintain clean books so reports and filings stay reliable.",
    service: "Accounting",
  },
  {
    id: "notice",
    question: "Notice aa gaya — ab kya karein?",
    pendingLabel: "Notice Unanswered",
    solvedLabel: "Response Prepared",
    solution: "We review the notice, gather records and help you respond correctly.",
    service: "Compliance",
  },
  {
    id: "roc",
    question: "Company compliance pending toh nahi?",
    pendingLabel: "ROC Filing Due",
    solvedLabel: "ROC Up to Date",
    solution: "We track MCA due dates and file company forms on time.",
    service: "ROC",
  },
  {
    id: "cash",
    question: "Cash flow kahan ja raha hai?",
    pendingLabel: "Cash Unclear",
    solvedLabel: "Cash Visibility",
    solution: "We map inflows, outflows and stuck receivables into a clear view.",
    service: "MIS",
  },
  {
    id: "bank",
    question: "Books aur bank statement match ho rahe hain?",
    pendingLabel: "Bank Unmatched",
    solvedLabel: "Bank Reconciled",
    solution: "We reconcile every account so books reflect real money.",
    service: "Bank Reco",
  },
  {
    id: "profit",
    question: "Business profitable hai ya sirf revenue aa raha hai?",
    pendingLabel: "Profit Unknown",
    solvedLabel: "True Profit Visible",
    solution: "We separate revenue from profit so decisions are based on reality.",
    service: "Advisory",
  },
] as const;

export const journeySteps = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    description: "Share how you operate, your current setup and what is worrying you financially.",
  },
  {
    step: "02",
    title: "We Review Your Financial Position",
    description: "We look at books, filings, banks and documents to understand where you stand.",
  },
  {
    step: "03",
    title: "We Identify Pending Compliance & Risks",
    description: "Missed returns, mismatches and gaps are listed clearly — with priority.",
  },
  {
    step: "04",
    title: "We Organise Accounts & Documentation",
    description: "Invoices, ledgers and folders get structured so work becomes repeatable.",
  },
  {
    step: "05",
    title: "We Handle Tax & Compliance",
    description: "GST, income tax, ROC and related filings are managed on calendar.",
  },
  {
    step: "06",
    title: "We Give You Clear Financial Reports",
    description: "Simple MIS that shows profit, cash, GST and what needs attention.",
  },
  {
    step: "07",
    title: "We Help You Plan Ahead",
    description: "Tax estimates, cash planning and growth decisions — explained in business language.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Clear Communication",
    description: "No complicated accounting language without explanation.",
  },
  {
    title: "Proactive Compliance",
    description: "We track important filing and compliance timelines.",
  },
  {
    title: "Business Understanding",
    description: "We understand transactions before looking at numbers.",
  },
  {
    title: "Financial Visibility",
    description: "You always know where your business stands.",
  },
  {
    title: "Single Financial Partner",
    description: "Accounting, taxation, audit and compliance in one place.",
  },
] as const;

export const trustPoints = [
  {
    title: "Secure Document Handling",
    description: "Client files are organised with restricted internal access.",
  },
  {
    title: "Role-Based Access",
    description: "Team members see only what they need for their work.",
  },
  {
    title: "Data Confidentiality",
    description: "Your financial information is treated as confidential professional material.",
  },
  {
    title: "Professional Standards",
    description: "Work follows CA professional ethics and documentation discipline.",
  },
  {
    title: "Structured Internal Processes",
    description: "Checklists and reviews reduce errors before filings go out.",
  },
  {
    title: "Regular Backups",
    description: "Working files are backed up as part of our operating routine.",
  },
  {
    title: "Compliance Focus",
    description: "Deadlines and acknowledgements are tracked, not left to memory.",
  },
] as const;

export const terminology = [
  {
    term: "EBITDA",
    plain: "How profitable your core business actually is — before interest, tax, depreciation and amortisation.",
  },
  {
    term: "Working Capital",
    plain: "Money available to run your daily business after paying near-term dues.",
  },
  {
    term: "Input Tax Credit",
    plain: "GST already paid on purchases that can reduce the GST you owe on sales.",
  },
  {
    term: "Depreciation",
    plain: "Spreading the cost of a long-term asset across the years you use it.",
  },
  {
    term: "TDS",
    plain: "Tax deducted at source — amount withheld while making certain payments, later deposited with the government.",
  },
  {
    term: "Receivables",
    plain: "Money customers still owe you for sales already made.",
  },
  {
    term: "Payables",
    plain: "Money you still owe suppliers and vendors.",
  },
  {
    term: "Cash Flow",
    plain: "Actual money moving in and out of your bank — not just billed sales.",
  },
] as const;

export const team = [
  {
    name: "CA Bhitick Sethia",
    role: "Proprietor / Partner",
    qualification: "Chartered Accountant",
    expertise: "Taxation, GST & Advisory",
    years: 10,
    specialization: "Business taxation, compliance and financial advisory",
    linkedin: "https://www.linkedin.com/",
  },
] as const;

export const caseStudies = [
  {
    slug: "ecommerce-reconciliation",
    industry: "E-commerce",
    title: "Marketplace Sales, Finally Matching the Books",
    problem: "Large sales volume but reconciliation issues across marketplaces and payment gateways.",
    work: [
      "Marketplace reconciliation",
      "Payment gateway reconciliation",
      "GST review",
      "Accounting cleanup",
    ],
    result: "Clear books and improved financial visibility for monthly decision-making.",
  },
  {
    slug: "restaurant-daily-clarity",
    industry: "Restaurants",
    title: "From Daily POS Chaos to Weekly Profit Clarity",
    problem: "Multiple outlets, daily cash/UPI mix, and no reliable view of true food cost or profit.",
    work: [
      "POS sales reconciliation",
      "Vendor bill organisation",
      "GST filing rhythm",
      "Weekly margin MIS",
    ],
    result: "Owners could see which outlet was profitable — and act on it.",
  },
  {
    slug: "startup-funding-ready",
    industry: "Startups",
    title: "Funding Conversations Backed by Clean Numbers",
    problem: "Fast growth, delayed bookkeeping, and incomplete compliance before investor diligence.",
    work: [
      "Accounting catch-up",
      "GST and TDS cleanup",
      "Investor MIS pack",
      "Documentation for diligence",
    ],
    result: "A structured finance folder founders could share with confidence.",
  },
] as const;

export const testimonials = [
  {
    quote: "Earlier we knew our sales. We didn’t know our actual profit.",
    author: "Founder",
    company: "E-commerce Company",
    before: ["Revenue only"],
    after: ["Revenue", "Expenses", "GST", "Net Profit", "Cash Flow"],
  },
  {
    quote: "Notices stopped feeling scary because someone explained them in plain language.",
    author: "Director",
    company: "Manufacturing SME",
    before: ["Pending notices", "Unclear liability"],
    after: ["Response filed", "Clear next steps", "Calendar tracked"],
  },
  {
    quote: "Our CA finally speaks business — margins, cash and decisions — not only sections and forms.",
    author: "Co-founder",
    company: "SaaS Startup",
    before: ["Scattered Excel", "Missed filings"],
    after: ["Monthly MIS", "On-time GST", "Tax estimate"],
  },
] as const;

export const complianceItems = [
  { name: "GST Filing", status: "due" as const, detail: "Due in 5 Days" },
  { name: "TDS Return", status: "done" as const, detail: "Completed" },
  { name: "ROC Filing", status: "upcoming" as const, detail: "Upcoming" },
  { name: "Payroll", status: "due" as const, detail: "Due in 8 Days" },
  { name: "Income Tax", status: "upcoming" as const, detail: "Advance tax window" },
  { name: "Audit Prep", status: "upcoming" as const, detail: "Documents checklist open" },
];

/** Virtual CFO–style positioning: strategic finance partner */
export const financePartnerPoints = [
  {
    title: "Books that stay current",
    description: "Day-to-day entries, bank reco and monthly closes so reports are ready when you need them.",
  },
  {
    title: "Compliance on calendar",
    description: "GST, TDS, income tax and ROC tracked with reminders — not left to memory.",
  },
  {
    title: "Decisions, not jargon",
    description: "MIS in business language: profit, cash, tax estimate and what needs attention.",
  },
  {
    title: "One accountable partner",
    description: "Accounting, tax, audit and advisory under one CA firm — without building a full in-house team.",
  },
] as const;

/** FBSPL-style accounting depth capabilities */
export const accountingCapabilities = [
  {
    id: "payable",
    title: "Accounts Payable",
    summary:
      "Vendor bills organised, GST checked and payments tracked so you never lose control of what you owe.",
    bullets: ["Invoice validation", "GST / TDS checks", "Payment scheduling", "Vendor ledgers"],
  },
  {
    id: "receivable",
    title: "Accounts Receivable",
    summary:
      "Customer invoices, collections and ageing so cash stuck with clients becomes visible and actionable.",
    bullets: ["Sales invoicing support", "Ageing reports", "Collection follow-ups", "Credit notes"],
  },
  {
    id: "payroll",
    title: "Payroll Support",
    summary:
      "Salary processing coordination with PF, ESI and TDS so payroll stays compliant and on time.",
    bullets: ["Salary registers", "Statutory deductions", "Form 16 coordination", "Payroll reports"],
  },
  {
    id: "reporting",
    title: "Financial Reporting",
    summary:
      "Weekly or monthly P&L, balance sheet and cash views that founders and owners can actually use.",
    bullets: ["P&L statements", "Balance sheet", "Cash position", "Custom MIS packs"],
  },
  {
    id: "reconciliation",
    title: "Account Reconciliation",
    summary:
      "Bank, gateway and marketplace reconciliation so books match real money — not estimates.",
    bullets: ["Bank reconciliation", "Payment gateway match", "Marketplace sales", "Intercompany checks"],
  },
  {
    id: "ledger",
    title: "General Ledger",
    summary:
      "Clean ledgers and chart of accounts so every transaction lands in the right place for tax and audit.",
    bullets: ["Chart of accounts", "Journal entries", "Month-end close", "Audit-ready folders"],
  },
] as const;

/** FBSPL-style outcomes from accurate accounting */
export const accountingOutcomes = [
  {
    title: "Cash flow visibility",
    description: "Know what is coming in, going out and stuck in receivables — before it becomes a crisis.",
  },
  {
    title: "Financial accuracy",
    description: "Multi-level checks on ledgers and filings so reports and returns stay reliable.",
  },
  {
    title: "Invoice control",
    description: "Sales and purchase documents organised — fewer duplicates, mismatches and GST gaps.",
  },
  {
    title: "Real-time clarity",
    description: "Periodic P&L and compliance status so decisions are based on current numbers.",
  },
  {
    title: "Scalable support",
    description: "Grow from basic bookkeeping to full advisory without changing your finance partner.",
  },
  {
    title: "Confidential handling",
    description: "Client files treated as professional confidential material with structured access.",
  },
] as const;

/** CommercialIQ-style positioning matrix adapted for CA practice */
export const positioningOptions = [
  {
    id: "diy",
    badge: "Owner-managed",
    title: "DIY / Excel Finance",
    tone: "muted" as const,
    points: [
      "Cheap until something breaks",
      "Filings often last-minute",
      "No independent review",
      "Hard to scale past founder bandwidth",
    ],
  },
  {
    id: "bookkeeper",
    badge: "Part-time help",
    title: "Bookkeeper Only",
    tone: "muted" as const,
    points: [
      "Entries without tax strategy",
      "Limited notice / audit support",
      "Quality depends on one person",
      "Compliance gaps stay invisible",
    ],
  },
  {
    id: "generic",
    badge: "Form-filing CA",
    title: "Compliance-only Firm",
    tone: "muted" as const,
    points: [
      "Returns filed, insight missing",
      "Reactive when notices arrive",
      "Little business language",
      "Books and tax often disconnected",
    ],
  },
  {
    id: "bsa",
    badge: "Best fit ★",
    title: "Bhitick Sethia & Associates",
    tone: "accent" as const,
    points: [
      "Accounting + tax + compliance together",
      "Proactive calendar and MIS",
      "Plain-language business advice",
      "Udaipur-based, India-wide remote",
    ],
  },
] as const;

export const faqs = [
  {
    q: "What do you handle for a typical growing business?",
    a: "Most clients start with accounting, GST and income tax. Many add TDS, ROC, payroll support, MIS and advisory as they grow. We scope what you need — not a one-size package.",
  },
  {
    q: "How quickly can we start working together?",
    a: "After a short discovery call and document checklist, most engagements begin within 5–7 working days. Urgent notice or filing work can be prioritised sooner.",
  },
  {
    q: "Do you work only in Udaipur or across India?",
    a: "We are based in Udaipur, Rajasthan, and work with businesses across India remotely — with structured document sharing and scheduled reviews.",
  },
  {
    q: "Which software and tools do you work with?",
    a: "We work with common Indian stacks — Tally, Busy, Zoho Books, Excel / Google Sheets and government portals (GST, income tax, MCA). We adapt to your current setup rather than forcing a tool change on day one.",
  },
  {
    q: "Will this replace my in-house accountant?",
    a: "Sometimes yes, sometimes we work alongside your team. Many SMEs use us as their outsourced finance function; others keep an internal person for day-to-day and use us for review, tax and filings.",
  },
  {
    q: "How do you keep financial data confidential?",
    a: "Client information is treated as confidential professional material. Access is limited to people working on your file, and documents are organised through structured internal processes.",
  },
] as const;

export const sampleDashboard = {
  revenue: 48_50_000,
  expenses: 31_20_000,
  grossProfit: 17_30_000,
  netProfit: 9_40_000,
  gstLiability: 2_85_000,
  receivables: 12_40_000,
  payables: 7_80_000,
  cashBalance: 18_60_000,
  taxEstimate: 3_10_000,
  complianceStatus: "On Track",
};
