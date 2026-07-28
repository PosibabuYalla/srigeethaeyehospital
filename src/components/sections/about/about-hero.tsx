import Image from "next/image";

const ABOUT_HERO_IMAGE =
  "https://rollsandrattles.in/wp-content/uploads/2026/07/AboutHeroImg.webp";

export function AboutHero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <Image
        src={ABOUT_HERO_IMAGE}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="scale-110 object-cover object-center opacity-60 blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/70" />

      <div className="relative h-full w-full p-5 sm:p-10 lg:p-16">
        <div className="relative h-full w-full">
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Sri Geetha Eye Hospital"
            fill
            priority
            sizes="100vw"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
