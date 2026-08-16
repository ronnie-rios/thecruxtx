import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/schema";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: absoluteUrl("/about-us"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
