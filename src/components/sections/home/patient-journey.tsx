import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { patientJourney } from "@/lib/data/misc";

export function PatientJourney() {
  return (
    <section className="section-screen relative bg-offwhite py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Patient Journey"
          title={<>Your Path to <span className="text-gradient">Clearer Vision</span></>}
          description="A structured, transparent journey from your first call to lasting visual recovery."
        />

        <RevealGroup className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent lg:left-1/2 lg:block" />
          <div className="flex flex-col gap-6 lg:gap-4">
            {patientJourney.map((step, i) => (
              <RevealItem key={step.step} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  className={`flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-8 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <div className="glass-card inline-block w-full rounded-2xl p-6 lg:w-auto lg:min-w-[280px]">
                      <h3 className="font-heading text-lg font-bold text-ink">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 font-heading text-sm font-extrabold text-white shadow-lg shadow-brand-500/30">
                    {step.step}
                  </div>
                  <div className="hidden flex-1 lg:block" />
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
