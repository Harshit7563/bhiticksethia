"use client";

import { motion, useReducedMotion } from "framer-motion";
import { complianceItems } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const statusStyles = {
  due: "bg-warning-soft text-warning border-warning/20",
  done: "bg-success-soft text-success border-success/20",
  upcoming: "bg-paper text-muted border-line",
};

export function ComplianceCalendar() {
  const reduce = useReducedMotion();

  return (
    <Section tone="surface" id="compliance-calendar">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Live Compliance Calendar"
          title="Deadlines tracked. Not left to memory."
          description="A visual sample of how we keep GST, TDS, ROC, payroll and tax work visible — so compliance stays proactive."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="rounded-2xl border border-line bg-paper p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl">{item.name}</h3>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide",
                    statusStyles[item.status],
                  )}
                >
                  {item.status === "done" ? "Done" : item.status === "due" ? "Due" : "Soon"}
                </span>
              </div>
              <p className="mt-4 text-sm font-medium text-ink">
                {item.status === "done" ? `${item.detail} ✓` : item.detail}
              </p>
              {item.status === "due" ? (
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="h-full rounded-full bg-warning"
                    initial={reduce ? { width: "70%" } : { width: "0%" }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
