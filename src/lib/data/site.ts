export const site = {
  name: "Sri Geetha Eye Hospital",
  shortName: "Sri Geetha Eye Hospital",
  tagline: "We are here to help you see better.",
  city: "Guntur",
  region: "Andhra Pradesh",
  url: "https://www.srigeethaeyehospital.com",
  // Mirror and geo-targeted domain references (used in sameAs cross-linking)
  urlPlural: "https://www.srigeethaeyehospitals.com",
  urlGeo: "https://www.guntureyehospital.com",
  phone: "+91 85009 22266",
  phoneRaw: "+918500922266",
  emergencyPhone: "+91 85009 22266",
  whatsapp: "918500922266",
  email: "info@srigeethaeyehospital.com",
  foundingDate: "1983",
  address: {
    line1: "Sri Geetha Eye Hospital",
    line2: "Laxmipuram, 4th Lane, Behind Harihara Cinemas, Opp. Indian Bank",
    city: "Guntur",
    state: "Andhra Pradesh",
    zip: "522007",
    country: "India",
  },
  mapQuery: "Sri Geetha Eye Hospital, Laxmipuram 4th Lane, Behind Harihara Cinemas, Opp Indian Bank, Guntur, Andhra Pradesh 522007",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Sri+Geetha+Eye+Hospital+Laxmipuram+4th+Lane+Behind+Harihara+Cinemas+Opp+Indian+Bank+Guntur+Andhra+Pradesh+522007&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sri+Geetha+Eye+Hospital+Laxmipuram+4th+Lane+Behind+Harihara+Cinemas+Opp+Indian+Bank+Guntur+Andhra+Pradesh+522007",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "9:00 AM – 1:00 PM" },
  ],
  social: {
    // Verified, profile-specific URLs (NOT generic homepages)
    facebook: "https://www.facebook.com/srigeethaeyehospitals/",
    instagram: "https://www.instagram.com/srigeethaeyehospitalofficial/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
  /**
   * External Listings — used in sameAs for JSON-LD schema on both domains.
   *
   * IMPORTANT: The business directory URLs below (Justdial, Practo, Magicpin,
   * 5BestInCity) are currently set to the portal homepage. For maximum SEO
   * impact, replace each one with the SPECIFIC listing page URL for this
   * hospital once you locate them in those portals' dashboards.
   *
   * Example: "https://www.justdial.com/Guntur/Sri-Geetha-Eye-Hospital-..."
   *
   * The insurance/health network URLs and verified social profile URLs
   * are intentionally kept as-is (they represent empanelment relationships).
   */
  externalListings: [
    // Mirror domain (bidirectional entity cross-link)
    "https://www.srigeethaeyehospitals.com",
    // Geo domain (bidirectional entity cross-link)
    "https://www.guntureyehospital.com",
    // Business Directories — REPLACE with specific listing page URLs
    "https://www.justdial.com",
    "https://www.practo.com",
    "https://www.magicpin.in",
    "https://www.5bestincity.com",
    // Insurance & Health Network Partners
    "https://www.bajajfinservhealth.in",
    "https://www.esi.in",
    "https://www.zurichkotak.com",
    "https://www.bestcarehealthcard.com",
    // Verified Social Media Profiles
    "https://www.facebook.com/srigeethaeyehospitals/",
    "https://www.instagram.com/srigeethaeyehospitalofficial/",
  ],
  founded: 1983,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Treatments",
    href: "/treatments",
  },
  { label: "Doctors", href: "/doctors" },
  { label: "Equipment", href: "/equipment" },
  { label: "Contact", href: "/contact" },
] as const;
