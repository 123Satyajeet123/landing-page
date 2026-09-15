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

function CheckIcon({ large = false }: { large?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={large ? "h-4 w-4" : "h-3 w-3"}
      fill="none"
    >
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
  large = false,
}: {
  mode: PanelMode;
  revealCount?: number;
  activeIndex?: number;
  flush?: boolean;
  large?: boolean;
}) {
  const text = large ? "text-[16px]" : "text-[12px]";
  const textSm = large ? "text-[14px]" : "text-[11px]";
  const textMd = large ? "text-[17px]" : "text-[13px]";
  const headerText = large ? "text-[16px]" : "text-[12px]";
  const dotSize = large ? "h-4.5 w-4.5" : "h-3.5 w-3.5";
  const bulletSize = large ? "h-1.5 w-1.5" : "h-1 w-1";
  const gap = large ? "gap-3" : "gap-2";
  const gapMd = large ? "gap-3.5" : "gap-2.5";
  const space = large ? "space-y-3" : "space-y-2";
  const spaceMd = large ? "space-y-3.5" : "space-y-2.5";
  const padding = large ? "px-6 py-4.5" : "px-4 py-3.5";
  const headerPadding = large ? "px-6 py-4" : "px-4 py-3";
  const numberWidth = large ? "w-5" : "w-3.5";

  return (
    <div
      aria-hidden="true"
      className={`flex h-full flex-col overflow-hidden bg-mockup-ink text-panel-fg ${
        flush
          ? ""
          : "rounded-2xl border border-white/12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.05),0_24px_48px_-16px_rgba(0,0,0,0.75)]"
      }`}
    >
      <div
        className={`flex items-center justify-between border-b border-white/10 ${headerPadding}`}
      >
        <span
          className={`font-ui ${headerText} font-medium tracking-tight`}
        >
          Hizen
        </span>
        <span
          className={`flex items-center gap-1.5 font-ui ${textSm} text-panel-fg/70`}
        >
          <StatusDot mode={mode} />
          {modeLabel[mode]}
        </span>
      </div>

      <div className={`min-h-0 flex-1 overflow-hidden font-ui ${padding}`}>
        {mode === "watching" && (
          <ul className={space}>
            {workflowSteps.map((step, i) => {
              const visible = i < revealCount;
              return (
                <li
                  key={step.id}
                  className={`flex items-center ${gap} ${text} transition-all duration-500 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-1 opacity-0"
                  }`}
                >
                  <span
                    className={`${bulletSize} shrink-0 rounded-full bg-panel-fg/40`}
                  />
                  <span className="text-panel-fg/80">{step.label}</span>
                </li>
              );
            })}
          </ul>
        )}

        {mode === "saw" && (
          <ol className={space}>
            {workflowSteps.map((step, i) => (
              <li key={step.id} className={`flex ${gapMd} ${text}`}>
                <span className={`${numberWidth} shrink-0 text-panel-fg/40`}>
                  {i + 1}
                </span>
                <span className="text-panel-fg/90">{step.label}</span>
              </li>
            ))}
          </ol>
        )}

        {mode === "working" && (
          <ul className={spaceMd}>
            {workflowSteps.map((step, i) => {
              const status = statusFor(i, activeIndex);
              return (
                <li key={step.id} className={`flex items-center ${gapMd} ${text}`}>
                  <span
                    className={`flex ${dotSize} shrink-0 items-center justify-center rounded-full border ${
                      status === "done"
                        ? "border-accent bg-accent text-mockup-ink"
                        : status === "working"
                          ? "border-accent"
                          : "border-panel-fg/25"
                    }`}
                  >
                    {status === "done" && <CheckIcon large={large} />}
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
            <p className={`${text} text-panel-fg/60`}>I need your input</p>
            <p className={`mt-1.5 ${textMd} leading-snug text-panel-fg/95`}>
              {decisionStep.question}
            </p>
            <div className={`mt-3 ${large ? "space-y-2" : "space-y-1.5"}`}>
              {decisionStep.options.map((option) => {
                const chosen = option === decisionStep.chosen;
                return (
                  <div
                    key={option}
                    className={`rounded-md border ${large ? "px-3.5 py-2.5" : "px-2.5 py-1.5"} ${text} transition-colors duration-500 ${
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
            <ul className={space}>
              {workflowSteps.map((step) => (
                <li
                  key={step.id}
                  className={`flex items-center ${gapMd} ${text} text-panel-fg/50`}
                >
                  <span
                    className={`flex ${dotSize} shrink-0 items-center justify-center rounded-full border border-accent bg-accent text-mockup-ink`}
                  >
                    <CheckIcon large={large} />
                  </span>
                  <span className="line-through decoration-panel-fg/20">
                    {step.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className={`mt-3 ${text} font-medium text-panel-fg/90`}>
              Account updated and confirmation sent.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
