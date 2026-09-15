"use client";

import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { AccountView } from "./AccountView";
import { HizenPanel } from "./HizenPanel";
import { useDemoSequence } from "./useDemoSequence";

function ChevronIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
      <path
        d={direction === "left" ? "M9.5 3.5 5 8l4.5 4.5" : "M6.5 3.5 11 8l-4.5 4.5"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
      <path
        d="M3 8a5 5 0 0 1 8.6-3.5M13 8a5 5 0 0 1-8.6 3.5M11 2.5V5h-2.5M5 13.5V11h2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductComposition() {
  const reducedMotion = usePrefersReducedMotion();
  const frame = useDemoSequence(reducedMotion);

  return (
    <div
      role="img"
      aria-label="A browser window with the Hizen extension docked on the right, watching a customer account get updated, understanding the steps, then carrying out the update itself and pausing to ask which plan to apply before finishing."
      className="overflow-hidden rounded-xl border border-hairline bg-surface shadow-[0_1px_2px_rgba(20,20,19,0.04),0_24px_60px_-24px_rgba(20,20,19,0.22)]"
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-b border-hairline bg-recessed/60 px-4 py-2.5"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        </div>
        <div className="flex items-end gap-1">
          <span className="rounded-t-md border border-b-0 border-hairline bg-surface px-3.5 py-1.5 font-ui text-[12px] font-medium text-ink">
            Accounts
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-b border-hairline px-4 py-2.5"
      >
        <div className="flex items-center gap-2.5 text-faint">
          <ChevronIcon direction="left" />
          <ChevronIcon direction="right" />
          <RefreshIcon />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-full bg-recessed px-3.5 py-1.5 font-ui text-[11px] text-faint">
          app.ledgerbase.io/accounts/northwind-co
        </div>
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-ink font-ui text-[10px] font-semibold text-paper">
          H
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="h-[230px] min-w-0 flex-1 sm:h-[380px] md:h-[420px]">
          <AccountView
            highlight={frame.mode === "watching" ? frame.highlight : -1}
          />
        </div>
        <div className="h-[260px] shrink-0 border-t border-hairline sm:h-[380px] sm:w-[240px] sm:border-l sm:border-t-0 md:h-[420px] md:w-[272px]">
          <HizenPanel
            flush
            mode={frame.mode}
            revealCount={frame.revealCount}
            activeIndex={frame.activeIndex}
          />
        </div>
      </div>
    </div>
  );
}
