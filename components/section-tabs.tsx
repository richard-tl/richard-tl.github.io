"use client"

import { useState } from "react"
import { ResearchSection } from "@/components/research-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"

const tabs = [
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
] as const

type TabId = (typeof tabs)[number]["id"]

export function SectionTabs() {
  const [active, setActive] = useState<TabId>("research")

  return (
    <section className="mt-16 md:mt-24">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Portfolio sections"
        className="grid grid-cols-3 border-t border-border pt-5"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`text-left text-base transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Panels */}
      <div className="mt-12">
        <div role="tabpanel" id="panel-research" aria-labelledby="tab-research" hidden={active !== "research"}>
          {active === "research" && <ResearchSection />}
        </div>
        <div role="tabpanel" id="panel-experience" aria-labelledby="tab-experience" hidden={active !== "experience"}>
          {active === "experience" && <ExperienceSection />}
        </div>
        <div role="tabpanel" id="panel-portfolio" aria-labelledby="tab-portfolio" hidden={active !== "portfolio"}>
          {active === "portfolio" && <PortfolioSection />}
        </div>
      </div>
    </section>
  )
}
