import type { ReactNode } from "react";

export function BrowserFrame({
  tab = "Accounts",
  address = "app.ledgerbase.io/accounts/northwind-co",
  compact = false,
  children,
}: {
  tab?: string;
  address?: string;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="flex h-full flex-col overflow-hidden rounded-[10px] border border-hairline bg-surface shadow-[0_1px_2px_rgba(20,20,19,0.04),0_12px_32px_-16px_rgba(20,20,19,0.18)]"
    >
      {!compact && (
        <div className="flex items-center gap-3 border-b border-hairline bg-recessed/60 px-3.5 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-hairline-strong" />
            <span className="h-2 w-2 rounded-full bg-hairline-strong" />
            <span className="h-2 w-2 rounded-full bg-hairline-strong" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <span className="rounded-t-[6px] border border-b-0 border-hairline bg-surface px-3 py-1 font-ui text-[11px] font-medium text-ink">
              {tab}
            </span>
          </div>
        </div>
      )}
      <div className="border-b border-hairline px-3.5 py-2">
        <div className="truncate rounded-full bg-recessed px-3 py-1 font-ui text-[11px] text-faint">
          {address}
        </div>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}
