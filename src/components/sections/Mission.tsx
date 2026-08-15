import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cruxDefinition, mission, stats } from "@/content/about";

export default function Mission() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-h2 font-bold leading-snug text-crux-slate sm:text-h1">
              {mission.heading}
            </h2>
            <span className="mt-5 block h-1.25 w-16 bg-crux-blue" />
            <p className="mt-7 text-base leading-relaxed text-crux-gray">
              {mission.body}
            </p>
            <blockquote className="mt-8 border-l-2 border-crux-blue pl-6 text-base leading-relaxed text-crux-gray">
              {cruxDefinition.definition}
            </blockquote>
            <p className="mt-7 text-xl font-bold uppercase tracking-tight text-crux-slate">
              {cruxDefinition.emphasis}
            </p>
            <dl className="mt-10 flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-crux-gray">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-4xl font-bold text-crux-blue">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto max-w-md lg:mr-0">
              <Image
                src={cruxDefinition.image}
                alt=""
                width={640}
                height={640}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="w-full rounded-lg object-cover shadow-md"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
