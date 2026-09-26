import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/engagement-policy", label: "Engagement Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-wide section-pad !pb-10 !pt-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.1fr]">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/logo-light.png"
                alt={`${siteConfig.name} — Chartered Accountants`}
                width={1024}
                height={341}
                className="h-12 w-auto max-w-[280px] object-contain md:h-14 md:max-w-[340px]"
              />
            </Link>
            <p className="mt-4 max-w-md text-paper/65 leading-relaxed">
              {siteConfig.tagline} Chartered accountants based in Udaipur —
              clear numbers, calm compliance, practical advice.
            </p>
            <p className="mt-6 text-sm text-paper/45">{siteConfig.trustLine}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/75 transition hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/case-studies" className="text-paper/75 transition hover:text-paper">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="text-paper/75 transition hover:text-paper">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-paper/75 text-sm">
              <li className="font-medium text-paper">{siteConfig.partnerName}</li>
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-paper">
                  {siteConfig.phone}
                </a>
                <span className="text-paper/40"> · </span>
                <a href={`tel:${siteConfig.phoneAltRaw}`} className="hover:text-paper">
                  {siteConfig.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-paper break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.emailAlt}`} className="hover:text-paper break-all">
                  {siteConfig.emailAlt}
                </a>
              </li>
              <li className="leading-relaxed">
                <span className="block text-paper/40 text-xs uppercase tracking-wide mb-1">
                  {siteConfig.address.label}
                </span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} - {siteConfig.address.zip} (Raj.)
              </li>
              <li className="leading-relaxed">
                <span className="block text-paper/40 text-xs uppercase tracking-wide mb-1">
                  {siteConfig.addressSecondary.label}
                </span>
                {siteConfig.addressSecondary.street}
                <br />
                {siteConfig.addressSecondary.city} - {siteConfig.addressSecondary.zip} (Raj.)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
