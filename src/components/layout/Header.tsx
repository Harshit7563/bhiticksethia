"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "nav-blur border-b border-line/60" : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-[var(--header-h)] items-center justify-between gap-4">
        <BrandLogo priority />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-paper-deep hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-sm font-medium text-muted transition hover:text-ink"
          >
            {siteConfig.phone}
          </a>
          <Button href="/book-consultation" size="sm">
            Schedule Call
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-paper lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="container-wide flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-base font-medium hover:bg-paper-deep"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="space-y-2 px-4 pt-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="block rounded-xl px-4 py-2 text-sm font-medium text-muted"
              onClick={() => setOpen(false)}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/book-consultation"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-white shadow-[0_12px_30px_var(--accent-glow)]"
              onClick={() => setOpen(false)}
            >
              Schedule Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
