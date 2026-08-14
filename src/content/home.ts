import type { ClientLogo, Cta, NumberedItem } from "./types";

export const homeMeta = {
  title: "Crux Consulting | Helping You Scale New Heights",
  description:
    "We partner with rapidly scaling businesses to overcome the challenges of growth and scale within their enterprise.",
} as const;

export const hero = {
  /** "scale new heights" renders as the emphasized second line. */
  headlineLead: "Helping You",
  headlineEmphasis: "scale new heights",
  body: "We partner with rapidly scaling businesses to overcome the challenges of growth and scale within their enterprise.",
  ctas: [
    { label: "Let's Start", href: "/contact", variant: "solid" },
    { label: "Contact Us", href: "/contact", variant: "outline" },
  ] satisfies readonly Cta[],
  image: "/hero.jpg",
} as const;

export const whoWeAre = {
  heading: "Who We Are",
  body: "Crux Consulting is a boutique advisory firm. We help organizations develop and deploy a rigorous plan to increase profitability and performance through people and process. Does your organization have a plan to reach your long-term goals?",
  cta: { label: "Know More", href: "/about-us", variant: "outline" } satisfies Cta,
} as const;

export const whatWeDo = {
  /** Anchor target for the retargeted "Discover More" CTA. */
  id: "what-we-do",
  heading: "What We Do",
  taglineLead: "We focus on working",
  taglineOn: "ON",
  taglineMiddle: "the business, not",
  taglineIn: "IN",
  taglineTrail: "the business.",
  body: "Enterprise planning is essential to achieving long-term success and reaching goals. We help create a strategic plan that will empower the team and maximize opportunities for the organization.",
  services: [
    {
      number: ".01",
      title: "The Customers",
      body: "We help define the best-in-class products and services to offer to your customers with a focus on customer satisfaction.",
    },
    {
      number: ".02",
      title: "The Team",
      body: "We help cultivate and develop performance-driven team members within your organization to create sustainable rapid future growth.",
    },
    {
      number: ".03",
      title: "The Owners",
      body: "We partner with owners to build a highly profitable company with an intentional approach to growth by data-driven decisions",
    },
  ] satisfies readonly NumberedItem[],
} as const;

export const whyChooseUs = {
  heading: "Why Choose Us",
  tagline: "The crux of the climb for your organization is our passion!",
  differentiators: [
    "We have been in your shoes. As career entrepreneurs we have overcome many of the same challenges business owners and leaders face in growing an organization",
    "We understand cross-border operational challenges. Marc is fluent in Spanish and has worked with companies navigating the cross-border challenges and complexities of operating a business in both the U.S. and Mexico.",
    "We believe in transparency and will make an impact. We provide our clients with an honest, thorough, and data driven assessment of their business with an intent on maximizing success.",
  ],
  experience: { value: "15", label: "Years of Experience" },
} as const;

export const clients = {
  heading: "Trusted By",
  logos: [
    { name: "Cheesy Jane's", image: "/clients/cheesy-janes.png" },
    { name: "CircleBarA", image: "/clients/circle-bar-a.png" },
    { name: "Lonestar Orange Shirt", image: "/clients/lonestar-orange-shirt.png" },
    { name: "Blackwater Logistics", image: "/clients/blackwater-logistics.png" },
  ] satisfies readonly ClientLogo[],
} as const;

export const teamSection = {
  heading: "Meet Your Advisor",
} as const;

export const testimonialsSection = {
  heading: "What People Say",
} as const;
