"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  to: number;
  suffix?: string;
  /** Milliseconds. Longer than the brand motion range: this is a readable
   *  count, not a UI transition. */
  duration?: number;
  className?: string;
};

/**
 * Counts up to `to` once, when scrolled into view.
 *
 * Honors prefers-reduced-motion by rendering the final value immediately.
 */
export default function CountUp({
  to,
  suffix = "",
  duration = 1200,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic: fast start, settles onto the final number.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, to, duration]);

  return (
    <span ref={ref} className={className}>
      {/* Tabular figures stop the width jittering as digits change. */}
      <span className="tabular-nums">{value}</span>
      {suffix}
    </span>
  );
}
