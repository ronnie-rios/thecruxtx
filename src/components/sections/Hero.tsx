import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-crux-navy">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-crux-navy via-crux-navy/80 to-transparent" />

      <Container className="relative py-28 sm:py-40">
        <Reveal className="max-w-2xl">
          <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-6xl">
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
                variant={cta.variant}
                className={cta.variant === "outline" ? "text-white" : ""}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
