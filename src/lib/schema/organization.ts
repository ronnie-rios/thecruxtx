import { marc, site } from "@/content/site";
import { absoluteUrl, ids } from "./ids";
import type { JsonLdNode } from "./types";

/**
 * Deliberately Organization, not LocalBusiness/ProfessionalService — those
 * require a postal address, which the site does not publish anywhere.
 *
 * TODO: add `sameAs: [...]` once social profiles exist (LinkedIn company page
 * is the highest-value one for entity resolution; X/Facebook optional).
 */
export function organizationSchema(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    // Timeline's final entry: "2 May 2022 — Crux Consulting was launched."
    foundingDate: "2022-05-02",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/Crux-Consulting-Logo_WHITE.png"),
    },
    email: marc.email,
    telephone: marc.phone,
    founder: { "@id": ids.marc },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: marc.email,
      telephone: marc.phone,
      url: absoluteUrl("/contact"),
    },
  };
}
