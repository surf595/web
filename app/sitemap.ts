import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7
  }));
}
