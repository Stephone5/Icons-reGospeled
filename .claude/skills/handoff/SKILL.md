---
name: handoff
description: Write a condensed, copy-ready handoff text to continue the current work in a new Claude Code chat (local or cloud). Use for /handoff, "handoff", "handoff text", "move this to a new chat".
---

# handoff

Produce one copy-ready text the user pastes into a new Claude Code chat. The new chat may be local or in the cloud, and must be able to continue the work with no other context.

## Before writing

Run a quick read-only check so the facts are current, without asking the user anything:

- `git status -sb` and `git log --oneline -3` for the branch, unpushed commits, and uncommitted changes.
- The open pull request for the branch, if any (number and URL).

If there are uncommitted or unpushed changes, say so plainly in one line above the code block. A cloud container is discarded after the session, so work that is not pushed is lost and the new chat will not see it. Do not commit or push on your own; the user decides.

## Output

One fenced code block, nothing else around it except at most one line. Plain text inside, under 250 words.

## Sections, in this order

1. Title line: `HANDOFF: <project name>`
2. `First:` if a caveman skill is available (/caveman), load it and use it for every reply. Otherwise skip this line.
3. `Goal:` one or two sentences on what the work is for and what is left.
4. `Where things are:` repo (owner/name), working branch, default branch, open PR URL, key file paths (repo-relative), live site or deploy URL, artifact URLs, docs, and connectors the work uses. Exact strings only.
5. `State:` what is merged, what is pushed but unmerged, and anything not yet pushed.
6. `Decisions made:` only choices the user confirmed. Skip the section if none.
7. `Constraints / blockers:` limits found, what failed and why (for example a host blocked by the network policy, a permission denied, a missing connector), and settings the user must change.
8. Last line: tell the new chat to do one concrete first check if useful (for example: read CLAUDE.md or the repo's seed doc, fetch and check out the branch, run the build), then ask the user one simple question to move forward.

## Rules

- Critical facts only. No recap of how the work got here, no tool narration, no apologies.
- Copy URLs, branch names, PR numbers, paths, names and numbers verbatim from the conversation or git. Never invent one.
- Use repo-relative paths. Absolute paths from a cloud container or one machine will not exist in the next chat.
- Say where data lives instead of pasting large data. Paste small data only if it lives nowhere else.
- Never include secrets, passwords, API keys, tokens, account numbers or the user's email.
- Write in full, clear sentences or tight bullets. Not caveman voice: this text is read by a fresh chat.
- Don't ask the user anything before writing it. Produce it in one pass.
