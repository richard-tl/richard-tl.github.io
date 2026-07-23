// ---------------------------------------------------------------------------
// Edit this file to update the content on your portfolio.
// Everything below is placeholder content — swap in your real details.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Richard Lee",
  email: "rtlee at mit [.] edu",
  // Drop your headshot in /public and update this path (e.g. "/richard.jpg")
  photo: "",
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
    title: "Placeholder: Acoustic Sensing for Computational Manufacturing",
    authors: "R. Lee, M. Rau, et al.",
    venue: "Conference on Acoustics & Signal Processing",
    year: "2026",
    href: "#",
  },
  {
    title: "Placeholder: Learning Audio Representations from Physical Systems",
    authors: "R. Lee, et al.",
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: "2025",
    href: "#",
  },
  {
    title: "Placeholder: A Framework for Real-Time Audio Machine Learning",
    authors: "R. Lee, T. Fujioka, J. Dahl",
    venue: "Journal of the Acoustical Society of America",
    year: "2024",
    href: "#",
  },
]

export const education = [
  { degree: "PhD, EECS", school: "Massachusetts Institute of Technology", year: "2024 — present" },
  { degree: "MA", school: "Stanford University", year: "2022 — 2024" },
  { degree: "BS, Electrical Engineering", school: "Columbia University", year: "2018 — 2022" },
]

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
// PORTFOLIO — artwork & writing (rolodex). Writing links to reading.supply
// ---------------------------------------------------------------------------
// Artwork rolodex — a grid of images. Drop files in /public/art (or /public/images)
// and list their paths here. Leave the array item as a bare string path.
export const artwork: string[] = [
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
]

// Boxed links that sit beside the artwork rolodex.
export type PortfolioLink = {
  label: string
  description: string
  href?: string
  disabled?: boolean
}

export const portfolioLinks: PortfolioLink[] = [
  {
    label: "Writing",
    description: "Essays and notes on reading.supply",
    href: "https://reading.supply",
  },
  {
    label: "Music",
    description: "Coming soon",
    disabled: true,
  },
]

export const readingSupplyUrl = "https://reading.supply"
