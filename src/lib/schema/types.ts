/** A single schema.org node. Kept loose — no schema-dts dependency for 4 types. */
export type JsonLdNode = Record<string, unknown>;

/** A `@graph` document ready to serialize into a ld+json script tag. */
export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": readonly JsonLdNode[];
};
