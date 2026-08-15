import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/lib/data/site";
import { treatments } from "@/lib/data/treatments";
import { doctors } from "@/lib/data/doctors";

/**
 * Domain-aware sitemap generation.
 *
 * When served from www.srigeethaeyehospital.com → full 25-URL sitemap
 * When served from www.guntureyehospital.com    → 13-URL geo-targeted sitemap
 *
 * Every <loc> URL is prefixed with the correct host for its domain.
 * Cross-domain URLs in a sitemap are silently ignored by Google.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");

  // ───────────────────────────────────────────────────────────────────────
  // GEO DOMAIN SITEMAP — www.guntureyehospital.com
  // 13 geo-targeted local search pages
  // ───────────────────────────────────────────────────────────────────────
  if (isGeoDomain) {
    const GEO = site.urlGeo;
    const geoStatic = [
      { url: `${GEO}/`,                              priority: 1.0,  changeFrequency: "weekly"  as const },
      { url: `${GEO}/eye-hospital-guntur`,           priority: 0.95, changeFrequency: "monthly" as const },
      { url: `${GEO}/retina-specialist-guntur`,      priority: 0.90, changeFrequency: "monthly" as const },
      { url: `${GEO}/cataract-surgery-guntur`,       priority: 0.85, changeFrequency: "monthly" as const },
      { url: `${GEO}/diabetic-eye-treatment-guntur`, priority: 0.85, changeFrequency: "monthly" as const },
      { url: `${GEO}/lasik-surgery-guntur`,          priority: 0.80, changeFrequency: "monthly" as const },
      { url: `${GEO}/doctors`,                       priority: 0.80, changeFrequency: "monthly" as const },
      { url: `${GEO}/contact`,                       priority: 0.80, changeFrequency: "monthly" as const },
      { url: `${GEO}/glaucoma-treatment-guntur`,     priority: 0.75, changeFrequency: "monthly" as const },
      { url: `${GEO}/pediatric-eye-care-guntur`,     priority: 0.75, changeFrequency: "monthly" as const },
      { url: `${GEO}/doctors/vitreo-retinal-surgeon-guntur`, priority: 0.70, changeFrequency: "monthly" as const },
      { url: `${GEO}/doctors/ophthalmologist-guntur`,        priority: 0.65, changeFrequency: "monthly" as const },
      { url: `${GEO}/about`,                         priority: 0.70, changeFrequency: "monthly" as const },
    ].map((entry) => ({ ...entry, lastModified: new Date() }));

    return geoStatic;
  }

  // ───────────────────────────────────────────────────────────────────────
  // MAIN DOMAIN SITEMAP — www.srigeethaeyehospital.com
  // 6 static + 16 treatments + 3 doctors = 25 URLs
  // ───────────────────────────────────────────────────────────────────────
  const staticRoutes = [
    { route: "",           priority: 1.0  },
    { route: "/about",     priority: 0.8  },
    { route: "/treatments",priority: 0.9  },
    { route: "/doctors",   priority: 0.8  },
    { route: "/equipment", priority: 0.7  },
    { route: "/contact",   priority: 0.8  },
  ].map(({ route, priority }) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${site.url}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    // Featured treatments get a higher priority signal
    priority: t.featured ? 0.85 : 0.7,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${site.url}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...doctorRoutes];
}
