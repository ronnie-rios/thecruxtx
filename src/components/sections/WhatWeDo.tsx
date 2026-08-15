import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { whatWeDo } from "@/content/home";

export default function WhatWeDo() {
  return (
    <section id={whatWeDo.id} className="bg-crux-cloud py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading align="center">{whatWeDo.heading}</SectionHeading>
          <p className="mt-8 max-w-2xl text-center text-lg font-medium text-crux-slate">
            {whatWeDo.taglineLead}{" "}
            <em className="not-italic font-bold text-crux-blue">
              {whatWeDo.taglineOn}
            </em>{" "}
            {whatWeDo.taglineMiddle}{" "}
            <em className="not-italic font-bold text-crux-blue">
              {whatWeDo.taglineIn}
            </em>{" "}
            {whatWeDo.taglineTrail}
          </p>
          <p className="mt-5 max-w-2xl text-center text-base leading-relaxed text-crux-gray">
            {whatWeDo.body}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whatWeDo.services.map((service) => (
            <article
              key={service.number}
              className="h-full rounded-lg border border-border-subtle border-t-4 border-t-crux-blue bg-white p-8 shadow-sm transition-all duration-200 ease-crux hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
            >
              <p className="text-3xl font-bold text-crux-blue/40">
                {service.number}
              </p>
              <h3 className="mt-4 text-h3 font-bold text-crux-slate">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-crux-gray">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
