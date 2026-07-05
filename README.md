# Mawardi Rosli Portfolio

A minimalist AI/ML portfolio built on a Swiss editorial grid: warm paper canvas, oversized grotesk headlines, monospaced meta labels, hairline rules, numbered sections, and a single restrained accent. Includes an interactive systems-focus console, a marquee stack ticker, filterable capability directory, project explorer, experience timeline, local design-agent skills, a brief builder, social links, and a Spotify playlist area.

## Preview

Open `index.html` in a browser, or run the local preview server:

```bash
node scripts/preview.mjs
```

Then open `http://127.0.0.1:5173/`. React is vendored locally; internet access is only needed for the Spotify embed.

This site uses no build step. React is loaded through local browser scripts in `vendor/`, and the application lives in `src/app.js` with styles in `src/styles.css`.

## Sections

- Editorial hero with an interactive systems-focus console
- Marquee stack ticker
- Project explorer for RAG, OCR, and optimization work (01)
- Filterable AI/ML capability directory (02)
- Experience timeline and technical stack (03)
- Local design-agent skill cards (04)
- Contact brief builder, music / Spotify, and social links (05)
- Footer

## Local Skills

The repo includes Codex skills in `.agents/skills/` for future AI-assisted work:

- `ios-interface-craft`
- `motion-polish-review`
- `interactive-portfolio-systems`
- `portfolio-static-site`

## Next Setup Step

Move this into a standard Vite + React workflow only when you are ready for package management, linting, and a build step.
