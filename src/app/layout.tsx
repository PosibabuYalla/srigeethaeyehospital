import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingDock } from "@/components/floating/floating-dock";
import { ScrollProgress } from "@/components/floating/scroll-progress";
import { CursorGlow } from "@/components/floating/cursor-glow";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { site } from "@/lib/data/site";
import { OrganizationSchema } from "@/components/seo/schema";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Advanced Eye Care in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Sri Geetha Eye Hospital, Guntur — the region's only dedicated Vitreo Retinal Surgery centre, with imported ZEISS, Alcon and AMO equipment, expert retina specialists, and 40+ years of trusted eye care.",
  keywords: [
    "Sri Geetha Eye Hospital",
    "Eye Hospital Guntur",
    "Vitreo Retinal Surgery",
    "Retina Specialist Guntur",
    "Cataract Surgery Guntur",
    "LASIK Guntur",
    "Best Eye Hospital Andhra Pradesh",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Advanced Eye Care in ${site.city}`,
    description:
      "The region's only dedicated Vitreo Retinal Surgery centre — imported world-class equipment, expert specialists, premium eye care.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Advanced Eye Care in ${site.city}`,
    description:
      "The region's only dedicated Vitreo Retinal Surgery centre — imported world-class equipment, expert specialists.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationSchema />
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
