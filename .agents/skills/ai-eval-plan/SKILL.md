---
name: ai-eval-plan
description: Create practical evaluation plans for LLM apps, RAG, OCR, computer vision, agents, model optimization, or AI product prototypes. Use when Codex needs metrics, datasets, baselines, failure taxonomies, acceptance thresholds, or regression checks.
---

# AI Eval Plan

Build evaluations that decide whether an AI system is ready to move forward.

1. State the decision the eval must support: ship, compare, debug, monitor, or reject.
2. Define task slices and user-visible failure modes.
3. Choose baselines before judging improvements.
4. Design the dataset: representative cases, edge cases, hard negatives, privacy handling, and label source.
5. Pick metrics that match the task. Include at least one qualitative review rubric for open-ended outputs.
6. Define thresholds and what action each threshold triggers.
7. Add regression and monitoring checks for future changes.

Preferred output:

- `Decision`: what the eval will decide.
- `Dataset`: cases, labels, splits, and minimum size.
- `Metrics`: automatic and human-reviewed.
- `Baselines`: current system, simple heuristic, or prior model.
- `Failure taxonomy`: concrete failure categories.
- `Run plan`: steps, artifacts, owner, and pass/fail thresholds.

Do not claim an eval proves general intelligence or broad quality. Tie conclusions to the tested distribution.
