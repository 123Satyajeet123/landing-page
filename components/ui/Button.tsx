import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-ui text-[13.5px] font-medium transition-colors duration-150";

  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-paper hover:bg-ink/85 active:bg-ink/95",
    ghost:
      "text-ink hover:text-muted",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
