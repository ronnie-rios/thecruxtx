import Container from "@/components/ui/Container";
import type { ComparisonPhase } from "@/content/types";

/** Check / dash cells carry text for screen readers, not just a glyph. */
function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-crux-slate">{value}</span>;
  }

  return value ? (
    <span className="text-crux-blue" aria-label="Included">
      <span aria-hidden>✓</span>
    </span>
  ) : (
    <span className="text-crux-gray/50" aria-label="Not included">
      <span aria-hidden>–</span>
    </span>
  );
}

export default function PricingComparison({ phase }: { phase: ComparisonPhase }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-t-lg bg-crux-blue px-8 py-6">
          <h2 className="font-sans text-h3 font-bold text-white">
            {phase.label}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {phase.summary}
          </p>
        </div>

        {/* Scrolls on narrow screens rather than breaking the page layout. */}
        <div className="overflow-x-auto rounded-b-lg border border-t-0 border-border-subtle">
          <table className="w-full min-w-3xl border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="w-2/5 bg-white px-6 py-4">
                  <span className="sr-only">Feature</span>
                </th>
                {phase.tiers.map((tier) => (
                  <th
                    key={tier.name}
                    scope="col"
                    className="bg-crux-navy px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-white"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
              <tr>
                <th
                  scope="row"
                  className="bg-white px-6 py-4 text-sm font-bold text-crux-blue"
                >
                  {phase.priceLabel}
                </th>
                {phase.tiers.map((tier) => (
                  <td
                    key={tier.name}
                    className="bg-white px-6 py-4 text-center text-base font-bold text-crux-blue"
                  >
                    {tier.price}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {phase.features.map((feature, index) => (
                <tr
                  key={feature.label}
                  className={index % 2 === 0 ? "bg-crux-cloud" : "bg-white"}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-sm font-normal leading-relaxed text-crux-slate"
                  >
                    {feature.label}
                  </th>
                  {feature.values.map((value, tierIndex) => (
                    <td
                      key={phase.tiers[tierIndex]?.name ?? tierIndex}
                      className="px-6 py-4 text-center"
                    >
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {phase.footnote && (
          <p className="mt-4 text-sm text-crux-gray">{phase.footnote}</p>
        )}
      </Container>
    </section>
  );
}
