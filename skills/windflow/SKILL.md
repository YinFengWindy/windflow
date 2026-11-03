---
name: windflow
description: "Investigate a codebase, clarify requirements, compare designs, and deliver verified changes with explicit user checkpoints. Use for feature development, bug fixes, or resuming that workflow; honor discussion, planning, local-only, and review-only boundaries."
---

# Windflow

Understand the system before interviewing the user. Keep the parent agent responsible for the evolving requirements and design. Use independent agents for investigation, alternative proposals, implementation, and defect discovery.

## Route the request

State the entry stage and requested stopping point briefly. A discussion or naming request does not authorize unrelated project delivery. An issue URL identifies an artifact, not an action by itself.

| Request | Entry and stopping point |
| --- | --- |
| Discuss an idea or this workflow | Investigate what is needed, then discuss; no delivery mutations. |
| Clarify, design, write a spec, or split work only | Perform the requested stages; publish only when requested. |
| Deliver a new feature | Investigate, grill, agree, arena, architect, plan, implement, accept, review when required, then request merge approval. |
| Implement an approved ticket | Read its current evidence and agreed design. Reuse settled decisions and resume the earliest missing stage. |
| Fix a clear defect | Investigate its actual mechanism and preserve the user's scope. Use the same delivery gates without inventing a new product interview. |
| Review a diff only | Follow [review](references/review.md); return findings without fixes or merge. |
| Local edit or CI repair | Complete the named outcome and relevant verification; do not backfill a feature process. |
| Resume, report status, or hand off | Reconcile live state using [execution context](references/execution.md); preserve the existing stopping point. |

Read applicable repository instructions, working-tree state, branch, remotes, relevant code, and existing tracker artifacts. Discover tracker access from repository configuration or the supplied URL. Preserve dirty work and do not expose credentials. Missing publishing access does not prevent local preparation.

## Load the package locally

The directory containing this file, after resolving filesystem links, is the complete package root. Read the exact relative entrypoint before applying a capability. A capability name is not a shell command or a request to discover a global installation. If a required package file is missing, report its path and stop the dependent stage.

| Capability | Entry point | Owner |
| --- | --- | --- |
| Current behavior | [how](skills/how/SKILL.md) | Investigation agent |
| Historical rationale | [why](skills/why/SKILL.md) | Investigation agent |
| Product decisions | [grilling](skills/grilling/SKILL.md) | Parent |
| Competing proposals | [arena](skills/arena/SKILL.md) | Parent coordinates independent candidates |
| Design convergence | [architect](skills/architect/SKILL.md) | Parent |
| Parallel work | [swarm](skills/swarm/SKILL.md) | Parent partitions and integrates |
| Clear expression | [unslop](skills/unslop/SKILL.md) | Every author |
| Technical documents | [technical-writing](skills/technical-writing/SKILL.md) | Every author |

Read [delegation](references/delegation.md) before dispatch. It defines the shared context, questions, ownership, isolation, and fallback contract. Keep skill instructions with each assigned agent; naming the capability does not load it for the child.

## Investigate and agree

1. Dispatch bounded, read-only investigation through how and why before the first product interview. Investigate current behavior, callers, historical constraints, and unanswered factual questions. For greenfield work, investigate available requirements, dependencies, and platform constraints; record that repository history is absent.
2. The parent checks the returned evidence and builds a working understanding. Then read grilling and conduct the interview personally. Ask product and preference decisions, not facts the agent can observe.
3. New factual gaps return to the appropriate investigation agent. Continue independent interview questions while dependent ones wait. Reuse that investigator when its accumulated context helps. Update the shared facts and recompute the interview frontier after each round.
4. Present the agreed behavior, acceptance criteria, scope exclusions, and material tradeoffs. Wait for requirement agreement. An existing explicit agreement satisfies this checkpoint; do not repeat it ceremonially.

Separate facts, inferences, unknowns, and user decisions. Exhaust the decisions that matter to the requested outcome, not every imaginable future feature. Investigation supports the interview; it does not make product decisions on the user's behalf.

## Compare and converge

After requirement agreement, freeze the current context revision and run arena. Independent candidates receive the same confirmed problem and evidence, not each other's intermediate proposals. The parent compares and synthesizes their proposals.

Then the parent runs architect to turn the chosen direction into caller examples, interfaces, types, state ownership, constraints, and a verification approach. Architect consumes arena's result; it does not automatically start another arena or hand overall design ownership to a new agent. Narrow specialist investigations remain available.

Use this order for a new design. Reuse an already approved, applicable design when implementing its tickets; do not repeat the arena per ticket or manufacture alternatives for a fully specified mechanical change. If evidence overturns a material product decision, return to the user with that evidence. Technical adjustments within the agreed behavior remain the parent's responsibility.

Use unslop throughout replies and artifacts. Use technical-writing for specs, design explanations, PR bodies, commit messages, and delivery reports. Writing is part of each stage, not another approval gate.

## Plan and authorize delivery

Read [planning](references/planning.md). Windflow owns spec synthesis, the single similar-issue check, and ticket decomposition; these are not Matt's to-spec or to-tickets workflows.

The owner has three confirmation points:
- Requirement agreement.
- Approval of the exact ticket breakdown before ticket publication and dependent implementation.
- Approval of the finished PR and head before merge.

Reuse existing approval for the unchanged scope. There is a conditional decision when the spec search finds a plausible overlapping issue. Silence, elapsed time, approval of requirements, and green CI are not merge approval. A request to implement one existing ticket already selects that scope and does not require inventing a new split.

Between these checkpoints, proceed with authorized tracker actions, commits, pushes, PRs, checks, and repairs. Respect earlier narrower instructions. Automatic cleanup of eligible source branches after verified merge is already authorized.

## Implement, accept, and review

Read [implementation](references/implementation.md) and [delivery](references/delivery.md). Create or reuse an isolated worktree on a task branch before implementation. Assign the approved ticket and design to an implementation agent. Use swarm for independent slices when useful, with separate writable workspaces. The parent retains integration, Git, tracker, CI, and confirmation ownership.

The parent evaluates the actual diff and acceptance evidence. Acceptance asks whether the agreed behavior works; review investigates what else the change breaks and under which current conditions. Successful tests alone do not answer either question completely.

Run focused checks for changed behavior and affected callers. Do not automatically run a full local suite or repeat passing checks without relevant changes, failures, or evidence gaps. Preserve required external CI and provider protections.

After CI, apply delivery's review eligibility rules. When review is required, follow the independent discovery and verification procedure in [review](references/review.md). A plausible warning is not a verified defect, and a real defect does not automatically justify a new fallback or abstraction. Repair confirmed problems with the smallest necessary change, then revalidate the affected behavior and current PR head.

Present the actual ready PR and evidence before requesting merge confirmation. Verify the merged result and eligible branch cleanup. Keep ready-for-merge, queued, merged, partial, and blocked outcomes distinct.

## Resume without losing decisions

Use [execution context](references/execution.md) for a compact, evidence-linked checkpoint. Record the latest requirement and design revision, current stage, approvals, tracker references, workspaces, base/head, CI, review disposition, and next action. Earlier drafts are not competing sources of truth.

Reconcile live repository and tracker state after a handoff or uncertain mutation. Invalidate only evidence affected by changed code, base, or design. A new PR head requires current CI and a fresh review eligibility assessment.

Stay in the current task unless the user asks for another task. This skill is not a scheduler and does not authorize new automations, external messages, or background monitoring beyond the user's request.
