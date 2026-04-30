import type { MetadataRoute } from "next";
import { absoluteUrl, indexableRoutes } from "./lib/seo";
import { getCareerJobs } from "./careers/careers-api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date("2026-04-30T00:00:00.000Z");

  const routes = indexableRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  try {
    const { jobs } = await getCareerJobs();
    routes.push(
      ...jobs.map((job) => ({
        url: absoluteUrl(`/careers/${job.id}`),
        lastModified: job.updated_at || job.created_at ? new Date(job.updated_at || job.created_at || "") : lastModified,
        changeFrequency: "daily" as const,
        priority: 0.76,
      }))
    );
  } catch {
    // Keep the public sitemap available even if the HRMS careers API is temporarily unavailable.
  }

  return routes;
}
