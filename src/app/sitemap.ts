import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // Top-level routes that should always be indexed
  const routes: Array<{ path: string; changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"]; priority?: number }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/first-time-homebuyer-tips", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "yearly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  ];

  // Service detail pages (explicit list; avoids accidentally including removed services)
  const serviceRoutes = [
    "/services/credit-readiness",
    "/services/down-payment-assistance",
    "/services/affordable-loan-options",
    "/services/rent-to-own",
  ] as const;

  const now = new Date();

  return [
    ...routes.map((r) => ({
      url: new URL(r.path, baseUrl).toString(),
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...serviceRoutes.map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
