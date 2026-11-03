# Implementation and acceptance

Read [delegation](delegation.md) for ownership and context. The parent runs architect; the implementer receives its result, the approved ticket, and an isolated worktree.

## Execute the agreed design

Inspect relevant callers before changing a contract. Implement the smallest change that satisfies the current behavior and constraints. Use the repository's existing testing practices; this workflow does not require a separate implement or TDD skill.

For a bug, obtain a reproduction or concrete failure evidence tied to the reported symptom. Test the causal mechanism, make the necessary repair, and recheck the original scenario. Use a failing regression test first when an appropriate, economical test boundary exists. Do not add a shallow test that cannot detect the real failure.

A design contradiction is evidence to send to the parent, not permission to silently change the requirement or add compensating layers. Explain the violated assumption and affected behavior. The parent resolves technical changes or returns a product decision to the user.

Use [swarm](../skills/swarm/SKILL.md) when work can be separated into independent scopes. Each writer has an isolated workspace; the parent owns integration and cross-slice verification.

## Verify behavior

Choose focused existing tests, affected-caller checks, type/source checks, and actual UI or runtime observations appropriate to the change. Do not automatically run the full local repository suite. Explain a concrete reason before broadening coverage; generic checklists do not override the user's validation scope. Preserve required external CI.

Reuse passing checks unless relevant changes, failures, or unresolved evidence gaps justify another run. Distinguish static checks, unit behavior, integration behavior, and real user/provider/hardware behavior.

The implementer returns evidence mapped to acceptance criteria, failures, unrun checks, and remaining uncertainty. The parent inspects the actual diff, verifies evidence against the current baseline, and fills only material gaps.

Acceptance answers whether the agreed behavior works. Independent review follows the eligibility rules in [delivery](delivery.md) and the procedure in [review](review.md). Do not substitute one for the other.

If acceptance or review exposes a real failure, send the evidence to the implementer. Revalidate the changed behavior, affected callers, and new PR head. Do not expand the patch with adjacent suggestions outside the agreed scope.
