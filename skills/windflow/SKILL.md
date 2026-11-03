---
name: windflow
description: "Coordinate investigation, requirements, design, implementation, acceptance, review, and delivery using the Windflow collection. Use for a complete development workflow or resuming one."
metadata:
  collection: windflow
  requires: investigate, grill, design, plan, implement, verify, review, ship, write
---

# Windflow

An optional coordinator for the Windflow skill collection. Use individual skills directly for investigation, design, writing, implementation, acceptance, review, or delivery. This entrypoint owns stage selection, continuing context, user decisions, and handoffs rather than duplicating each method.

## Load the stage you need

The stage skills are separate installable packages. This file does not contain them. Install the collection for the full workflow, or install the required subset for the requested stages.

| Stage | Skill | Owner in this workflow |
| --- | --- | --- |
| Current behavior and history | investigate | Investigation agents |
| Requirement interview | grill | Parent |
| Alternatives then architecture | design | Independent candidates, then parent convergence |
| Spec and tickets | plan | Parent |
| Code changes and local checks | implement | Implementation agent |
| Acceptance of promised behavior | verify | Parent owns the verdict |
| Defect discovery and verification | review | Independent finder and separate verification |
| PR, CI, merge, cleanup | ship | Parent |
| Clear replies and documents | write | Every author |

Locate an entry through the host's installed-skill catalog or the collection's sibling directories. Check that its frontmatter identifies collection `windflow` before using a same-named skill from another source. Read the actual SKILL.md, and pass its path/instructions to assigned workers. A name is not a tool invocation.

If a required stage is not installed, report the missing skill and stop that dependent stage; continue independent preparation. Do not substitute an unrelated global implementation or pretend the method ran. A subset installation need not contain skills for stages outside the user's request.

## Route intent

Use the active task and prior decisions. State the entry and stopping point briefly. Discussion, planning, local edits, review-only requests, and standalone delivery stop at their requested result.

For a new feature:
1. Dispatch bounded investigate work before the first interview.
2. The parent checks the evidence and runs grill. New factual questions return to investigators; independent interview questions can proceed. Repeat until the user agrees on behavior, acceptance criteria, scope, and material tradeoffs.
3. Run design. Candidate agents compare approaches to the same confirmed problem, then the parent develops the selected approach into interfaces, types, ownership, and constraints. Do not run a second automatic competition during convergence.
4. Run plan to draft the spec, perform its single overlap check, and propose tickets. Publish and implement the ticket set only after the user approves the breakdown.
5. Assign implement to an approved unblocked ticket in an isolated workspace. Use verify to assess its actual behavior and evidence. Reuse successful relevant checks.
6. Run ship for the authorized delivery outcome. It determines required CI and review gates; when review is needed, dispatch review on the fixed change and verify findings before assigning repairs.
7. Present the actual PR and evidence for merge approval. Verify merge and eligible source-branch cleanup.

Read [coordination](references/coordination.md) before delegation and [execution context](references/execution.md) when handing off or resuming. Apply write throughout replies and documents. Its name in the table does not add another stage or approval.

Reuse explicit requirement agreement, an approved applicable design, selected tickets, and unchanged approvals. Do not invent an interview or competing designs for a fully specified mechanical edit. For a clear defect, investigate its actual mechanism and preserve scope. A selected existing ticket does not require a new split.

## Preserve decisions and authorization

The owner confirms requirements, the exact ticket breakdown, and the finished PR before merge. The plan skill also returns plausible issue overlap to the user. Existing explicit authorization and narrower stopping points remain authoritative; do not ask again for an action already authorized. Silence and green checks are not approval.

The parent owns product decisions, context/design revisions, integration, Git/tracker actions, and user-facing questions. Workers report contradictions with evidence. Technical adjustments within scope remain the parent's responsibility; material product changes return to the user.

Acceptance answers whether agreed behavior works. Review asks where current behavior can fail and whether a proposed repair is necessary. Do not treat one as the other or turn a hypothetical warning into defensive code.

Use focused local checks for affected behavior and callers, retain required external CI, and avoid repeating passed checks without a relevant change or evidence gap. Keep merged, merge-ready, partial, and unverified outcomes distinct.

## Resume

Read current repository and tracker state, the latest context/design revision, completed evidence, approvals, and the next unsatisfied gate. A changed head needs current CI and review eligibility assessment; preserve results that still apply.

This skill operates in the current task. It does not create a scheduler, new user-visible chats, or external messages without the corresponding user request.
