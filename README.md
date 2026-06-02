# Mawardi Rosli Portfolio

A minimalist AI/ML portfolio landing page with responsive layout, animated section reveals, an interactive neural-field hero visual, project cards, social links, and a Spotify playlist area.

## Preview

Open `index.html` in a browser, or run the local preview server:

```bash
node scripts/preview.mjs
```

Then open `http://127.0.0.1:5173/`. React is vendored locally; internet access is only needed for the Spotify embed.

This first version uses no build step. It still uses React, but through local browser scripts in `vendor/` so it can be opened immediately while the design direction is being shaped.

## Sections

- About
- Current interests in Generative AI, RAG, computer vision, and model optimization
- Education
- Experience
- Projects
- Music / Spotify
- Social links

## Next Setup Step

Move this into a standard Vite + React workflow only when you are ready for package management, linting, and a build step.
