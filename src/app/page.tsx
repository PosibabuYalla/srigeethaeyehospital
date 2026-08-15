import type { Metadata } from "next";
import { headers } from "next/headers";
import { Hero } from "@/components/sections/home/hero";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { UspRetina } from "@/components/sections/home/usp-retina";
import { TreatmentsPreview } from "@/components/sections/home/treatments-preview";
import { EquipmentPreview } from "@/components/sections/home/equipment-preview";
import { DoctorsPreview } from "@/components/sections/home/doctors-preview";
import { PatientJourney } from "@/components/sections/home/patient-journey";
import { Testimonials } from "@/components/sections/home/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { faqs } from "@/lib/data/misc";
import { site } from "@/lib/data/site";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");

  return {
    title: isGeoDomain
      ? "Guntur Eye Hospital | Advanced Eye Care & Retina Centre"
      : `Srigeetha Eye Hospital | Advanced Eye Care in ${site.city}`,
    description: isGeoDomain
      ? "Guntur Eye Hospital is Guntur's premier dedicated Vitreo Retinal Surgery and advanced eye care centre, offering world-class treatments with imported ZEISS, Alcon, and AMO equipment."
      : "Sri Geetha Eye Hospital, Guntur, the region's only dedicated Vitreo Retinal Surgery centre, with imported ZEISS, Alcon and AMO equipment, expert retina specialists, and 40+ years of trusted eye care.",
    alternates: { canonical: "/" },
  };
}


export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <UspRetina />
      <TreatmentsPreview />
      <EquipmentPreview />
      <DoctorsPreview />
      <PatientJourney />
      <Testimonials />
      <FaqSection
        items={faqs}
        eyebrow="FAQ"
        title={<>Common <span className="text-gradient">Questions</span></>}
      />
      <CtaSection />
    </>
  );
}
