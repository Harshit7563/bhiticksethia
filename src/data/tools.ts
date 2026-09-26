export type ToolId =
  | "gst-calculator"
  | "income-tax-estimate"
  | "profit-calculator"
  | "emi-calculator"
  | "tds-calculator"
  | "break-even"
  | "working-capital";

export const toolMeta: Record<ToolId, { title: string; description: string }> = {
  "gst-calculator": {
    title: "GST Calculator",
    description: "Add or remove GST from an amount instantly.",
  },
  "income-tax-estimate": {
    title: "Income Tax Estimate",
    description: "A rough planning estimate — not a final computation.",
  },
  "profit-calculator": {
    title: "Business Profit Calculator",
    description: "See profit after expenses — not just sales.",
  },
  "emi-calculator": {
    title: "EMI Calculator",
    description: "Estimate monthly loan obligations.",
  },
  "tds-calculator": {
    title: "TDS Calculator",
    description: "Estimate TDS on a payment amount.",
  },
  "break-even": {
    title: "Break-even Calculator",
    description: "Know how many units you need to sell to break even.",
  },
  "working-capital": {
    title: "Working Capital Calculator",
    description: "Current assets minus current liabilities.",
  },
};

export const toolIds = Object.keys(toolMeta) as ToolId[];
