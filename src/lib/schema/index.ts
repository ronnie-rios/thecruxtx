import type { JsonLdGraph, JsonLdNode } from "./types";

export { breadcrumbSchema, type Crumb } from "./breadcrumbs";
export { organizationSchema } from "./organization";
export { personSchema } from "./person";
export { websiteSchema } from "./website";
export { absoluteUrl, ids } from "./ids";
export type { JsonLdGraph, JsonLdNode } from "./types";

/** Wraps nodes into a single @graph document so they can cross-reference by @id. */
export function graph(...nodes: readonly JsonLdNode[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
