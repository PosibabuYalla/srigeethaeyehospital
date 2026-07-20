import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { treatments } from "@/lib/data/treatments";
import { doctors } from "@/lib/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/treatments", "/doctors", "/equipment", "/contact"].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const treatmentRoutes = treatments.map((t) => ({
    url: `${site.url}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${site.url}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...doctorRoutes];
}
