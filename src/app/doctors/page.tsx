import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { DoctorCard } from "@/components/sections/doctor-card";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { doctors } from "@/lib/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the expert ophthalmologists and surgeons at Sri Geetha Eye Hospital, Guntur — trained at Aravind Eye Hospital and leading institutes across India.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Doctors", href: "/doctors" }]} />
      <PageHero
        eyebrow="Our Specialists"
        title={<>Meet Our <span className="text-gradient">Expert Doctors</span></>}
        description="A dedicated team combining deep surgical expertise, advanced training, and genuine compassion for every patient."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />
      <section className="section-screen relative pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc, i) => (
              <DoctorCard key={doc.slug} doctor={doc} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
