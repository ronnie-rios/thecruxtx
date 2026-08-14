import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whoWeAre } from "@/content/home";

export default function WhoWeAre() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading>{whoWeAre.heading}</SectionHeading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-body sm:text-lg">
            {whoWeAre.body}
          </p>
          <div className="mt-9">
            <Button href={whoWeAre.cta.href} variant={whoWeAre.cta.variant}>
              {whoWeAre.cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
