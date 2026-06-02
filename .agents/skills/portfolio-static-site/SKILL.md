---
name: portfolio-static-site
description: Work on this static React portfolio without adding a build step. Use when Codex modifies the portfolio UI, content, layout, CSS, animations, accessibility, preview flow, or personal AI/ML project presentation.
---

# Portfolio Static Site

Follow this workflow for portfolio changes.

1. Read `AGENTS.md`, `README.md`, `index.html`, `src/app.js`, and `src/styles.css` before broad UI edits.
2. Preserve the no-build setup. React is vendored in `vendor/`; do not add package manager files unless requested.
3. Keep content accurate for Mawardi Rosli as an AI/ML research officer and fresh graduate engineer.
4. Prefer concise, concrete project copy: problem, method, stack, result, and what was learned.
5. Preview with `node scripts/preview.mjs` and inspect `http://127.0.0.1:5173/`.
6. Check desktop and mobile widths, reduced motion behavior, console errors, and broken asset paths.

Design guardrails:

- Preserve the calm editorial style.
- Do not add a generic marketing landing page.
- Avoid text overlap, horizontal mobile scroll, and large unexplained rewrites.
- Keep interaction code understandable; add comments only for non-obvious animation logic.
