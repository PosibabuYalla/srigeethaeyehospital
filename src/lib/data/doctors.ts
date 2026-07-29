export type Doctor = {
  slug: string;
  name: string;
  role: string;
  credentials: string[];
  trainedAt?: string;
  image: string;
  bio: string;
  specializations: string[];
  experienceYears: number;
  education: { degree: string; institute: string }[];
  treatments: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-p-mohan-krishna",
    name: "Dr. P. Mohan Krishna",
    role: "Consultant Vitreo-Retinal Surgeon",
    credentials: ["MS (Oph)", "FVRS"],
    trainedAt: "Aravind Eye Hospital",
    image: "/Doctors/Dr.P.MohanKrishna.webp",
    bio: "Dr. P. Mohan Krishna is a Consultant Vitreo-Retinal Surgeon and one of the leading Vitreo-Retinal Surgeons in Guntur and the nearby districts. Trained at Aravind Eye Hospital, he is associated with leading hospitals in the region and specializes in complex retinal surgery using imported micro-incision vitrectomy systems. He has led thousands of sight-restoring retinal procedures.",
    specializations: [
      "Vitreo Retinal Surgery",
      "Retinal Detachment",
      "Diabetic Retinopathy",
      "Macular Hole",
      "Retina Lasers",
      "Vitrectomy",
    ],
    experienceYears: 15,
    education: [
      { degree: "MS (Ophthalmology)", institute: "Andhra Medical College" },
      { degree: "Fellowship in Vitreo Retinal Surgery (FVRS)", institute: "Aravind Eye Hospital" },
    ],
    treatments: ["vitreo-retinal-surgery", "diabetic-eye-disease", "retinal-detachment", "macular-degeneration", "macular-hole-surgery", "scleral-fixation", "intravitreal-injection"],
  },
  {
    slug: "dr-p-narasimha-rao",
    name: "Dr. P. Narasimha Rao",
    role: "Senior Ophthalmologist",
    credentials: ["MBBS", "DO (RIO Chennai)"],
    image: "/Doctors/Dr.P.NarasimhaRao.webp",
    bio: "With decades of experience in comprehensive eye care, Dr. P. Narasimha Rao has built the trust of thousands of families across Guntur through precise diagnosis and compassionate treatment.",
    specializations: [
      "General Ophthalmology",
      "Comprehensive Eye Care",
      "Cataract Evaluation",
      "Routine Eye Checkups",
    ],
    experienceYears: 35,
    education: [
      { degree: "MBBS", institute: "Guntur Medical College" },
      { degree: "Diploma in Ophthalmology (DO)", institute: "Regional Institute of Ophthalmology, Chennai" },
    ],
    treatments: ["cataract-surgery", "pediatric-ophthalmology", "cornea", "glaucoma"],
  },
  {
    slug: "dr-b-prathyusha",
    name: "Dr. B. Prathyusha",
    role: "Anterior Segment Surgeon",
    credentials: ["MS", "FCRS"],
    trainedAt: "Aravind Eye Hospital",
    image: "/Doctors/Dr.B.Prathyusha.webp",
    bio: "Dr. B. Prathyusha specializes in cataract and corneal surgery, bringing advanced refractive techniques and micro-incision phacoemulsification trained at Aravind Eye Hospital to patients across the region.",
    specializations: [
      "Cataract Surgery",
      "Cornea",
      "Anterior Segment",
      "LASIK",
      "Refractive Surgery",
    ],
    experienceYears: 10,
    education: [
      { degree: "MS (Ophthalmology)", institute: "NRI Medical College" },
      { degree: "Fellowship in Cornea & Refractive Surgery (FCRS)", institute: "Aravind Eye Hospital" },
    ],
    treatments: ["cataract-surgery", "lasik-surgery", "cornea"],
  },
];

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
