---
name: prime-context
description: Prime the current session with the live state of the codebase and git branch. Use at the start of a session (or after switching branches) to load an accurate mental model — current branch, uncommitted changes, recent commits, diff vs the main branch, tech stack, and project layout — before doing any work. Triggers on "prime context", "prime the session", "get up to speed", "what's the state of this branch/repo".
---

# Prime Context

Load a fast, accurate snapshot of where the codebase is *right now* so the rest of the session reasons against reality instead of stale assumptions. Run the commands, then produce the summary. Do **not** modify any files while priming.

## 1. Gather git state

Run these together (independent, so batch them in one turn):

```bash
git rev-parse --abbrev-ref HEAD                 # current branch
git status --short --branch                     # uncommitted + ahead/behind
git log --oneline -15                           # recent history
git remote -v                                   # remotes (find the main branch)
```

Determine the main branch (usually `main` or `master`), then see how this branch diverges:

```bash
BASE=$(git symbolic-ref --quiet refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@' || echo main)
git log --oneline "$BASE"..HEAD                  # commits unique to this branch
git diff --stat "$BASE"...HEAD                   # files changed vs base
git diff --stat                                  # unstaged working changes
```

If there are uncommitted changes, skim the actual diff (`git diff` and `git diff --staged`) so you know what work is in flight — don't just count files.

## 2. Read the project shape

- Read `package.json` (or the equivalent manifest) for scripts, dependencies, and the framework in use.
- Read `README.md` and `CLAUDE.md` if present.
- List the top-level source layout (e.g. `src/`) to learn the directory structure and entry points.
- Note the language, framework, build tool, test runner, and lint/typecheck commands.

Read files in parallel where possible. Read only what's needed to build an accurate picture — don't dump the whole tree.

## 3. Report the priming summary

Output a concise briefing (not a wall of raw command output):

- **Branch:** current branch, its base, ahead/behind counts.
- **Working tree:** clean, or a short list of what's uncommitted and what it appears to do.
- **This branch's work:** what the commits unique to this branch accomplish, and which areas of the code they touch.
- **Stack:** language / framework / build & test tooling, plus the key run commands (dev, build, test, lint).
- **Layout:** the main source directories and where the entry points live.
- **Open threads:** anything half-done, TODOs in the diff, or obvious next steps.

End with one line: **"Context primed — ready for [the apparent focus of this branch]."** Then stop and wait for the task; don't start making changes off the back of priming unless the user already asked for something.
