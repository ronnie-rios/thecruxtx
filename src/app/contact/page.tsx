import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { contactHero, contactMeta, contactSection } from "@/content/contact";
import { marc } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: contactMeta.title },
  description: contactMeta.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading={contactHero.heading}
        body={contactHero.body}
        image={contactHero.image}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-h2 font-bold uppercase tracking-wide text-crux-slate sm:text-h1">
                {contactSection.heading}
              </h2>
              <span className="mt-5 block h-1.25 w-16 bg-crux-blue" />
              <p className="mt-7 text-base leading-relaxed text-crux-gray">
                {contactSection.body}
              </p>

              <dl className="mt-10 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-caps text-crux-blue">
                    {marc.name}
                  </dt>
                  <dd className="mt-1 text-crux-gray">{marc.title}</dd>
                </div>
                <dd>
                  <a
                    href={`tel:${marc.phone.replace(/[^\d+]/g, "")}`}
                    className="block text-crux-gray transition-colors duration-150 ease-crux hover:text-crux-blue"
                  >
                    {marc.phone}
                  </a>
                  <a
                    href={`mailto:${marc.email}`}
                    className="block text-crux-gray transition-colors duration-150 ease-crux hover:text-crux-blue"
                  >
                    {marc.email}
                  </a>
                </dd>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-border-subtle bg-white p-8 shadow-md">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
