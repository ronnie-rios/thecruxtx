import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ContactCards from "@/components/sections/ContactCards";
import {
  services,
  servicesContact,
  servicesHero,
  servicesIntro,
  servicesMeta,
} from "@/content/services";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: servicesMeta.title },
  description: servicesMeta.description,
  alternates: { canonical: "/services" },
};

const breadcrumbs = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        heading={servicesHero.heading}
        body={servicesHero.body}
        image={servicesHero.image}
      />
      <ServicesGrid heading={servicesIntro.heading} items={services} />
      <ContactCards
        heading={servicesContact.heading}
        body={servicesContact.body}
        cta={servicesContact.cta}
      />
    </>
  );
}
