import { HizenPanel } from "./product/HizenPanel";
import { decisionStep, workflowSteps } from "./product/states";

export function ProductProof() {
  return (
    <section className="border-y border-hairline bg-recessed/70">
      <div className="shell py-20 sm:py-28">
        <p className="lead mx-auto max-w-xl text-center text-ink">
          See what Hizen has learned, what&apos;s running, and where it needs
          you.
        </p>

        <div
          role="img"
          aria-label={`Three snapshots of the Hizen interface: a summary of the steps it saw, a workflow in progress with some steps done and "${workflowSteps[3].label}" underway, and a moment where it is waiting on a person to choose between "${decisionStep.options.join('", "')}".`}
          className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-3"
        >
          <div className="h-[240px]">
            <HizenPanel mode="saw" />
          </div>
          <div className="h-[240px]">
            <HizenPanel mode="working" activeIndex={3} />
          </div>
          <div className="h-[240px]">
            <HizenPanel mode="needsInput" />
          </div>
        </div>
      </div>
    </section>
  );
}
