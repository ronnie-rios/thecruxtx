import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { whyChooseUs } from "@/content/home";

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
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
          </div>

          <div className="space-y-8">
            {whyChooseUs.differentiators.map((text, i) => (
              <div key={i} className="flex gap-5">
                <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-crux-blue" />
                <p className="text-sm leading-relaxed text-crux-gray">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
