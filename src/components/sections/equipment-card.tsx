"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import type { Equipment } from "@/lib/data/equipment";

export function EquipmentCard({ equipment, index = 0 }: { equipment: Equipment; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-teal-700">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-md ring-1 ring-white/30"
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
        >
          <Icon name="microscope" className="h-11 w-11 text-white" />
        </motion.div>
        {equipment.imported && (
          <div className="absolute right-3 top-3">
            <Badge variant="accent">Imported</Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{equipment.category}</p>
        <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-ink">{equipment.name}</h3>
        <p className="mt-1 text-xs font-medium text-slate">{equipment.brand}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate">{equipment.purpose}</p>

        <div className="mt-4 flex flex-1 flex-col justify-end gap-2 border-t border-ink/5 pt-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <p className="text-xs font-bold uppercase tracking-wide text-ink/60">Specifications</p>
          <ul className="flex flex-col gap-1.5">
            {equipment.specifications.slice(0, 3).map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-xs text-slate">
                <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
