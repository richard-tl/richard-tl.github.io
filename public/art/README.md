# /public/art

All artwork lives here — a single folder, no separate images folder. The `/art`
page renders these in three stacked sections on a clean white canvas so images
with white borders stay crisp.

## 1. Banner (top)

- `banner.png` — the wide banner image shown first.

## 2. Photo grid (masonry, 4 columns on desktop)

In order:

- `row2p1.png`, `row2p2.png`, `row2p3.png`, `row2p4.png`
- `row3p1.png`, `row3p2.png`, `row3p3.png`, `row3p4.png`

## 3. Designs (full-width stack)

- `design0.png` … `design11.png`
- `collage1.png`, `collage2.png`, `collage3.png`

Any file that hasn't been uploaded yet is hidden automatically, so the layout
never shows a broken image. To change the order or add/remove images, edit the
`artGallery` object in `lib/content.ts`.
