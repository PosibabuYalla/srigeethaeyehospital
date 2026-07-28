import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { EquipmentMarquee } from "@/components/sections/home/equipment-marquee";
import { EquipmentSpotlight } from "@/components/sections/home/equipment-spotlight";

export function EquipmentPreview() {
  return (
    <section className="section-screen relative flex-col gap-16 overflow-hidden bg-offwhite py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-100 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-100 blur-3xl animate-blob [animation-delay:3s]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Equipment"
          title={<>Premium <span className="text-gradient">Imported Technology</span></>}
          description="World-class ZEISS, Alcon and AMO diagnostic and surgical systems — the same technology used at leading eye institutes internationally."
        />

        <div className="mt-14">
          <EquipmentSpotlight />
        </div>
      </Container>

      <div className="relative mt-6">
        <EquipmentMarquee />
      </div>

      <Container className="relative">
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg" variant="primary">
            <Link href="/equipment">
              Explore All Equipment
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
