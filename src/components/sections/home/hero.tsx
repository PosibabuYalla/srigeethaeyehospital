"use client";

import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { BookAppointmentDialog } from "@/components/sections/contact/book-appointment-dialog";
import { site } from "@/lib/data/site";

const script = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

const features = [
  {
    icon: "microscope",
    title: "Advanced Technology",
    description: "State-of-the-art diagnostics & care",
  },
  {
    icon: "stethoscope",
    title: "Expert Surgeons",
    description: "Highly experienced retina specialists",
  },
  {
    icon: "scan-eye",
    title: "Comprehensive Eye Care",
    description: "From routine check-ups to complex surgeries",
  },
  {
    icon: "heart-handshake",
    title: "Compassionate Care",
    description: "Patient-first approach at every step",
  },
];

export function Hero() {
  return (
    <section className="section-hero relative overflow-hidden bg-white pb-10 pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-100 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-accent-100 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <Container className="relative flex flex-col gap-14">
        <div className="relative grid grid-cols-1 items-center gap-16 lg:min-h-[600px]">
          <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[56%] h-[118%] lg:block">
            <Image
              src="/Images/heroImageHome.webp"
              alt="Stylized illustration of a Sri Geetha Eye Hospital surgical team performing advanced vitreo-retinal eye surgery with precision instruments"
              fill
              fetchPriority="high"
              sizes="60vw"
              className="object-contain object-right-bottom"
            />

            <div className="glass-strong absolute bottom-4 right-2 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400/15 text-accent-400">
                <Icon name="target" className="h-5 w-5" />
              </span>
              <span className="text-xs leading-tight text-ink">
                Specialized in
                <br />
                <span className="font-heading text-sm font-extrabold text-accent-400">
                  Vitreo Retinal Care
                </span>
              </span>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl lg:max-w-[38%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-xs font-bold text-brand-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Expert Care. <span className="text-accent-400">Advanced Vision.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-heading text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-[3.6rem]"
            >
              We are here to help you
              <br />
              <span className="text-brand-600">see</span>{" "}
              <span className={`${script.className} text-accent-400 text-6xl sm:text-7xl`}>
                better.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 h-px w-28 bg-ink/15"
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate"
            >
              From complex eye (not just retinal) treatments to everyday eye care, we
              bring clarity to your vision with compassion and expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
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
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:hidden"
        >
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/Images/heroImageHome.webp"
              alt="Stylized illustration of a Sri Geetha Eye Hospital surgical team performing advanced vitreo-retinal eye surgery with precision instruments"
              fill
              fetchPriority="high"
              sizes="(min-width: 640px) 28rem, 90vw"
              className="object-contain"
            />
          </div>
          <div className="glass-strong absolute bottom-1 right-1 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-glass sm:bottom-2 sm:right-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-400/15 text-accent-400">
              <Icon name="target" className="h-4 w-4" />
            </span>
            <span className="text-[11px] leading-tight text-ink">
              Specialized in
              <br />
              <span className="font-heading text-xs font-extrabold text-accent-400">
                Vitreo Retinal Care
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="glass-card grid grid-cols-2 gap-x-6 gap-y-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-4"
        >
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold leading-tight text-ink">
                  {f.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-slate">{f.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
