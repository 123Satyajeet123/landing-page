export function Problem() {
  return (
    <section className="border-y border-hairline bg-recessed/70">
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-16">
          <h2 className="heading text-heading">
            AI is built for everyone,
            <br />
            but optimized for no one.
          </h2>
          <div className="max-w-[62ch]">
            <p className="lead text-subtext">
              Companies have a lot of AI automation and tools available, but
              the tools still don&apos;t understand how a specific company
              works. Even the teams know what they want to automate, they
              still have to map the process, deploy the automation, and keep
              it running.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
