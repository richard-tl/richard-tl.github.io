"use client"

import { useState } from "react"
import { ArtGallery } from "@/components/art-gallery"
import { writing } from "@/lib/content"

const subTabs = [
  { id: "art", label: "Art" },
  { id: "writing", label: "Writing" },
  { id: "music", label: "Music" },
] as const

type SubTabId = (typeof subTabs)[number]["id"]

export function PortfolioSection() {
  const [active, setActive] = useState<SubTabId>("art")

  return (
    <div className="flex flex-col gap-10">
      {/* Sub-toggle: Art / Writing / Music */}
      <div role="tablist" aria-label="Portfolio categories" className="flex flex-wrap gap-8">
        {subTabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive ? "text-foreground underline underline-offset-4" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Panels */}
      {active === "art" && <ArtGallery />}

      {active === "writing" && (
        <div className="flex flex-col gap-4">
          <a
            href={writing.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-base"
          >
            <span className="italic underline underline-offset-4">reading.supply</span>
            <span aria-hidden className="text-muted-foreground">
              {"↗"}
            </span>
          </a>
          <p className="text-sm leading-relaxed text-muted-foreground">{writing.note}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {writing.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {active === "music" && <p className="text-sm uppercase tracking-wider text-muted-foreground/70">...</p>}
    </div>
  )
}
