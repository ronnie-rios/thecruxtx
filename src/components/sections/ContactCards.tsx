import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { marc } from "@/content/site";

/**
 * One contact card, centered. Marc is the sole point of contact.
 */
export default function ContactCards({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center">
          <SectionHeading align="center">{heading}</SectionHeading>
          <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-crux-gray">
            {body}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-sm rounded-lg border border-border-subtle bg-white p-8 text-center shadow-sm">
            <h3 className="text-lg font-bold uppercase tracking-wide text-crux-slate">
              {marc.name}
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-crux-blue">
              {marc.title}
            </p>
            <div className="mt-6 space-y-2 text-sm text-crux-gray">
              <a
                href={`tel:${marc.phone.replace(/[^\d+]/g, "")}`}
                className="block transition-colors hover:text-crux-blue"
              >
                {marc.phone}
              </a>
              <a
                href={`mailto:${marc.email}`}
                className="block transition-colors hover:text-crux-blue"
              >
                {marc.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
