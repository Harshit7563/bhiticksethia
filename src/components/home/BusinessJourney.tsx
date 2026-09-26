"use client";

import { motion, useReducedMotion } from "framer-motion";
import { journeySteps } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";

export function BusinessJourney() {
  const reduce = useReducedMotion();

  return (
    <Section tone="surface" id="journey">
      <div className="container-wide">
        <SectionHeader
          eyebrow="How We Work"
          title="Your Business Journey With Us"
          description="A continuous path from first conversation to organised finance and forward planning."
        />

        <div className="relative">
          <div
            className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-line md:left-1/2 md:-translate-x-px"
            aria-hidden
          />
          <ol className="space-y-6">
            {journeySteps.map((step, index) => {
              const left = index % 2 === 0;
              return (
                <motion.li
                  key={step.step}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  className="relative grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}
                  >
                    <div className="rounded-2xl border border-line bg-paper p-5 md:p-6">
                      <p className="text-xs font-bold tracking-[0.16em] text-accent">
                        STEP {step.step}
                      </p>
                      <h3 className="mt-2 font-display text-xl md:text-2xl">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                  <span
                    className="absolute left-2 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-surface md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
