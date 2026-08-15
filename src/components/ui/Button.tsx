import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-md px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ease-crux focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-crux-blue/45 motion-reduce:transform-none motion-reduce:transition-none";

const variants = {
  solid:
    "bg-crux-blue text-white hover:bg-accent-hover active:bg-accent-active active:translate-y-px",
  outline:
    "border border-crux-blue text-crux-blue hover:bg-accent-soft active:bg-crux-blue-light/40 active:translate-y-px",
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
