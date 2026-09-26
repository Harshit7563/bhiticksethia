"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

const categories = [
  "GST",
  "Income Tax",
  "Accounting",
  "Audit",
  "Compliance",
  "Advisory",
];

export function HeroScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.55], [0.92, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.95], [0, 1, 1, 0.4]);

  return (
    <Section tone="surface" className="!py-20 overflow-hidden">
      <div ref={ref} className="container-wide">
        <SectionHeader
          eyebrow="One Business. Many Responsibilities."
          title="We manage them together."
          description="As you scroll, the financial ecosystem comes into focus — then separates into the workstreams every growing business must handle."
        />

        <motion.div
          style={reduce ? undefined : { scale, opacity }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="rounded-[2rem] border border-line bg-paper p-6 md:p-10">
            <p className="text-center text-sm font-medium text-muted">
              Your business financial ecosystem
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {categories.map((item, i) => (
                <motion.div
                  key={item}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl border border-line bg-surface px-4 py-6 text-center shadow-sm"
                >
                  <p className="font-display text-xl">{item}</p>
                  <p className="mt-2 text-xs text-muted">Managed with the rest</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
