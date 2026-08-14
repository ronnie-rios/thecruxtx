import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactCards from "@/components/sections/ContactCards";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { contactHero, contactMeta, contactSection } from "@/content/contact";

export const metadata: Metadata = {
  title: { absolute: contactMeta.title },
  description: contactMeta.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero heading={contactHero.heading} body={contactHero.body} />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-xl">
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <ContactCards
        heading={contactSection.heading}
        body={contactSection.body}
      />
    </>
  );
}
