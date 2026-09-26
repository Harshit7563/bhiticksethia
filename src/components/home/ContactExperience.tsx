"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const needs = [
  "GST",
  "Income Tax",
  "Accounting",
  "Audit",
  "Company Compliance",
  "Business Registration",
  "Financial Advisory",
  "Notice / Urgent Issue",
  "Not Sure",
] as const;

const businessTypes = [
  "Startup",
  "Small Business",
  "SME",
  "E-commerce",
  "Restaurant",
  "Professional Services",
  "Other",
] as const;

const turnovers = [
  "Under ₹50L",
  "₹50L – ₹2Cr",
  "₹2Cr – ₹10Cr",
  "₹10Cr – ₹50Cr",
  "Above ₹50Cr",
  "Prefer not to say",
] as const;

const schema = z.object({
  need: z.string().min(1, "Please select what you need help with"),
  businessType: z.string().min(1, "Please select business type"),
  turnover: z.string().min(1, "Please select turnover range"),
  city: z.string().min(2, "Please enter your city"),
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().optional(),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  need: "",
  businessType: "",
  turnover: "",
  city: "",
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactExperience({ embedded = false }: { embedded?: boolean }) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const stepLabel = useMemo(() => {
    if (!form.need) return "Step 1 of 3 — What do you need?";
    if (!form.businessType || !form.turnover || !form.city) return "Step 2 of 3 — About your business";
    return "Step 3 of 3 — How we reach you";
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitted(true);
  }

  const content = (
    <div className={embedded ? "" : "container-wide"}>
      {!embedded ? (
        <SectionHeader
          eyebrow="Contact"
          title="Tell Us What You Need Help With."
          description="A short conversational form — not a generic query dump. We’ll respond with next steps."
        />
      ) : null}

      {submitted ? (
        <div className="rounded-[1.5rem] border border-success/20 bg-success-soft p-8">
          <h3 className="font-display text-3xl">Request received.</h3>
          <p className="mt-3 max-w-xl text-muted leading-relaxed">
            Thank you, {form.name}. Our team will review your note about {form.need.toLowerCase()}{" "}
            and reach out on {form.phone}. Prefer WhatsApp?{" "}
            <a
              className="font-semibold text-accent underline"
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us now
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border border-line bg-surface p-5 md:p-8"
          noValidate
        >
          <p className="text-sm font-medium text-muted">{stepLabel}</p>

          <fieldset className="mt-6">
            <legend className="font-display text-2xl">What do you need help with?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {needs.map((need) => (
                <button
                  key={need}
                  type="button"
                  onClick={() => update("need", need)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    form.need === need
                      ? "border-accent bg-accent text-white"
                      : "border-line bg-paper text-ink hover:border-ink/30",
                  )}
                  aria-pressed={form.need === need}
                >
                  {need}
                </button>
              ))}
            </div>
            {errors.need ? <p className="mt-2 text-sm text-danger">{errors.need}</p> : null}
          </fieldset>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Field label="Business Type" error={errors.businessType}>
              <select
                className="field"
                value={form.businessType}
                onChange={(e) => update("businessType", e.target.value)}
                aria-invalid={!!errors.businessType}
              >
                <option value="">Select</option>
                {businessTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Approximate Turnover" error={errors.turnover}>
              <select
                className="field"
                value={form.turnover}
                onChange={(e) => update("turnover", e.target.value)}
                aria-invalid={!!errors.turnover}
              >
                <option value="">Select</option>
                {turnovers.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="City" error={errors.city}>
              <input
                className="field"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="Udaipur"
                aria-invalid={!!errors.city}
              />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Field label="Name" error={errors.name}>
              <input
                className="field"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                autoComplete="name"
                aria-invalid={!!errors.name}
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input
                className="field"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={!!errors.phone}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className="field"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                autoComplete="email"
                aria-invalid={!!errors.email}
              />
            </Field>
          </div>

          <Field label="Message (optional)" error={errors.message} className="mt-5">
            <textarea
              className="field min-h-28 resize-y"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Share anything that helps us prepare for the first call."
            />
          </Field>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg">
              Request a Consultation
            </Button>
            <p className="text-sm text-muted">
              Or call{" "}
              <a className="font-semibold text-ink underline" href={`tel:${siteConfig.phoneRaw}`}>
                {siteConfig.phone}
              </a>
              {" · "}
              <a className="font-semibold text-ink underline break-all" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  );

  if (embedded) return content;
  return (
    <Section tone="surface" id="contact">
      {content}
    </Section>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-sm text-danger">{error}</span> : null}
    </label>
  );
}
