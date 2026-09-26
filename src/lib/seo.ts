import type { Metadata } from "next";
import { siteConfig } from "./site";

const baseUrl = siteConfig.url;

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Chartered Accountants | Udaipur`;
  const desc = description ?? siteConfig.description;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "Chartered Accountant",
      "CA Firm",
      "GST Consultant",
      "Income Tax Consultant",
      "Accounting Services",
      "Audit Services",
      "Tax Consultant",
      "Business Advisory",
      "Company Registration",
      "Bookkeeping",
      "Financial Advisory",
      "Udaipur CA",
      "Chartered Accountant Udaipur",
      "Bhitick Sethia",
      "Bhitick Sethia & Associates",
      ...keywords,
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.legalName,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService", "LocalBusiness", "Organization"],
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    email: [siteConfig.email, siteConfig.emailAlt],
    telephone: [siteConfig.phone, siteConfig.phoneAlt],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "IN",
    },
    location: [
      {
        "@type": "Place",
        name: siteConfig.address.label,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: "IN",
        },
      },
      {
        "@type": "Place",
        name: siteConfig.addressSecondary.label,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.addressSecondary.street,
          addressLocality: siteConfig.addressSecondary.city,
          addressRegion: siteConfig.addressSecondary.state,
          postalCode: siteConfig.addressSecondary.zip,
          addressCountry: "IN",
        },
      },
    ],
    areaServed: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    founder: {
      "@type": "Person",
      name: siteConfig.partnerName,
      jobTitle: "Chartered Accountant",
    },
    sameAs: [siteConfig.social.linkedin],
    priceRange: "$$",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${baseUrl}${article.path}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };
}
