"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { equipmentList } from "@/lib/data/equipment";

const spotlightSlugs = [
  "alcon-constellation-vitrectomy",
  "zeiss-cirrus-oct",
  "alcon-centurion-phaco",
  "amo-signature-whitestar",
  "sirius-corneal-topography",
];

const spotlight = spotlightSlugs
  .map((slug) => equipmentList.find((e) => e.slug === slug))
  .filter((e): e is NonNullable<typeof e> => Boolean(e));

export function EquipmentSpotlight() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {spotlight.map((eq, i) => (
        <motion.div
          key={eq.slug}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className={`group relative overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-glass transition-shadow duration-500 hover:shadow-glass-lg ${
            i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
          }`}
        >
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50 ${
              i === 0 ? "h-72 sm:h-full sm:min-h-[420px]" : "h-56"
            }`}
          >
            <div className="absolute inset-0 bg-mesh opacity-25" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
            <Image
              src={eq.image}
              alt={eq.name}
              fill
              sizes={i === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
              className={`object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
                i === 0 ? "p-10" : "p-7"
              }`}
            />
            {eq.imported && (
              <div className="absolute right-4 top-4">
                <Badge variant="accent">Imported</Badge>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-5 pt-14">
              <p className="text-[11px] font-bold uppercase tracking-wider text-accent-300">
                {eq.category}
              </p>
              <h3 className="mt-1 font-heading text-base font-bold leading-snug text-white sm:text-lg">
                {eq.name}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-white/70">{eq.brand}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
