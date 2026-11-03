---
name: how
description: "Trace current behavior and ownership through repository evidence before decisions or changes."
---

Adapted from pstack; see the pinned [source and license notices](../../THIRD_PARTY_NOTICES.md). Within Windflow, follow its current scope and authorization.

# How

An investigation agent explains how the relevant system works now. Read [delegation](../../references/delegation.md) for assignment and evidence ownership.

Start from the user's behavior or concrete question, the pinned code baseline, and known entrypoints. Follow callers, data and state flow, external boundaries, failure paths, and existing validation. Read the relevant tests and runtime evidence. A list of files alone is not an explanation.

For a narrow question, one investigator is enough. For a subsystem, use [swarm](../swarm/SKILL.md) to partition distinct questions when useful. Keep the source checkout read-only and distinguish what source code proves from behavior only observed in a particular run.

Return:
- A short explanation of the actual execution path and ownership.
- Key invariants and boundaries, with source paths/symbols and revisions.
- Relevant commands or observations and their limits.
- Unanswered questions that affect the pending decision.

The parent checks and incorporates this evidence before grilling. Preserve accessible evidence so arena candidates and implementers can revisit the sources. Use [why](../why/SKILL.md) for historical rationale rather than guessing intent from today's code.
