import { marc } from "@/content/site";
import { absoluteUrl, ids } from "./ids";
import type { JsonLdNode } from "./types";

/** Marc is the sole advisor; the Person node anchors the firm's E-E-A-T. */
export function personSchema(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": ids.marc,
    name: marc.name,
    jobTitle: marc.title,
    // bio is optional on Person; omit the key entirely rather than emit "".
    ...(marc.bio?.length ? { description: marc.bio.join(" ") } : {}),
    image: absoluteUrl(marc.image),
    url: absoluteUrl("/about-us"),
    email: marc.email,
    telephone: marc.phone,
    worksFor: { "@id": ids.organization },
    knowsAbout: [
      "Tax advisory",
      "Accounting",
      "Business advisory",
      "Scaling operations",
      "Financial leadership",
    ],
  };
}
