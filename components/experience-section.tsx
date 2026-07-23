import { experiences } from "@/lib/content"

export function ExperienceSection() {
  return (
    <ul className="flex flex-col">
      {experiences.map((exp, i) => (
        <li
          key={i}
          className="grid grid-cols-1 gap-1 border-t border-border/20 py-6 first:border-t-0 first:pt-0 md:grid-cols-[1fr_auto] md:gap-8"
        >
          <div>
            <p className="leading-relaxed">
              {exp.role} <span className="text-muted-foreground">— {exp.org}</span>
            </p>
            <ul className="mt-2 flex max-w-prose flex-col gap-1">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                  <span aria-hidden className="select-none">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-sm text-muted-foreground md:pt-0.5">{exp.period}</span>
        </li>
      ))}
    </ul>
  )
}
