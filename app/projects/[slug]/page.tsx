import Link from "next/link"
import { notFound } from "next/navigation"
import { Markdown } from "@/components/markdown"
import { getProjectPages, getProjectSlugs, getProjectTitle } from "@/lib/projects"

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return { title: `${getProjectTitle(slug)} — Richard Lee` }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getProjectSlugs().includes(slug)) notFound()

  const pages = getProjectPages(slug)
  const title = getProjectTitle(slug)

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="text-sm uppercase tracking-wider text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        {"← back"}
      </Link>

      <h1 className="mt-8 text-2xl font-bold leading-tight">{title}</h1>

      <div className="mt-8 flex flex-col gap-10">
        {pages.length > 0 ? (
          pages.map((md, i) => <Markdown key={i}>{md}</Markdown>)
        ) : (
          <p className="text-sm text-muted-foreground">No content yet.</p>
        )}
      </div>
    </main>
  )
}
