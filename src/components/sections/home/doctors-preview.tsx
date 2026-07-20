import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { DoctorCard } from "@/components/sections/doctor-card";
import { doctors } from "@/lib/data/doctors";

export function DoctorsPreview() {
  return (
    <section className="section-screen relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Specialists"
          title={<>Meet Our <span className="text-gradient">Expert Doctors</span></>}
          description="A dedicated team of surgeons trained at leading institutes, combining deep expertise with genuine compassion."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, i) => (
            <DoctorCard key={doc.slug} doctor={doc} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/doctors">
              View All Doctors
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
