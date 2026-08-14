import type { Cta, NavLink, Person, Testimonial } from "./types";

export const site = {
  name: "Crux Consulting",
  domain: "thecruxtx.com",
  url: "https://thecruxtx.com",
  tagline: "Helping you scale new heights",
  description:
    "Crux Consulting is a boutique advisory firm partnering with rapidly scaling businesses to overcome the challenges of growth and scale within their enterprise.",
} as const;

export const nav: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const navCta: Cta = {
  label: "Book Now",
  href: "/contact",
  variant: "solid",
};

/**
 * Marc is the sole advisor and point of contact. Rendered as a single
 * centered card, not a grid — see ContactCards / Team.
 */
export const marc: Person = {
  name: "Marc Berger, CPA",
  title: "Chief Executive Officer",
  phone: "(512) 461-0462",
  email: "marc@thecruxtx.com",
  image: "/team/marc-berger.jpg",
  bio: [
    "Marc is a passionate CPA that has been helping small and medium-sized businesses navigate their tax and accounting responsibilities for more than 20 years!",
    "Marc was a partner of McGinnis & Berger, LLP, a traditional CPA firm in Central TX for most of his early career. In 2016, Marc launched Purely Solutions, LLC a tech-enabled tax and accounting advisory firm that experienced rapid growth before being acquired by LegalZoom in late 2020. Under Marc's leadership Purely Solutions, LLC was re-branded as LZ Tax, a subsidiary of LegalZoom, and quickly became one of the fastest growing online tax preparation offerings in the market today.",
    "Marc is now focusing his energy and enthusiasm helping owners of rapidly scaling businesses that need assistance overcoming the obstacles of growth and scale within their businesses.",
  ],
};

/**
 * Shown on both the home page and the about page.
 */
export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Marc played a significant role in my professional career over the past ten years through his unique ability to lead and mentor. He was the type of leader that made you excited to show up every day because he set a culture that many are never fortunate enough to be able to find in a company. Marc was always accepting of feedback, was never afraid to jump in and try something new even if it meant we might change it again the next day if it didn't work. He had a drive that is difficult to explain, but is deeply rooted from the passion he has for his clients and team.",
    attribution: "Employee & Co-Worker",
    rating: 5,
  },
  {
    quote:
      "Marc's work ethic and ability to motivate and help the team, no matter if the job was outside his role, inspired those around him. It's rare to find a job that you're excited to work extra hours, but he made it easy to do. I was honored to be apart of his team over the years as I learned and developed starting in an office administration role, to then learning the ways of bookkeeping and payroll, to becoming an entry level tax preparer, to becoming an Enrolled Agent, and more recently landing a role within Standards.",
    attribution: "Employee & Co-Worker",
    rating: 5,
  },
];

export const notFound = {
  code: "404",
  heading: "Page not found",
  body: "The page you're looking for doesn't exist or has moved.",
  cta: { label: "Back Home", href: "/", variant: "solid" } satisfies Cta,
} as const;

export const footer = {
  /** Live site reads "© 2022" verbatim; year is rendered dynamically instead. */
  copyright: "Crux Consulting. All Rights Reserved.",
} as const;
