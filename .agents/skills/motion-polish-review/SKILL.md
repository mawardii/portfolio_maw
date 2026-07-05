---
name: motion-polish-review
description: Design, implement, or review clean web animation and micro-interactions with restrained timing, good easing, performance awareness, and reduced-motion support. Use when Codex is asked to make motion feel premium, iOS-like, smooth, subtle, or less distracting.
---

# Motion Polish Review

Use this skill for motion that supports comprehension and craft. Motion should clarify state, focus attention, or make direct manipulation feel responsive.

## Workflow

1. Name the intent of each animation: reveal, continuity, feedback, focus, loading, or delight.
2. Remove animation that does not serve intent, hierarchy, or interaction quality.
3. Use transform and opacity for most motion. Avoid animating layout properties unless necessary.
4. Keep interaction feedback fast and reversible; keep page reveals slower and more spatial.
5. Tune one global easing system before adding bespoke curves.
6. Respect `prefers-reduced-motion` by replacing movement with opacity or immediate state changes.
7. Verify on desktop and mobile for jank, delayed input, scroll interference, and readability during motion.

## Timing Guidance

- Button or control feedback: 120ms to 220ms.
- Hover lift, magnetic, or tilt effects: 180ms to 420ms.
- Section reveal: 500ms to 900ms.
- Hero text reveal: 700ms to 1100ms with small stagger.
- Avoid endless animation unless it communicates live state and remains quiet.

## Quality Checks

- Motion starts from the user's action or scroll position and ends decisively.
- Stagger is small enough that content does not feel blocked.
- Scroll effects do not fight native scrolling or break anchors.
- Interactive elements keep stable dimensions in every state.
- Reduced-motion users can read and navigate the same content.

