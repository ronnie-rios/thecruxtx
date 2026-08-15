import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { whoWeAre } from "@/content/home";

export default function WhoWeAre() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading>{whoWeAre.heading}</SectionHeading>
            <p className="mt-8 text-base leading-relaxed text-crux-gray sm:text-lg">
              {whoWeAre.body}
            </p>
            <div className="mt-9">
              <Button href={whoWeAre.cta.href} variant={whoWeAre.cta.variant}>
                {whoWeAre.cta.label}
              </Button>
            </div>
          </div>

          {/* Decorative only — hidden on mobile, where the image costs a
              screenful of scroll without adding information. Capped at the
              source's native 439px: the file has no detail beyond that, so
              letting it fill the column just upscales it into mush. */}
          <div className="hidden md:block">
            <Image
              src="/Mountain-Peak_BW1-split.png"
              alt=""
              width={439}
              height={660}
              sizes="439px"
              className="mx-auto h-auto w-full max-w-[439px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
