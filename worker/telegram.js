// Relays the portfolio's contact form to Telegram, so the bot token never reaches the browser.
// Secrets (wrangler secret put): BOT_TOKEN, CHAT_ID. Var (wrangler.toml): ALLOWED_ORIGINS.
export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).includes(origin);
    const cors = allowed
      ? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type", Vary: "Origin" }
      : {};
    const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

    // Only stops other websites' browsers; scripts can send any Origin, hence the checks below.
    if (!allowed) return reply(403, { error: "origin" });
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method !== "POST") return reply(405, { error: "method" });

    let d;
    try {
      d = await req.json();
    } catch {
      return reply(400, { error: "json" });
    }
    const field = (k) => (d && typeof d[k] === "string" ? d[k].trim() : "");
    const name = field("name"), contact = field("contact"), message = field("message");
    if (field("website")) return reply(200, { ok: true }); // honeypot filled: a bot, pretend it worked
    if (!name || !contact || !message || name.length > 100 || contact.length > 200 || message.length > 2000) {
      return reply(400, { error: "fields" });
    }

    // ponytail: no rate limit; add a Workers rate-limiting binding if spam gets past the honeypot.
    // Plain text (no parse_mode), so whatever a visitor types can't inject Telegram formatting.
    const text = `Portfolio message\nFrom: ${name}\nReply to: ${contact}\n\n${message}`;
    const tg = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text, disable_web_page_preview: true }),
    });
    return tg.ok ? reply(200, { ok: true }) : reply(502, { error: "telegram" });
  },
};
