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
