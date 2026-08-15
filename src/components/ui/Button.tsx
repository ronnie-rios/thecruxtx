import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-md px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-[background-color,border-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-crux-blue/45 active:scale-[0.97] active:transition-transform active:duration-100 motion-reduce:transform-none motion-reduce:transition-none";

const variants = {
  solid:
    "bg-crux-blue text-white hover:bg-accent-hover active:bg-accent-active active:translate-y-px",
  outline:
    "border border-crux-blue text-crux-blue hover:bg-accent-soft active:bg-crux-blue-light/40 active:translate-y-px",
  // For dark surfaces (hero, footer): tints toward white instead of toward the
  // light accent, which would wash out against white text.
  outlineOnDark:
    "border border-white/70 text-white hover:border-white hover:bg-white/10 active:bg-white/20 active:translate-y-px focus-visible:ring-white/60",
} as const;

type Variant = keyof typeof variants;

export function Button({
  href,
  variant = "solid",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function SubmitButton({
  pending,
  children,
  className = "",
}: {
  pending: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={`${base} ${variants.solid} disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-crux-blue disabled:active:translate-y-0 ${className}`}
    >
      {children}
    </button>
  );
}
