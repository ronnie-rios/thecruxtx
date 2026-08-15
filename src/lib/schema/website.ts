import { site } from "@/content/site";
import { ids } from "./ids";
import type { JsonLdNode } from "./types";

/** No SearchAction — the site has no search endpoint to point at. */
export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": ids.organization },
  };
}
