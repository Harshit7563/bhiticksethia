"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { formatINR } from "@/lib/utils";
import { sampleDashboard } from "@/data/content";

/** Orbit outside the dashboard card so metrics stay readable */
const satellites = [
  { label: "Invoice", x: -52, y: -46, delay: 0.1 },
  { label: "GST Filing", x: 52, y: -44, delay: 0.15 },
  { label: "Income Tax", x: 56, y: 2, delay: 0.2 },
  { label: "Bank Reco", x: 48, y: 46, delay: 0.25 },
  { label: "Audit", x: -48, y: 46, delay: 0.3 },
  { label: "Compliance", x: -56, y: 2, delay: 0.18 },
  { label: "P&L", x: -20, y: -54, delay: 0.22 },
  { label: "Cash Flow", x: 18, y: 54, delay: 0.28 },
];

const stats = [
  { label: "Businesses Assisted", value: `${siteConfig.stats.businesses}+` },
  { label: "Compliance Filings", value: `${siteConfig.stats.filings}+` },
  { label: "Years Experience", value: `${siteConfig.stats.years}+` },
  { label: "Secure & Confidential", value: "Yes" },
];

const metrics = [
  { label: "Revenue", value: formatINR(sampleDashboard.revenue, true) },
  { label: "Expenses", value: formatINR(sampleDashboard.expenses, true) },
  { label: "GST", value: formatINR(sampleDashboard.gstLiability, true) },
  { label: "Tax Liability", value: formatINR(sampleDashboard.taxEstimate, true) },
  { label: "Cash Flow", value: formatINR(sampleDashboard.cashBalance, true) },
  { label: "Net Profit", value: formatINR(sampleDashboard.netProfit, true) },
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const layer1x = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const layer1y = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const layer3x = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const layer3y = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const layer4x = useTransform(sx, [-0.5, 0.5], [-28, 28]);
  const layer4y = useTransform(sy, [-0.5, 0.5], [-18, 18]);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-paper pt-[calc(var(--header-h)+1rem)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 grid-atmosphere"
        style={reduce ? undefined : { x: layer1x, y: layer1y }}
        aria-hidden
      />
      <div className="noise-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-[var(--saffron)]/10 blur-3xl"
        aria-hidden
      />

      <div className="container-wide relative grid items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24 lg:pt-6">
        <div className="relative z-20 max-w-xl">
          <p className="eyebrow mb-5">Chartered Accountants for Modern Businesses</p>
          <h1 className="font-display text-[2.35rem] leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
            Your Business. Your Numbers. Completely Under Control.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Improve cash flow visibility with accurate accounting, GST, tax and compliance —
            delivered like an extension of your team, so you can focus on growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-consultation" size="lg">
              Schedule a Call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Services
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-soft">{siteConfig.trustLine}</p>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-line pt-3">
                <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-muted-soft">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative z-10 mx-auto aspect-square w-full max-w-[36rem] lg:max-w-none">
          {/* Orbit labels — behind dashboard so they never cover numbers */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={reduce ? undefined : { x: layer4x, y: layer4y }}
            aria-hidden
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              {satellites.map((s) => (
                <motion.line
                  key={`line-${s.label}`}
                  x1="50"
                  y1="50"
                  x2={50 + s.x * 0.55}
                  y2={50 + s.y * 0.55}
                  stroke="rgba(26,122,76,0.18)"
                  strokeWidth="0.2"
                  strokeDasharray="1 1.2"
                  initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                  animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: s.delay }}
                />
              ))}
            </svg>
            {satellites.map((s) => (
              <motion.div
                key={s.label}
                className="absolute left-1/2 top-1/2"
                style={{
                  x: `${s.x}%`,
                  y: `${s.y}%`,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 + s.delay }}
              >
                <div className="whitespace-nowrap rounded-full border border-line/80 bg-surface/95 px-2.5 py-1 text-[0.65rem] font-semibold text-ink shadow-sm backdrop-blur-sm md:px-3 md:text-[0.7rem]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard — always on top and readable */}
          <motion.div
            className="absolute inset-[18%] z-20 sm:inset-[16%]"
            style={reduce ? undefined : { x: layer3x, y: layer3y }}
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface p-4 shadow-[var(--shadow-lg)] md:rounded-[1.75rem] md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-soft">
                    Business Snapshot
                  </p>
                  <p className="mt-0.5 font-display text-base md:text-lg">Financial Dashboard</p>
                </div>
                <span className="shrink-0 rounded-full bg-success-soft px-2.5 py-1 text-[0.65rem] font-semibold text-success">
                  {sampleDashboard.complianceStatus}
                </span>
              </div>

              <div className="mt-4 grid flex-1 grid-cols-2 gap-2 md:gap-2.5">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-line-soft bg-paper/80 px-2.5 py-2.5 md:rounded-2xl md:px-3 md:py-3"
                  >
                    <p className="text-[0.6rem] uppercase tracking-[0.1em] text-muted-soft md:text-[0.65rem]">
                      {item.label}
                    </p>
                    <p className="mt-1 font-display text-base tabular-nums md:text-lg">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 h-12 shrink-0 overflow-hidden rounded-xl bg-ink p-2.5 md:h-14 md:mt-4">
                <svg viewBox="0 0 280 48" className="h-full w-full" aria-hidden>
                  <path
                    d="M0 36 C40 34, 50 18, 80 22 S130 40, 160 24 S220 8, 280 16"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 40 C45 38, 70 28, 100 30 S160 42, 200 28 S250 20, 280 24"
                    fill="none"
                    stroke="rgba(245,243,239,0.35)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-wide relative z-20 border-t border-line/80 pb-8 pt-6">
        <p className="max-w-3xl text-sm text-muted md:text-base">
          From GST and taxation to audits, accounting, compliance and financial advisory — we
          help businesses stay compliant, financially organised and ready to grow.
        </p>
      </div>
    </section>
  );
}
