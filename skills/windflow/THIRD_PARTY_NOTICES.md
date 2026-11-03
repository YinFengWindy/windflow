# Third-party sources

Windflow bundles adapted guidance at fixed upstream revisions. The [version lock](upstream-lock.json) records source commits and the available source blob hashes. They describe the upstream inputs, not hashes of the adapted output.

## Matt Pocock

The grilling companion derives from [mattpocock/skills](https://github.com/mattpocock/skills/tree/3cca18b368ae95cdbdebbff572ccafa662551015), path skills/productivity/grilling/SKILL.md, originally retrieved on 2026-09-09. Its design-tree interview method is retained. Windflow makes the parent conduct the interview after investigation and delegates facts to investigators.

Matt's implement, to-spec, to-tickets, and code-review skills are not bundled. Windflow owns planning and review. The planning reference retains adapted ideas from the former to-spec and to-tickets companions at that same revision, including behavior slices, dependency edges, and migration sequencing.

The execution-context reference also draws on to-spec, to-goal, and spec-executor in [tt-a1i/matt-skills-with-to-goal](https://github.com/tt-a1i/matt-skills-with-to-goal/tree/974c932292f0c7cca6481ea8029c17a7dd91b063). It retains readiness markers, optional handoff contracts, and evidence receipts without importing automatic task creation or a mandatory goal stage.

## Lauren Tan's pstack

Seven companions derive from [cursor/plugins/pstack](https://github.com/cursor/plugins/tree/ae5650febf4320793844c12c4adaa937f417f8da/pstack), inspected on 2026-11-03: how, why, arena, architect, swarm, unslop, and technical-writing.

These are focused adaptations, not unmodified upstream copies:
- Native host agents and configured defaults replace Cursor tool names, cloud assumptions, and fixed model routing.
- Investigation is bounded by relevant questions and sources; evidence remains available across agent handoffs.
- The parent coordinates arena and then performs architect. Architect consumes the selected proposal without automatically launching another arena.
- Swarm preserves isolated writes, explicit coverage, and parent integration.
- Writing guidance preserves the user's language and meaning without imposing every upstream English style rule.
- Windflow's own authorization, validation scope, and independent finding-verification rules remain authoritative.

The orchestrator, review procedure, and delivery rules combine the owner's confirmed workflow with these adapted methods. Do not imply that upstream authors endorse those policy choices.

When updating, compare one pinned revision per upstream, preserve applicable copyright notices, review the adaptations, and validate the complete installable unit. Do not fetch floating upstream instructions during an ordinary user task.

## MIT notices

Copyright (c) 2026 Matt Pocock

Copyright (c) 2026 Lauren Tan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
