import { site } from "@/lib/site";
import { Button } from "./ui/Button";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-paper/95 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-ui text-[15px] font-semibold tracking-tight text-ink"
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 font-ui text-[13.5px] text-muted sm:flex">
          <a href="#how-it-works" className="transition-colors hover:text-ink">
            How it works
          </a>
        </nav>
        <Button href={site.mailtoHref} className="!px-4 !py-2 text-[13px]">
          Get in touch
        </Button>
      </div>
    </header>
  );
}
