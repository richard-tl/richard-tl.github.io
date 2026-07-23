"use client"

import { useState } from "react"
import Link from "next/link"
import { engProjects, writing } from "@/lib/content"

const toggleTabs = [
  { id: "eng", label: "Eng" },
  { id: "writing", label: "Writing" },
  { id: "music", label: "Music" },
] as const

type ToggleTabId = (typeof toggleTabs)[number]["id"]

const tabClass = (isActive: boolean) =>
  `text-sm uppercase tracking-wider transition-colors ${
    isActive ? "text-foreground underline underline-offset-4" : "text-muted-foreground hover:text-foreground"
  }`

export function PortfolioSection() {
  const [active, setActive] = useState<ToggleTabId>("eng")

  return (
    <div className="flex flex-col gap-10">
      {/* Sub-toggle: Eng / Art (opens its own white page) / Writing / Music */}
      <div className="flex flex-wrap gap-8">
        <button
          aria-selected={active === "eng"}
          onClick={() => setActive("eng")}
          className={tabClass(active === "eng")}
        >
          Eng
        </button>
        <Link href="/art" className={tabClass(false)}>
          Art
        </Link>
        {toggleTabs
          .filter((tab) => tab.id !== "eng")
          .map((tab) => {
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={tabClass(isActive)}
              >
                {tab.label}
              </button>
            )
          })}
      </div>

      {/* Panels */}
      {active === "eng" && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {engProjects.map((project, i) => {
            const inner = (
              <>
                <div className="aspect-[4/3] w-full bg-muted transition-colors group-hover:bg-muted/70" />
                <p className="mt-2 text-sm">{project.title}</p>
                {project.meta ? <p className="text-[13px] text-muted-foreground">{project.meta}</p> : null}
              </>
            )
            return project.slug ? (
              <Link key={i} href={`/projects/${project.slug}`} className="group block">
                {inner}
              </Link>
            ) : (
              <div key={i} className="group block">
                {inner}
              </div>
            )
          })}
        </div>
      )}

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
