export type Equipment = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  purpose: string;
  specifications: string[];
  benefits: string[];
  imported: boolean;
};

export const equipmentList: Equipment[] = [
  {
    slug: "zeiss-cirrus-oct",
    name: "ZEISS CIRRUS 500 HD OCT",
    brand: "Carl Zeiss, Germany",
    category: "Digital OCT Scan",
    image: "/images/equipment/cirrus-oct.jpg",
    purpose: "High-definition digital OCT scan providing cross-sectional imaging of the retina for early detection of retinal and macular disease.",
    specifications: ["5 micron axial resolution", "27,000 A-scans/second", "HD-OCT & OCT Angiography ready"],
    benefits: ["Detects diabetic retinopathy at earliest stage", "Non-contact, painless scan", "Tracks disease progression precisely"],
    imported: true,
  },
  {
    slug: "zeiss-visucam-fundus",
    name: "ZEISS VISUCAM 524 Fundus Camera",
    brand: "Carl Zeiss, Germany",
    category: "Retina Imaging",
    image: "/images/equipment/visucam.jpg",
    purpose: "Ultra-widefield digital fundus photography for documenting and monitoring retinal conditions.",
    specifications: ["50° field of view", "High-resolution digital sensor", "Fluorescein angiography capable"],
    benefits: ["Precise disease documentation", "Enables long-term comparison", "Fast, comfortable imaging"],
    imported: true,
  },
  {
    slug: "zeiss-humphrey-field-analyzer",
    name: "ZEISS Humphrey Field Analyzer",
    brand: "Carl Zeiss, Germany",
    category: "Diagnostics",
    image: "/images/equipment/humphrey.jpg",
    purpose: "Gold-standard visual field testing for early glaucoma detection and monitoring.",
    specifications: ["SITA Standard & Fast algorithms", "Full threshold perimetry", "Automated field analysis"],
    benefits: ["Detects glaucoma before symptoms appear", "Tracks visual field changes over time", "Trusted global gold standard"],
    imported: true,
  },
  {
    slug: "zeiss-iolmaster-700",
    name: "ZEISS IOL Master 700",
    brand: "Carl Zeiss, Germany",
    category: "Cataract Diagnostics",
    image: "/images/equipment/iolmaster.jpg",
    purpose: "Swept-source biometry for precise intraocular lens power calculation before cataract surgery.",
    specifications: ["Swept-Source OCT biometry", "Total Keratometry", "Toric IOL planning"],
    benefits: ["Sub-micron measurement accuracy", "Optimal IOL power selection", "Sharper post-surgery vision outcomes"],
    imported: true,
  },
  {
    slug: "zeiss-lumera-microscope",
    name: "ZEISS Lumera Operating Microscope",
    brand: "Carl Zeiss, Germany",
    category: "Surgical",
    image: "/images/equipment/lumera.jpg",
    purpose: "Premium red-reflex surgical microscope used across cataract and retinal microsurgery.",
    specifications: ["Apochromatic optics", "Stereo Coaxial Illumination", "Integrated OCT visualization"],
    benefits: ["Unmatched surgical clarity", "Reduced surgical time", "Higher precision in micro-incision surgery"],
    imported: true,
  },
  {
    slug: "sirius-corneal-topography",
    name: "SIRIUS Corneal Topography",
    brand: "CSO, Italy",
    category: "Cornea Diagnostics",
    image: "/images/equipment/sirius.jpg",
    purpose: "Combined Scheimpflug and Placido topography for corneal mapping in LASIK and keratoconus screening.",
    specifications: ["Rotating Scheimpflug camera", "Corneal & anterior chamber analysis", "Keratoconus screening software"],
    benefits: ["Precise LASIK candidacy screening", "Early keratoconus detection", "Detailed corneal thickness mapping"],
    imported: true,
  },
  {
    slug: "alcon-constellation-vitrectomy",
    name: "Alcon Constellation Vitrectomy System",
    brand: "Alcon, USA",
    category: "Retina Surgical",
    image: "/images/equipment/constellation.jpg",
    purpose: "The world's most advanced micro-incision vitrectomy platform for complex retinal surgery.",
    specifications: ["27G micro-incision vitrectomy", "Advanced fluidics control", "Integrated endo-illumination"],
    benefits: ["Sutureless, faster surgery", "Minimal tissue trauma", "Superior outcomes in complex retinal detachment"],
    imported: true,
  },
  {
    slug: "amo-signature-whitestar",
    name: "AMO Abbott Signature WhiteStar Phaco System",
    brand: "Johnson & Johnson (AMO), USA",
    category: "Cataract Surgical",
    image: "/images/equipment/whitestar.jpg",
    purpose: "Bladeless phacoemulsification system for micro-incision cataract removal.",
    specifications: ["WhiteStar ICE technology", "Fusion fluidics", "Torsional & longitudinal ultrasound"],
    benefits: ["Faster cataract removal", "Lower thermal risk to eye tissue", "Rapid visual recovery"],
    imported: true,
  },
  {
    slug: "appasamy-yag-laser",
    name: "Appasamy YAG Laser",
    brand: "Appasamy Associates, India",
    category: "Laser",
    image: "/images/equipment/yag-laser.jpg",
    purpose: "Posterior capsulotomy and laser iridotomy for post-cataract and glaucoma management.",
    specifications: ["Q-switched Nd:YAG", "Precision aiming beam", "Variable energy control"],
    benefits: ["Painless outpatient procedure", "Restores vision after capsule clouding", "Prevents angle-closure glaucoma"],
    imported: false,
  },
  {
    slug: "appasamy-green-laser",
    name: "Appasamy Green Laser",
    brand: "Appasamy Associates, India",
    category: "Laser",
    image: "/images/equipment/green-laser.jpg",
    purpose: "Pan-retinal photocoagulation for diabetic retinopathy and retinal tear management.",
    specifications: ["532nm frequency-doubled laser", "Multi-spot delivery", "Slit-lamp & indirect delivery"],
    benefits: ["Halts diabetic retinopathy progression", "Seals retinal tears preventing detachment", "Outpatient, same-day procedure"],
    imported: false,
  },
  {
    slug: "appasamy-b-scan",
    name: "Appasamy Ultrasound B-Scan",
    brand: "Appasamy Associates, India",
    category: "Retina Diagnostics",
    image: "/images/equipment/b-scan.jpg",
    purpose: "Ultrasound imaging of the retina when media opacity (dense cataract, hemorrhage) blocks direct view.",
    specifications: ["10 MHz probe", "Real-time B-scan imaging", "Vitreous & retinal evaluation"],
    benefits: ["Detects detachment behind dense cataracts", "Guides emergency surgical planning", "Painless, quick assessment"],
    imported: false,
  },
  {
    slug: "alcon-centurion-phaco",
    name: "Alcon Centurion Phaco System",
    brand: "Alcon, USA",
    category: "Cataract Surgical",
    image: "/images/equipment/centurion.jpg",
    purpose: "Equipped with the advanced Alcon Centurion Phaco System for precision cataract surgery, delivering next-generation active fluidics for consistent, gentle phacoemulsification.",
    specifications: ["Active Fluidics technology", "Intelligent phaco algorithms", "Balanced tip motion control"],
    benefits: ["Exceptional chamber stability", "Reduced surgical trauma", "Consistently excellent outcomes"],
    imported: true,
  },
];

export function getEquipment(slug: string) {
  return equipmentList.find((e) => e.slug === slug);
}
