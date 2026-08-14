import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whatWeDo } from "@/content/home";

export default function WhatWeDo() {
  return (
    <section id={whatWeDo.id} className="bg-surface-alt py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center">
          <SectionHeading align="center">{whatWeDo.heading}</SectionHeading>
          <p className="mt-8 max-w-2xl text-center text-lg font-medium text-ink">
            {whatWeDo.taglineLead}{" "}
            <em className="not-italic font-bold text-accent">
              {whatWeDo.taglineOn}
            </em>{" "}
            {whatWeDo.taglineMiddle}{" "}
            <em className="not-italic font-bold text-accent">
              {whatWeDo.taglineIn}
            </em>{" "}
            {whatWeDo.taglineTrail}
          </p>
          <p className="mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-body">
            {whatWeDo.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whatWeDo.services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.1}>
              <article className="h-full rounded-sm border-t-2 border-accent bg-white p-8 shadow-sm">
                <p className="text-3xl font-bold text-accent/40">
                  {service.number}
                </p>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-body">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
