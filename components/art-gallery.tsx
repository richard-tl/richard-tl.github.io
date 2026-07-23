"use client"

import { artGallery } from "@/lib/content"

// Cleanly hide any image whose file hasn't been uploaded yet.
function hideOnError(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = "none"
}

export function ArtGallery() {
  return (
    <div className="mx-auto flex max-w-lg flex-col">
      {/* Top banner — centered, matching the previous site's top-image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={artGallery.spread || "/placeholder.svg"}
        alt="Banner"
        loading="lazy"
        onError={hideOnError}
        className="mx-auto mb-[10px] block max-h-[35vh] w-auto max-w-full"
      />

      {/* Photo grid — masonry columns, matching the previous site's photo-grid */}
      <div className="columns-2 gap-[10px] sm:columns-3 md:columns-4">
        {artGallery.photos.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src || "/placeholder.svg"}
            alt={`Photograph ${i + 1}`}
            loading="lazy"
            onError={hideOnError}
            className="mb-[10px] block w-full break-inside-avoid"
          />
        ))}
      </div>

      {/* Designs — single-column, full-width stack (design-grid, column-count: 1) */}
      <div className="mt-4 flex flex-col gap-[10px]">
        {artGallery.designs.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src || "/placeholder.svg"}
            alt={`Design ${i + 1}`}
            loading="lazy"
            onError={hideOnError}
            className="mx-auto block h-auto w-auto max-w-full"
          />
        ))}
      </div>
    </div>
  )
}
