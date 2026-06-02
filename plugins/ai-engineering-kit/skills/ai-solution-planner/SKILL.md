---
name: ai-solution-planner
description: Turn an AI product or research idea into a practical solution plan. Use when Codex needs to scope an AI feature, choose architecture, identify data needs, define evaluation, estimate risks, or produce an implementation roadmap.
---

# AI Solution Planner

Plan AI systems with research discipline and engineering constraints.

1. Clarify the user problem and the decision the system should improve.
2. Identify data sources, data rights, privacy risks, and quality issues.
3. Choose the simplest viable technical pattern: rules, classical ML, RAG, fine-tuning, vision pipeline, agent workflow, or hybrid system.
4. Define the MVP architecture, interfaces, storage, model calls, observability, and failure handling.
5. Define evaluation before implementation: baselines, task slices, metrics, acceptance thresholds, and human review.
6. Identify operational risks: latency, cost, drift, security, prompt injection, hallucination, maintainability, and owner.
7. Return a staged roadmap with build, eval, demo, and production-hardening milestones.

Default output:

- `Problem`: target user and job.
- `Approach`: recommended pattern and why.
- `Architecture`: components and data flow.
- `Evaluation`: dataset, metrics, baseline, and threshold.
- `Risks`: ranked technical and product risks.
- `Roadmap`: smallest useful MVP, then next two increments.
