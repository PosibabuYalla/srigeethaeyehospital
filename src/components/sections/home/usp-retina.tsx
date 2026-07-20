import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { uspConditions } from "@/lib/data/misc";

export function UspRetina() {
  return (
    <section className="section-screen relative overflow-hidden bg-brand-900 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <Badge variant="accent">The Region&apos;s Only Advanced Centre</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-heading text-4xl font-bold leading-[1.1] sm:text-5xl">
                The Only Advanced Vitreo Retinal Centre in the Region
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-100/85">
                When your eye problem is serious, general eye care is not enough. Our
                dedicated Vitreo Retinal unit — led by a fellowship-trained retina
                surgeon and equipped with imported Alcon and ZEISS surgical systems —
                is where the region&apos;s most complex retinal cases are treated and
                sight is restored.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/treatments/vitreo-retinal-surgery">
                    Know More
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="glass" className="text-white">
                  <Link href="/doctors/dr-p-mohan-krishna">Meet Our Retina Surgeon</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-4 xs:grid-cols-2">
            {uspConditions.map((c) => (
              <RevealItem key={c.title}>
                <div className="glass h-full rounded-2xl border-white/15 bg-white/[0.07] p-6 transition-colors duration-300 hover:bg-white/[0.12]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-100/75">
                    {c.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
