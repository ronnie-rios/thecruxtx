import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ServiceSection } from "@/content/types";

/**
 * Renders a service's body sections, alternating background for rhythm.
 */
export default function ServiceBody({
  sections,
}: {
  sections: readonly ServiceSection[];
}) {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-20 sm:py-28 ${
            index % 2 === 1 ? "bg-crux-cloud" : ""
          }`}
        >
          <Container>
            <div className="max-w-3xl">
              <SectionHeading>{section.heading}</SectionHeading>
              <p className="mt-8 text-base leading-relaxed text-crux-gray">
                {section.body}
              </p>
              {section.points && (
                <ul className="mt-6 space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-relaxed text-crux-gray"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crux-blue"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
