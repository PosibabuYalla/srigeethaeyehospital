import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { whyChooseReasons } from "@/lib/data/misc";

export function WhyChoose() {
  return (
    <section className="section-screen relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Why Families Trust <span className="text-gradient">Sri Geetha Eye Hospital</span>
            </>
          }
          description="Every decision at our hospital is guided by one question: does this give our patients the best possible visual outcome?"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseReasons.map((reason) => (
            <RevealItem key={reason.title}>
              <GlassCard className="h-full">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30">
                  <Icon name={reason.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {reason.description}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
