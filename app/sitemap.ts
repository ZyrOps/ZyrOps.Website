import type { MetadataRoute } from "next";
import { absoluteUrl, indexableRoutes } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-26T00:00:00.000Z");

  return indexableRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
