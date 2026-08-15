"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { story } from "@/content/about";

export default function Timeline() {
  const railRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();

  // Track the rail from when its top reaches the viewport's lower third until
  // its bottom clears the middle — the fill then completes as the last entry
  // lands, rather than only once the section has scrolled fully past.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 85%", "end 55%"],
  });

  // Spring keeps the fill from twitching with wheel/trackpad jitter.
  const fillScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading align="center">{story.heading}</SectionHeading>
        </div>

        <ol
          ref={railRef}
          className="relative mx-auto mt-14 max-w-3xl sm:mt-20"
        >
          {/* The rail: a static track with a blue fill scaled by scroll. On
              mobile it sits at the far left; on sm+ it runs down the centre. */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-1.25 w-px bg-border-subtle sm:left-1/2 sm:-translate-x-1/2"
          >
            <motion.div
              className="h-full w-full origin-top bg-crux-blue"
              style={{ scaleY: reduceMotion ? 1 : fillScale }}
            />
          </div>

          {story.entries.map((entry, i) => {
            // Alternate sides on sm+; every entry sits right of the rail on mobile.
            const onLeft = i % 2 === 0;

            return (
              <li
                key={entry.date}
                className="relative pb-12 pl-8 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-x-16 sm:pl-0"
              >
                <Dot />

                <div
                  className={
                    onLeft
                      ? "sm:col-start-1 sm:text-right"
                      : "sm:col-start-2 sm:text-left"
                  }
                >
                  <p className="font-display text-base font-bold text-crux-slate sm:text-lg">
                    {entry.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-crux-gray">
                    {entry.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/**
 * The node on the rail. Sits at the far left on mobile and on the centre line
 * from sm up, matching the rail's own position.
 */
function Dot() {
  return (
    <span
      aria-hidden
      className="absolute left-0 top-1.5 z-10 h-2.5 w-2.5 rounded-full bg-crux-blue sm:left-1/2 sm:-translate-x-1/2"
    />
  );
}
