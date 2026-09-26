"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { type ToolId } from "@/data/tools";
import { formatINR } from "@/lib/utils";

export function FinancialTool({ toolId }: { toolId: ToolId }) {
  const [a, setA] = useState("100000");
  const [b, setB] = useState("18");
  const [c, setC] = useState("12");
  const [mode, setMode] = useState<"add" | "remove">("add");

  const result = useMemo(() => {
    const n1 = Number(a) || 0;
    const n2 = Number(b) || 0;
    const n3 = Number(c) || 0;

    switch (toolId) {
      case "gst-calculator": {
        if (mode === "add") {
          const gst = (n1 * n2) / 100;
          return {
            lines: [
              { label: "Base amount", value: formatINR(n1) },
              { label: `GST @ ${n2}%`, value: formatINR(gst) },
              { label: "Total with GST", value: formatINR(n1 + gst) },
            ],
          };
        }
        const base = n1 / (1 + n2 / 100);
        const gst = n1 - base;
        return {
          lines: [
            { label: "Amount including GST", value: formatINR(n1) },
            { label: "Base amount", value: formatINR(base) },
            { label: `GST @ ${n2}%`, value: formatINR(gst) },
          ],
        };
      }
      case "income-tax-estimate": {
        const taxable = Math.max(0, n1 - n2);
        const estimated = taxable * 0.25;
        return {
          lines: [
            { label: "Approx. profit / income", value: formatINR(n1) },
            { label: "Deductions / adjustments", value: formatINR(n2) },
            { label: "Illustrative tax @ 25%", value: formatINR(estimated) },
          ],
          note: "Illustrative only. Actual tax depends on entity type, regime and eligible claims.",
        };
      }
      case "profit-calculator": {
        const profit = n1 - n2;
        const margin = n1 ? (profit / n1) * 100 : 0;
        return {
          lines: [
            { label: "Revenue", value: formatINR(n1) },
            { label: "Expenses", value: formatINR(n2) },
            { label: "Profit", value: formatINR(profit) },
            { label: "Margin", value: `${margin.toFixed(1)}%` },
          ],
        };
      }
      case "emi-calculator": {
        const r = n2 / 12 / 100;
        const months = Math.max(1, n3);
        const emi =
          r === 0
            ? n1 / months
            : (n1 * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
        return {
          lines: [
            { label: "Loan amount", value: formatINR(n1) },
            { label: "Monthly EMI", value: formatINR(emi) },
            { label: "Total payable", value: formatINR(emi * months) },
          ],
        };
      }
      case "tds-calculator": {
        const tds = (n1 * n2) / 100;
        return {
          lines: [
            { label: "Payment amount", value: formatINR(n1) },
            { label: `TDS @ ${n2}%`, value: formatINR(tds) },
            { label: "Net payable", value: formatINR(n1 - tds) },
          ],
          note: "Rate depends on nature of payment and applicable section. Confirm before deducting.",
        };
      }
      case "break-even": {
        const contribution = n1 - n2;
        const units = contribution > 0 ? Math.ceil(n3 / contribution) : 0;
        return {
          lines: [
            { label: "Selling price / unit", value: formatINR(n1) },
            { label: "Variable cost / unit", value: formatINR(n2) },
            { label: "Fixed costs", value: formatINR(n3) },
            { label: "Break-even units", value: contribution > 0 ? String(units) : "N/A" },
          ],
        };
      }
      case "working-capital": {
        const wc = n1 - n2;
        return {
          lines: [
            { label: "Current assets", value: formatINR(n1) },
            { label: "Current liabilities", value: formatINR(n2) },
            { label: "Working capital", value: formatINR(wc) },
          ],
        };
      }
    }
  }, [a, b, c, mode, toolId]);

  const fields = getFields(toolId);

  return (
    <div className="rounded-[1.5rem] border border-line bg-surface p-6 md:p-8">
      {toolId === "gst-calculator" ? (
        <div className="mb-5 flex gap-2">
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === "add" ? "bg-ink text-paper" : "bg-paper text-muted"}`}
            onClick={() => setMode("add")}
          >
            Add GST
          </button>
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === "remove" ? "bg-ink text-paper" : "bg-paper text-muted"}`}
            onClick={() => setMode("remove")}
          >
            Remove GST
          </button>
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{fields[0]}</span>
          <input className="field" value={a} onChange={(e) => setA(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">{fields[1]}</span>
          <input className="field" value={b} onChange={(e) => setB(e.target.value)} inputMode="decimal" />
        </label>
        {fields[2] ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium">{fields[2]}</span>
            <input className="field" value={c} onChange={(e) => setC(e.target.value)} inputMode="decimal" />
          </label>
        ) : (
          <div />
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-paper p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-soft">Result</p>
        <ul className="mt-4 space-y-3">
          {result.lines.map((line) => (
            <li key={line.label} className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted">{line.label}</span>
              <span className="font-display text-lg tabular-nums">{line.value}</span>
            </li>
          ))}
        </ul>
        {"note" in result && result.note ? (
          <p className="mt-4 text-xs text-muted">{result.note}</p>
        ) : null}
      </div>

      <div className="mt-6 rounded-2xl border border-accent/20 bg-accent-soft p-5">
        <p className="font-display text-xl">Want a CA to review this calculation?</p>
        <p className="mt-2 text-sm text-muted">
          These tools are for quick estimates. A review can catch exceptions, deadlines and
          planning opportunities.
        </p>
        <div className="mt-4">
          <Button href="/contact">Talk to an Expert</Button>
        </div>
      </div>
    </div>
  );
}

function getFields(toolId: ToolId): [string, string, string?] {
  switch (toolId) {
    case "gst-calculator":
      return ["Amount (₹)", "GST rate (%)"];
    case "income-tax-estimate":
      return ["Approx. income / profit (₹)", "Deductions (₹)"];
    case "profit-calculator":
      return ["Revenue (₹)", "Expenses (₹)"];
    case "emi-calculator":
      return ["Loan amount (₹)", "Annual interest (%)", "Tenure (months)"];
    case "tds-calculator":
      return ["Payment amount (₹)", "TDS rate (%)"];
    case "break-even":
      return ["Selling price / unit (₹)", "Variable cost / unit (₹)", "Fixed costs (₹)"];
    case "working-capital":
      return ["Current assets (₹)", "Current liabilities (₹)"];
  }
}