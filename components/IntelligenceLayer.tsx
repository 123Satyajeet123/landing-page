const workflows = [
  "Renewals",
  "Onboarding",
  "Invoicing",
  "Support follow-ups",
  "Reporting",
];

export function IntelligenceLayer() {
  return (
    <section className="border-t border-hairline bg-paper">
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-16">
          <h2 className="heading text-ink">
            Your repetitive work shouldn&apos;t live in disconnected
            automations.
          </h2>
          <p className="lead max-w-[60ch] text-muted">
            As Hizen learns more of your workflows, the agents can operate
            from one place and build context around how your company
            actually works.
          </p>
        </div>

        <div aria-hidden="true" className="mt-20 sm:mt-24">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {workflows.map((name) => (
              <div key={name} className="flex flex-col items-center">
                <span className="rounded-full border border-hairline-strong bg-surface px-3.5 py-1.5 font-ui text-[12.5px] text-muted">
                  {name}
                </span>
                <span className="mt-2 h-6 w-px bg-hairline-strong" />
              </div>
            ))}
          </div>

          <div className="mt-0 flex items-center gap-4">
            <span className="h-px flex-1 bg-ink" />
            <span className="font-ui text-[12px] font-medium tracking-tight text-ink">
              Hizen
            </span>
            <span className="h-px flex-1 bg-ink" />
          </div>

          <p className="mt-6 text-center font-ui text-[12.5px] text-faint">
            work handled consistently, in one place
          </p>
        </div>
      </div>
    </section>
  );
}
