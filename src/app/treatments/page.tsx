import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { TreatmentsGrid } from "@/components/sections/treatments/treatments-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore comprehensive eye care treatments at Sri Geetha Eye Hospital, from Vitreo Retinal Surgery and Cataract Surgery to LASIK, Glaucoma and Pediatric Ophthalmology.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }]} />
      <PageHero
        eyebrow="Treatments"
        title={<>Comprehensive <span className="text-gradient">Eye Care Services</span></>}
        description="Every treatment is backed by precision diagnostics, imported technology, and surgeons trained at leading institutes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
      />
      <section className="section-screen relative pb-24 sm:pb-32">
        <Container>
          <TreatmentsGrid />
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
