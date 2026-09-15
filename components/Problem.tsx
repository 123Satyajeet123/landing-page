const fragments = [
  "a script",
  "a Zapier flow",
  "a spreadsheet macro",
  "an AI tool",
  "a manual process",
];

export function Problem() {
  return (
    <section className="border-y border-hairline bg-recessed/70">
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-16">
          <h2 className="heading text-ink">
            You already know what should be automated.
          </h2>
          <div className="max-w-[62ch]">
            <p className="lead text-muted">
              Most teams know which repetitive work they want to automate.
              The hard part is building it, deploying it, and keeping it
              running.
            </p>
            <p className="lead mt-4 text-muted">
              And the automations that do get built often end up scattered
              across different tools, without enough context of how the rest
              of the work gets done.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-3 sm:mt-20"
        >
          {fragments.map((fragment, i) => (
            <span key={fragment} className="flex items-center gap-3">
              <span className="font-ui text-[13px] text-faint">
                {fragment}
              </span>
              {i < fragments.length - 1 && (
                <span className="h-px w-6 bg-hairline-strong sm:w-10" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
