"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { site } from "@/lib/data/site";

export function FloatingDock() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 600);
  });

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass-strong flex h-11 w-11 items-center justify-center rounded-full text-brand-700 shadow-glass transition-colors hover:bg-brand-500 hover:text-white"
          >
            <Icon name="chevrons-up" className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi, I would like to book an appointment at Sri Geetha Eye Hospital."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-110"
      >
        <Icon name="message-circle" className="h-6 w-6" fill="white" />
      </a>

      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-110"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>

      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label="Get directions"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lg shadow-ink/30 transition-transform hover:scale-110"
          >
            <Icon name="map-pin" className="h-6 w-6" />
          </button>
        </DialogTrigger>
        <DialogContent className="text-center">
          <DialogTitle>Get Directions</DialogTitle>
          <DialogDescription>
            Scan the QR code with your phone camera to open {site.name} on Google Maps.
          </DialogDescription>
          <div className="mt-6 flex justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(site.mapsUrl)}`}
              alt="QR code linking to hospital location on Google Maps"
              width={200}
              height={200}
              className="rounded-2xl border border-ink/10 bg-white p-2"
            />
          </div>
          <p className="mt-4 text-xs text-slate">
            {site.address.line1}, {site.address.line2}, {site.address.city} - {site.address.zip}
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700"
          >
            Open in Google Maps
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        </DialogContent>
      </Dialog>

      <Link
        href="/contact"
        aria-label="Book appointment"
        className="group flex h-14 max-w-14 items-center justify-start gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-400 to-orange-500 pl-[17px] text-sm font-bold whitespace-nowrap text-white shadow-lg shadow-orange-500/30 transition-[max-width] duration-300 ease-out hover:max-w-[220px]"
      >
        <Icon name="calendar" className="h-5 w-5 shrink-0" />
        <span className="pr-5">Book Appointment</span>
      </Link>
    </div>
  );
}
