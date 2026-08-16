import type { Cta, Service } from "./types";

export const servicesMeta = {
  title: "Services | Crux Consulting",
  description:
    "End-to-end web design, SEO, and digital marketing services for scaling businesses — built and maintained by the advisors who already know your business.",
} as const;

export const servicesHero = {
  heading: "Helping you scale new heights",
  body: "We partner with rapidly scaling businesses to overcome the challenges of growth and scale within their enterprise. One way we accomplish this mission is by providing end-to-end web design, SEO, and digital marketing services.",
  image: "/about/aboutpg-hero.jpg",
} as const;

export const servicesIntro = {
  heading: "Our Services",
} as const;

export const services: readonly Service[] = [
  {
    slug: "web-design-seo",
    title: "Web Design, SEO & Digital Services",
    summary:
      "End-to-end website design, search optimization, and ongoing digital marketing — all plans designed with your business in mind.",
    metaDescription:
      "Web design and SEO from advisors who already know your business. Transparent pricing, CFO-level reporting, and vetted specialists overseen by Crux.",
    intro:
      "Now offering web design, SEO, and digital services. We build or rebuild your site from the ground up, then keep it performing month over month.",
    sections: [
      {
        heading: "How the engagement works",
        body: "The work splits into two phases. Phase 1 is a one-time build that establishes the site and its SEO foundation. Phase 2 is an ongoing month-to-month plan that maintains your digital presence once the site is live. There is no long-term commitment on either.",
      },
    ],
    benefits: {
      heading: "Why sign up with Crux?",
      items: [
        {
          title: "We already know your business",
          body: "No onboarding from scratch. We apply our existing knowledge of your business and goals to every digital decision.",
        },
        {
          title: "One point of contact",
          body: "We manage the vendor relationships so you don't have to.",
        },
        {
          title: "CFO-level reporting",
          body: "Your web and SEO performance metrics are integrated directly into your existing reporting.",
        },
        {
          title: "No long-term contracts",
          body: "Adjust your plan as your needs change. Month-to-month retainers with no lock-in required.",
        },
        {
          title: "Vetted specialists",
          body: "All work is performed by vetted professionals selected and overseen by Crux.",
        },
        {
          title: "Transparent pricing",
          body: "What you see in the pricing table is what you pay — no hidden fees or surprise add-ons.",
        },
      ],
    },
    comparisonPhase: {
      label: "Phase 1 — Website Design & Development",
      summary:
        "A one-time investment to build or rebuild your business website from the ground up.",
      priceLabel: "One-time fee",
      tiers: [
        { name: "Starter", price: "$2,500" },
        { name: "Professional", price: "$5,000" },
        { name: "Enterprise", price: "$7,500" },
      ],
      features: [
        {
          label: "Custom design on modern stack",
          values: [true, true, true],
        },
        { label: "Mobile-first, performance build", values: [true, true, true] },
        { label: "Core service pages", values: [true, true, true] },
        { label: "Location / service area pages", values: [false, true, true] },
        { label: "Schema markup (LocalBiz/FAQ)", values: [false, true, true] },
        { label: "Google Search Console setup", values: [true, true, true] },
        { label: "On-page SEO foundation", values: [true, true, true] },
        { label: "Keyword content architecture", values: [false, true, true] },
        { label: "Clean navigation & CTA flow", values: [true, true, true] },
        {
          label: "Social media integration & advisory",
          values: [false, true, true],
        },
        { label: "Staging environment build", values: [false, false, true] },
        { label: "DNS cutover at launch", values: [true, true, true] },
        {
          label: "Design revision rounds",
          values: ["1 round", "2 rounds", "2 rounds"],
        },
      ],
    },
    tieredPhase: {
      label: "Phase 2 — Ongoing Monthly Website & SEO Maintenance",
      summary:
        "Once your site is live, a maintenance plan is designed for maintaining your digital presence and meeting your goals. All plans are month-to-month with no long-term commitment required.",
      priceLabel: "Monthly Fee",
      tiers: [
        {
          name: "Baseline",
          price: "$150",
          deliverables: [
            "Hosting & uptime monitoring and minor edits",
            "Google Business Profile Review",
            "Monthly GSC review and reporting",
            "Minor on-page updates as needed",
            "Social media advisory and liaison coordination",
          ],
        },
        {
          name: "Level 1 - Content",
          price: "$275",
          deliverables: [
            "Content strategy for writing posting",
            "2 blogs/month",
            "Blog landing page",
            "Keyword cluster and query analysis updates",
            "AI search optimization (ChatGPT, Google AI Overviews)",
            "Schema markup updates and maintenance",
            "Content recommendations and internal linking updates",
          ],
        },
        {
          name: "Level 2 - Social Media",
          price: "$400",
          inherits: "Level 1, plus:",
          deliverables: ["Content plan with monthly deliverables"],
        },
        {
          name: "Level 3 - Ad Management",
          price: "$250–$500",
          note: "Scales to your needs, capped at $500/mo",
          inherits: "Level 2, plus:",
          deliverables: [
            "Campaign Setup",
            "Ongoing optimization",
            "Monthly reporting",
            "Plus ad spend (recommended minimum $250/month)",
          ],
        },
      ],
      footnote:
        "Baseline is required for all maintenance clients; Levels 1–3 are added on top of it.",
    },
    image: "/about/aboutpg-hero.jpg",
  },
] satisfies readonly Service[];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const servicesContact = {
  heading: "Contact Us Today!",
  body: "Get in touch with us today and let us help!",
  cta: { label: "Book Now", href: "/contact", variant: "solid" } satisfies Cta,
} as const;
