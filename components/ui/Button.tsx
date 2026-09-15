import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-ui text-[13.5px] font-medium transition-all duration-150 ease-out";

  const variants: Record<Variant, string> = {
    primary:
      "bg-heading text-mockup-ink shadow-[0_1px_1px_rgba(0,0,0,0.2),0_8px_20px_-8px_rgba(0,0,0,0.55)] hover:-translate-y-px hover:bg-[#e5e5e5] hover:shadow-[0_1px_1px_rgba(0,0,0,0.22),0_14px_28px_-10px_rgba(0,0,0,0.6)] active:translate-y-0 active:bg-[#d4d4d4] active:shadow-[0_1px_1px_rgba(0,0,0,0.2),0_4px_10px_-6px_rgba(0,0,0,0.5)]",
    ghost: "text-subtext hover:text-heading",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
