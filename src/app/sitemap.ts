import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/schema";

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
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
