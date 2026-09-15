import { decisionStep, statusFor, workflowSteps } from "./states";

export type PanelMode = "watching" | "saw" | "working" | "needsInput" | "done";

const modeLabel: Record<PanelMode, string> = {
  watching: "Watching",
  saw: "What I saw",
  working: "Working",
  needsInput: "Needs your input",
  done: "Done",
};

function StatusDot({ mode }: { mode: PanelMode }) {
  const cls =
    mode === "needsInput"
      ? "bg-ochre"
      : mode === "watching"
        ? "bg-muted"
        : "bg-accent";
  const pulse = mode === "watching" || mode === "working";
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${cls} ${pulse ? "hz-breathe" : ""}`}
    />
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
      <path
        d="M3.5 8.2 6.4 11l6.1-6.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HizenPanel({
  mode,
  revealCount = workflowSteps.length,
  activeIndex = 0,
  flush = false,
}: {
  mode: PanelMode;
  revealCount?: number;
  activeIndex?: number;
  flush?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-full flex-col overflow-hidden bg-mockup-ink text-panel-fg ${
        flush
          ? ""
          : "rounded-2xl border border-black/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_16px_32px_-16px_rgba(20,20,19,0.4),0_32px_64px_-28px_rgba(20,20,19,0.45)]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-ui text-[12px] font-medium tracking-tight">
          Hizen
        </span>
        <span className="flex items-center gap-1.5 font-ui text-[11px] text-panel-fg/70">
          <StatusDot mode={mode} />
          {modeLabel[mode]}
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden px-4 py-3.5 font-ui">
        {mode === "watching" && (
          <ul className="space-y-2">
            {workflowSteps.map((step, i) => {
              const visible = i < revealCount;
              return (
                <li
                  key={step.id}
                  className={`flex items-center gap-2 text-[12px] transition-all duration-500 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-1 opacity-0"
                  }`}
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-panel-fg/40" />
                  <span className="text-panel-fg/80">{step.label}</span>
                </li>
              );
            })}
          </ul>
        )}

        {mode === "saw" && (
          <ol className="space-y-2">
            {workflowSteps.map((step, i) => (
              <li key={step.id} className="flex gap-2.5 text-[12px]">
                <span className="w-3.5 shrink-0 text-panel-fg/40">{i + 1}</span>
                <span className="text-panel-fg/90">{step.label}</span>
              </li>
            ))}
          </ol>
        )}

        {mode === "working" && (
          <ul className="space-y-2.5">
            {workflowSteps.map((step, i) => {
              const status = statusFor(i, activeIndex);
              return (
                <li
                  key={step.id}
                  className="flex items-center gap-2.5 text-[12px]"
                >
                  <span
                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                      status === "done"
                        ? "border-accent bg-accent text-mockup-ink"
                        : status === "working"
                          ? "border-accent"
                          : "border-panel-fg/25"
                    }`}
                  >
                    {status === "done" && <CheckIcon />}
                    {status === "working" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent hz-breathe" />
                    )}
                  </span>
                  <span
                    className={
                      status === "pending"
                        ? "text-panel-fg/40"
                        : "text-panel-fg/90"
                    }
                  >
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {mode === "needsInput" && (
          <div>
            <p className="text-[12px] text-panel-fg/60">I need your input</p>
            <p className="mt-1.5 text-[13px] leading-snug text-panel-fg/95">
              {decisionStep.question}
            </p>
            <div className="mt-3 space-y-1.5">
              {decisionStep.options.map((option) => {
                const chosen = option === decisionStep.chosen;
                return (
                  <div
                    key={option}
                    className={`rounded-md border px-2.5 py-1.5 text-[12px] transition-colors duration-500 ${
                      chosen
                        ? "border-ochre/50 bg-ochre/20 text-panel-fg"
                        : "border-white/10 text-panel-fg/60"
                    }`}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {mode === "done" && (
          <div>
            <ul className="space-y-2">
              {workflowSteps.map((step) => (
                <li
                  key={step.id}
                  className="flex items-center gap-2.5 text-[12px] text-panel-fg/50"
                >
                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-accent bg-accent text-mockup-ink">
                    <CheckIcon />
                  </span>
                  <span className="line-through decoration-panel-fg/20">
                    {step.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[12px] font-medium text-panel-fg/90">
              Account updated and confirmation sent.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
