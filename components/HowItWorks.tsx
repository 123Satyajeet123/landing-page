"use client";

import { useEffect, useRef, useState } from "react";
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

function StepContent({ step }: { step: (typeof steps)[number] }) {
  return (
    <>
      <div className="relative mx-auto w-full border-t border-hairline pt-6">
        <span className="absolute -top-px left-1/2 h-[2px] w-8 -translate-x-1/2 bg-heading" />
        <span className="eyebrow">{step.number}</span>
        <h3 className="mt-3 text-[1.7rem] font-semibold leading-snug text-heading sm:text-[1.9rem]">
          {step.title}
        </h3>
        <p className="lead mx-auto mt-3 max-w-lg text-[1.05rem] text-subtext">
          {step.body}
        </p>
      </div>

      <div className="mx-auto mt-9 h-[300px] w-full max-w-xl sm:h-[360px]">
        <HizenPanel
          mode={step.mode}
          revealCount={step.revealCount}
          activeIndex={step.activeIndex}
        />
      </div>
    </>
  );
}

function ScrollDrivenSteps() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      const index = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      setActiveIndex(index);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${steps.length * 80}vh` }}
    >
      <div className="sticky top-16 mx-auto max-w-3xl text-center sm:top-20">
        <h2 className="heading text-heading">
          Teach Hizen the work. It handles the rest.
        </h2>
        <div className="mt-8">
          <StepContent step={steps[activeIndex]} />
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-surface">
      <div className="shell py-20 sm:py-24">
        <div className="md:hidden">
          <h2 className="heading mx-auto max-w-3xl text-center text-heading">
            Teach Hizen the work. It handles the rest.
          </h2>
          <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-16">
            {steps.map((step) => (
              <StepContent key={step.number} step={step} />
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <ScrollDrivenSteps />
        </div>
      </div>
    </section>
  );
}
