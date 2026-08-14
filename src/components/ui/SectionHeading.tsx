import type { ReactNode } from "react";

export default function SectionHeading({
  children,
  align = "left",
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2
        className={`text-3xl sm:text-4xl font-bold uppercase tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        } ${className}`}
      >
        {children}
      </h2>
      <span
        className={`mt-4 block h-0.5 w-16 bg-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
