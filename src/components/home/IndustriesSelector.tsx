"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { industries } from "@/data/industries";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function IndustriesSelector() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active) ?? industries[0];
  const reduce = useReducedMotion();

  return (
    <Section id="industries">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Who We Help"
          title="Built for Businesses of Every Stage."
          description="Select a category to see the financial work that usually matters most for that business type."
        />

        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => {
            const isActive = industry.slug === active;
            return (
              <button
                key={industry.slug}
                type="button"
                onClick={() => setActive(industry.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-surface text-muted hover:border-ink/30 hover:text-ink",
                )}
              >
                {industry.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-[1.75rem] border border-line bg-surface p-6 md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h3 className="font-display text-3xl">{current.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{current.description}</p>
                <div className="mt-6">
                  <Button href="/industries">Explore Industries</Button>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">
                  Typical focus areas
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {current.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
