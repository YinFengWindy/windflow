---
name: architect
description: "Converge a selected proposal into caller-facing interfaces, types, ownership, and verifiable design constraints."
---

Adapted from pstack; see the pinned [source and license notices](../../THIRD_PARTY_NOTICES.md). Within Windflow, follow its current scope and authorization.

# Architect

The parent performs this step after [arena](../arena/SKILL.md). It retains the user's decisions and investigation context. This is architectural convergence, not another proposal competition.

Read the chosen proposal, its alternatives and evidence, and the confirmed requirements. Then:
- Write representative caller usage first.
- Define interfaces, core data shapes, legal states and transitions, ownership, error responsibilities, and shared-state behavior.
- Identify module boundaries, integration changes, migration/compatibility constraints, and the testable behavior.
- Explain material choices and what future maintainers must know.
- Record remaining uncertainties and the observation that would resolve them.

Keep the design as small as the agreed behavior permits. Put validation at actual system boundaries and honor established internal contracts. A new requirement does not automatically justify a new layer, configurable framework, compatibility wrapper, or fallback.

Use narrow specialists for facts or local design questions when needed. The parent owns the final contract; do not hand overall convergence to a new agent or automatically run another arena.

Provide the resulting design revision to planning and implementation. Small work can use a concise caller example and contract; larger work may need a module map and types. Sketches are design artifacts, not permission to leave production code broken.

When implementation reveals a violated assumption, inspect the evidence. Resolve technical corrections within scope, update the contract, and notify affected workers. Return material product changes to the user. If the selected approach is invalidated, explicitly reopen the relevant decision instead of accumulating workarounds.
