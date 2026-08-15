"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * The single motion primitive for the site: a fade + short rise as the element
 * scrolls into view, once. Tune the site's whole feel here.
 *
 * Honors prefers-reduced-motion by rendering statically — no transform, no fade.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      // Brand motion: 280ms on cubic-bezier(0.2, 0, 0, 1) — quick, no bounce.
      transition={{ duration: 0.28, delay, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
