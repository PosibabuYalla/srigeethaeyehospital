import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { BookAppointmentDialog } from "@/components/sections/contact/book-appointment-dialog";
import { doctors, getDoctor } from "@/lib/data/doctors";
import { getTreatment } from "@/lib/data/treatments";
import { BreadcrumbSchema, PhysicianSchema } from "@/components/seo/schema";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return {};
  return {
    title: doctor.name,
    description: doctor.bio,
    alternates: { canonical: `/doctors/${doctor.slug}` },
  };
}

function initials(name: string) {
  return name.replace("Dr.", "").trim().split(" ").map((p) => p[0]).filter((c) => /[A-Z]/.test(c)).slice(0, 2).join("");
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const treatmentsList = doctor.treatments.map(getTreatment).filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Doctors", href: "/doctors" },
          { name: doctor.name, href: `/doctors/${doctor.slug}` },
        ]}
      />
      <PhysicianSchema doctor={doctor} />

      <section className="section-screen relative overflow-hidden bg-white pb-20 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-brand-100 blur-3xl animate-blob" />

        <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="glass-card relative flex flex-col items-center overflow-hidden rounded-[2rem] p-10 text-center">
              <div className="absolute inset-0 bg-mesh opacity-40" />
              <span className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 font-heading text-5xl font-extrabold text-white shadow-xl shadow-brand-500/30">
                {initials(doctor.name)}
              </span>
              <h1 className="relative mt-6 font-heading text-2xl font-bold text-ink">{doctor.name}</h1>
              <p className="relative mt-1 text-sm font-semibold text-brand-600">{doctor.role}</p>
              <p className="relative mt-1 text-xs text-slate">{doctor.credentials.join(" · ")}</p>
              {doctor.trainedAt && (
                <Badge variant="glass" className="relative mt-4">
                  Trained at {doctor.trainedAt}
                </Badge>
              )}
              <div className="relative mt-6 flex w-full flex-col gap-2">
                <BookAppointmentDialog>
                  <Button variant="primary">
                    Book Appointment
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                </BookAppointmentDialog>
                <Button asChild variant="outline">
                  <a href={`tel:${site.phoneRaw}`}>
                    <Icon name="phone" className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
                <Link href="/" className="hover:text-brand-600">Home</Link>
                <Icon name="chevron-right" className="h-3 w-3" />
                <Link href="/doctors" className="hover:text-brand-600">Doctors</Link>
                <Icon name="chevron-right" className="h-3 w-3" />
                <span className="text-brand-600">{doctor.name}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-slate">{doctor.bio}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {doctor.specializations.map((s) => (
                  <span key={s} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <GlassCard className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon name="award" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-2xl font-extrabold text-ink">{doctor.experienceYears}+</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate">Years Experience</p>
                  </div>
                </GlassCard>
                <GlassCard className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon name="graduation-cap" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-2xl font-extrabold text-ink">{doctor.education.length}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate">Qualifications</p>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-screen relative pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <GlassCard>
                <h2 className="font-heading text-xl font-bold text-ink">Education & Training</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {doctor.education.map((e) => (
                    <li key={e.degree} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <Icon name="graduation-cap" className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-ink">{e.degree}</p>
                        <p className="text-xs text-slate">{e.institute}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          </div>

          {treatmentsList.length > 0 && (
            <Reveal>
              <GlassCard>
                <h2 className="font-heading text-lg font-bold text-ink">Treatments Offered</h2>
                <div className="mt-4 flex flex-col gap-2">
                  {treatmentsList.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/treatments/${t.slug}`}
                      className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-brand-50"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon name={t.icon} className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-ink group-hover:text-brand-600">{t.name}</span>
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
