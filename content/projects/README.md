# Engineering project pages

Each project is a **subfolder** here. The folder name is the project's `slug`
and its page lives at `/projects/<slug>`.

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

## Wiring a tile to a project

In `lib/content.ts`, give the matching `engProjects` entry a `slug` that equals
the folder name:

```ts
{ title: "Boombox", meta: "Portable hi-fi speaker", slug: "boombox" }
```

Tiles without a `slug` stay as non-clickable placeholders. To add a brand-new
project, create `content/projects/<slug>/<slug>1.md` and add an `engProjects`
entry with that `slug`.
