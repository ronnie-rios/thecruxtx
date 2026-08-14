import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientLogos from "@/components/sections/ClientLogos";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import { homeMeta, teamSection, testimonialsSection } from "@/content/home";
import { marc, testimonials } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs />
      <ClientLogos />
      <Team heading={teamSection.heading} person={marc} />
      <Testimonials heading={testimonialsSection.heading} items={testimonials} />
    </>
  );
}
