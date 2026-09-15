import { site } from "@/lib/site";
import { ProductComposition } from "./product/ProductComposition";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_820px_420px_at_50%_-8%,rgba(255,255,255,0.06),transparent_65%)]"
      />

      <div className="shell relative flex items-center justify-between pt-8 sm:pt-10">
        <span className="font-ui text-xl font-semibold tracking-tight text-heading sm:text-2xl">
          {site.name}
        </span>
        <Button
          href={site.mailtoHref}
          className="!px-6 !py-3 text-[14px] sm:text-[15px]"
        >
          Get in touch
        </Button>
      </div>

      <div className="shell pt-14 pb-10 text-center sm:pt-20 sm:pb-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="display text-heading">
            Show Hizen how the work gets done.
            <br />
            It handles it from there.
          </h1>
          <p className="lead mx-auto mt-6 max-w-3xl text-subtext">
            An intelligence layer on your browser that learns how your team
            works
            <br />
            and then does the work for them, without anyone having to build
            or deploy an agent.
          </p>
        </div>
      </div>

      <div className="shell pb-16 sm:pb-24">
        <ProductComposition />
      </div>
    </section>
  );
}
