import { HizenPanel, type PanelMode } from "./product/HizenPanel";

const steps: {
  number: string;
  title: string;
  body: string;
  mode: PanelMode;
  revealCount?: number;
  activeIndex?: number;
}[] = [
  {
    number: "01",
    title: "Show Hizen the work",
    body: "Do the task normally in your browser and show Hizen how you get it done.",
    mode: "watching",
    revealCount: 3,
  },
  {
    number: "02",
    title: "Hizen learns it",
    body: "Hizen understands the steps you take, the context you use, and the decisions you make along the way.",
    mode: "saw",
  },
  {
    number: "03",
    title: "Hizen does it for you",
    body: "Hizen runs the work directly in your browser and asks for your input when needed.",
    mode: "needsInput",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface">
      <div className="shell py-20 sm:py-28">
        <h2 className="heading mx-auto max-w-3xl text-center text-heading">
          Teach Hizen the work. It handles the rest.
        </h2>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-16 sm:mt-20 sm:gap-24">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="relative border-t border-hairline pt-5">
                <span className="absolute -top-px left-0 h-[2px] w-8 bg-heading" />
                <span className="eyebrow">{step.number}</span>
                <h3 className="mt-3 text-[1.4rem] font-semibold leading-snug text-heading sm:text-[1.55rem]">
                  {step.title}
                </h3>
                <p className="lead mt-3 max-w-md text-subtext">{step.body}</p>
              </div>

              <div className="mt-8 h-[240px] w-full">
                <HizenPanel
                  mode={step.mode}
                  revealCount={step.revealCount}
                  activeIndex={step.activeIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
