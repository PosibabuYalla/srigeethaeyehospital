import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { infrastructureHighlights } from "@/lib/data/misc";

export function Infrastructure() {
  return (
    <section className="section-screen relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Infrastructure"
          title={<>Modern Facilities, <span className="text-gradient">Built for Precision</span></>}
          description="Every space in our hospital is engineered around patient safety, comfort, and surgical excellence."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {infrastructureHighlights.map((item) => (
            <RevealItem key={item.title}>
              <GlassCard className="flex h-full items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
