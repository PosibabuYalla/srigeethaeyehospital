export const site = {
  name: "Sri Geetha Eye Hospital",
  shortName: "Sri Geetha Eye Hospital",
  tagline: "We are here to help you see better.",
  city: "Guntur",
  region: "Andhra Pradesh",
  url: "https://www.srigeethaeyehospital.com",
  phone: "+91 85009 22266",
  phoneRaw: "+918500922266",
  emergencyPhone: "+91 85009 22266",
  whatsapp: "918500922266",
  email: "info@srigeethaeyehospital.com",
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
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
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
