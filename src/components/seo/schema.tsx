import { site } from "@/lib/data/site";
import type { Doctor } from "@/lib/data/doctors";

// ─────────────────────────────────────────────────────────────────────────────
// Utility: Renders any object as a <script type="application/ld+json"> tag
// ─────────────────────────────────────────────────────────────────────────────
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK A — Primary Domain: www.srigeethaeyehospital.com
// @type: ["Hospital", "MedicalBusiness"]
// Includes all 10 external listings in sameAs for maximum E-E-A-T signal.
// ─────────────────────────────────────────────────────────────────────────────
export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        // Multi-type array: Hospital for medical trust, MedicalBusiness for local SEO
        "@type": ["Hospital", "MedicalBusiness"],
        // @id acts as a permanent, unique identifier for this entity
        "@id": `${site.url}/#hospital`,
        "name": site.name,
        "alternateName": [
          "Srigeetha Eye Hospital",
          "Sri Geetha Eye Hospitals",
          "Sri Geetha Hospital Guntur",
          "Sri Geetha Eye Hospital Guntur",
        ],
        "description":
          "Sri Geetha Eye Hospital is Guntur's only dedicated Vitreo Retinal Surgery centre, offering advanced cataract, LASIK, diabetic eye, and retinal surgeries using imported ZEISS, Alcon, and AMO equipment. Trusted by families across Andhra Pradesh since 1983.",
        "foundingDate": site.foundingDate,
        "url": site.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${site.url}/Logo.png`,
          "width": 400,
          "height": 100,
        },
        "image": `${site.url}/images/og-image.jpg`,
        "telephone": site.phoneRaw,
        "email": site.email,
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted":
          "Cash, Credit Card, Debit Card, Health Insurance, ESI Card, Bajaj Finserv Health Card, Zurich Kotak Insurance, Best Care Health Card",
        // Medical specialties — used by Google to classify the hospital entity
        "medicalSpecialty": [
          "Ophthalmology",
          "Vitreo-Retinal Surgery",
          "Cataract Surgery",
          "Refractive Surgery",
          "Cornea and External Disease",
          "Glaucoma",
          "Pediatric Ophthalmology",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": site.address.line2,
          "addressLocality": site.address.city,
          "addressRegion": site.address.state,
          "postalCode": site.address.zip,
          "addressCountry": "IN",
        },
        "hasMap": site.mapsUrl,
        // Correctly formatted openingHoursSpecification (Schema.org compliant)
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "09:00",
            "closes": "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "09:00",
            "closes": "13:00",
          },
        ],
        // Top flagship procedures as MedicalProcedure objects
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "Vitreo Retinal Surgery",
            "url": `${site.url}/treatments/vitreo-retinal-surgery`,
            "description":
              "Advanced micro-incision surgery for complex retinal conditions using imported Alcon Constellation vitrectomy systems.",
          },
          {
            "@type": "MedicalProcedure",
            "name": "Cataract Surgery",
            "url": `${site.url}/treatments/cataract-surgery`,
            "description":
              "Bladeless micro-incision phacoemulsification with premium imported IOLs (trifocal, toric, monofocal).",
          },
          {
            "@type": "MedicalProcedure",
            "name": "LASIK Surgery",
            "url": `${site.url}/treatments/lasik-surgery`,
            "description":
              "Blade-free vision correction to permanently reduce dependency on glasses and contact lenses.",
          },
          {
            "@type": "MedicalProcedure",
            "name": "Diabetic Eye Disease Treatment",
            "url": `${site.url}/treatments/diabetic-eye-disease`,
            "description":
              "Comprehensive screening, laser, and surgical management of diabetic retinopathy.",
          },
          {
            "@type": "MedicalProcedure",
            "name": "Retinal Detachment Surgery",
            "url": `${site.url}/treatments/retinal-detachment`,
            "description":
              "Emergency-ready surgical repair to restore and preserve vision from retinal detachment.",
          },
          {
            "@type": "MedicalProcedure",
            "name": "Macular Hole Surgery",
            "url": `${site.url}/treatments/macular-hole-surgery`,
            "description":
              "Precision micro-incision vitrectomy to close macular holes and restore central vision.",
          },
        ],
        // sameAs — all 10 external listings + own domain cross-links
        // This is the primary E-E-A-T signal: Google uses sameAs to
        // merge multiple web identities into one trusted Knowledge Graph entity.
        "sameAs": [...site.externalListings],
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOCK B — Geo Domain: www.guntureyehospital.com
// @type: ["Hospital", "LocalBusiness"]
// Geo-targeted entity definition. Cross-references primary domain in sameAs
// to create a bidirectional Knowledge Graph relationship.
// ─────────────────────────────────────────────────────────────────────────────
export function GeoHospitalSchema() {
  const GEO_URL = "https://www.guntureyehospital.com";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        // LocalBusiness type strengthens local pack / map pack eligibility
        "@type": ["Hospital", "LocalBusiness"],
        "@id": `${GEO_URL}/#hospital`,
        "name": "Guntur Eye Hospital — Sri Geetha",
        "alternateName": [
          "Best Eye Hospital Guntur",
          "Eye Hospital in Guntur",
          "Retina Hospital Guntur",
          "Vitreo Retinal Surgery Guntur",
        ],
        "description":
          "Guntur's premier dedicated eye hospital specializing in Vitreo Retinal Surgery, cataract, LASIK, diabetic eye disease, and glaucoma. Located in Laxmipuram, Guntur, Andhra Pradesh — serving patients from Guntur, Narasaraopet, Tenali, Mangalagiri, and Krishna districts.",
        "url": GEO_URL,
        "telephone": site.phoneRaw,
        "email": site.email,
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        // areaServed — key local SEO signal; includes Wikidata URI for Guntur
        "areaServed": [
          {
            "@type": "City",
            "name": "Guntur",
            "sameAs": "https://www.wikidata.org/wiki/Q200035",
          },
          {
            "@type": "State",
            "name": "Andhra Pradesh",
            "sameAs": "https://www.wikidata.org/wiki/Q1159",
          },
        ],
        "medicalSpecialty": [
          "Ophthalmology",
          "Vitreo-Retinal Surgery",
          "Cataract Surgery",
          "Refractive Surgery",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": site.address.line2,
          "addressLocality": site.address.city,
          "addressRegion": site.address.state,
          "postalCode": site.address.zip,
          "addressCountry": "IN",
        },
        "hasMap": site.mapsUrl,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "09:00",
            "closes": "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "09:00",
            "closes": "13:00",
          },
        ],
        // sameAs for geo domain: cross-references primary domain (mandatory)
        // + select directories + verified social profiles
        "sameAs": [
          // Primary canonical domain (bidirectional entity link — CRITICAL)
          site.url,
          // Select business directories (replace with Guntur-specific listing URLs)
          "https://www.justdial.com",
          "https://www.practo.com",
          "https://www.magicpin.in",
          // Verified social media profiles
          site.social.facebook,
          site.social.instagram,
        ],
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Doctor / Physician Schema
// ─────────────────────────────────────────────────────────────────────────────
export function PhysicianSchema({ doctor }: { doctor: Doctor }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": doctor.name,
        "jobTitle": doctor.role,
        "description": doctor.bio,
        "image": `${site.url}${doctor.image}`,
        "medicalSpecialty": doctor.specializations,
        "worksFor": {
          "@type": "Hospital",
          "@id": `${site.url}/#hospital`,
          "name": site.name,
          "url": site.url,
        },
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ Schema
// ─────────────────────────────────────────────────────────────────────────────
export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb Schema
// ─────────────────────────────────────────────────────────────────────────────
export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": item.name,
          "item": `${site.url}${item.href}`,
        })),
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Medical Procedure Schema
// ─────────────────────────────────────────────────────────────────────────────
export function MedicalProcedureSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": name,
        "description": description,
        "provider": {
          "@type": "Hospital",
          "@id": `${site.url}/#hospital`,
          "name": site.name,
          "url": site.url,
        },
      }}
    />
  );
}
