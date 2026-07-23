# Artwork

Drop your artwork images in this folder. They appear as the grid ("rolodex")
in the Portfolio tab.

1. Add image files here (`.jpg`, `.png`, `.webp`, etc.).
2. List each file path in the `artwork` array in `lib/content.ts`, e.g.:

   ```ts
   export const artwork: string[] = [
     "/art/design0.png",
     "/art/collage1.png",
   ]
   ```

3. The current default names (`design0.png` … `collage3.png`) are placeholders —
   rename yours to match, or edit the array to match your filenames.

Square images look best (each tile is a 1:1 box). Any tile whose file is
missing is hidden automatically, so the grid always stays clean.
