import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { insights } from "@/data/insights";
import { toolIds } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/insights",
    "/tools",
    "/case-studies",
    "/contact",
    "/book-consultation",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/engagement-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const toolRoutes = toolIds.map((id) => ({
    url: `${base}/tools/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes, ...toolRoutes];
}
