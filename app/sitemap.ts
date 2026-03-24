import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navigation.map((item) => item.href),
    "/политика-конфиденциальности",
    "/политика-персональных-данных"
  ];

  const articleRoutes = articles.map((article) => `/статьи/${article.slug}`);

  return [...staticRoutes, ...articleRoutes].map((href) => ({
    url: `${siteConfig.url}${href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7
  }));
}
