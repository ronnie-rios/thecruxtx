"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gray-900">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top grayscale"
      />
      {/* Neutral scrim — keeps the photo legible without tinting it. */}
      <div className="absolute inset-0 bg-gray-900/65" />

      <Container className="relative py-28 sm:py-40">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <h1 className="text-display font-bold text-white">
            {hero.headlineLead}{" "}
            <span className="text-crux-blue">{hero.headlineEmphasis}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant === "outline" ? "outlineOnDark" : cta.variant}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
