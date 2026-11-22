---
name: ship-it
description: Commit current changes, push a branch, open a PR, and squash-merge it into master so Vercel auto-deploys. Use when the user says "ship it", "/ship-it", or asks to commit, push, PR and merge in one go.
---

# Ship It

Running this skill is the user's authorization to commit, push, open a PR and merge. Stop and report on any failure; never force-push, skip hooks, or merge with failing checks.

1. **Look first.** `git fetch` then `git status -sb` and `git diff` (including untracked files). If there is nothing to ship, say so and stop. If local `master` is ahead of `origin/master`, those unpushed commits will ship too: list them and tell the user before continuing. Do not commit secrets (`.env*`, `.claude/settings.local.json`, credentials).
2. **Build check.** Run `npm run build`. If it fails, stop and report the error.
3. **Branch.** If on `master`, create a branch with a short kebab-case name describing the change (e.g. `add-big-dawgs-song`).
4. **Commit.** Stage the relevant files by name and commit with a concise message in the repo's style (see `git log --oneline -5`), ending with the commit attribution line from the system reminder.
5. **Push.** `git push -u origin <branch>`.
6. **PR.** `gh pr create --base master --title "<title>" --body "<short summary>"`, with the body ending in the PR attribution line from the system reminder.
7. **Merge.** `gh pr merge --squash --delete-branch`. If checks are pending and required, use `--auto` and tell the user it will merge when checks pass.
8. **Sync.** `git checkout master && git fetch && git reset --hard origin/master` (a squash merge rewrites the branch's commits, so a plain pull would diverge). Only do this after confirming `git diff origin/master` shows nothing you'd lose.
9. **Report.** Give the PR URL and the merged commit. Vercel deploys from `master` automatically; mention the live site will update in a minute or two.
