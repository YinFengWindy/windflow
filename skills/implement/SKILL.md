---
name: implement
description: "Implement an agreed behavior or approved ticket against its design, with focused local checks. Use for feature work, scoped fixes, or evidence-backed repairs."
metadata:
  collection: windflow
---

# Implement

Turn the agreed behavior and design into a scoped code change. Accept a ticket, spec, or sufficiently clear instruction; do not require Windflow or another installed skill. Resolve only material gaps in product intent.

Read repository instructions, current callers, the design revision, acceptance criteria, exclusions, and existing dirty work. Reuse relevant investigation and verification evidence.

## Establish ownership

In an orchestrated run, the implementation worker owns the assigned code and local checks. The parent owns user decisions, integration, Git/tracker mutations, CI, and delivery. Follow its explicit workspace and scope.

When called directly, the current agent owns the requested implementation. Respect local-only instructions. Create or reuse an isolated task worktree and branch for code changes unless the user specifies a different workspace. Preserve unrelated files and staging.

For parallel work, divide independent behavior with explicit ownership and separate writable worktrees. Someone must own integration and cross-slice checks. Do not run simultaneous writers in one checkout.

## Make the change

Inspect affected callers before changing a contract. Implement the smallest change that satisfies current behavior and constraints.

For a bug, obtain a reproduction or concrete evidence of the reported failure, test the causal mechanism, repair it, and recheck the original scenario. Use a failing regression test first when an appropriate economical boundary exists. Do not create a test that cannot exercise the real bug.

If the design fails, report the violated assumption, evidence, affected behavior, and whether independent work can continue. The parent resolves technical changes and returns material product choices to the user. Do not silently revise the contract or accumulate compensating layers.

## Check and return

Run focused existing tests, affected-caller checks, type/source checks, and relevant UI/runtime observations. Do not automatically run the full local suite. Explain a concrete reason before expanding coverage, preserve required external CI, and reuse passing checks unless relevant changes or evidence gaps justify another run.

Return the baseline and design revision, changed files, acceptance evidence, commands/results, unrun checks, and unresolved deviations. The coordinator can use this receipt for acceptance without repeating successful checks.

Stop at the requested implementation outcome. Commits, publication, review, or merge require the corresponding authorization; do not start a delivery workflow merely because code is complete.
