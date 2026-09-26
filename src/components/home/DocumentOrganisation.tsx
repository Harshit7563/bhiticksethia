"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

const docs = [
  { label: "GST Return", rotate: -8, x: -18, y: 10 },
  { label: "Tax Return", rotate: 6, x: 8, y: -6 },
  { label: "Audit Report", rotate: -3, x: 22, y: 14 },
  { label: "Balance Sheet", rotate: 10, x: -8, y: 22 },
  { label: "Profit & Loss", rotate: -12, x: 16, y: -18 },
  { label: "Bank Reco", rotate: 4, x: -24, y: -10 },
  { label: "ROC Filing", rotate: 8, x: 4, y: 26 },
  { label: "Payroll", rotate: -5, x: 28, y: 4 },
];

export function DocumentOrganisation() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center 0.4"],
  });

  return (
    <Section id="documents">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          eyebrow="Document Visualisation"
          title="From financial chaos to complete clarity."
          description="Messy documents organise themselves as you scroll — the same transformation we create in your books and folders."
          align="center"
        />

        <div className="relative mx-auto h-[28rem] max-w-3xl md:h-[32rem]">
          {docs.map((doc, index) => (
            <DocCard
              key={doc.label}
              doc={doc}
              index={index}
              progress={scrollYProgress}
              reduce={!!reduce}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function DocCard({
  doc,
  index,
  progress,
  reduce,
}: {
  doc: (typeof docs)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const cols = 4;
  const row = Math.floor(index / cols);
  const col = index % cols;
  const neatX = (col - 1.5) * 22;
  const neatY = (row - 0.5) * 28;

  const x = useTransform(progress, [0, 1], [doc.x, neatX]);
  const y = useTransform(progress, [0, 1], [doc.y, neatY]);
  const rotate = useTransform(progress, [0, 1], [doc.rotate, 0]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[8.5rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-surface p-4 shadow-[var(--shadow)] md:w-40"
      style={reduce ? { x: neatX, y: neatY, rotate: 0 } : { x, y, rotate }}
    >
      <div className="h-2 w-10 rounded-full bg-accent/30" />
      <p className="mt-4 text-sm font-semibold leading-snug">{doc.label}</p>
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 rounded-full bg-line" />
        <div className="h-1.5 w-4/5 rounded-full bg-line" />
        <div className="h-1.5 w-3/5 rounded-full bg-line" />
      </div>
    </motion.div>
  );
}
