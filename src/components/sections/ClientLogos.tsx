import Image from "next/image";
import Container from "@/components/ui/Container";
import { clients } from "@/content/home";

export default function ClientLogos() {
  return (
    <section className="border-y border-border-subtle bg-white py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-crux-gray">
          {clients.heading}
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-10 sm:grid-cols-4">
          {clients.logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.image}
              alt={logo.name}
              width={768}
              height={300}
              sizes="240px"
              className="mx-auto h-20 w-auto object-contain opacity-60 grayscale transition duration-200 ease-crux hover:opacity-100 hover:grayscale-0 motion-reduce:transition-none"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
