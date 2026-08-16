export type Cta = {
  label: string;
  href: string;
  variant: "solid" | "outline";
};

export type NavLink = {
  label: string;
  href: string;
};

export type Person = {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  bio?: readonly string[];
};

export type Testimonial = {
  quote: string;
  attribution: string;
  rating: number;
};

export type NumberedItem = {
  number: string;
  title: string;
  body: string;
};

export type ServiceSection = {
  heading: string;
  body: string;
  /** Optional bullets rendered under the body. */
  points?: readonly string[];
};

/** A bolded lead-in with supporting copy — the "Why sign up" list. */
export type Benefit = {
  title: string;
  body: string;
};

export type PlanTier = {
  name: string;
  price: string;
  /** Shown under the price, e.g. "capped at $500". */
  note?: string;
};

export type PlanFeature = {
  label: string;
  /**
   * One entry per tier, in tier order. `true` renders a check, `false` a
   * dash, and a string renders literally (e.g. "2 rounds").
   */
  values: readonly (boolean | string)[];
};

/** Phase 1 shape: shared features compared across tiers. */
export type ComparisonPhase = {
  label: string;
  summary: string;
  priceLabel: string;
  tiers: readonly PlanTier[];
  features: readonly PlanFeature[];
  footnote?: string;
};

/** Phase 2 shape: each tier carries its own cumulative deliverables. */
export type TieredPhase = {
  label: string;
  summary: string;
  priceLabel: string;
  tiers: readonly (PlanTier & {
    /** Renders above the list, e.g. "Level 1, plus:". */
    inherits?: string;
    deliverables: readonly string[];
  })[];
  footnote?: string;
};

export type Service = {
  slug: string;
  title: string;
  /** One-line summary — the hub card blurb. */
  summary: string;
  /** Search-result pitch. Falls back to `summary` when unset. */
  metaDescription?: string;
  /** Hero sub-copy on the detail page. */
  intro: string;
  sections: readonly ServiceSection[];
  image?: string;
  benefits?: { heading: string; items: readonly Benefit[] };
  comparisonPhase?: ComparisonPhase;
  tieredPhase?: TieredPhase;
};

export type ClientLogo = {
  name: string;
  image: string;
};

export type TimelineEntry = {
  date: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "textarea";
  placeholder: string;
  required: boolean;
  /** Renders at half width on wider screens, so two fields share a row. */
  half?: boolean;
};
