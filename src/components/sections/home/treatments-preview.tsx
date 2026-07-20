import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { treatments } from "@/lib/data/treatments";

export function TreatmentsPreview() {
  const items = treatments.slice(0, 8);
  return (
    <section className="section-screen relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Treatments"
          title={<>Comprehensive <span className="text-gradient">Eye Care Services</span></>}
          description="From routine checkups to complex retinal surgery, every treatment is delivered with precision diagnostics and personalized planning."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <RevealItem key={t.slug}>
              <Link href={`/treatments/${t.slug}`} className="group block h-full">
                <GlassCard className="flex h-full flex-col" hover>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={t.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-ink">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                    {t.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-600">
                    Learn More
                    <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </GlassCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/treatments">
              View All Treatments
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
