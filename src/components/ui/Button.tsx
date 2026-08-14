import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-sm px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  solid: "bg-accent text-white hover:bg-accent-soft",
  outline:
    "border border-current text-ink hover:bg-ink hover:text-white hover:border-ink",
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
      className={`${base} ${variants.solid} disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${className}`}
    >
      {children}
    </button>
  );
}
