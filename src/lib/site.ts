export const siteConfig = {
  name: "Bhitick Sethia & Associates",
  shortName: "BSA",
  legalName: "Bhitick Sethia & Associates",
  partnerName: "CA Bhitick Sethia",
  designation: "Chartered Accountants",
  tagline: "Complex finance. Made visually simple.",
  description:
    "From GST and taxation to audits, accounting, compliance and financial advisory — we help Indian businesses stay compliant, financially organised and ready to grow. Your outsourced finance partner in Udaipur, working across India.",
  url: "https://bhiticksethia.com",
  email: "ca@bhiticksethia.com",
  emailAlt: "CABhitickSethia@gmail.com",
  phone: "+91 70147 68595",
  phoneAlt: "+91 97998 99338",
  phoneRaw: "7014768595",
  phoneAltRaw: "9799899338",
  whatsapp: "917014768595",
  address: {
    label: "Head Office",
    street: "9 Shrinath Marg, Sethia Bhawan, Near Shrinath Temple",
    city: "Udaipur",
    state: "Rajasthan",
    zip: "313001",
    country: "India",
  },
  addressSecondary: {
    label: "Office",
    street: "121, First Floor, Connaught Place, Shobhagpura, Shobhagpura Circle",
    city: "Udaipur",
    state: "Rajasthan",
    zip: "313001",
    country: "India",
  },
  serviceAreas: ["Udaipur", "Rajasthan", "Across India (remote)"],
  stats: {
    businesses: 500,
    filings: 1000,
    years: 10,
  },
  trustLine: "Confidential • Accurate • Compliant • Business Focused",
  social: {
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
] as const;
