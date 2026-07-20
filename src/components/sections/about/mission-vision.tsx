import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { missionVision } from "@/lib/data/misc";

export function MissionVision() {
  return (
    <section className="section-screen relative py-20 sm:py-28">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {missionVision.map((item) => (
            <RevealItem key={item.title}>
              <GlassCard className="h-full" gradientBorder>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
