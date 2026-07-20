"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { testimonials } from "@/lib/data/misc";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const autoplay = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="section-screen relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Patient Stories"
          title={<>Trusted by <span className="text-gradient">Thousands of Families</span></>}
          description="Real stories from patients whose vision was restored and preserved at Sri Geetha Eye Hospital."
        />

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-0 flex-[0_0_100%] px-2 sm:px-4 md:flex-[0_0_70%] lg:flex-[0_0_55%]">
                <div className="glass-card flex h-full flex-col rounded-3xl p-8 sm:p-10">
                  <Icon name="quote" className="h-9 w-9 text-brand-200" />
                  <p className="mt-4 flex-1 text-lg leading-relaxed text-ink/90">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 font-heading text-sm font-bold text-white">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <div>
                        <p className="font-heading text-sm font-bold text-ink">{t.name}</p>
                        <p className="text-xs text-slate">{t.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-accent-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-brand-500" : "w-2.5 bg-brand-200"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
