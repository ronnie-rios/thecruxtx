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
    <section className="bg-crux-cloud py-20 sm:py-28">
      <Container>
        <Reveal className="flex justify-center">
          <SectionHeading align="center">{heading}</SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Without a bio the pair is compact, so w-fit lets mx-auto centre it;
              with one it fills the measure and the text sits alongside. */}
          <div
            className={`mx-auto mt-14 max-w-3xl ${withBio ? "w-full" : "w-fit"}`}
          >
            <div
              className={`flex flex-col items-center gap-8 sm:flex-row ${
                withBio ? "sm:items-start" : "sm:items-center"
              }`}
            >
              <Image
                src={person.image}
                alt={person.name}
                width={748}
                height={1024}
                sizes="(min-width: 640px) 240px, 208px"
                className="h-64 w-52 shrink-0 rounded-lg object-cover object-top shadow-sm sm:h-72 sm:w-60"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-h3 font-bold text-crux-slate">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-crux-blue">
                  {person.title}
                </p>
                {withBio && person.bio && (
                  // Left-aligned even on mobile: centring multi-paragraph copy
                  // rags the left edge and slows reading on a narrow column.
                  <div className="mt-5 space-y-4 text-left text-sm leading-relaxed text-crux-gray">
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
