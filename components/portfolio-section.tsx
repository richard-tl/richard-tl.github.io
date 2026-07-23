"use client"

import { artwork, portfolioLinks } from "@/lib/content"

export function PortfolioSection() {
  return (
    <div className="flex flex-col gap-10">
      {/* Boxed links — writing + future music */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {portfolioLinks.map((link, i) => {
          const content = (
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm uppercase tracking-wider">{link.label}</span>
              {!link.disabled ? <span aria-hidden className="text-muted-foreground">{"↗"}</span> : null}
            </div>
          )

          if (link.disabled || !link.href) {
            return (
              <div
                key={i}
                aria-disabled
                className="flex flex-col border border-border/40 p-5 text-muted-foreground/70"
              >
                {content}
              </div>
            )
          }

          return (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col border border-border p-5 transition-colors hover:bg-muted/50"
            >
              {content}
            </a>
          )
        })}
      </div>

      {/* Artwork rolodex */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {artwork.map((src, i) => (
          <div key={i} className="aspect-square w-full overflow-hidden bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src || "/placeholder.svg"}
              alt={`Artwork ${i + 1}`}
              loading="lazy"
              onError={(e) => {
                // Hide broken tiles cleanly until real art files are added to /public.
                e.currentTarget.style.visibility = "hidden"
              }}
              className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
