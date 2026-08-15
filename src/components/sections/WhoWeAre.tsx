import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whoWeAre } from "@/content/home";

export default function WhoWeAre() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHeading>{whoWeAre.heading}</SectionHeading>
            <p className="mt-8 text-base leading-relaxed text-crux-gray sm:text-lg">
              {whoWeAre.body}
            </p>
            <div className="mt-9">
              <Button href={whoWeAre.cta.href} variant={whoWeAre.cta.variant}>
                {whoWeAre.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Image
              src="/Mountain-Peak_BW1-split.png"
              alt=""
              width={720}
              height={720}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
