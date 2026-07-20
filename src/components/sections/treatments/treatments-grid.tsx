"use client";

import { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { treatments, type Treatment } from "@/lib/data/treatments";
import { cn } from "@/lib/utils";

const categories = ["All", "Retina", "Cataract & Refractive", "General", "Specialty"] as const;

export function TreatmentsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered: Treatment[] =
    active === "All" ? treatments : treatments.filter((t) => t.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              active === cat
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                : "glass text-ink/70 hover:bg-white/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <RevealItem key={t.slug}>
            <Link href={`/treatments/${t.slug}`} className="group block h-full">
              <GlassCard className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={t.icon} className="h-5 w-5" />
                  </span>
                  {t.featured && <Badge variant="accent">USP</Badge>}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-ink">{t.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{t.shortDescription}</p>
                <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-4">
                  <span className="text-xs font-bold text-brand-600">{t.successRate} Success Rate</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink/60 transition-colors group-hover:text-brand-600">
                    Details
                    <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </GlassCard>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
