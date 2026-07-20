"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import type { Doctor } from "@/lib/data/doctors";

function initials(name: string) {
  return name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((p) => p[0])
    .filter((c) => /[A-Z]/.test(c))
    .slice(0, 2)
    .join("");
}

export function DoctorCard({ doctor, index = 0 }: { doctor: Doctor; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 via-teal-50 to-white">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <motion.span
          whileHover={{ scale: 1.06 }}
          className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 font-heading text-3xl font-extrabold text-white shadow-xl shadow-brand-500/30"
        >
          {initials(doctor.name)}
        </motion.span>
        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-600 shadow-md">
          <Icon name="badge-check" className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-ink">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold text-brand-600">{doctor.role}</p>
        <p className="mt-1 text-xs text-slate">{doctor.credentials.join(" · ")}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {doctor.specializations.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700"
            >
              {s}
            </span>
          ))}
        </div>

        <Link
          href={`/doctors/${doctor.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700"
        >
          View Profile
          <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
