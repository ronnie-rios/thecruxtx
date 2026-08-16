import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Service } from "@/content/types";

export default function ServicesGrid({
  heading,
  items,
}: {
  heading: string;
  items: readonly Service[];
}) {
  return (
    <section className="bg-crux-cloud py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading align="center">{heading}</SectionHeading>
        </div>

        {/* A lone service centers instead of sitting in a half-empty row. */}
        <div
          className={`mt-14 grid gap-8 ${
            items.length === 1 ? "mx-auto max-w-xl" : "md:grid-cols-2"
          }`}
        >
          {items.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group h-full rounded-lg border border-border-subtle border-t-4 border-t-crux-blue bg-white p-8 shadow-sm transition-all duration-200 ease-crux hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
            >
              <h3 className="text-h3 font-bold text-crux-slate">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-crux-gray">
                {service.summary}
              </p>
              <span className="mt-6 inline-block text-sm font-medium uppercase tracking-wider text-crux-blue">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
