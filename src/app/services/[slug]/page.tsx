import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import ServiceBody from "@/components/sections/ServiceBody";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import PricingComparison from "@/components/sections/PricingComparison";
import PricingTiers from "@/components/sections/PricingTiers";
import ContactCards from "@/components/sections/ContactCards";
import { getService, services, servicesContact } from "@/content/services";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

/** Every service is known at build time, so unknown slugs 404 rather than render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    // Plain string, so the root `%s | Crux Consulting` template applies.
    title: service.title,
    description: service.metaDescription ?? service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const breadcrumbs = graph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
  );

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        heading={service.title}
        body={service.intro}
        image={service.image}
      />
      <ServiceBody sections={service.sections} />
      {service.benefits && (
        <ServiceBenefits
          heading={service.benefits.heading}
          items={service.benefits.items}
        />
      )}
      {service.comparisonPhase && (
        <PricingComparison phase={service.comparisonPhase} />
      )}
      {service.tieredPhase && <PricingTiers phase={service.tieredPhase} />}
      <ContactCards
        heading={servicesContact.heading}
        body={servicesContact.body}
        cta={servicesContact.cta}
      />
    </>
  );
}
