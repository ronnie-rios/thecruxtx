import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { whyChooseUs } from "@/content/home";

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading>{whyChooseUs.heading}</SectionHeading>
            <p className="mt-8 text-lg font-medium leading-relaxed text-crux-slate">
              {whyChooseUs.tagline}
            </p>
            <div className="mt-10 flex items-baseline gap-4">
              <CountUp
                to={whyChooseUs.experience.value}
                suffix={whyChooseUs.experience.suffix}
                className="text-6xl font-bold text-crux-blue"
              />
              <span className="text-sm font-semibold uppercase tracking-wider text-crux-gray">
                {whyChooseUs.experience.label}
              </span>
            </div>
          </Reveal>

          <div className="space-y-8">
            {whyChooseUs.differentiators.map((text, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-crux-blue" />
                  <p className="text-sm leading-relaxed text-crux-gray">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
