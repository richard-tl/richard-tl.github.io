import { publications, scholarUrl } from "@/lib/content"

export function ResearchSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Publications</h2>
        <a
          href={scholarUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GoogleScholarIcon className="h-4 w-4" />
          <span className="underline-offset-4 group-hover:underline">Google Scholar</span>
        </a>
      </div>

      <ul className="flex flex-col">
        {publications.map((pub, i) => (
          <li key={i} className="border-t border-border/20 py-5 first:border-t-0 first:pt-0">
            <a href={pub.href ?? "#"} className="group grid grid-cols-1 gap-1 md:grid-cols-[1fr_auto] md:gap-8">
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
  )
}

function GoogleScholarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  )
}
