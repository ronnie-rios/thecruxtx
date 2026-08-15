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
        className={`text-h2 sm:text-h1 font-bold uppercase tracking-wide ${
          tone === "light" ? "text-white" : "text-crux-slate"
        } ${className}`}
      >
        {children}
      </h2>
      {/* Recurring 5px Crux Blue rule beneath the heading. */}
      <span
        className={`mt-4 block h-1.25 w-16 bg-crux-blue ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
