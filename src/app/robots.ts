import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/lib/data/site";

/**
 * Domain-aware robots.txt generation.
 *
 * The same Next.js codebase serves two domains:
 *   - www.srigeethaeyehospital.com  (primary)
 *   - www.guntureyehospital.com     (geo-targeted)
 *
 * Each domain gets a robots.txt that points to ITS OWN sitemap.
 * Cross-domain sitemap announcements violate Google's guidelines and
 * cause the sitemap to be silently ignored.
 *
 * The plural alias domain (srigeethaeyehospitals.com) is handled entirely
 * by a server-level 301 redirect — it never reaches this Next.js code.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");

  // Each domain's sitemap URL must match its own host — never cross-reference
  const sitemapUrl = isGeoDomain
    ? `${site.urlGeo}/sitemap.xml`
    : `${site.url}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow Next.js internals, API routes, and private paths
        disallow: ["/api/", "/_next/", "/admin/", "/preview/"],
      },
    ],
    sitemap: sitemapUrl,
  };
}
