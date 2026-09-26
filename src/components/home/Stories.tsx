"use client";

import { useState } from "react";
import { testimonials, caseStudies } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <Section id="stories">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Client Stories"
          title="Immersive stories — not a tiny testimonial slider."
          description="Real business language about what changed after the numbers became clear."
        />

        <div className="rounded-[1.75rem] border border-line bg-surface p-6 md:p-10">
          <blockquote className="max-w-3xl">
            <p className="font-display text-2xl leading-snug md:text-4xl text-balance">
              “{current.quote}”
            </p>
            <footer className="mt-6 text-sm text-muted">
              — {current.author}, {current.company}
            </footer>
          </blockquote>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">
                Before
              </p>
              <ul className="mt-3 space-y-2">
                {current.before.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-warning/20 bg-warning-soft px-4 py-3 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-success">
                After
              </p>
              <ul className="mt-3 space-y-2">
                {current.after.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-success/20 bg-success-soft px-4 py-3 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.quote}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  index === active
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-muted hover:text-ink",
                )}
                aria-pressed={index === active}
              >
                Story {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CaseStudiesPreview() {
  return (
    <Section tone="surface" id="case-studies">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Case Studies"
          title="How organised finance changes the workday."
          description="We avoid fake savings claims. These stories focus on clarity, cleanup and visibility."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex h-full flex-col rounded-[1.5rem] border border-line bg-paper p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {study.industry}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug">{study.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                <span className="font-semibold text-ink">Problem: </span>
                {study.problem}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {study.work.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-sm font-medium text-ink">
                Result: {study.result}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/case-studies" variant="secondary">
            See All Case Studies
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function AboutTeaser() {
  return (
    <Section id="about-teaser">
      <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.08] text-balance">
            A CA Firm Built Around Modern Businesses.
          </h2>
          <p className="mt-5 max-w-2xl text-muted text-lg leading-relaxed">
            Bhitick Sethia & Associates is a chartered accountancy practice for founders and operators who want
            numbers they can understand. We combine professional compliance discipline with
            clear business communication — so finance supports growth instead of slowing it.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["10+", "Years of practice"],
            ["500+", "Businesses assisted"],
            ["12", "Service areas covered"],
            ["Udaipur", "Home base"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-display text-3xl">{value}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
        <Link href="/about" className="text-sm font-semibold text-accent hover:underline lg:col-span-2">
          Meet the firm →
        </Link>
      </div>
    </Section>
  );
}
