import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MissionVision } from "@/components/sections/about/mission-vision";
import { Timeline } from "@/components/sections/about/timeline";
import { Infrastructure } from "@/components/sections/about/infrastructure";
import { TrustStats } from "@/components/sections/home/trust-stats";
import { DoctorsPreview } from "@/components/sections/home/doctors-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "40 years of advanced, compassionate eye care in Guntur. Learn about Sri Geetha Eye Hospital's mission, infrastructure, and commitment to patient-first ophthalmology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <PageHero
        eyebrow="About Sri Geetha Eye Hospital"
        title={<>40 Years of Trusted, <span className="text-gradient">Advanced Eye Care</span></>}
        description="Since 1985, we have grown from a single clinic into the region's most technologically advanced eye hospital — without ever losing sight of the patient in front of us."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <TrustStats />
      <MissionVision />
      <Timeline />
      <Infrastructure />
      <DoctorsPreview />
      <CtaSection />
    </>
  );
}
