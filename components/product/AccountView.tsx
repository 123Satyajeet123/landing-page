const rows = [
  { label: "Account", value: "Northwind Co." },
  { label: "Plan", value: "Standard" },
  { label: "Renewal date", value: "Sep 18, 2026" },
  { label: "Owner", value: "M. Alvarez" },
  { label: "Status", value: "Active" },
];

export function AccountView({ highlight = -1 }: { highlight?: number }) {
  return (
    <div aria-hidden="true" className="flex h-full flex-col bg-mockup-surface font-ui">
      <div className="border-b border-mockup-border px-4 py-3">
        <div className="text-[13px] font-medium text-mockup-ink">Northwind Co.</div>
        <div className="mt-0.5 text-[11px] text-mockup-faint">Customer account</div>
      </div>
      <div className="flex-1 divide-y divide-mockup-border/70">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-4 py-2.5 text-[12px] transition-colors duration-500 ${
              i === highlight ? "bg-accent-soft" : ""
            }`}
          >
            <span className="text-mockup-faint">{row.label}</span>
            <span
              className={`font-medium ${
                i === highlight ? "text-accent" : "text-mockup-ink"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
