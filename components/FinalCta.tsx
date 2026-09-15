import { site } from "@/lib/site";
import { Button } from "./ui/Button";

export function FinalCta() {
  return (
    <section className="border-t border-hairline bg-recessed/70">
      <div className="shell py-24 text-center sm:py-32">
        <h2 className="heading text-ink">Start with one workflow.</h2>
        <p className="lead mx-auto mt-4 max-w-md text-muted">
          Show us a repetitive task your team still does manually.
          We&apos;ll start there.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={site.mailtoHref}>Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
