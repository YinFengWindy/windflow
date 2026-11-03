---
name: why
description: "Investigate the recorded reasons, tradeoffs, and historical constraints behind a system's design."
---

Adapted from pstack; see the pinned [source and license notices](../../THIRD_PARTY_NOTICES.md). Within Windflow, follow its current scope and authorization.

# Why

An investigation agent explains why the current shape exists. Use the code anchor from [how](../how/SKILL.md), the question, and the pinned baseline.

Inspect relevant blame/history, commits and PR discussions, issue decisions, ADRs, and other available records. Use runtime or incident evidence when it helps explain a defensive behavior or threshold. Search available sources relevant to the actual question; do not fan out across unrelated services just because tools exist. Reading chat records does not authorize sending messages.

Separate:
- Documented decisions and the evidence that states them.
- Reasonable inferences and what supports them.
- Competing explanations, missing sources, and unknowns.

Current code is evidence of behavior, not proof of its author's original intention. Do not assume the most recent edit explains the whole design or that an old constraint still holds. Check constraints against current callers and requirements.

Return the relevant history with links/revisions, what must be preserved, what may be changed, and unresolved facts. Make the reasoning available to the parent and subsequent workers through the [shared context](../../references/delegation.md). If no history exists, say so; do not invent a rationale.
