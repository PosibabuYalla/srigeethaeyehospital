export const site = {
  name: "Sri Geetha Eye Hospital",
  shortName: "Sri Geetha Eye Hospital",
  tagline: "Advanced Eye Care, Powered by Precision Technology",
  city: "Guntur",
  region: "Andhra Pradesh",
  url: "https://www.srigeethaeyehospital.com",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  emergencyPhone: "+91 98765 00000",
  whatsapp: "919876543210",
  email: "info@srigeethaeyehospital.com",
  address: {
    line1: "Sri Geetha Eye Hospital",
    line2: "Arundelpet, Guntur",
    city: "Guntur",
    state: "Andhra Pradesh",
    zip: "522002",
    country: "India",
  },
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0!2d80.4365!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGuntur!5e0!3m2!1sen!2sin!4v1700000000000",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "9:00 AM – 1:00 PM (Emergency Only)" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
  founded: 1985,
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
