import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Benefit } from "@/content/types";

export default function ServiceBenefits({
  heading,
  items,
}: {
  heading: string;
  items: readonly Benefit[];
}) {
  return (
    <section className="bg-crux-cloud py-20 sm:py-28">
      <Container>
        <SectionHeading>{heading}</SectionHeading>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crux-blue"
              />
              <div>
                <h3 className="font-bold text-crux-slate">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-crux-gray">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
