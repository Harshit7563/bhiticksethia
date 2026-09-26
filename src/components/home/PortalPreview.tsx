import { Section, SectionHeader } from "@/components/ui/Section";

const panels = [
  "Documents",
  "Tax Returns",
  "GST Status",
  "Invoices",
  "Reports",
  "Compliance Calendar",
  "Requests",
  "Messages",
];

export function PortalPreview() {
  return (
    <Section tone="ink" id="portal">
      <div className="container-wide">
        <SectionHeader
          light
          eyebrow="Client Portal Preview"
          title="A clearer place for documents, filings and requests."
          description="UI preview of a secure client dashboard experience. This section is illustrative — ask us about portal access for your engagement."
        />

        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft shadow-[var(--shadow-lg)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-xs text-paper/40">client portal — preview</span>
          </div>
          <div className="grid md:grid-cols-[220px_1fr]">
            <aside className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
              <p className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-paper/35">
                Workspace
              </p>
              <ul className="mt-3 space-y-1">
                {panels.map((item, i) => (
                  <li
                    key={item}
                    className={`rounded-lg px-3 py-2 text-sm ${i === 0 ? "bg-accent text-white" : "text-paper/65"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
            <div className="p-5 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs text-paper/40">Documents</p>
                  <h3 className="font-display text-2xl text-paper">March workspace</h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-paper/50">
                  Preview only
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["GSTR-3B_Mar.pdf", "Bank_Reco_Mar.xlsx", "P&L_Mar.pdf", "TDS_Challan.pdf"].map(
                  (file) => (
                    <div
                      key={file}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-paper/80"
                    >
                      {file}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-6 text-sm text-paper/45">
                Real document exchange and messaging are enabled for active clients as part of
                engagement setup — this screen shows the intended experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
