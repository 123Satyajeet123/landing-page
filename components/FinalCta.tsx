import { site } from "@/lib/site";
import { Button } from "./ui/Button";

export function FinalCta() {
  return (
    <section className="border-t border-hairline bg-paper">
      <div className="shell py-24 text-center sm:py-32">
        <h2 className="heading mx-auto max-w-2xl text-ink">
          What&apos;s one thing your team shouldn&apos;t still be doing
          manually?
        </h2>
        <p className="lead mx-auto mt-4 max-w-md text-muted">
          Show it to us and let Hizen take it over.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={site.mailtoHref}>Show us a workflow</Button>
        </div>
      </div>
    </section>
  );
}
