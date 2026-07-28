import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealItem, RevealGroup } from "@/components/motion/reveal";
import { milestones } from "@/lib/data/misc";

export function Timeline() {
  return (
    <section className="section-screen relative overflow-hidden bg-offwhite py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Journey"
          title={<>40 Years of <span className="text-gradient">Advancing Eye Care</span></>}
          description="From a single clinic in Guntur to the region's most advanced eye hospital — a journey shaped by continuous investment in technology and expertise."
        />

        <RevealGroup className="relative mt-16">
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent sm:left-1/2" />
          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <RevealItem key={m.year} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex items-start gap-6 sm:items-center ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 font-heading text-xs font-extrabold text-white shadow-lg shadow-brand-500/30">
                    {m.year}
                  </div>
                  <div className={`glass-card flex-1 rounded-2xl p-6 sm:max-w-md ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                    <h3 className="font-heading text-lg font-bold text-ink">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{m.description}</p>
                  </div>
                  <div className="hidden flex-1 sm:block" />
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
