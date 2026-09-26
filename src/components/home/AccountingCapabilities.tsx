"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { accountingCapabilities, accountingOutcomes } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function AccountingCapabilities() {
  const [active, setActive] = useState<string>(accountingCapabilities[0].id);
  const activeIndex = accountingCapabilities.findIndex((c) => c.id === active);
  const current =
    accountingCapabilities.find((c) => c.id === active) ?? accountingCapabilities[0];
  const reduce = useReducedMotion();

  return (
    <Section tone="ink" id="accounting-depth" className="overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[var(--saffron)]/10 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeader
              light
              eyebrow="Accounting & Bookkeeping Depth"
              title="Improve Cash Flow Visibility With Accurate Books."
              description="We work as an extension of your team — managing accounts, closing books and keeping financial records on track."
            />

            <ul className="mt-2 space-y-1.5" role="tablist" aria-label="Accounting capabilities">
              {accountingCapabilities.map((cap, i) => {
                const isActive = cap.id === active;
                return (
                  <li key={cap.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(cap.id)}
                      onMouseEnter={() => setActive(cap.id)}
                      className={cn(
                        "group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition duration-300",
                        isActive
                          ? "bg-accent text-white"
                          : "text-paper/65 hover:bg-white/5 hover:text-paper",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[0.7rem] tabular-nums",
                          isActive ? "text-white/70" : "text-paper/35",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-medium">{cap.title}</span>
                      <ArrowUpRight
                        size={15}
                        className={cn(
                          "shrink-0 transition",
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                        )}
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative min-h-[22rem]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="pt-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(accountingCapabilities.length).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="mt-5 font-display text-4xl text-paper md:text-5xl">
                  {current.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/65 md:text-lg">
                  {current.summary}
                </p>

                <ul className="mt-8 grid gap-0 sm:grid-cols-2">
                  {current.bullets.map((bullet, i) => (
                    <motion.li
                      key={bullet}
                      initial={reduce ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                      className="flex items-start gap-3 border-t border-white/10 py-4"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-sm font-medium text-paper/85">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/services/accounting-bookkeeping" variant="secondary" size="lg">
                    Get Accounting Back on Track
                  </Button>
                  <p className="text-sm text-paper/45">
                    Accounting · GST · Tax · MIS
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 md:mt-20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow !text-[#7dceb8]">What Accurate Books Unlock</p>
              <h3 className="mt-3 max-w-xl font-display text-2xl text-paper md:text-3xl">
                Clarity that compounds as your business grows.
              </h3>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {accountingOutcomes.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="group relative border-t border-white/15 pt-5">
                  <span className="font-mono text-[0.7rem] text-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 font-display text-xl text-paper transition group-hover:text-accent">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
