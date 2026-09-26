"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { sampleDashboard } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatINR } from "@/lib/utils";

const storySteps = [
  { key: "revenue", label: "Revenue enters", value: sampleDashboard.revenue },
  { key: "expenses", label: "Expenses deducted", value: sampleDashboard.expenses },
  { key: "gst", label: "GST liability appears", value: sampleDashboard.gstLiability },
  { key: "tax", label: "Tax estimate appears", value: sampleDashboard.taxEstimate },
  { key: "profit", label: "Final profit becomes clear", value: sampleDashboard.netProfit },
];

export function FinancialHealth() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const step = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 1, 2, 3, 4, 4]);

  return (
    <Section tone="surface" id="financial-health">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          eyebrow="Business Financial Health"
          title="Know What’s Really Happening Inside Your Business."
          description="Organised accounting turns scattered activity into a readable dashboard — sample numbers shown for illustration."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-line bg-paper p-5 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">
                  Sample business view
                </p>
                <h3 className="mt-1 font-display text-2xl">Health Dashboard</h3>
              </div>
              <span className="rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                {sampleDashboard.complianceStatus}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                ["Revenue", sampleDashboard.revenue],
                ["Expenses", sampleDashboard.expenses],
                ["Gross Profit", sampleDashboard.grossProfit],
                ["Net Profit", sampleDashboard.netProfit],
                ["GST Liability", sampleDashboard.gstLiability],
                ["Receivables", sampleDashboard.receivables],
                ["Payables", sampleDashboard.payables],
                ["Cash Balance", sampleDashboard.cashBalance],
                ["Tax Estimate", sampleDashboard.taxEstimate],
              ].map(([label, value]) => (
                <div key={String(label)} className="rounded-2xl border border-line bg-surface p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.1em] text-muted-soft">
                    {label}
                  </p>
                  <p className="mt-2 font-display text-xl tabular-nums">
                    {formatINR(Number(value), true)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4">Financial Storytelling</p>
            <ol className="space-y-4">
              {storySteps.map((item, index) => (
                <StoryStep
                  key={item.key}
                  index={index}
                  label={item.label}
                  value={item.value}
                  progress={step}
                  reduce={!!reduce}
                />
              ))}
            </ol>
            <p className="mt-8 text-lg leading-relaxed text-ink">
              Good accounting doesn’t just record your business. It helps you understand it.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function StoryStep({
  index,
  label,
  value,
  progress,
  reduce,
}: {
  index: number;
  label: string;
  value: number;
  progress: ReturnType<typeof useTransform<number, number>>;
  reduce: boolean;
}) {
  const opacity = useTransform(progress, (v) => (reduce || v >= index ? 1 : 0.35));
  const scale = useTransform(progress, (v) => (reduce || v >= index ? 1 : 0.98));

  return (
    <motion.li
      style={{ opacity, scale }}
      className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-4 py-3"
    >
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent-deep">
        {index + 1}
      </span>
      <div>
        <p className="font-medium">{label}</p>
        <p className="mt-1 text-sm tabular-nums text-muted">{formatINR(value, true)}</p>
      </div>
    </motion.li>
  );
}
