import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { Person } from "@/content/types";

/**
 * Single-advisor layout: a centered card, deliberately not a grid, so it
 * reads as intentional rather than as a row with a missing second member.
 */
export default function Team({
  heading,
  person,
  withBio = false,
}: {
  heading: string;
  person: Person;
  withBio?: boolean;
}) {
  return (
    <section className="bg-surface-alt py-20 sm:py-28">
      <Container>
        <Reveal className="flex justify-center">
          <SectionHeading align="center">{heading}</SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <Image
                src={person.image}
                alt={person.name}
                width={220}
                height={220}
                className="h-48 w-48 shrink-0 rounded-full object-cover sm:h-56 sm:w-56"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold uppercase tracking-wide text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">
                  {person.title}
                </p>
                {withBio && person.bio && (
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-body">
                    {person.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
