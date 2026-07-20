import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/data/site";

export function CtaSection() {
  return (
    <section className="section-screen relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-teal-700 px-6 py-16 text-center shadow-glass-lg sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-mesh opacity-30" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your Vision Deserves the Best Care Available
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-teal-50/85 sm:text-lg">
                Book a consultation with our specialists today and experience advanced,
                imported technology combined with genuine compassionate care.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">
                    Book Appointment
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="glass" className="text-white">
                  <a href={`tel:${site.phoneRaw}`}>
                    <Icon name="phone" className="h-4 w-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
