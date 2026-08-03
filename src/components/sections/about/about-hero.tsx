"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { StatCounter } from "@/components/ui/stat-counter";
import { BookAppointmentDialog } from "@/components/sections/contact/book-appointment-dialog";
import { site } from "@/lib/data/site";

const credentials = [
  { icon: "eye", label: "Multispeciality Eye Hospital" },
  { icon: "cpu", label: "ZEISS · Alcon · AMO Technology" },
  { icon: "graduation-cap", label: "Aravind-Trained Specialists" },
];

const orbitStats = [
  {
    icon: "users",
    value: 50000,
    suffix: "+",
    label: "Happy Patients",
    className: "left-0 top-2 sm:-left-8 sm:top-4",
    float: "animate-float",
  },
  {
    icon: "award",
    value: 10000,
    suffix: "+",
    label: "Successful Surgeries",
    className: "right-0 top-2 sm:-right-8 sm:top-4",
    float: "animate-float-slow",
  },
  {
    icon: "badge-check",
    value: 99,
    suffix: "%",
    label: "Patient Satisfaction",
    className: "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-2",
    float: "animate-float",
  },
] as const;

export function AboutHero() {
  return (
    <section className="section-screen relative overflow-hidden bg-white pb-32 pt-32 sm:pb-40 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-brand-100 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-100 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <Container className="relative">
        <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
          <Link href="/" className="transition-colors hover:text-brand-600">
            Home
          </Link>
          <Icon name="chevron-right" className="h-3 w-3" />
          <span className="text-brand-600">About</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <Reveal>
              <Badge variant="outline">Est. {site.founded} · About Us</Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
                Four Decades of{" "}
                <span className="text-gradient">Trusted Vision Care</span>
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-px w-28 bg-ink/15" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Since {site.founded}, {site.name} has grown from a single mission,
                bringing quality eye care within reach of every family in{" "}
                {site.city}, into one of the very few multispeciality eye hospitals
                in the {site.city} region, trusted by over 50,000 patients.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {credentials.map((c) => (
                  <span
                    key={c.label}
                    className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-ink/80"
                  >
                    <Icon name={c.icon} className="h-3.5 w-3.5 text-brand-600" />
                    {c.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <BookAppointmentDialog>
                  <Button size="lg" variant="primary">
                    <Icon name="calendar" className="h-4 w-4" />
                    Book Appointment
                  </Button>
                </BookAppointmentDialog>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${site.phoneRaw}`}>
                    <Icon name="phone" className="h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[440px]">
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-56 w-56 items-center justify-center rounded-full sm:h-64 sm:w-64"
            >
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-brand-300/60 animate-spin-slow" />
              <div className="absolute -inset-3 rounded-full border border-accent-300/40" />
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-br from-brand-600 via-brand-500 to-teal-700 text-white shadow-glass-lg">
                <div className="absolute inset-0 rounded-full bg-mesh opacity-30" />
                <p className="relative font-heading text-5xl font-extrabold sm:text-6xl">
                  <StatCounter value={40} suffix="+" />
                </p>
                <p className="relative text-xs font-bold uppercase tracking-widest text-white/80">
                  Years of Excellence
                </p>
              </div>
            </motion.div>

            {orbitStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className={`glass-card absolute z-10 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-glass ${stat.float} ${stat.className}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/70 text-brand-600">
                  <Icon name={stat.icon} className="h-4 w-4" />
                </span>
                <span className="text-xs leading-tight">
                  <span className="block font-heading text-sm font-extrabold text-ink">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] font-medium text-slate">{stat.label}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
