/**
 * Renders a schema.org JSON-LD block.
 *
 * Uses dangerouslySetInnerHTML rather than a JSX text child: React escapes
 * `<` and `&` in text children, which corrupts the JSON. All data is authored
 * in src/content, never user input, so there is nothing to inject.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
