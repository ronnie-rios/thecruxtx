import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cruxDefinition, mission, stats } from "@/content/about";

export default function Mission() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-snug text-ink sm:text-3xl">
            {mission.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-body">
            {mission.body}
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Image
              src={cruxDefinition.image}
              alt=""
              width={640}
              height={460}
              className="w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-2 border-accent pl-6 text-base leading-relaxed text-slate-body">
              {cruxDefinition.definition}
            </blockquote>
            <p className="mt-7 text-xl font-bold uppercase tracking-tight text-ink">
              {cruxDefinition.emphasis}
            </p>
            <dl className="mt-10 flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-body">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-4xl font-bold text-accent">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
