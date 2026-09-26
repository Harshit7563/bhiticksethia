"use client";

import { useRef, useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

const beforeItems = [
  "Scattered invoices",
  "Excel sheets everywhere",
  "Unmatched bank entries",
  "Pending GST",
  "Unknown tax liability",
  "Missing reports",
  "Compliance confusion",
];

const afterItems = [
  "Organised accounting",
  "Updated GST",
  "Clear reports",
  "Reconciled banking",
  "Tax planning",
  "Compliance tracking",
  "Business insights",
];

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  };

  return (
    <Section tone="surface" id="before-after">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Before / After"
          title="From financial chaos to complete clarity."
          description="Drag the slider to compare what most businesses start with — and what organised finance looks like."
          align="center"
        />

        <div
          ref={containerRef}
          className="relative mx-auto h-[28rem] max-w-4xl overflow-hidden rounded-[1.75rem] border border-line select-none touch-none"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            updateFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!dragging.current) return;
            updateFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
          role="slider"
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={Math.round(position)}
          aria-label="Before and after comparison"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(8, p - 4));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(92, p + 4));
          }}
        >
          <div className="absolute inset-0 bg-[#f3ece4] p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">
              Before working with us
            </p>
            <ul className="mt-6 space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-dashed border-warning/30 bg-warning-soft/60 px-4 py-3 text-sm font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute inset-0 bg-accent-soft p-6 md:p-10"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
              After working with us
            </p>
            <ul className="mt-6 space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-accent/20 bg-surface px-4 py-3 text-sm font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute inset-y-0 z-10 w-0.5 bg-ink"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface shadow-lg">
              <span className="text-xs font-bold">⟷</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
