import type { Metadata } from "next"
import Link from "next/link"
import { ArtGallery } from "@/components/art-gallery"

export const metadata: Metadata = {
  title: "Art — Richard Lee",
  description: "Artwork, photography, and graphic scores by Richard Lee.",
}

// A dedicated white canvas so images with white borders stay clean and
// uncorrupted against the surrounding page's dark theme.
export default function ArtPage() {
  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/"
          className="inline-block text-sm text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline"
        >
          {"← back"}
        </Link>

        <div className="mt-8">
          <ArtGallery />
        </div>
      </div>
    </main>
  )
}
