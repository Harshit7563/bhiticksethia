import Link from "next/link";
import { Calculator, Percent, TrendingUp, Wallet, IndianRupee, ChartPie } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const tools = [
  { slug: "gst-calculator", title: "GST Calculator", icon: Percent, blurb: "Add or remove GST from an amount instantly." },
  { slug: "income-tax-estimate", title: "Income Tax Estimate", icon: IndianRupee, blurb: "Rough estimate for planning conversations." },
  { slug: "profit-calculator", title: "Business Profit Calculator", icon: TrendingUp, blurb: "See profit after expenses — not just sales." },
  { slug: "emi-calculator", title: "EMI Calculator", icon: Calculator, blurb: "Understand monthly loan obligations." },
  { slug: "tds-calculator", title: "TDS Calculator", icon: Wallet, blurb: "Estimate TDS on common payment types." },
  { slug: "break-even", title: "Break-even Calculator", icon: ChartPie, blurb: "Know how much you need to sell to break even." },
  { slug: "working-capital", title: "Working Capital Calculator", icon: Wallet, blurb: "See money available to run daily operations." },
];

export function ToolsPreview() {
  return (
    <Section id="tools">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Smart Financial Tools"
          title="Useful calculators. Natural next step: talk to a CA."
          description="Try a quick estimate yourself. When you want someone to review the numbers, we’re one click away."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-[1.5rem] border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep transition group-hover:bg-accent group-hover:text-white">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-display text-xl">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{tool.blurb}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-8">
          <Button href="/tools" variant="secondary">
            Open All Tools
          </Button>
        </div>
      </div>
    </Section>
  );
}
