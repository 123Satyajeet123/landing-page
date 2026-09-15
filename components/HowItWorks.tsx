"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { AccountView } from "./product/AccountView";
import { BrowserFrame } from "./product/BrowserFrame";
import { HizenPanel, type PanelMode } from "./product/HizenPanel";
import { workflowSteps } from "./product/states";

const steps = [
  {
    eyebrow: "01",
    title: "Show Hizen the work",
    body: "Do the task the way you normally would. Hizen watches how you work across the browser and understands the steps you take.",
  },
  {
    eyebrow: "02",
    title: "Hizen understands the workflow",
    body: "It figures out the steps, the tools involved, and the logic behind how the task gets done.",
  },
  {
    eyebrow: "03",
    title: "It does the work for you",
    body: "Once the workflow is ready, Hizen can run it across the tools you already use. If something needs your judgement or input, it asks you and continues from there.",
  },
];

const decideIndex = workflowSteps.findIndex((s) => s.id === "decide");
const lastIndex = workflowSteps.length - 1;

const executionFrames: { mode: PanelMode; activeIndex?: number; duration: number }[] = [
  { mode: "working", activeIndex: 0, duration: 500 },
  { mode: "working", activeIndex: 1, duration: 500 },
  { mode: "working", activeIndex: decideIndex, duration: 550 },
  { mode: "needsInput", duration: 2100 },
  { mode: "working", activeIndex: decideIndex + 1, duration: 500 },
  { mode: "working", activeIndex: lastIndex - 1, duration: 500 },
  { mode: "working", activeIndex: lastIndex, duration: 500 },
  { mode: "done", duration: 2600 },
];

function useWatchingLoop(active: boolean, reducedMotion: boolean) {
  const playing = active && !reducedMotion;
  const [prevPlaying, setPrevPlaying] = useState(playing);
  const [reveal, setReveal] = useState(playing ? 0 : workflowSteps.length);

  if (playing !== prevPlaying) {
    setPrevPlaying(playing);
    setReveal(playing ? 0 : workflowSteps.length);
  }

  useEffect(() => {
    if (!playing) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setReveal(i);
      if (i >= workflowSteps.length) {
        clearInterval(id);
        setTimeout(() => {
          i = 0;
          setReveal(0);
        }, 1300);
      }
    }, 420);
    return () => clearInterval(id);
  }, [playing]);

  return reveal;
}

const needsInputFrameIndex = executionFrames.findIndex(
  (f) => f.mode === "needsInput"
);

function useExecutionLoop(active: boolean, reducedMotion: boolean) {
  const playing = active && !reducedMotion;
  const staticFrame = active && reducedMotion;
  const key = `${active}-${reducedMotion}`;
  const [prevKey, setPrevKey] = useState(key);
  const [frameIndex, setFrameIndex] = useState(
    staticFrame ? needsInputFrameIndex : 0
  );

  if (key !== prevKey) {
    setPrevKey(key);
    setFrameIndex(staticFrame ? needsInputFrameIndex : 0);
  }

  useEffect(() => {
    if (!playing) return;
    const timer = { current: undefined as ReturnType<typeof setTimeout> | undefined };
    let i = 0;
    const tick = () => {
      timer.current = setTimeout(() => {
        i = (i + 1) % executionFrames.length;
        setFrameIndex(i);
        tick();
      }, executionFrames[i].duration);
    };
    tick();
    return () => clearTimeout(timer.current);
  }, [playing]);

  return executionFrames[frameIndex];
}

function StickyVisual({ activeStep }: { activeStep: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const watchReveal = useWatchingLoop(activeStep === 0, reducedMotion);
  const execFrame = useExecutionLoop(activeStep === 2, reducedMotion);

  const mode: PanelMode =
    activeStep === 0 ? "watching" : activeStep === 1 ? "saw" : execFrame.mode;

  return (
    <div
      role="img"
      aria-label="A product visual showing Hizen watch an account get updated, summarize the steps it saw, then carry the update out itself and pause once to ask a question before finishing."
      className="grid h-[300px] grid-cols-[minmax(0,1fr)_240px] gap-4"
    >
      <BrowserFrame>
        <AccountView
          highlight={
            activeStep === 0 ? Math.max(watchReveal - 1, -1) : -1
          }
        />
      </BrowserFrame>
      <HizenPanel
        mode={mode}
        revealCount={watchReveal}
        activeIndex={activeStep === 2 ? execFrame.activeIndex : undefined}
      />
    </div>
  );
}

function MobileVisual({ mode }: { mode: PanelMode }) {
  return (
    <div className="mt-6 flex flex-col gap-2.5 sm:grid sm:h-[240px] sm:grid-cols-[minmax(0,1fr)_200px] md:hidden">
      <div className="h-[170px] sm:h-auto">
        <BrowserFrame compact>
          <AccountView highlight={-1} />
        </BrowserFrame>
      </div>
      <div className="h-[230px] sm:h-auto">
        <HizenPanel mode={mode} activeIndex={decideIndex} />
      </div>
    </div>
  );
}

const mobileModes: PanelMode[] = ["watching", "saw", "needsInput"];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const center = window.innerHeight / 2;
      let index = 0;
      refs.forEach((r, i) => {
        if (r.current && r.current.getBoundingClientRect().top <= center) {
          index = i;
        }
      });
      setActiveStep(index);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="how-it-works" className="bg-surface">
      <div className="shell py-20 sm:py-28">
        <h2 className="heading max-w-2xl text-ink">
          Show it once. Let Hizen understand the work.
        </h2>

        <div className="mt-14 grid gap-16 md:mt-20 md:grid-cols-2 md:gap-12">
          <div className="hidden md:block">
            <div className="sticky top-24">
              <StickyVisual activeStep={activeStep} />
            </div>
          </div>

          <div className="flex flex-col gap-24 md:gap-[45vh]">
            {steps.map((step, i) => (
              <div key={step.title} ref={refs[i]}>
                <span className="eyebrow">{step.eyebrow}</span>
                <h3 className="mt-3 text-[1.4rem] font-medium leading-snug text-ink sm:text-[1.55rem]">
                  {step.title}
                </h3>
                <p className="lead mt-3 max-w-md text-muted">{step.body}</p>
                <MobileVisual mode={mobileModes[i]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
