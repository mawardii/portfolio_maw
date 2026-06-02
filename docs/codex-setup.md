# Codex Setup

This repo now has project-scoped Codex setup for AI research and engineering work.

## What Is Configured

- `AGENTS.md`: durable repo guidance, commands, AI engineering defaults, and review rules.
- `.codex/config.toml`: project Codex settings, MCP entries, and subagent limits.
- `.codex/agents/`: custom agents for research review, eval auditing, frontend QA, and scoped implementation.
- `.agents/skills/`: repo skills for research briefs, RAG design, AI eval plans, and this static portfolio.
- `.agents/plugins/marketplace.json`: local plugin marketplace entry for `ai-engineering-kit`.
- `plugins/ai-engineering-kit/`: starter local plugin with an AI solution planning skill.
- `scripts/preview.mjs`: dependency-free local preview server.

## Daily Workflow

1. Start Codex from the repo root.
2. Ask for implementation normally, or invoke a skill explicitly with `$skill-name`.
3. Preview UI changes with `node scripts/preview.mjs`.
4. For broader audits, explicitly ask for subagents. Example:

```text
Spawn three agents in parallel: research-reviewer for claims, eval-auditor for evaluation gaps, and frontend-qa for UI risks. Wait for all three and summarize the findings.
```

## Recommended Skills

- `$portfolio-static-site`: use for this portfolio UI and content.
- `$ai-research-brief`: use for papers, technical articles, benchmarks, and research notes.
- `$rag-system-design`: use for RAG, document intelligence, OCR-assisted retrieval, and agentic search.
- `$ai-eval-plan`: use before judging an AI prototype or model change.
- `$ai-solution-planner`: bundled in the local plugin for turning ideas into buildable AI systems.

## MCP Setup

OpenAI Docs MCP has been added to user config at `~/.codex/config.toml`:

```toml
[mcp_servers.openaiDeveloperDocs]
url = "https://developers.openai.com/mcp"
```

This CLI build reported success when adding it, but `codex mcp list` did not echo HTTP servers back in this shell. The config entry is present.

Useful MCPs to enable later:

```powershell
& "$env:APPDATA\npm\codex.cmd" mcp add context7 -- npx -y @upstash/context7-mcp
& "$env:APPDATA\npm\codex.cmd" mcp add playwright -- npx -y @playwright/mcp@latest
```

Enable Figma, GitHub, Slack, Google Drive, or Sentry MCP/app connectors only after their auth is ready. Use connectors for private workspace data instead of web search.

## Windows Notes

PowerShell currently blocks `codex.ps1` and `npm.ps1` because script execution is disabled. Prefer the `.cmd` shims:

```powershell
& "$env:APPDATA\npm\codex.cmd" --version
& "$env:APPDATA\npm\codex.cmd" mcp list
& "C:\Program Files\nodejs\npm.cmd" --version
```

Alternatively, change PowerShell execution policy only if you understand the security tradeoff.

## Memory

Memories are global and privacy-sensitive, so they were not enabled automatically. Enable them only if you want Codex to carry stable preferences and recurring workflows across future threads:

```toml
# ~/.codex/config.toml
[features]
memories = true
```

Use `/memories` in Codex to control whether a thread can use or generate memories. Do not rely on memory for team rules; keep required rules in `AGENTS.md`.

## Plugin Handoff

The repo marketplace is at `.agents/plugins/marketplace.json`. After restarting Codex, the local `ai-engineering-kit` plugin should be available from the plugin browser for this marketplace.

When the plugin grows beyond this repo, promote it to a personal marketplace under `~/.agents/plugins/marketplace.json` or share it from the Codex app.

## Operating Loop For AI Engineering

1. Define the user problem and the decision the AI system improves.
2. Start with the simplest baseline that could work.
3. Build the smallest prototype with logging and inspectable outputs.
4. Create an eval set before tuning.
5. Compare against the baseline and document failure modes.
6. Harden privacy, security, cost, latency, monitoring, and rollback.
7. Turn repeated workflows into skills, then plugins when they should be shared.
