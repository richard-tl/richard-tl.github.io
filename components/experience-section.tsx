import { experiences, linkedinUrl } from "@/lib/content"

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Experience</h2>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="h-4 w-4" />
          <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
        </a>
      </div>

      <ul className="flex flex-col">
        {experiences.map((exp, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-1 border-t border-border/20 py-6 first:border-t-0 first:pt-0 md:grid-cols-[1fr_auto] md:gap-8"
          >
            <div>
              <p className="text-[15px] leading-relaxed">
                {exp.role} <span className="text-muted-foreground">— {exp.org}</span>
              </p>
              <ul className="mt-2 flex max-w-prose flex-col gap-1">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-[13px] leading-relaxed text-pretty text-muted-foreground">
                    <span aria-hidden className="select-none">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-[13px] text-muted-foreground md:pt-0.5">{exp.period}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
