import { site } from "@/lib/site";
import { ProductComposition } from "./product/ProductComposition";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="shell flex items-center justify-between pt-8 sm:pt-10">
        <span className="font-ui text-xl font-semibold tracking-tight text-ink sm:text-2xl">
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
        <div className="mx-auto max-w-3xl">
          <h1 className="display text-ink">{site.headline}</h1>
          <p className="lead mx-auto mt-6 max-w-2xl text-muted">
            {site.subtext}
          </p>
        </div>
      </div>

      <div className="shell pb-16 sm:pb-24">
        <ProductComposition />
      </div>
    </section>
  );
}
