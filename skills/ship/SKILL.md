---
name: ship
description: "Prepare or finish delivery of an implemented change through PR, CI, review evidence, authorized merge, and branch cleanup. Use for opening PRs, fixing delivery blockers, or shipping completed work."
metadata:
  collection: windflow
---

# Ship

Deliver an existing change to the stopping point the user requested: a PR, green checks, merge-ready evidence, or an authorized merge. Read [delivery](references/delivery.md) for the gates and cleanup procedure.

Inspect live Git, PR, CI, acceptance, review, and authorization state. Reuse existing artifacts and reconcile uncertain remote operations before retrying. Do not backfill a requirements interview or publish a new ticket set for a standalone delivery request.

Accept implementation and acceptance evidence from the user or an earlier stage. Obtain missing facts through repository/provider tools. When required review is absent, obtain an actual independent review if the capability is available; otherwise report the pending gate. The method is available as the separate review skill, but ship does not require a hidden sibling file.

Keep the source workspace, head/base, check results, review result or justified exemption, user approval, and actual provider state explicit. A successful command, queued merge, or green CI alone is not a completed delivery.

For an orchestrated run, the parent owns Git/tracker mutations and user-facing decisions. A delegated helper reports evidence without changing branches or publishing unless its brief explicitly assigns that action. Direct invocation follows the user's actual authorization.

Do not disable checks, bypass provider approvals, force-push shared branches, or execute a separate production deployment to finish delivery. Preserve useful independent progress when a gate is blocked.
