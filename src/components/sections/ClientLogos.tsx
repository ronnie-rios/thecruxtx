import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { clients } from "@/content/home";

export default function ClientLogos() {
  return (
    <section className="border-y border-slate-200 bg-crux-cloud py-16">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-crux-gray">
            {clients.heading}
          </p>
          <div className="mt-10 grid grid-cols-2 items-center gap-10 sm:grid-cols-4">
            {clients.logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                width={180}
                height={70}
                className="mx-auto h-14 w-auto object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
