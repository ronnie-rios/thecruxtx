import { site } from "@/content/site";

/**
 * Stable @id values so nodes can reference each other across the graph
 * instead of repeating themselves.
 */
export const ids = {
  organization: `${site.url}#organization`,
  website: `${site.url}#website`,
  marc: `${site.url}#marc`,
} as const;

/** Resolves a site-relative path to an absolute URL for schema fields. */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
