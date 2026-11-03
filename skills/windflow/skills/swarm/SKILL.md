---
name: swarm
description: "Partition bounded work among independent workers and integrate their evidence into one result."
---

Adapted from pstack; see the pinned [source and license notices](../../THIRD_PARTY_NOTICES.md). Within Windflow, follow its current scope and authorization.

# Swarm

The parent defines the goal, coverage, ownership, completion condition, and integration plan before dispatch. Use [delegation](../../references/delegation.md) for context and communication.

Partition by independently answerable questions or independently implementable behavior. Include cross-slice interactions in someone's scope. Use [arena](../arena/SKILL.md) when the purpose is to compare competing solutions to the same design question.

Each brief contains the shared context revision, exact baseline, assigned question or slice, owned output/workspace, constraints, and required evidence. Read-only workers may share a stable snapshot. Every writer has a separate worktree or other genuinely isolated output; sharing a branch or linked directory is not isolation.

Use the available native agent capacity and model defaults. Do not assume cloud execution, spawn an unbounded fleet, or create user-visible tasks. Parallelism is optional when dependencies make sequential work clearer.

Workers return PASS, ISSUES, or BLOCKED with evidence, context revision, and code baseline. A dropout or uncovered slice remains a gap, not a pass. The parent checks outputs, reconciles overlap, integrates only after writers finish, and verifies cross-slice behavior.

Keep questions routed through the parent. A worker reports contradictions rather than widening the product scope or privately changing another worker's contract. Return one consolidated result with coverage and remaining gaps.
