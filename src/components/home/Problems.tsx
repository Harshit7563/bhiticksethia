"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { problems } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function ProblemCard({
  problem,
  index,
}: {
  problem: (typeof problems)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.55, once: false });
  const reduce = useReducedMotion();
  const solved = reduce ? true : inView;

  return (
    <div
      ref={ref}
      className="rounded-[1.5rem] border border-line bg-surface p-5 md:p-6"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <p className="text-sm font-medium text-muted">Situation</p>
      <h3 className="mt-2 font-display text-xl md:text-2xl leading-snug">
        “{problem.question}”
      </h3>

      <div className="mt-5 relative min-h-[4.5rem]">
        <motion.div
          animate={{
            opacity: solved ? 0 : 1,
            y: solved ? -8 : 0,
            scale: solved ? 0.98 : 1,
          }}
          transition={{ duration: 0.45 }}
          className={cn(
            "absolute inset-x-0 rounded-xl border px-4 py-3 text-sm font-semibold",
            "border-danger/20 bg-danger-soft text-danger",
          )}
          aria-hidden={solved}
        >
          {problem.pendingLabel}
        </motion.div>
        <motion.div
          animate={{
            opacity: solved ? 1 : 0,
            y: solved ? 0 : 8,
            scale: solved ? 1 : 0.98,
          }}
          transition={{ duration: 0.45 }}
          className={cn(
            "absolute inset-x-0 rounded-xl border px-4 py-3 text-sm font-semibold",
            "border-success/20 bg-success-soft text-success",
          )}
          aria-hidden={!solved}
        >
          {problem.solvedLabel} ✓
        </motion.div>
      </div>

      <p className="mt-12 text-sm leading-relaxed text-muted md:mt-10">{problem.solution}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        {problem.service}
      </p>
    </div>
  );
}

export function Problems() {
  return (
    <Section id="problems">
      <div className="container-wide">
        <SectionHeader
          eyebrow="We Understand the Real Questions"
          title="Running a Business Is Hard Enough. Finance Shouldn’t Make It Harder."
          description="These are the conversations business owners actually have — late at night, before filings, after notices. We turn each one into a clear next step."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.id} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
