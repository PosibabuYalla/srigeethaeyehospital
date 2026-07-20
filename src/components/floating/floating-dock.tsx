"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
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
