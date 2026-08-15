"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { Testimonial } from "@/content/types";

const ROTATE_MS = 7000;

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex justify-center gap-1 text-warning"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={18} className="fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials({
  heading,
  items,
}: {
  heading: string;
  items: readonly Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback(
    (next: number) => setIndex((next + items.length) % items.length),
    [items.length],
  );

  // Auto-advance, unless paused by hover/focus or there's nothing to rotate.
  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setInterval(() => go(index + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [index, paused, items.length, go]);

  const current = items[index];

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      {/* Photo bleeds in from the right and fades out before the text. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
        <Image
          src="/SnowyTrek-testimonial.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/60 to-transparent" />
      </div>

      <Container>
        <Reveal className="flex flex-col items-center">
          <SectionHeading align="center">{heading}</SectionHeading>
        </Reveal>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          {/* Every quote is rendered stacked in one grid cell, with the inactive
              ones hidden. The container sizes itself to the tallest, so rotating
              never shifts the controls — no hand-tuned min-height to outgrow. */}
          <div className="grid *:col-start-1 *:row-start-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
                aria-live="polite"
              >
                <Stars count={current.rating} />
                <blockquote className="mt-6 text-center text-base leading-relaxed text-crux-gray">
                  {current.quote}
                </blockquote>
                <figcaption className="mt-6 text-center text-xs font-semibold uppercase tracking-caps text-crux-blue">
                  {current.attribution}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Invisible copies that give the grid cell its height. Hidden from
                assistive tech and pointers; only their layout box matters. */}
            {items.map((item, i) => (
              <figure
                key={`spacer-${i}`}
                aria-hidden="true"
                className="pointer-events-none invisible"
              >
                <Stars count={item.rating} />
                <blockquote className="mt-6 text-center text-base leading-relaxed">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 text-center text-xs font-semibold uppercase tracking-caps">
                  {item.attribution}
                </figcaption>
              </figure>
            ))}
          </div>

          {items.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
                className="rounded-md p-2 text-crux-gray transition-colors duration-150 ease-crux hover:bg-gray-100 hover:text-crux-slate focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-crux-blue/45"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {items.map((item, i) => (
                  <button
                    key={item.attribution + i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 rounded-pill transition-all duration-200 ease-crux focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-crux-blue/45 ${
                      i === index
                        ? "w-6 bg-crux-blue"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
                className="rounded-md p-2 text-crux-gray transition-colors duration-150 ease-crux hover:bg-gray-100 hover:text-crux-slate focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-crux-blue/45"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
