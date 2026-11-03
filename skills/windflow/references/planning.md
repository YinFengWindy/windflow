# Spec and ticket planning

The parent synthesizes the agreed requirement and architectural result. Keep this proportional to the work. Technical testing choices are delegated to the agent and do not add a user checkpoint.

## Spec

Record the user problem, intended behavior, observable acceptance criteria, exclusions, constraints, design decisions and their reasons, and verification approach. Reference the investigation evidence and arena/architect result rather than copying their full contents.

For a new feature, draft the spec, check similar issues once, then publish the parent issue on the resolved tracker. Reuse an existing approved parent. A small change can use one issue as both spec and executable ticket; publish it after the applicable ticket approval, before implementation. A clear requirement removes repeated interviewing, not this delivery issue step. Planning-only and local-only requests keep their requested boundaries.

## Check similar issues once

After the spec draft, search the target repository's open and closed issues using intended behavior, domain synonyms, and affected components. Follow relevant pagination and read plausible candidates' bodies and comments.

For plausible overlap, show title, URL, status, shared behavior, differences, and a recommendation. Wait for the user's choice to reuse, extend, create separately, or drop it before publishing. Do not mutate the overlapping issue as a substitute for that choice.

Record the result and choice. Ticket publication reuses it without a second search. A supplied existing implementation issue already identifies the chosen scope. Incomplete access is not evidence of no overlap; retain the draft and report the gap. After an ambiguous creation timeout, reconcile that operation before retrying.

## Propose and publish the breakdown

Draft independently verifiable behavioral slices and actual blocking dependencies. Each ticket names:
- The delivered behavior and link to the source spec/design revision.
- Observable acceptance criteria and necessary exclusions.
- Real blockers and any integration constraints.

Prefer an end-to-end capability over separate database/backend/UI tickets that cannot be accepted alone. Broad migrations may need expand, migrate, and contract steps, or an integration branch when intermediate work cannot land green. Choose according to actual compatibility requirements.

Show the proposed titles, behavior, acceptance criteria, and blockers. Wait for approval of the exact breakdown before publishing its tickets or implementing them. Reuse unchanged approval; material changes to scope, granularity, or dependencies require renewed agreement. An instruction to implement a selected existing ticket does not create a new split checkpoint.

Publish in dependency order and preserve returned IDs. Use native sub-issue and blocking relationships when supported; otherwise link explicitly. Use existing tracker labels and configuration. Keep the parent spec intact and link children; do not replace it with a ticket list.

Work only the authorized ticket scope. A closed blocker is satisfied only when the required behavior actually exists. Close a parent only when its in-scope behavior and child deliveries are complete.
