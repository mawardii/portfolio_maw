# AGENTS.md

## Project Context

- This repo is Mawardi Rosli's static AI/ML portfolio.
- It intentionally has no build step. React is loaded from `vendor/`, and the app lives in `src/app.js` with styles in `src/styles.css`.
- Treat the portfolio as a polished personal site for an AI researcher/engineer: concise copy, strong visual craft, and evidence-backed technical claims.

## Commands

- Preview locally with `node scripts/preview.mjs`, then open `http://127.0.0.1:5173/`.
- If the port is busy, run `node scripts/preview.mjs 5174` and use that port.
- There is currently no package manager workflow, lint script, or test suite.
- Use `rg` for code and text search.

## Implementation Rules

- Keep changes scoped. Do not introduce a bundler, framework migration, or external runtime dependency unless the user explicitly asks.
- Prefer plain JavaScript and CSS that match the existing style over adding libraries.
- Preserve responsive behavior across mobile and desktop.
- Do not commit secrets, API keys, private research notes, or personal contact data beyond what is already public in the portfolio.
- When adding AI project descriptions, separate confirmed experience from aspirational roadmap items.

## Frontend Verification

- After UI changes, preview the page and check desktop and mobile widths.
- Watch for console errors, broken local asset paths, text overlap, horizontal scroll on mobile, and animation issues with reduced-motion preferences.
- Spotify may require internet access; do not treat a blocked Spotify iframe as a local app failure.

## AI Engineering Defaults

- For AI solution work, ask for or infer: user problem, data sources, constraints, evaluation metrics, deployment target, privacy risks, and maintenance owner.
- Prefer evaluated prototypes over demo-only flows. Include baseline, failure cases, and test data before claiming model quality.
- For RAG work, document chunking, metadata, retrieval strategy, reranking, grounding, refusal behavior, and evaluation set design.
- For research claims, cite source material when available and label inferences clearly.

## Review Guidelines

- Prioritize correctness, accessibility, security/privacy, responsive layout, and missing verification.
- Flag changes that make the portfolio harder to maintain, such as duplicated content structures or unexplained animation logic.
- Treat accidental dependency additions, generated lockfiles, or broad rewrites as review risks unless justified.
