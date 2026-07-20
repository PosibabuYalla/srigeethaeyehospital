"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { site, navLinks } from "@/lib/data/site";
import { treatments } from "@/lib/data/treatments";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="container-premium">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass-strong shadow-glass py-2.5"
              : "border border-transparent bg-transparent py-3"
          )}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt={site.name}
              width={1272}
              height={284}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.label === "Treatments" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-white/50 hover:text-brand-600"
                  >
                    {link.label}
                    <Icon name="chevron-down" className="h-3.5 w-3.5" />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="glass-strong absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-3xl p-6 shadow-glass-lg"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {treatments.slice(0, 8).map((t) => (
                            <Link
                              key={t.slug}
                              href={`/treatments/${t.slug}`}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                                <Icon name={t.icon} className="h-4 w-4" />
                              </span>
                              <span className="text-sm font-medium text-ink">{t.name}</span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/treatments"
                          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-50 py-3 text-sm font-bold text-brand-600 transition-colors hover:bg-brand-100"
                        >
                          View All Treatments
                          <Icon name="arrow-right" className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-white/50 hover:text-brand-600",
                    pathname === link.href && "bg-white/60 text-brand-600"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${site.emergencyPhone}`}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold text-brand-700"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              Emergency
            </a>
            <Button asChild size="default" variant="primary">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="container-premium overflow-hidden lg:hidden"
          >
            <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-glass backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-ink hover:bg-white/50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-white/40 pt-3">
                <Button asChild variant="primary">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>Book Appointment</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${site.emergencyPhone}`}>Emergency Call</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
