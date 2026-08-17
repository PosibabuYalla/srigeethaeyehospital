import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rollsandrattles.in",
      },
    ],
  },

  /**
   * HTTP Security Headers + SEO-Critical Headers
   *
   * Applied globally to all routes. These are injected into the HTTP response
   * headers — they have zero visual impact on the front-end.
   *
   * SEO benefits:
   *  - X-Robots-Tag on /api/ → prevents Googlebot from indexing API endpoints
   *  - X-Frame-Options → prevents clickjacking (security signal for Google)
   *  - Referrer-Policy → controls referrer data sent to external sites
   *  - Permissions-Policy → modern replacement for Feature-Policy
   */
  async headers() {
    return [
      // ── Global headers applied to every page ──────────────────────────
      {
        source: "/(.*)",
        headers: [
          // Prevent this site from being embedded in iframes (clickjack protection)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevent MIME-type sniffing (security + Google trust signal)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Only send origin as referrer when navigating cross-origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable microphone/camera/geolocation access from this origin
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      // ── API routes: explicitly block indexing ─────────────────────────
      // X-Robots-Tag: noindex prevents Googlebot from indexing any /api/ path
      // even if it discovers these URLs through other means.
      {
        source: "/api/(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      // ── Static assets: aggressive caching ────────────────────────────
      // Immutable cache for versioned assets improves Core Web Vitals (LCP/FID)
      // which Google uses as a ranking factor.
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ── Images and public assets ──────────────────────────────────────
      {
        source: "/(Logo\\.png|favicon\\.png|favicon\\.ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
