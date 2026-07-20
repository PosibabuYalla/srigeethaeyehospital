import { Container } from "@/components/ui/container";
import { StatCounter } from "@/components/ui/stat-counter";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { trustStats } from "@/lib/data/misc";

export function TrustStats() {
  return (
    <section className="section-screen relative -mt-10 z-10 pb-4">
      <Container>
        <RevealGroup className="glass-card grid grid-cols-2 gap-6 rounded-[2rem] p-8 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6 lg:p-10">
          {trustStats.map((stat) => (
            <RevealItem key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <p className="font-heading text-3xl font-extrabold text-brand-600 sm:text-4xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate sm:text-sm">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
