import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function Markdown({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-4 text-pretty">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-xl font-bold leading-relaxed">{children}</h1>,
          h2: ({ children }) => (
            <h2 className="mt-4 text-base font-semibold uppercase tracking-wide text-muted-foreground">{children}</h2>
          ),
          h3: ({ children }) => <h3 className="mt-2 text-sm font-semibold">{children}</h3>,
          p: ({ children }) => <p className="text-[15px] leading-relaxed text-muted-foreground">{children}</p>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="flex list-disc flex-col gap-1 pl-5 text-[15px] leading-relaxed text-muted-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="flex list-decimal flex-col gap-1 pl-5 text-[15px] leading-relaxed text-muted-foreground">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-border pl-4 text-[15px] italic leading-relaxed text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">{children}</code>
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={(src as string) || "/placeholder.svg"} alt={alt ?? ""} className="my-2 h-auto max-w-full" />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
