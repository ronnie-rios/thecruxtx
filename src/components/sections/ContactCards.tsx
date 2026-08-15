import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { marc } from "@/content/site";
import type { Cta } from "@/content/types";

/**
 * One contact card, centered. Marc is the sole point of contact.
 */
export default function ContactCards({
  heading,
  body,
  cta,
}: {
  heading: string;
  body: string;
  cta?: Cta;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading align="center">{heading}</SectionHeading>
          <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-crux-gray">
            {body}
          </p>
          {cta && (
            <div className="mt-8">
              <Button href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            </div>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-sm rounded-lg border border-border-subtle bg-white p-8 text-center shadow-sm">
          <h3 className="text-h3 font-bold text-crux-slate">{marc.name}</h3>
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
      </Container>
    </section>
  );
}
