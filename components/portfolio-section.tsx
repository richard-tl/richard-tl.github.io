import { portfolio, readingSupplyUrl } from "@/lib/content"

export function PortfolioSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
        {portfolio.map((item, i) => (
          <a key={i} href={item.href ?? "#"} target="_blank" rel="noreferrer" className="group flex flex-col">
            <div className="aspect-square w-full overflow-hidden bg-muted">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              ) : (
                <span className="sr-only">{item.title} placeholder</span>
              )}
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <p className="text-sm leading-relaxed underline-offset-4 group-hover:underline">{item.title}</p>
              <span className="shrink-0 text-xs uppercase tracking-wider text-muted-foreground">
                {item.kind === "writing" ? "Writing" : "Art"}
              </span>
            </div>
            {item.meta ? <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p> : null}
          </a>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Writing is published on{" "}
        <a
          href={readingSupplyUrl}
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline underline-offset-4"
        >
          reading.supply
        </a>
        .
      </p>
    </div>
  )
}
