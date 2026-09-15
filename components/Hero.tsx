import { site } from "@/lib/site";
import { ProductComposition } from "./product/ProductComposition";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="shell pt-14 pb-10 sm:pt-20 sm:pb-14">
        <div className="max-w-2xl">
          <h1 className="display text-ink">{site.tagline}</h1>
          <p className="lead mt-6 max-w-xl text-muted">
            Show us how the work gets done. Hizen learns the process,
            understands the logic behind it, and turns it into agents that
            can run the work for you.
          </p>
          <div className="mt-8">
            <Button href={site.mailtoHref}>Get in touch</Button>
          </div>
        </div>
      </div>

      <div className="shell pb-16 sm:pb-24">
        <ProductComposition />
      </div>
    </section>
  );
}
