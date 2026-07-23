// ---------------------------------------------------------------------------
// Project utilities: read project slugs, pages, and images.
// ---------------------------------------------------------------------------

import fs from "node:fs"
import path from "node:path"

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects")
const PUBLIC_PROJECTS_DIR = path.join(process.cwd(), "public", "projects")

const IMAGE_EXTENSIONS = /\.(jpe?g|png|gif|webp|avif|svg)$/i

// Sort helper so "boombox2" < "boombox10" (numeric-aware).
function byNumericSuffix(a: string, b: string) {
  const na = Number.parseInt(a.replace(/\D/g, ""), 10) || 0
  const nb = Number.parseInt(b.replace(/\D/g, ""), 10) || 0
  if (na !== nb) return na - nb
  return a.localeCompare(b)
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
//
// Implementation note: many people accidentally upload images into
// content/projects/<slug>/ instead of public/projects/<slug> (for example via
// the GitHub web UI). To make those images appear immediately without a
// separate git move, this function will detect images inside
// content/projects/<slug>/ and copy them into public/projects/<slug>/ at
// build/runtime if the public folder doesn't already exist. This keeps the
// canonical serving location in public/ while making the site resilient to a
// common user mistake.
export function getProjectImages(slug: string): string[] {
  const publicDir = path.join(PUBLIC_PROJECTS_DIR, slug)
  const contentDir = path.join(PROJECTS_DIR, slug)

  // If the public folder doesn't exist but the content folder contains images,
  // copy them into public so Next.js can serve them from /projects/<slug>/...
  try {
    if (!fs.existsSync(publicDir) && fs.existsSync(contentDir)) {
      const contentFiles = fs.readdirSync(contentDir).filter((f) => IMAGE_EXTENSIONS.test(f))
      if (contentFiles.length > 0) {
        fs.mkdirSync(publicDir, { recursive: true })
        for (const file of contentFiles) {
          const src = path.join(contentDir, file)
          const dest = path.join(publicDir, file)
          // Only copy if dest doesn't already exist (safe-guard)
          if (!fs.existsSync(dest)) {
            fs.copyFileSync(src, dest)
          }
        }
      }
    }
  } catch (err) {
    // Failure to copy should not crash the build; log and continue with whatever
    // publicDir state exists.
    // eslint-disable-next-line no-console
    console.warn(`getProjectImages: could not copy images for ${slug}:`, err)
  }

  if (!fs.existsSync(publicDir)) return []
  return fs
    .readdirSync(publicDir)
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
