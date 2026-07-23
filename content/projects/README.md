# Engineering project pages

Each project is a **subfolder** here. The folder name is the project's `slug`
and its page lives at `/projects/<slug>`.

## Text (markdown)

Inside a project folder, add markdown files named `<slug>1.md`, `<slug>2.md`,
`<slug>3.md`, … They render **stacked in numeric order** on one page (so
`boombox2` comes before `boombox10`).

```
content/projects/
  boombox/
    boombox1.md   <- rendered first
    boombox2.md   <- rendered second
    ...
```

## Images (cover + additional)

Project images live in **`public/projects/<slug>/`** (not here), named
sequentially:

```
public/projects/
  boombox/
    boombox1.jpg   <- COVER, shown at the very top
    boombox2.jpg   <- stacked in order below the text
    boombox3.jpg
    ...
```

- The **first** image (`<slug>1.*`) is the **cover** and appears above the text.
- The rest stack in numeric order, exactly like the Art page.
- Supported types: `.jpg .jpeg .png .webp .avif .gif .svg`.
- A project can be **image-only**: if you haven't written any markdown yet,
  just create `public/projects/<slug>/` with images and the page will show the
  stacked photos.

The final page layout is: **cover image → markdown text → additional images**.

## Wiring a tile to a project

In `lib/content.ts`, give the matching `engProjects` entry a `slug` that equals
the folder name:

```ts
{ title: "Boombox", meta: "Portable hi-fi speaker", slug: "boombox" }
```

Tiles without a `slug` stay as non-clickable placeholders. To add a brand-new
project, create `content/projects/<slug>/<slug>1.md` (and/or
`public/projects/<slug>/<slug>1.jpg`) and add an `engProjects` entry with that
`slug`.

## Reference template

The `example/` folder is a full markdown reference showing every supported
element (headings, lists, blockquote, code, images). It renders at
`/projects/example` but is intentionally **not** wired into the Eng grid — copy
it to bootstrap a new project.
