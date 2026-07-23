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
  summary: string
}

export const experiences: Experience[] = [
  {
    role: "Graduate Research Assistant",
    org: "Research Laboratory for Electronics, MIT",
    period: "2024 — present",
    summary:
      "Placeholder: Research on acoustic sensing and computational manufacturing under a Presidential Fellowship.",
  },
  {
    role: "Research Intern",
    org: "Placeholder Company / Lab",
    period: "Summer 2023",
    summary: "Placeholder: A short description of what you worked on and the impact it had.",
  },
  {
    role: "Teaching Assistant",
    org: "Stanford University",
    period: "2022 — 2024",
    summary: "Placeholder: Courses assisted and responsibilities.",
  },
]

// ---------------------------------------------------------------------------
// PORTFOLIO — artwork & writing (rolodex). Writing links to reading.supply
// ---------------------------------------------------------------------------
export type PortfolioItem = {
  title: string
  kind: "art" | "writing"
  // Use a real image path from /public, or leave blank for a grey placeholder tile
  image?: string
  href?: string
  meta?: string
}

export const portfolio: PortfolioItem[] = [
  { title: "Untitled Study I", kind: "art", meta: "2026", href: "#" },
  { title: "On Compilers & Composition", kind: "writing", meta: "reading.supply", href: "https://reading.supply" },
  { title: "Field Recording Series", kind: "art", meta: "2025", href: "#" },
  { title: "Notes on Architecture", kind: "writing", meta: "reading.supply", href: "https://reading.supply" },
  { title: "Concert Sketchbook", kind: "art", meta: "2025", href: "#" },
  { title: "A Short Essay on Film", kind: "writing", meta: "reading.supply", href: "https://reading.supply" },
]

export const readingSupplyUrl = "https://reading.supply"
