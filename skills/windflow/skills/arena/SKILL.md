---
name: arena
description: "Compare independent solutions to one confirmed problem and synthesize a justified proposal."
---

Adapted from pstack; see the pinned [source and license notices](../../THIRD_PARTY_NOTICES.md). Within Windflow, follow its current scope and authorization.

# Arena

The parent coordinates independent candidate agents after requirement agreement. Follow [delegation](../../references/delegation.md). The output is a compared and synthesized proposal for the parent to develop through [architect](../architect/SKILL.md).

1. Freeze the confirmed context revision. State the artifact to produce and a small set of concrete comparison criteria grounded in the task: behavior coverage, constraints, simplicity, caller burden, verification, or measured cost as relevant.
2. Give normally two independent candidates the same problem, confirmed decisions, source evidence, and unknowns. Each gets its own output location. Candidate proposals must not copy each other's unfinished work. Do not require different model families or unavailable runtimes.
3. Each candidate reads the relevant evidence and produces a coherent whole proposal, caller examples where useful, assumptions, tradeoffs, and ways to test uncertain claims. For design work, do not authorize production implementation or tracker mutations.
4. The parent reads every result and compares the proposals against the criteria. It selects a base and integrates only compatible, justified improvements from others. Disagreement can reveal an underspecified requirement; resolve it rather than average incompatible designs.
5. Record the chosen direction, alternatives rejected and why, unresolved assumptions, and any confirming probe results. Hand this result to the parent's architect stage.

Candidate independence means separate reasoning and outputs while sharing adequate factual context. Do not reduce context merely to make the candidates appear independent. A child may ask the parent for missing evidence.

A fully specified mechanical edit or already approved applicable design can reuse its decision without a new competition. If independent candidates cannot run, disclose the limitation rather than claim a comparison happened. New evidence that invalidates the design can justify a focused new arena, but architect does not invoke it by default.
