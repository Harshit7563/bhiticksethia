"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ServicesPreview() {
  const [active, setActive] = useState(services[0].slug);
  const current = services.find((s) => s.slug === active) ?? services[0];
  const reduce = useReducedMotion();

  return (
    <Section tone="ink" id="services">
      <div className="container-wide">
        <SectionHeader
          light
          eyebrow="What We Can Help You With"
          title="Everything Your Business Needs Financially."
          description="Hover a service to see how the work actually flows — from documents to filed compliance and clear reports."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service) => {
              const isActive = service.slug === active;
              return (
                <li key={service.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(service.slug)}
                    onFocus={() => setActive(service.slug)}
                    onClick={() => setActive(service.slug)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition duration-300",
                      isActive
                        ? "border-accent bg-accent text-white"
                        : "border-white/10 bg-white/5 text-paper/80 hover:border-white/25 hover:bg-white/10",
                    )}
                  >
                    <span className="font-medium">{service.title}</span>
                    <ArrowUpRight size={16} className={isActive ? "opacity-100" : "opacity-40"} />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="rounded-[1.75rem] border border-white/10 bg-ink-soft p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="eyebrow !text-[#7dceb8]">{current.shortTitle}</p>
                <h3 className="mt-3 font-display text-3xl text-paper">{current.title}</h3>
                <p className="mt-4 text-paper/70 leading-relaxed">{current.summary}</p>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
                    How it works visually
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {current.visualFlow.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-paper">
                          {step}
                        </span>
                        {i < current.visualFlow.length - 1 ? (
                          <span className="text-paper/30">→</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {current.includes.slice(0, 6).map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 px-3 py-2.5 text-sm text-paper/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button href={`/services/${current.slug}`} variant="secondary">
                    See How We Can Help
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="text-sm font-semibold text-[#7dceb8] hover:underline">
            View all services →
          </Link>
        </div>
      </div>
    </Section>
  );
}
