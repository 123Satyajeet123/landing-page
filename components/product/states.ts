export type StepStatus = "pending" | "working" | "done";

export interface WorkflowStep {
  id: string;
  label: string;
}

// One invented, generic operations workflow. Reused by the hero and by
// "How it works" so the two never drift out of sync.
export const workflowSteps: WorkflowStep[] = [
  { id: "open", label: "Open the customer's account" },
  { id: "check", label: "Check the renewal date" },
  { id: "decide", label: "Decide which plan applies" },
  { id: "update", label: "Update the account" },
  { id: "confirm", label: "Prepare a confirmation email" },
  { id: "send", label: "Send it" },
];

export const decisionStep = {
  question: "Which plan should I apply?",
  options: ["Standard renewal", "Upgrade to Pro", "Ask sales first"],
  chosen: "Upgrade to Pro",
} as const;

export function statusFor(index: number, activeIndex: number): StepStatus {
  if (index < activeIndex) return "done";
  if (index === activeIndex) return "working";
  return "pending";
}
