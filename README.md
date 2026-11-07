# Mawardi Rosli Portfolio

A minimal AI/ML portfolio. A short black-and-white intro cuts the MR logo through bold faces with grain and rough edges, then the logo flies into the header. The hero is a greeting beside a framed portrait, over halftone ink: a small WebGL fluid simulation the pointer stirs (it drifts on its own when idle). Words rise out of masks, hairlines draw on scroll, wheel scrolling is eased, and the top bar tucks into a floating pill. Section headings are numbered, in light IBM Plex Sans with a muted second half. Sections fade back as the next scrolls over them, and nav links jump behind a curtain that names the destination. Plain JS and CSS, no animation library; reduced motion shows everything static. Light and dark themes with a toggle.

## Preview

Open `index.html` in a browser, or run the local preview server:

```bash
node scripts/preview.mjs
```

Then open `http://127.0.0.1:5173/`. React and the IBM Plex fonts are vendored locally under `vendor/`.

This site uses no build step. React is loaded through local browser scripts in `vendor/`, fonts live in `vendor/fonts/`, and the application lives in `src/app.js` with styles in `src/styles.css`.

## Sections

- Hero: intro sequence, framed portrait (`assets/portrait.webp`), halftone fluid ink, cycling headline
- Experience: tinted bands that slide in and open in place
- Certifications: list with a tilting certificate preview (images in `assets/certs/`, rendered from the gitignored `cert/` PDFs)
- Publications: titles get a highlighter sweep
- Projects: stacking cards, each with a live demo
  - Financial Filings RAG: replay a FinanceBench question; switch retrieval setups to see measured hit@4 and MRR
  - Road Damage Detection: illustrated road with YOLO-style boxes, class toggles, confidence threshold, and v8s/v9s/v10s scores from the paper
  - This portfolio: its six versions, sketched from git history
- Capabilities: two rows of tool logos (Simple Icons, CC0, in `vendor/icons/`)
- Contact: "currently exploring" chips, a message form that relays to Telegram, magnetic links
- Footer

## Contact form (Telegram relay)

The site is static, so the bot token lives in a Cloudflare Worker (`worker/telegram.js`), never in the page.

1. In Telegram, create a bot with @BotFather and copy its token. Send your bot any message, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `message.chat.id`.
2. In `worker/wrangler.toml`, set `ALLOWED_ORIGINS` to your live site's origin (plus the local preview).
3. From `worker/`: `npx wrangler login`, `npx wrangler secret put BOT_TOKEN`, `npx wrangler secret put CHAT_ID`, then `npx wrangler deploy`.
4. Put the printed `*.workers.dev` URL in `profile.relay` in `src/app.js`.

Until `profile.relay` is set, the form tells visitors to use LinkedIn instead. Self-check: `node worker/telegram.test.mjs`.

## Local Skills

The repo includes Codex skills in `.agents/skills/` for future AI-assisted work:

- `ios-interface-craft`
- `motion-polish-review`
- `interactive-portfolio-systems`
- `portfolio-static-site`

## Next Setup Step

Move this into a standard Vite + React workflow only when you are ready for package management, linting, and a build step.
