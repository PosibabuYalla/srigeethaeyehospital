import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { EquipmentMarquee } from "@/components/sections/home/equipment-marquee";

export function EquipmentPreview() {
  return (
    <section className="section-screen relative flex-col gap-16 overflow-hidden bg-offwhite py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Equipment"
          title={<>Premium <span className="text-gradient">Imported Technology</span></>}
          description="World-class ZEISS, Alcon and AMO diagnostic and surgical systems — the same technology used at leading eye institutes internationally."
        />
      </Container>

      <div className="mt-16">
        <EquipmentMarquee />
      </div>

      <Container>
        <div className="mt-12 flex justify-center">
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
