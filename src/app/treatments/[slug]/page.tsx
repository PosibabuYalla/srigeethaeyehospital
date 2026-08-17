import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { BookAppointmentDialog } from "@/components/sections/contact/book-appointment-dialog";
import { treatments, getTreatment } from "@/lib/data/treatments";
import { getDoctor } from "@/lib/data/doctors";
import { getEquipment } from "@/lib/data/equipment";
import { BreadcrumbSchema, MedicalProcedureSchema } from "@/components/seo/schema";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};

  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");
  const domainUrl = isGeoDomain ? site.urlGeo : site.url;

  return {
    metadataBase: new URL(domainUrl),
    title: treatment.name,
    description: treatment.shortDescription,
    alternates: { canonical: `/treatments/${treatment.slug}` },
    openGraph: {
      title: treatment.name,
      description: treatment.shortDescription,
      url: `${domainUrl}/treatments/${treatment.slug}`,
    },
  };
}


const infoBlocks = [
  { key: "symptoms" as const, title: "Symptoms", icon: "activity" },
  { key: "diagnosis" as const, title: "Diagnosis", icon: "scan-line" },
  { key: "treatment" as const, title: "Treatment", icon: "clipboard-list" },
];

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const relatedDoctors = treatment.doctors.map(getDoctor).filter((d): d is NonNullable<typeof d> => Boolean(d));
  const relatedEquipment = treatment.equipment
    .map(getEquipment)
    .filter((e): e is NonNullable<typeof e> => Boolean(e));
  const related = treatments.filter((t) => t.slug !== treatment.slug && t.category === treatment.category).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Treatments", href: "/treatments" },
          { name: treatment.name, href: `/treatments/${treatment.slug}` },
        ]}
      />
      <MedicalProcedureSchema name={treatment.name} description={treatment.shortDescription} />

      <PageHero
        eyebrow={treatment.category}
        title={treatment.name}
        description={treatment.shortDescription}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: treatment.name },
        ]}
      />

      <section className="section-screen relative pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-8 lg:col-span-2">
            {infoBlocks.map((block) => (
              <Reveal key={block.key}>
                <GlassCard>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                      <Icon name={block.icon} className="h-5 w-5" />
                    </span>
                    <h2 className="font-heading text-xl font-bold text-ink">{block.title}</h2>
                  </div>
                  <ul className="mt-5 flex flex-col gap-3">
                    {treatment[block.key].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate">
                        <Icon name="check-circle" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}

            <Reveal>
              <GlassCard>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon name="heart-pulse" className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-xl font-bold text-ink">Recovery</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate">{treatment.recovery}</p>
              </GlassCard>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <GlassCard gradientBorder>
                <p className="text-xs font-bold uppercase tracking-wide text-slate">Success Rate</p>
                <p className="mt-2 font-heading text-4xl font-extrabold text-brand-600">{treatment.successRate}</p>
                <div className="mt-5 flex flex-col gap-2 border-t border-ink/5 pt-5">
                  <BookAppointmentDialog>
                    <Button variant="primary">
                      Book Appointment
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </Button>
                  </BookAppointmentDialog>
                  <Button asChild variant="outline">
                    <a href={`tel:${site.phoneRaw}`}>
                      <Icon name="phone" className="h-4 w-4" />
                      Call {site.phone}
                    </a>
                  </Button>
                </div>
              </GlassCard>
            </Reveal>

            {relatedDoctors.length > 0 && (
              <Reveal>
                <GlassCard>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate">Treated By</p>
                  <div className="mt-4 flex flex-col gap-4">
                    {relatedDoctors.map((doc) => (
                      <Link
                        key={doc.slug}
                        href={`/doctors/${doc.slug}`}
                        className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-brand-50"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 font-heading text-sm font-bold text-white">
                          {doc.name.replace("Dr. ", "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                        <div>
                          <p className="font-heading text-sm font-bold text-ink group-hover:text-brand-600">{doc.name}</p>
                          <p className="text-xs text-slate">{doc.role}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            )}

            {relatedEquipment.length > 0 && (
              <Reveal>
                <GlassCard>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate">Equipment Used</p>
                  <div className="mt-4 flex flex-col gap-3">
                    {relatedEquipment.map((eq) => (
                      <Link
                        key={eq.slug}
                        href="/equipment"
                        className="flex items-start gap-2.5 text-sm font-medium text-ink transition-colors hover:text-brand-600"
                      >
                        <Icon name="microscope" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        {eq.name}
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {treatment.faqs.length > 0 && (
        <FaqSection
          items={treatment.faqs}
          eyebrow="FAQ"
          title={<>Questions About <span className="text-gradient">{treatment.name}</span></>}
        />
      )}

      {related.length > 0 && (
        <section className="section-screen relative pb-24 sm:pb-32">
          <Container>
            <h2 className="font-heading text-2xl font-bold text-ink">Related Treatments</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((t) => (
                <Link key={t.slug} href={`/treatments/${t.slug}`} className="group">
                  <GlassCard className="flex h-full flex-col">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <Icon name={t.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-heading text-base font-bold text-ink">{t.name}</h3>
                    <p className="mt-2 text-sm text-slate">{t.shortDescription}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
