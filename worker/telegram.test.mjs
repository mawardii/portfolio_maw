// Self-check for the relay: node worker/telegram.test.mjs
import assert from "node:assert/strict";
import worker from "./telegram.js";

const env = { BOT_TOKEN: "t0k", CHAT_ID: "42", ALLOWED_ORIGINS: "https://site.test, http://127.0.0.1:5173" };
let sent = [];
globalThis.fetch = async (url, init) => {
  sent.push({ url, body: JSON.parse(init.body) });
  return new Response("{}", { status: 200 });
};
const post = (body, origin = "https://site.test", method = "POST") =>
  worker.fetch(new Request("https://relay.test/", { method, headers: { Origin: origin, "Content-Type": "application/json" }, body: method === "POST" ? body : undefined }), env);
const ok = JSON.stringify({ name: "Ana", contact: "ana@x.test", message: "Hello *there*" });

let r = await post(ok);
assert.equal(r.status, 200);
assert.equal(r.headers.get("Access-Control-Allow-Origin"), "https://site.test");
assert.equal(sent.length, 1);
assert.equal(sent[0].url, "https://api.telegram.org/bott0k/sendMessage");
assert.equal(sent[0].body.chat_id, "42");
assert.match(sent[0].body.text, /From: Ana\nReply to: ana@x\.test\n\nHello \*there\*/);
assert.equal(sent[0].body.parse_mode, undefined);

sent = [];
assert.equal((await post(ok, "https://evil.test")).status, 403);
assert.equal((await post(ok, "http://127.0.0.1:5173", "OPTIONS")).status, 204);
assert.equal((await post("not json")).status, 400);
assert.equal((await post(JSON.stringify({ name: "A", contact: "c", message: "  " }))).status, 400);
assert.equal((await post(JSON.stringify({ name: "A", contact: "c", message: "x".repeat(2001) }))).status, 400);
assert.equal((await post(JSON.stringify({ name: "A", contact: "c", message: "m", website: "spam.test" }))).status, 200);
assert.equal(sent.length, 0, "rejected and honeypot requests must not reach Telegram");

globalThis.fetch = async () => new Response("{}", { status: 401 });
assert.equal((await post(ok)).status, 502);

console.log("relay ok");
