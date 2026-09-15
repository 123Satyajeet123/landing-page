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
      "bg-ink text-paper shadow-[0_1px_1px_rgba(20,20,19,0.1),0_8px_20px_-8px_rgba(20,20,19,0.45)] hover:-translate-y-px hover:bg-[#232320] hover:shadow-[0_1px_1px_rgba(20,20,19,0.12),0_14px_28px_-10px_rgba(20,20,19,0.5)] active:translate-y-0 active:bg-ink active:shadow-[0_1px_1px_rgba(20,20,19,0.1),0_4px_10px_-6px_rgba(20,20,19,0.4)]",
    ghost: "text-ink hover:text-muted",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
