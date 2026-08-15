import type { Stat, TimelineEntry } from "./types";

export const aboutMeta = {
  title: "About Us | Crux Consulting",
  description:
    "A boutique consulting firm that partners with scaling businesses to identify and overcome the financial and operational obstacles in the path of growth.",
} as const;

export const aboutHero = {
  heading: "Who We Are",
  body: "We serve business owners that have grown their business to a point that requires new knowledge and experience to scale to the next level.",
  image: "/about/aboutpg-hero.jpg",
} as const;

export const mission = {
  heading: "We help overcome obstacles to reach your goals",
  body: "CRUX CONSULTING is a boutique consulting firm that partners with scaling businesses to identify and overcome the steep financial and operational obstacles that appear insurmountable in the path of an organization's growth.",
} as const;

export const cruxDefinition = {
  definition:
    "In climbing and mountaineering “the crux of the climb” is the most difficult and technically challenging section of a route or the place where the greatest danger exists.",
  emphasis: "The crux of the climb is our passion.",
  image: "/Mountain-Peak_BW1-split.png",
} as const;

export const stats: readonly Stat[] = [
  { value: "2000", label: "Operating Since" },
  { value: "15", label: "Years of Experience" },
];

export const advisorSection = {
  /** Singular — Marc is the sole advisor. */
  heading: "Crux Consulting Advisor",
} as const;

export const story = {
  heading: "Our Story",
  entries: [
    { date: "1 January 2003", label: "Partner of McGinnis & Berger, LLP (CPA firm)." },
    { date: "1 July 2016", label: "Launched Purely Solutions, LLC." },
    {
      date: "31 December 2019",
      label: "M&B, LLP closes and 100% of focus is on scaling Pure.",
    },
    {
      date: "28 October 2020",
      label: "Purely Solutions, LLC acquired by LegalZoom.",
    },
    {
      date: "1 Jan 2021",
      label: "LegalZoom launched LZ Tax with Marc as the Tax Practice Leader.",
    },
    { date: "30 June 2021", label: "LegalZoom IPO on Nasdaq." },
    {
      date: "28 April 2022",
      label: "Marc exits LZ Tax after scaling the business and growing the team.",
    },
    { date: "2 May 2022", label: "Crux Consulting was launched." },
  ] satisfies readonly TimelineEntry[],
} as const;

export const aboutContact = {
  heading: "Contact Us Today!",
  body: "Get in touch with us today and let us help!",
} as const;
