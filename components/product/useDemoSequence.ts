"use client";

import { useEffect, useRef, useState } from "react";
import type { PanelMode } from "./HizenPanel";
import { workflowSteps } from "./states";

interface Frame {
  mode: PanelMode;
  revealCount?: number;
  activeIndex?: number;
  highlight?: number;
  duration: number;
}

const decideIndex = workflowSteps.findIndex((s) => s.id === "decide");
const lastIndex = workflowSteps.length - 1;

const frames: Frame[] = [
  ...workflowSteps.map((_, i) => ({
    mode: "watching" as const,
    revealCount: i + 1,
    highlight: i,
    duration: 480,
  })),
  { mode: "saw", duration: 1700 },
  { mode: "working", activeIndex: 0, duration: 450 },
  { mode: "working", activeIndex: 1, duration: 450 },
  { mode: "working", activeIndex: decideIndex, duration: 500 },
  { mode: "needsInput", duration: 2000 },
  { mode: "working", activeIndex: decideIndex + 1, duration: 450 },
  { mode: "working", activeIndex: lastIndex - 1, duration: 450 },
  { mode: "working", activeIndex: lastIndex, duration: 450 },
  { mode: "done", duration: 2400 },
];

export function useDemoSequence(reducedMotion: boolean) {
  const [frameIndex, setFrameIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (reducedMotion) return;
    const frame = frames[frameIndex];
    timer.current = setTimeout(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, frame.duration);
    return () => clearTimeout(timer.current);
  }, [frameIndex, reducedMotion]);

  if (reducedMotion) {
    return frames[frames.length - 1];
  }

  return frames[frameIndex];
}
