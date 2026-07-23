import fs from "node:fs"
import path from "node:path"

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects")

// Sort helper so "boombox2" < "boombox10" (numeric-aware).
function byNumericSuffix(a: string, b: string) {
  const na = Number.parseInt(a.replace(/\D/g, ""), 10) || 0
  const nb = Number.parseInt(b.replace(/\D/g, ""), 10) || 0
  return na - nb
}

// All project slugs = subfolder names under content/projects.
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []
  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
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
