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
    "I'm a PhD student at MIT EECS. I work on acoustic sensing, computational manufacturing, and audio machine learning. My research is conducted at the Research Laboratory for Electronics with Prof. Mark Rau and supported by a Presidential Fellowship.",
    "Before this I got my MA at Stanford, working with Takako Fujioka and Jeremy Dahl. I completed my BS EE at Columbia, advised by Paul Sajda and Nima Mesgarani.",
    "My inspirations draw from concerts, cognitive science, compilers and architecture, and I write and make art in my free time.",
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
      "Covert Perception of AI Adversely Impacts Team Performance and Changes Physiological Dynamics Despite Human-Level AI Competence",
    authors: "Y Qin, RT Lee, P Sajda",
    venue: "npj Artificial Intelligence",
    year: "2026",
    href: "https://www.nature.com/articles/s44387-026-00130-1",
  },
  {
    title:
      "Audio-Tactile Association Improves Pitch Perception in Listeners With and Without Cochlear Implants",
    authors: "A Hodges, M Fitzgerald, L May, RT Lee, R Goldsworthy, T Fujioka",
    venue: "Brain Research",
    year: "2026",
    href: "https://www.sciencedirect.com/journal/brain-research",
  },
  {
    title: "Physiologically Informed Predictability of a Teammate's Future Actions Forecasts Team Performance",
    authors: "Y Qin, RT Lee, W Zhang, X Sun, P Sajda",
    venue: "iScience 28 (5)",
    year: "2025",
    href: "https://www.cell.com/iscience/fulltext/S2589-0042(25)00001-0",
  },
  {
    title: "MOV-AAD: A Large-Scale Multimodal Dataset for Dynamic Auditory Attention in Naturalistic Listening",
    authors: "X He, V Choudhari, T Spratt, A Raghvan, R Lee, N Mesgarani",
    venue: "Interspeech",
    year: "2026",
    href: "https://interspeech2026.org/en-AU",
  },
  {
    title: "Pupil-Linked Arousal is Predictive of Team Performance in a Virtual Reality (VR) Sensory-Motor Task",
    authors: "Y Qin, W Zhang, R Lee, X Sun, P Sajda",
    venue: "IEEE EMBC",
    year: "2024",
    href: "https://ieeexplore.ieee.org/abstract/document/10782124",
  },
  {
    title: "MaxPy: An Open-Source Python Package for Text-Based Generation of MaxMSP Patches",
    authors: "RY Liu, S Peterson, R Lee, M Santolucito",
    venue: "NIME",
    year: "2023",
    href: "https://www.nime2023.org/",
  },
  {
    title: "Predictive Power of Pupil Dynamics in a Team Based Virtual Reality Task",
    authors: "Y Qin, W Zhang, R Lee, X Sun, P Sajda",
    venue: "IEEE VRW",
    year: "2022",
    href: "https://ieeexplore.ieee.org/document/9757720",
  },
]

// Short lead line shown above the publication list.
export const researchIntro =
  ""

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
    period: "2025 — 26",
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
// ART GALLERY — replicates the layout of the previous site. Every file now
// lives in /public/art (no separate images folder).
//   spread : a single wide banner image centered up top
//   photos : a masonry column grid of photographs
//   designs: a stacked, full-width run of artwork
export const artGallery = {
  spread: "/art/banner.png",
  photos: [
    "/art/row1p1.png",
    "/art/row1p2.png",
    "/art/row1p3.png",
    "/art/row1p4.png",
    "/art/row2p1.png",
    "/art/row2p2.png",
    "/art/row2p3.png",
    "/art/row2p4.png",
    "/art/row3p1.png",
    "/art/row3p2.png",
    "/art/row3p3.png",
    "/art/row3p4.png",
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

// ENGINEERING — an evenly spaced grid of project tiles. Give a tile a `slug`
// to link it to its markdown project page at /projects/<slug> (content lives in
// content/projects/<slug>/<slug>1.md, <slug>2.md, ...). Leave `slug` undefined
// for a non-clickable placeholder tile.
export type EngProject = {
  title: string
  meta?: string
  slug?: string
}

export const engProjects: EngProject[] = [
  { title: "Boombox", meta: "Portable hi-fi speaker", slug: "boombox" },
  { title: "Ultrasound Robotics", meta: "Point of care methods", slug: "pocus" },
  { title: "Audio-Haptic", meta: "Cochlear implant supplement", slug: "haptic" },
]

// WRITING — reading.supply plus a couple of pertinent links.
export const readingSupplyUrl = "https://reading.supply/@rilee"

export const writing = {
  url: readingSupplyUrl,
  note: "poems from the margins of math notes",
  links: [
    { label: "", href: "" },
    { label: "", href: ""  },
  ],
}
