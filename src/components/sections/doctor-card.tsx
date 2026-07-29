"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import type { Doctor } from "@/lib/data/doctors";

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
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-100 via-teal-50 to-white">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
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
