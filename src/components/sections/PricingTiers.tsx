import Container from "@/components/ui/Container";
import type { TieredPhase } from "@/content/types";

export default function PricingTiers({ phase }: { phase: TieredPhase }) {
  return (
    <section className="bg-crux-cloud py-20 sm:py-28">
      <Container>
        <div className="rounded-t-lg bg-crux-blue px-8 py-6">
          <h2 className="font-sans text-h3 font-bold text-white">
            {phase.label}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {phase.summary}
          </p>
        </div>

        <div className="grid gap-px rounded-b-lg bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {phase.tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col bg-white p-6">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-crux-slate">
                {tier.name}
              </h3>
              <p className="mt-3 text-h3 font-bold text-crux-blue">
                {tier.price}
                <span className="text-sm font-medium text-crux-gray">/mo</span>
              </p>
              {tier.note && (
                <p className="mt-1 text-xs leading-relaxed text-crux-gray">
                  {tier.note}
                </p>
              )}

              {tier.inherits && (
                <p className="mt-5 text-sm font-bold text-crux-slate">
                  {tier.inherits}
                </p>
              )}

              <ul className={`space-y-3 ${tier.inherits ? "mt-3" : "mt-5"}`}>
                {tier.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-crux-gray"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crux-blue"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {phase.footnote && (
          <p className="mt-4 text-sm text-crux-gray">{phase.footnote}</p>
        )}
      </Container>
    </section>
  );
}
