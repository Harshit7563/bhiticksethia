"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="surface" id="faq">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="FAQs"
            title="Still Dealing With Delayed Books or Unclear Compliance?"
            description="Straight answers before you book a call. Prefer talking it through? Reach us directly."
          />
          <div className="space-y-3 text-sm text-muted">
            <p>
              <a
                className="font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent-deep"
                href={`tel:${siteConfig.phoneRaw}`}
              >
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                className="font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent-deep break-all"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div className="mt-8">
            <Button href="/book-consultation">Book Your Consultation</Button>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-line bg-paper"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-display text-lg leading-snug text-ink">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "mt-1 shrink-0 text-muted transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
