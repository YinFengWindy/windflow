---
name: technical-writing
description: "Write technical explanations, specifications, and delivery records around the reader's actual task."
---

Adapted from pstack; see the pinned [source and license notices](../../THIRD_PARTY_NOTICES.md). Within Windflow, follow its current scope and authorization.

# Technical writing

Apply [unslop](../unslop/SKILL.md) and write so a reader can understand the result without the chat history.

Choose the document's job:
- Tutorial: guide a learner through visible results.
- How-to: give the steps and conditions for a concrete task.
- Reference: present facts where readers expect to find them.
- Explanation: explain a bounded question, decisions, evidence, and tradeoffs.

Keep the main purpose clear and link supporting detail. Use actual symbols, commands, and project vocabulary. Put conditions before dependent instructions and show meaningful expected results. Preserve natural prose when a rigid style rule would make it harder to read.

For a spec or design, distinguish confirmed behavior, decisions and reasons, assumptions, exclusions, and acceptance evidence. Reference the authoritative source rather than duplicating whole documents.

For PRs and delivery reports, lead with the user-visible problem and resulting behavior. Explain why the change is needed, relevant verification, and material limits. Link detailed evidence instead of pasting agent logs or repetitive checklists. Scale detail to the change.

Writing accompanies each workflow stage. It does not add an approval checkpoint, authorize publication, or override repository templates and the user's requested language or scope.
