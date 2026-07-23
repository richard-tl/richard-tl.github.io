import fs from "node:fs"
import path from "node:path"

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects")
const PUBLIC_PROJECTS_DIR = path.join(process.cwd(), "public", "projects")

const IMAGE_EXTENSIONS = /\.(jpe?g|png|gif|webp|avif|svg)$/i

// Sort helper so "boombox2" < "boombox10" (numeric-aware).
function byNumericSuffix(a: string, b: string) {
  const na = Number.parseInt(a.replace(/\D/g, ""), 10) || 0
  const nb = Number.parseInt(b.replace(/\D/g, ""), 10) || 0
  return na - nb
}

// A project exists if it has either a markdown folder (content/projects/<slug>)
// or an image folder (public/projects/<slug>). This lets a project be
// image-only when no text has been written yet.
export function getProjectSlugs(): string[] {
  const slugs = new Set<string>()
  for (const base of [PROJECTS_DIR, PUBLIC_PROJECTS_DIR]) {
    if (!fs.existsSync(base)) continue
    for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
      if (entry.isDirectory()) slugs.add(entry.name)
    }
  }
  return [...slugs]
}

// Ordered image paths for a project from public/projects/<slug>, e.g.
// ["/projects/boombox/boombox1.jpg", "/projects/boombox/boombox2.jpg", ...].
// The first image is treated as the cover.
export function getProjectImages(slug: string): string[] {
  const dir = path.join(PUBLIC_PROJECTS_DIR, slug)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort(byNumericSuffix)
    .map((file) => `/projects/${slug}/${file}`)
}

// The ordered markdown pages for a project, e.g. boombox1.md, boombox2.md, ...
export function getProjectPages(slug: string): string[] {
  const dir = path.join(PROJECTS_DIR, slug)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort(byNumericSuffix)
    .map((file) => fs.readFileSync(path.join(dir, file), "utf8"))
}

// A human-friendly title derived from the slug (e.g. "boombox" -> "Boombox").
export function getProjectTitle(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1)
}
