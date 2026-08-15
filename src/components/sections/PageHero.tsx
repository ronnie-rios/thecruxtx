import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PageHero({
  heading,
  body,
  image,
}: {
  heading: string;
  body: string;
  image?: string;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden py-28 sm:py-40 ${
        image ? "bg-gray-900" : "bg-crux-navy"
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover grayscale"
          />
          {/* Neutral scrim, matching the home hero. */}
          <div className="absolute inset-0 -z-10 bg-gray-900/65" />
        </>
      )}

      <Container>
        <div className="max-w-3xl">
          <h1 className="text-h1 font-bold text-white">{heading}</h1>
          <span className="mt-5 block h-1.25 w-16 bg-crux-blue" />
          <p className="mt-7 text-base leading-relaxed text-white/80 sm:text-lg">
            {body}
          </p>
        </div>
      </Container>
    </section>
  );
}
