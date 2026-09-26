"use client";

import { useState } from "react";
import { terminology } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function SpeakBusiness() {
  const [active, setActive] = useState(0);
  const current = terminology[active];

  return (
    <Section tone="accent-soft" id="speak-business">
      <div className="container-wide">
        <SectionHeader
          eyebrow="We Speak Business"
          title="We Speak Business. Not Just Accounting."
          description="Tap a term on the left. See the plain-language meaning on the right — the same way we explain your numbers in meetings."
        />

        <div className="grid overflow-hidden rounded-[1.75rem] border border-line bg-surface lg:grid-cols-2">
          <div className="border-b border-line p-4 md:p-6 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">
              Traditional terminology
            </p>
            <ul className="space-y-2">
              {terminology.map((item, index) => (
                <li key={item.term}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left font-medium transition",
                      index === active
                        ? "bg-ink text-paper"
                        : "bg-paper text-ink hover:bg-paper-deep",
                    )}
                  >
                    {item.term}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Simple explanation
            </p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">{current.term}</h3>
            <p className="mt-5 text-lg leading-relaxed text-muted">{current.plain}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
