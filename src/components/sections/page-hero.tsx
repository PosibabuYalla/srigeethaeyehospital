import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/motion/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="section-screen relative overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-brand-100 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-accent-100 blur-3xl animate-blob [animation-delay:2s]" />

      <Container className="relative">
        <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
          {breadcrumb.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <Icon name="chevron-right" className="h-3 w-3" />}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-brand-600">
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-600">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <Reveal>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600 backdrop-blur">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{description}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
