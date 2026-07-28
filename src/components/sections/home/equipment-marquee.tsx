"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { equipmentList } from "@/lib/data/equipment";

const mid = Math.ceil(equipmentList.length / 2);
const rowA = [...equipmentList.slice(0, mid), ...equipmentList.slice(0, mid)];
const rowB = [...equipmentList.slice(mid), ...equipmentList.slice(mid)];

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: typeof equipmentList;
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div
      className="flex w-max gap-6 hover:[animation-play-state:paused]"
      style={{
        animation: `marquee ${duration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((eq, i) => (
        <div
          key={`${eq.slug}-${i}`}
          className="group relative flex w-[220px] shrink-0 flex-col items-center overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-glass transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-lg sm:w-[250px]"
        >
          <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50 sm:h-36">
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <Image
              src={eq.image}
              alt={eq.name}
              fill
              sizes="250px"
              className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {eq.imported && (
              <div className="absolute right-2.5 top-2.5">
                <Badge variant="accent" className="text-[9px]">Imported</Badge>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 p-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
              {eq.category}
            </p>
            <p className="text-center font-heading text-sm font-bold leading-snug text-ink">
              {eq.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function EquipmentMarquee() {
  return (
    <div
      className="relative w-screen overflow-hidden py-4"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex flex-col gap-6">
        <MarqueeRow items={rowA} duration={42} />
        <MarqueeRow items={rowB} reverse duration={48} />
      </div>
    </div>
  );
}
