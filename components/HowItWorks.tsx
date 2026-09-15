const steps = [
  {
    number: "01",
    title: "Show Hizen the work",
    body: "Do the task normally in your browser and show Hizen how you get it done.",
  },
  {
    number: "02",
    title: "Hizen learns it",
    body: "Hizen understands the steps you take, the context you use, and the decisions you make along the way.",
  },
  {
    number: "03",
    title: "Hizen does it for you",
    body: "Hizen runs the work directly in your browser and asks for your input when needed.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface">
      <div className="shell py-20 sm:py-28">
        <h2 className="heading max-w-2xl text-ink">
          Teach Hizen the work. It handles the rest.
        </h2>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative border-t border-hairline pt-5">
              <span className="absolute -top-px left-0 h-[2px] w-8 bg-ink" />
              <span className="eyebrow">{step.number}</span>
              <h3 className="mt-3 text-[1.15rem] font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
