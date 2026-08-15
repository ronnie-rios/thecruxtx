import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { story } from "@/content/about";

export default function Timeline() {
  return (
    <section className="bg-crux-cloud py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center">
          <SectionHeading align="center">{story.heading}</SectionHeading>
        </Reveal>

        <ol className="mx-auto mt-14 max-w-2xl border-l border-slate-300">
          {story.entries.map((entry, i) => (
            <Reveal key={entry.date} delay={i * 0.05}>
              <li className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-crux-blue" />
                <p className="text-xs font-semibold uppercase tracking-wider text-crux-blue">
                  {entry.date}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-crux-gray">
                  {entry.label}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
