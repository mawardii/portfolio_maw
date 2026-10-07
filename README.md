# Mawardi Rosli Portfolio

A minimal AI/ML portfolio. The hero is a dark stage holding a draggable 3D embedding cloud; each time the typed headline phrase changes, a query point links to its nearest neighbours, like vector search. Text blurs and rises in, hairlines draw on scroll, wheel scrolling is eased, and the top bar tucks into a floating pill. Section headings pair light IBM Plex Sans with a Newsreader italic second line. Plain JS and CSS, no animation library; reduced motion shows everything static. Light and dark themes with a toggle.

## Preview

Open `index.html` in a browser, or run the local preview server:

```bash
node scripts/preview.mjs
```

Then open `http://127.0.0.1:5173/`. React and the IBM Plex fonts are vendored locally under `vendor/`.

This site uses no build step. React is loaded through local browser scripts in `vendor/`, fonts live in `vendor/fonts/`, and the application lives in `src/app.js` with styles in `src/styles.css`.

## Sections

- Hero: 3D embedding cloud (drag to turn), typed headline, role facts
- Experience: tinted bands that open in place
- Certifications, Publications, Interests: render only once their arrays in `src/app.js` have entries
- Projects: cards that stack as you scroll (sticky on screens tall enough to show a whole card)
- Capabilities and day-to-day tools
- Contact links
- Footer

## Local Skills

The repo includes Codex skills in `.agents/skills/` for future AI-assisted work:

- `ios-interface-craft`
- `motion-polish-review`
- `interactive-portfolio-systems`
- `portfolio-static-site`

## Next Setup Step

Move this into a standard Vite + React workflow only when you are ready for package management, linting, and a build step.
