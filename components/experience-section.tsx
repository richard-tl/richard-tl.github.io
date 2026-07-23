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
            <p className="leading-relaxed">{exp.role}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{exp.org}</p>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-pretty">{exp.summary}</p>
          </div>
          <span className="text-sm text-muted-foreground md:pt-0.5">{exp.period}</span>
        </li>
      ))}
    </ul>
  )
}
