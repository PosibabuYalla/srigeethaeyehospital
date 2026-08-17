import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingDock } from "@/components/floating/floating-dock";
import { ScrollProgress } from "@/components/floating/scroll-progress";
import { CursorGlow } from "@/components/floating/cursor-glow";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { site } from "@/lib/data/site";
import { OrganizationSchema, GeoHospitalSchema } from "@/components/seo/schema";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");
  const domainUrl = isGeoDomain ? site.urlGeo : site.url;

  const titleDefault = isGeoDomain
    ? "Guntur Eye Hospital | Advanced Eye Care & Retina Centre"
    : `Srigeetha Eye Hospital | Advanced Eye Care in ${site.city}`;

  const titleTemplate = isGeoDomain
    ? "%s | Guntur Eye Hospital"
    : `%s | Srigeetha Eye Hospital`;

  const description = isGeoDomain
    ? "Guntur Eye Hospital is Guntur's premier dedicated Vitreo Retinal Surgery and advanced eye care centre, offering world-class treatments with imported ZEISS, Alcon, and AMO equipment."
    : "Sri Geetha Eye Hospital, Guntur, the region's only dedicated Vitreo Retinal Surgery centre, with imported ZEISS, Alcon and AMO equipment, expert retina specialists, and 40+ years of trusted eye care.";

  const name = isGeoDomain ? "Guntur Eye Hospital" : site.name;

  return {
    metadataBase: new URL(domainUrl),
    title: {
      default: titleDefault,
      template: titleTemplate,
    },
    description: description,
    keywords: isGeoDomain
      ? [
          "Guntur Eye Hospital",
          "Eye Hospital Guntur",
          "Best Eye Doctor Guntur",
          "Vitreo Retinal Surgery Guntur",
          "Retina Specialist Guntur",
          "Cataract Surgery Guntur",
          "LASIK Guntur",
          "Best Eye Clinic Andhra Pradesh",
        ]
      : [
          "Sri Geetha Eye Hospital",
          "Eye Hospital Guntur",
          "Vitreo Retinal Surgery",
          "Retina Specialist Guntur",
          "Cataract Surgery Guntur",
          "LASIK Guntur",
          "Best Eye Hospital Andhra Pradesh",
        ],
    authors: [{ name: name }],
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: domainUrl,
      siteName: name,
      title: titleDefault,
      description: description,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description: description,
      images: ["/images/og-image.jpg"],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "/" },
  };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detect which domain is serving this request.
  // Same codebase runs both www.srigeethaeyehospital.com AND www.guntureyehospital.com.
  // The correct JSON-LD schema block is injected based on the host header.
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isGeoDomain = host.includes("guntureyehospital.com");
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Domain-aware JSON-LD schema injection — zero visual impact */}
        {isGeoDomain ? <GeoHospitalSchema /> : <OrganizationSchema />}
        <SmoothScrollProvider>
          <ScrollProgress />
          <CursorGlow />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingDock />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
