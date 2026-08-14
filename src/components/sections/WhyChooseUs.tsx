import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whyChooseUs } from "@/content/home";

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading>{whyChooseUs.heading}</SectionHeading>
            <p className="mt-8 text-lg font-medium leading-relaxed text-ink">
              {whyChooseUs.tagline}
            </p>
            <div className="mt-10 flex items-baseline gap-4">
              <span className="text-6xl font-bold text-accent">
                {whyChooseUs.experience.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-body">
                {whyChooseUs.experience.label}
              </span>
            </div>
          </Reveal>

          <div className="space-y-8">
            {whyChooseUs.differentiators.map((text, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                  <p className="text-sm leading-relaxed text-slate-body">
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
