import type { Metadata } from "next";
import { headers } from "next/headers";
import { AboutHero } from "@/components/sections/about/about-hero";
import { MissionVision } from "@/components/sections/about/mission-vision";
import { Timeline } from "@/components/sections/about/timeline";
import { Infrastructure } from "@/components/sections/about/infrastructure";
import { TrustStats } from "@/components/sections/home/trust-stats";
import { DoctorsPreview } from "@/components/sections/home/doctors-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");

  return {
    title: "About Us",
    description: isGeoDomain
      ? "Over 40 years of advanced, compassionate eye care. Learn about Guntur Eye Hospital's mission, infrastructure, and commitment to patient-first ophthalmology."
      : "40 years of advanced, compassionate eye care in Guntur. Learn about Sri Geetha Eye Hospital's mission, infrastructure, and commitment to patient-first ophthalmology.",
    alternates: { canonical: "/about" },
  };
}


export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <AboutHero />
      <TrustStats />
      <MissionVision />
      <Timeline />
      <Infrastructure />
      <DoctorsPreview />
      <CtaSection />
    </>
  );
}
