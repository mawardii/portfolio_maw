# Mawardi Rosli Portfolio

An AI/ML portfolio with a "Signal" identity — built from the vocabulary of model *evaluation*. Cool graphite ground, a single cobalt signal accent, self-hosted IBM Plex (Sans + Mono) typography, and an instrument-panel layout. Full light and dark themes with a toggle. Includes a live evaluation console (canvas signal/noise trace + pipeline + tracked signals), a project explorer, a capability matrix, an experience log, local design-agent skills, a brief builder, social links, and a Spotify playlist area.

## Preview

Open `index.html` in a browser, or run the local preview server:

```bash
node scripts/preview.mjs
```

Then open `http://127.0.0.1:5173/`. React and the IBM Plex fonts are vendored locally under `vendor/`; internet access is only needed for the Spotify embed.

This site uses no build step. React is loaded through local browser scripts in `vendor/`, fonts live in `vendor/fonts/`, and the application lives in `src/app.js` with styles in `src/styles.css`.

## Sections

- Hero with a live evaluation console (canvas signal trace, pipeline, tracked signals)
- Project explorer for RAG, OCR, and optimization work
- Capability matrix with area filters and relative-depth bars
- Experience log and technical stack
- Local design-agent skill cards
- Contact brief builder, music / Spotify, and social links
- Footer

## Local Skills

The repo includes Codex skills in `.agents/skills/` for future AI-assisted work:

- `ios-interface-craft`
- `motion-polish-review`
- `interactive-portfolio-systems`
- `portfolio-static-site`

## Next Setup Step

Move this into a standard Vite + React workflow only when you are ready for package management, linting, and a build step.
