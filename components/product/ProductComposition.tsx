"use client";

import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { AccountView } from "./AccountView";
import { BrowserFrame } from "./BrowserFrame";
import { HizenPanel } from "./HizenPanel";
import { useDemoSequence } from "./useDemoSequence";

export function ProductComposition() {
  const reducedMotion = usePrefersReducedMotion();
  const frame = useDemoSequence(reducedMotion);

  return (
    <div
      role="img"
      aria-label="Hizen watching a customer account get updated, understanding the steps, then carrying out the update itself and pausing to ask which plan to apply before finishing."
      className="flex flex-col gap-3 sm:grid sm:h-[380px] sm:grid-cols-[minmax(0,1fr)_240px] sm:gap-4 md:h-[420px] md:grid-cols-[minmax(0,1fr)_256px]"
    >
      <div className="h-[240px] sm:h-auto">
        <BrowserFrame>
          <AccountView
            highlight={frame.mode === "watching" ? frame.highlight : -1}
          />
        </BrowserFrame>
      </div>
      <div className="h-[290px] sm:h-auto">
        <HizenPanel
          mode={frame.mode}
          revealCount={frame.revealCount}
          activeIndex={frame.activeIndex}
        />
      </div>
    </div>
  );
}
