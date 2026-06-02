---
name: ai-research-brief
description: Create concise AI/ML research briefs from papers, docs, repos, benchmarks, experiment notes, or technical articles. Use when Codex needs to distill research into claims, assumptions, limitations, engineering implications, and follow-up experiments.
---

# AI Research Brief

Turn research material into a decision-ready engineering brief.

1. Identify the source type: paper, docs, codebase, benchmark, experiment log, or article.
2. Extract the core problem, method, data, evaluation, results, limitations, and reproducibility signals.
3. Separate source-backed facts from inferences. Label uncertain claims.
4. Translate findings into implementation impact: architecture choices, data needs, risks, and likely failure modes.
5. Propose the smallest useful follow-up experiment, including baseline, metric, dataset slice, and expected decision.

Default output:

- `Summary`: 3 to 5 bullets.
- `What is actually proven`: source-backed claims only.
- `Engineering implications`: how this affects a system or prototype.
- `Risks and gaps`: missing baselines, weak data, leakage, unclear metrics, or deployment concerns.
- `Next experiment`: one concrete eval or prototype step.

Do not invent citations. If current facts, model availability, or library details matter, verify them with official sources or say what could not be verified.
