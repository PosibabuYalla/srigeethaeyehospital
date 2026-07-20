import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from "@/components/ui/social-icons";
import { site } from "@/lib/data/site";
import { treatments } from "@/lib/data/treatments";
import { doctors } from "@/lib/data/doctors";

const footerTreatments = treatments.slice(0, 6);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-20" />
      <div className="container-premium relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt={site.name}
                width={1272}
                height={284}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-teal-100/80">
              {site.founded} years of advanced, compassionate eye care in {site.city}. The
              region&apos;s only dedicated Vitreo Retinal Surgery centre, equipped with
              imported world-class technology.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: site.social.facebook },
                { Icon: InstagramIcon, label: "Instagram", href: site.social.instagram },
                { Icon: YoutubeIcon, label: "YouTube", href: site.social.youtube },
                { Icon: XIcon, label: "X (Twitter)", href: site.social.twitter },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-teal-100">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-teal-100/80">
              <li><Link href="/about" className="transition-colors hover:text-white">About Hospital</Link></li>
              <li><Link href="/doctors" className="transition-colors hover:text-white">Our Doctors</Link></li>
              <li><Link href="/equipment" className="transition-colors hover:text-white">Equipment</Link></li>
              <li><Link href="/treatments" className="transition-colors hover:text-white">Treatments</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-teal-100">
              Treatments
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-teal-100/80">
              {footerTreatments.map((t) => (
                <li key={t.slug}>
                  <Link href={`/treatments/${t.slug}`} className="transition-colors hover:text-white">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-teal-100">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-teal-100/80">
              <li className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{site.address.line1}, {site.address.line2}, {site.address.city} - {site.address.zip}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-accent-400" />
                <a href={`tel:${site.phoneRaw}`} className="transition-colors hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-accent-400" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">{h.day}: {h.time}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-teal-100/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Care team: {doctors.map((d) => d.name).join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
