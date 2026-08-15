import type { Metadata } from "next";
import { headers } from "next/headers";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { EquipmentCard } from "@/components/sections/equipment-card";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { equipmentList } from "@/lib/data/equipment";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");

  return {
    title: "Equipment",
    description: isGeoDomain
      ? "Explore Guntur Eye Hospital's imported diagnostic and surgical equipment: ZEISS OCT, Alcon Constellation Vitrectomy, AMO Signature WhiteStar Phaco, and more."
      : "Explore Sri Geetha Eye Hospital's imported diagnostic and surgical equipment: ZEISS OCT, Alcon Constellation Vitrectomy, AMO Signature WhiteStar Phaco, and more.",
    alternates: { canonical: "/equipment" },
  };
}


export default function EquipmentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Equipment", href: "/equipment" }]} />
      <PageHero
        eyebrow="Advanced Technology"
        title={<>Premium <span className="text-gradient">Imported Equipment</span></>}
        description="The same world-class ZEISS, Alcon and AMO diagnostic and surgical technology used at leading international eye institutes, available right here in Guntur."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Equipment" }]}
      />
      <section className="section-screen relative pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentList.map((eq, i) => (
              <EquipmentCard key={eq.slug} equipment={eq} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
