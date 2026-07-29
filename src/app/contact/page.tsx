import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book an appointment at Sri Geetha Eye Hospital, Guntur. Find our address, phone number, working hours, and emergency contact details.",
  alternates: { canonical: "/contact" },
};

const infoCards = [
  {
    icon: "map-pin",
    title: "Visit Us",
    lines: [`${site.address.line1}, ${site.address.line2}`, `${site.address.city} - ${site.address.zip}`],
  },
  {
    icon: "phone",
    title: "Call Us",
    lines: [site.phone, "Available on WhatsApp"],
  },
  {
    icon: "mail",
    title: "Email Us",
    lines: [site.email],
  },
  {
    icon: "clock",
    title: "Working Hours",
    lines: site.hours.map((h) => `${h.day}: ${h.time}`),
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Get in Touch"
        title={<>Book Your <span className="text-gradient">Appointment Today</span></>}
        description="Reach out by phone, WhatsApp, or the form below. Our team responds promptly to every enquiry."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-screen relative pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <GlassCard className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-ink">{card.title}</h3>
                  <div className="mt-2 flex flex-col gap-0.5">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-slate">{line}</p>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-screen relative pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <GlassCard className="h-full">
              <h2 className="font-heading text-2xl font-bold text-ink">Request an Appointment</h2>
              <p className="mt-2 text-sm text-slate">
                Fill in your details and our team will get back to you within a few hours to confirm your slot.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="glass-card flex h-full flex-col gap-4 rounded-3xl p-4">
              <div className="min-h-[320px] flex-1 overflow-hidden rounded-2xl">
                <iframe
                  title={`${site.name} Location`}
                  src={site.mapEmbedSrc}
                  className="h-full min-h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/60 p-4">
                <div className="flex items-start gap-3">
                  <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{site.address.line1}</p>
                    <p className="text-xs text-slate">{site.address.line2}, {site.address.city} - {site.address.zip}</p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700"
                    >
                      Get Directions
                      <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 flex-col items-center gap-1"
                  aria-label="Scan QR code for directions to the hospital"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=88x88&data=${encodeURIComponent(site.mapsUrl)}`}
                    alt="QR code linking to hospital location on Google Maps"
                    width={72}
                    height={72}
                    className="rounded-lg border border-ink/10 bg-white p-1"
                  />
                  <span className="text-[10px] font-semibold text-slate">Scan for directions</span>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
