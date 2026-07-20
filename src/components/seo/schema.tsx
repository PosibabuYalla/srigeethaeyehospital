import { site } from "@/lib/data/site";
import type { Doctor } from "@/lib/data/doctors";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        image: `${site.url}/images/og-image.jpg`,
        logo: `${site.url}/Logo.png`,
        telephone: site.phoneRaw,
        email: site.email,
        priceRange: "$$",
        medicalSpecialty: "Ophthalmic",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "IN",
        },
        openingHoursSpecification: site.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.day,
          description: h.time,
        })),
        sameAs: Object.values(site.social),
      }}
    />
  );
}

export function PhysicianSchema({ doctor }: { doctor: Doctor }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        jobTitle: doctor.role,
        description: doctor.bio,
        image: `${site.url}${doctor.image}`,
        medicalSpecialty: doctor.specializations,
        worksFor: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
        },
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.href}`,
        })),
      }}
    />
  );
}

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
        name,
        description,
        provider: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
        },
      }}
    />
  );
}
