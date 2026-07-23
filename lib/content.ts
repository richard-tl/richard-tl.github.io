// ---------------------------------------------------------------------------
// Edit this file to update the content on your portfolio.
// Everything below is placeholder content — swap in your real details.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Richard Lee",
  email: "rtlee at mit [.] edu",
  // Drop your headshot in /public/profile and update the filename below.
  // Leave "" to show the grey placeholder box.
  photo: "/profile/headshot.jpg",
  bio: [
    "I'm a PhD student at MIT EECS. I work on acoustic sensing, computational manufacturing, and audio machine learning. My research is conducted at the Research Laboratory for Electronics (RLE) with Prof. Mark Rau and supported by a Presidential Fellowship.",
    "Before this I got my MA at Stanford, working with Takako Fujioka and Jeremy Dahl. I completed my BS EE at Columbia, advised by Paul Sajda and Nima Mesgarani.",
    "My inspirations draw from concerts, film, compilers and architecture, and I write and make art in my free time.",
  ],
}

// ---------------------------------------------------------------------------
// RESEARCH — publications, talks, academic record
// ---------------------------------------------------------------------------
export type Publication = {
  title: string
  authors: string
  venue: string
  year: string
  href?: string
}

export const publications: Publication[] = [
  {
    title:
      "Covert perception of AI adversely impacts team performance and changes physiological dynamics despite human-level AI competence",
    authors: "Y Qin, RT Lee, P Sajda",
    venue: "npj Artificial Intelligence",
    year: "2026",
  },
  {
    title:
      "Audio-tactile association improves pitch perception in listeners with and without cochlear implants",
    authors: "A Hodges, M Fitzgerald, L May, RT Lee, R Goldsworthy, T Fujioka",
    venue: "Brain Research, 150182",
    year: "2026",
  },
  {
    title: "Physiologically informed predictability of a teammate's future actions forecasts team performance",
    authors: "Y Qin, RT Lee, W Zhang, X Sun, P Sajda",
    venue: "iScience 28 (5)",
    year: "2025",
  },
  {
    title: "Pupil-Linked Arousal is Predictive of Team Performance in a Virtual Reality Sensory-Motor Task",
    authors: "Y Qin, W Zhang, R Lee, X Sun, P Sajda",
    venue: "IEEE EMBC",
    year: "2024",
  },
  {
    title: "MaxPy: An open-source Python package for text-based generation of MaxMSP patches",
    authors: "RY Liu, S Peterson, R Lee, M Santolucito",
    venue: "NIME",
    year: "2023",
  },
  {
    title: "Predictive power of pupil dynamics in a team based virtual reality task",
    authors: "Y Qin, W Zhang, R Lee, X Sun, P Sajda",
    venue: "IEEE VR",
    year: "2022",
  },
]

// Short lead line shown above the publication list.
export const researchIntro =
  "My published work spans multimodal transformer models for human-AI teams and neuroscience."

// Google Scholar profile shown in the Research tab.
export const scholarUrl =
  "https://scholar.google.com/citations?view_op=list_works&hl=en&user=QSHpRoIAAAAJ"

// LinkedIn profile shown in the Experience tab.
export const linkedinUrl = "https://www.linkedin.com/in/richard-tl/"

// ---------------------------------------------------------------------------
// EXPERIENCE — professional history
// ---------------------------------------------------------------------------
export type Experience = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: "R&D Engineer",
    org: "Sonovance / Stanford Medicine",
    period: "2025",
    bullets: ["Signal processing for 3D ultrasound imaging", "Robotic capture via reinforcement learning"],
  },
  {
    role: "Audio Hardware",
    org: "Tesla",
    period: "2024 — 25",
    bullets: [
      "In-cabin acoustic interaction + ToF sensor mapping",
      "Wrote custom firmware script for filter selection UI",
    ],
  },
  {
    role: "ML Researcher",
    org: "LIINC, Columbia BME",
    period: "2020 — 25",
    bullets: ["Multimodal transformers for human-AI team dynamics"],
  },
  {
    role: "Coordinator",
    org: "Nucleate",
    period: "2022",
    bullets: ["Design and Partnerships for NYC biotech incubator"],
  },
  {
    role: "Associate",
    org: "Bowery Capital",
    period: "2021",
    bullets: ["Due diligence on hardware and medical SaaS"],
  },
]

// ---------------------------------------------------------------------------
// PORTFOLIO — Art / Writing / Music toggles
// ---------------------------------------------------------------------------
// ART GALLERY — replicates the layout of the previous site.
//   spread : a single wide image centered up top   -> /public/images
//   photos : a masonry column grid of photographs   -> /public/images + /public/images/photos
//   designs: a stacked, full-width run of artwork    -> /public/art
export const artGallery = {
  spread: "/images/grad_flip3.png",
  photos: [
    "/images/landscape1.png",
    "/images/landscape2.png",
    "/images/landscape4.png",
    "/images/landscape3.png",
    "/images/photos/row2p1.png",
    "/images/photos/row2p2.png",
    "/images/photos/row2p3.png",
    "/images/photos/row2p4.png",
    "/images/photos/row3p1.png",
    "/images/photos/row3p2.png",
    "/images/photos/row3p3.png",
    "/images/photos/row3p4.png",
  ],
  designs: [
    "/art/design0.png",
    "/art/design1.png",
    "/art/design2.png",
    "/art/design3.png",
    "/art/design4.png",
    "/art/design5.png",
    "/art/design6.png",
    "/art/design7.png",
    "/art/design8.png",
    "/art/design9.png",
    "/art/design10.png",
    "/art/design11.png",
    "/art/collage1.png",
    "/art/collage2.png",
    "/art/collage3.png",
  ],
}

// WRITING — reading.supply plus a couple of pertinent links.
export const readingSupplyUrl = "https://reading.supply/@rilee"

export const writing = {
  url: readingSupplyUrl,
  note: "poems from the margins of math notes",
  links: [
    { label: "video", href: "https://youtu.be/GNhFAVroWJA" },
    { label: "Rat Rock Magazine — 2023", href: "https://www.ratrockmagazine.com/feature/2023/1/31/richard-lee" },
  ],
}
