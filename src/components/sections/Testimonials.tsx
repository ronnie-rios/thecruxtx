import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { Testimonial } from "@/content/types";

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-1 text-crux-blue-light"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={16} strokeWidth={2} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials({
  heading,
  items,
}: {
  heading: string;
  items: readonly Testimonial[];
}) {
  return (
    <section className="bg-crux-navy py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center">
          <SectionHeading align="center" tone="light">
            {heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.attribution + i} delay={i * 0.1}>
              <figure className="h-full rounded-sm bg-white/5 p-8 ring-1 ring-white/10">
                <Stars count={item.rating} />
                <blockquote className="mt-5 text-sm leading-relaxed text-white/80">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs font-semibold uppercase tracking-wider text-crux-blue-light">
                  {item.attribution}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
