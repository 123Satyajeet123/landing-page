import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-recessed/70">
      <div className="shell flex flex-col items-center justify-between gap-3 py-8 font-ui text-[12.5px] text-faint sm:flex-row">
        <span>{site.name}</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
