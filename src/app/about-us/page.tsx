import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Mission from "@/components/sections/Mission";
import Team from "@/components/sections/Team";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import ContactCards from "@/components/sections/ContactCards";
import {
  aboutContact,
  aboutHero,
  aboutMeta,
  advisorSection,
} from "@/content/about";
import { testimonialsSection } from "@/content/home";
import { marc, testimonials } from "@/content/site";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: aboutMeta.title },
  description: aboutMeta.description,
  alternates: { canonical: "/about-us" },
};

const breadcrumbs = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
  ]),
);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        heading={aboutHero.heading}
        body={aboutHero.body}
        image={aboutHero.image}
      />
      <Mission />
      <Team heading={advisorSection.heading} person={marc} withBio />
      <Timeline />
      <Testimonials heading={testimonialsSection.heading} items={testimonials} />
      <ContactCards
        heading={aboutContact.heading}
        body={aboutContact.body}
        cta={aboutContact.cta}
      />
    </>
  );
}
