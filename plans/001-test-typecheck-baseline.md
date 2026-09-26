# Plan 001: Establish verification baseline (tests, typecheck, env hygiene)

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat b1d1ad2..HEAD -- package.json package-lock.json .gitignore jsconfig.json eslint.config.js README.md src/lib/seo.js src/services/api.js`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: tests
- **Planned at**: commit `b1d1ad2`, 2026-09-26

## Why this matters

There is zero automated verification: no test runner, no test files, no
typecheck script (`package.json` scripts are only
dev/build/lint/preview/format/format:check/prepare). Every later refactor
(cards, CTAs, router, Lenis) cannot be proven safe. This plan adds Vitest +
a typecheck gate plus env hygiene so all subsequent plans have a baseline.
It is purely additive — no behavior change.

## Current state

Relevant files and roles:

- `package.json:6-14` — scripts today:
  `dev: vite`, `build: vite build`, `lint: eslint .`,
  `preview: vite preview`, `format: prettier . --write`,
  `format:check: prettier . --check`, `prepare: husky`. No `test`, no
  `typecheck`.
- `package.json:48-62` — devDeps have eslint/prettier/vite only; no
  vitest/jest/playwright/testing-library, no typescript.
- `jsconfig.json:1-9` — only `@/*` alias, no `checkJs`/`strict`:
  `{"compilerOptions":{"paths":{"@/*":["./src/*"]}},"include":["src/**/*.js","src/**/*.jsx"],"exclude":["node_modules","dist"]}`
- `.gitignore:1-24` — ignores logs/node_modules/dist/`*.local`, no `.env` entry.
- `src/services/api.js:1-11` — reads `VITE_API_BASE_URL`; `src/lib/seo.js:4-9`
  reads `VITE_SITE_URL`; `README.md:429` documents `VITE_API_URL=` which
  matches neither consumer. No `.env.example` exists (glob returns nothing).
- Conventions to match: npm (package-lock.json present), ESM
  (`"type":"module"`), `@/` alias (`vite.config.js:9-13` + jsconfig),
  conventional-commit style per git log, e.g. `feat: ...`, `fix: ...`,
  `refactor: ...`. Husky + lint-staged run eslint+prettier on staged files.
- Exemplar for test placement: none exists; create colocated
  `src/**/*.test.jsx` per Vitest default.

## Commands you will need

| Purpose         | Command                 | Expected on success     |
| --------------- | ----------------------- | ----------------------- |
| Install         | `npm install`           | exit 0                  |
| Build           | `npm run build`         | exit 0, `dist/` emitted |
| Lint            | `npm run lint`          | exit 0                  |
| Format check    | `npm run format:check`  | exit 0                  |
| Tests (new)     | `npm run test -- --run` | all pass                |
| Typecheck (new) | `npm run typecheck`     | exit 0, no errors       |

## Scope

**In scope** (the only files you should modify):

- `package.json` (add `test`, `typecheck` scripts + devDeps)
- `jsconfig.json` (incremental strictness)
- `.gitignore` (env entries)
- `.env.example` (create)
- `README.md` (env section + scripts section only)
- `src/lib/seo.test.js` (create — characterization)
- `src/features/projects/data.test.js` (create — filter logic)
- `src/features/tracks/data.test.js` (create — if data module exists)

**Out of scope** (do NOT touch, even though they look related):

- `src/router.jsx`, `src/layouts/MainLayout.jsx` — plan 002 owns routing shell
- `src/components/Seo.jsx` helmet migration — plan 004 owns it
- Any component refactor (cards/CTAs/god files) — plan 005 owns it
- `vite.config.js` test config beyond minimal `vitest` include — keep minimal

## Git workflow

- Branch: `feature/test-baseline` (repo uses `feature/<name>` per README;
  observed log uses `feat: ...` messages)
- Commit per step; e.g. `test: add vitest baseline`, `chore: add typecheck and env hygiene`
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Add `.env` coverage and `.env.example`

Add to `.gitignore` (append, keep existing lines):

```gitignore
.env
.env.*
!.env.example
```

Create `.env.example` with the two REAL var names (placeholders only,
never secrets):

```env
VITE_SITE_URL=https://sd.iti.gov.eg/
VITE_API_BASE_URL=
```

Fix `README.md` env sample (`README.md:429` says `VITE_API_URL=`): replace
with the two names above. Update README scripts list to include the two new
scripts added in Step 3.

**Verify**: `git status --ignored --short | head -20` → shows `.env` ignored
pattern active; `npm run format:check` → exit 0.

### Step 2: Install Vitest + Testing Library (dev only)

Run: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`

Keep runtime `dependencies` untouched (do not move axios/shadcn here —
plan 004 owns that). Prefer pinned caret versions resolved by npm.

**Verify**: `npm run build` → exit 0 (proves manifest still builds).

### Step 3: Add `test` and `typecheck` scripts

In `package.json` scripts add:

```json
"test": "vitest run",
"typecheck": "tsc --noEmit -p jsconfig.json"
```

This requires `typescript` as devDep: `npm install -D typescript`.
Do NOT enable `checkJs` enforcement yet in this step — only the script.

**Verify**: `npm run test -- --run` → passes with "No test files found"
exit code 0 (or 1 with that message — either way record output); then
proceed to Step 4 which adds tests. `npx tsc --noEmit -p jsconfig.json` →
exit 0 on current config (no strictness yet).

### Step 4: Characterization tests for filter + SEO fallback logic

Create `src/lib/seo.test.js`: import `getAbsoluteUrl`, `DEFAULT_SEO`,
`PAGE_SEO` from `./seo.js`; assert (a) fallback to default title when page
title missing, (b) canonical joins SITE.url + path without double slash,
(c) robots default `index, follow`. Model structure on plain Vitest
`describe/it/expect` — no existing pattern to copy.

Create `src/features/projects/data.test.js`: import `projects`,
`projectCategories` from `./data.js`; assert every project has stable `id`

- `title`, categories list starts with `All Projects`, and the
  `domains?.includes(category)` predicate used in
  `ProjectExplorer.jsx:48-54` returns ≥1 row for each non-All category.

**Verify**: `npm run test -- --run` → all new tests pass (expect ≥6 tests).

### Step 5: Incremental jsconfig strictness (baseline-and-ratchet)

Update `jsconfig.json` compilerOptions to add (keep existing paths):

```json
"checkJs": true,
"strict": false,
"moduleResolution": "bundler",
"target": "ES2022"
```

Run `npm run typecheck`. Triage ONLY new diagnostics that block exit 0:
prefer `// @ts-nocheck` at top of at most 2 legacy files with a
`TODO(baseline)` comment over fixing logic — logic fixes belong to later
plans. Goal is a green gate, not clean types.

**Verify**: `npm run typecheck` → exit 0. `npm run lint` → exit 0.

## Test plan

- New: `src/lib/seo.test.js` — defaults, URL join, robots (3+ cases).
- New: `src/features/projects/data.test.js` — id uniqueness, category
  predicate coverage (3+ cases).
- Verification: `npm run test -- --run` → all pass.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `npm run test -- --run` exits 0 with ≥6 new tests passing
- [ ] `npm run typecheck` exits 0
- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] `grep -rn "VITE_API_URL=" README.md` returns no matches (old drifted name gone)
- [ ] `.env.example` exists; `.gitignore` contains `.env` rule
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- The excerpts in "Current state" don't match (codebase drifted).
- `npm install` fails (registry/offline) twice.
- `tsc --noEmit` surfaces >20 errors — stop, report count, do not fix logic.
- Any step requires touching router/Lenis/components outside scope.

## Maintenance notes

- Future plans (002–005) must run `npm run test -- --run` + `npm run
typecheck` as gates; add per-plan regression tests alongside refactors.
- Reviewer: scrutinize that `typescript` is devDep-only and no runtime dep
  was moved.
- Deferred: strict mode `true`, jsx-a11y/import lint rules (plan 005),
  Playwright E2E for routes (future direction work).
