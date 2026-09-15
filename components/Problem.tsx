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
            AI tools are built for everyone, but optimized for no one.
          </h2>
          <div className="max-w-[62ch]">
            <p className="lead text-muted">
              Companies have more AI and automation tools than ever, but
              those tools still don&apos;t understand how a specific company
              works. So even when teams know what they want to automate,
              they still have to map the process, deploy the automation, and
              keep it running.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-4 sm:mt-20"
        >
          {fragments.map((fragment, i) => (
            <span key={fragment} className="flex items-center gap-4">
              <span className="rounded-full border border-hairline-strong bg-surface px-3.5 py-1.5 font-ui text-[12.5px] text-muted shadow-[0_1px_2px_rgba(20,20,19,0.03)]">
                {fragment}
              </span>
              {i < fragments.length - 1 && (
                <span className="h-px w-5 bg-hairline-strong sm:w-8" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
