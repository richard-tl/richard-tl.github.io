import { publications, education } from "@/lib/content"

export function ResearchSection() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">Publications</h2>
        <ul className="flex flex-col">
          {publications.map((pub, i) => (
            <li key={i} className="border-t border-border/20 py-5 first:border-t-0 first:pt-0">
              <a
                href={pub.href ?? "#"}
                className="group grid grid-cols-1 gap-1 md:grid-cols-[1fr_auto] md:gap-8"
              >
                <div>
                  <p className="leading-relaxed underline-offset-4 group-hover:underline">{pub.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pub.authors}</p>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">{pub.venue}</p>
                </div>
                <span className="text-sm text-muted-foreground md:pt-0.5">{pub.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">Education</h2>
        <ul className="flex flex-col">
          {education.map((ed, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-1 border-t border-border/20 py-5 first:border-t-0 first:pt-0 md:grid-cols-[1fr_auto] md:gap-8"
            >
              <div>
                <p className="leading-relaxed">{ed.degree}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ed.school}</p>
              </div>
              <span className="text-sm text-muted-foreground md:pt-0.5">{ed.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
