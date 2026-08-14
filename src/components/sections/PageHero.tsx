import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <h1 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            {heading}
          </h1>
          <span className="mt-5 block h-0.5 w-16 bg-accent" />
          <p className="mt-7 text-base leading-relaxed text-white/80 sm:text-lg">
            {body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
