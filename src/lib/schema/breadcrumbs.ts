import { absoluteUrl } from "./ids";
import type { JsonLdNode } from "./types";

export type Crumb = {
  name: string;
  path: string;
};

/** Trail must start at the home page and end at the current page. */
export function breadcrumbSchema(trail: readonly Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
