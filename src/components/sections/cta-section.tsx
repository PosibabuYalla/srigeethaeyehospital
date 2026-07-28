import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BookAppointmentDialog } from "@/components/sections/contact/book-appointment-dialog";
import { site } from "@/lib/data/site";

export function CtaSection() {
  return (
    <section className="section-screen relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-teal-700 px-6 py-16 text-center shadow-glass-lg sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-mesh opacity-30" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Book Appointment Today
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your Vision Deserves the Best Care Available
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-teal-50/85 sm:text-lg">
                Book a consultation with our specialists today and experience advanced,
                imported technology combined with genuine compassionate care.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <BookAppointmentDialog>
                  <Button size="lg" variant="accent">
                    Book Appointment
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                </BookAppointmentDialog>
                <Button asChild size="lg" variant="glass" className="text-white">
                  <a href={`tel:${site.phoneRaw}`} className="text-lg font-extrabold tracking-wide">
                    <Icon name="phone" className="h-5 w-5" />
                    {site.phone}
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Icon name="map-pin" className="h-4 w-4" />
                      Get Directions
                    </Button>
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
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
