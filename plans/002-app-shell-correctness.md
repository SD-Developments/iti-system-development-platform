# Plan 002: Fix app shell correctness (Suspense scope, retry, scroll, Lenis)

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat b1d1ad2..HEAD -- src/layouts/MainLayout.jsx src/components/ErrorBoundary.jsx src/components/ScrollToTop.jsx src/contexts/LenisContext.jsx src/contexts/constents.js src/hooks/useLenis.js src/router.jsx src/routerLazy.js src/components/BrandingNavBar.jsx src/features/projects/components/ProjectDetailsModal.jsx src/features/home/components/PathSection.jsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: plans/001-test-typecheck-baseline.md
- **Category**: bug
- **Planned at**: commit `b1d1ad2`, 2026-09-26

## Why this matters

Four shell-level bugs degrade every page: (1) lazy navigation unmounts the
navbar/footer and replays entrance animation; (2) "Try Again" after a chunk
failure loops into the same cached rejection; (3) every route change
force-scrolls even for hash links and can desync Lenis; (4) Lenis mutates
global GSAP state and overlapping scroll-locks fight each other. Fixing the
shell first makes all feature work (plans 003–005) testable.

## Current state

Files and roles:

- `src/routerLazy.js:1-7` — five `lazy()` routes (About, Tracks, Projects,
  Intakes, NewsAndActivities). `src/router.jsx:2` eagerly imports `Home`;
  `src/router.jsx:11-15` wraps `MainLayout` in `ErrorBoundary`.
- `src/layouts/MainLayout.jsx:12-34` — TODAY a single `<Suspense>` wraps
  `BrandingNavBar + Outlet + ScrollToTop + BrandingFooter` with a full-page
  spinner fallback. `BrandingNavBar.jsx:323-334` runs a `useGSAP` entrance
  animation, so each fallback remount replays it.
- `src/components/ErrorBoundary.jsx:16-18` — `handleRetry` only does
  `this.setState({hasError:false, error:null})`. `React.lazy` caches rejected
  imports, so retry re-throws instantly.
- `src/components/ScrollToTop.jsx:1-14` — destructures
  `const { stop, start, scrollToTop } = useLenis()` unconditionally; effect
  runs `stop(); scrollToTop(); start()` back-to-back on every `pathname`
  change, no hash handling. `LenisContext.jsx:13-16` falls back to
  `window.scrollTo(0,0)` which desyncs Lenis virtual scroll.
- `src/contexts/constents.js:1-3` — misspelled filename, sole content
  `createContext(null)`. `src/hooks/useLenis.js:4-5` returns context
  directly (null if provider missing). Consumers at `ScrollToTop.jsx:7`,
  `BrandingNavBar.jsx:321`, `ProjectDetailsModal.jsx:6`,
  `PathSection.jsx:21` all destructure blindly.
- `src/contexts/LenisContext.jsx:2,6,37-45` — imports
  `{ ScrollTrigger, SplitText } from 'gsap/all'`, registers both,
  calls `gsap.ticker.lagSmoothing(0)` with no restore; cleanup calls
  `notify(null)` → `setInstance(null)` (setState in unmount). Independent
  scroll locks in `BrandingNavBar.jsx:343-357` (mobile menu),
  `ProjectDetailsModal.jsx:7-15`, `PathSection.jsx:22-31` each do
  `stop()/start()` + `body overflow` pairs with no refcount.
- Conventions: `@/` alias for src imports; functional components; Tailwind
  classes; `ErrorBoundary` is a class component (keep it one).

## Commands you will need

| Purpose   | Command                 | Expected on success |
| --------- | ----------------------- | ------------------- |
| Tests     | `npm run test -- --run` | all pass            |
| Typecheck | `npm run typecheck`     | exit 0              |
| Build     | `npm run build`         | exit 0              |
| Lint      | `npm run lint`          | exit 0              |

## Scope

**In scope** (the only files you should modify):

- `src/layouts/MainLayout.jsx`
- `src/components/ErrorBoundary.jsx`
- `src/components/ScrollToTop.jsx`
- `src/hooks/useLenis.js`
- `src/contexts/LenisContext.jsx`
- `src/contexts/constents.js` (rename only — see Step 5)
- New colocated test file(s), e.g. `src/components/ScrollToTop.test.jsx`

**Out of scope** (do NOT touch, even though they look related):

- `src/router.jsx` / `src/routerLazy.js` lazy-ification of Home — plan 004
- `gsap/all` → per-plugin import swap beyond removing `SplitText` registration here (full bundle work is plan 004; here only stop registering unused `SplitText`)
- Feature sections (HeroCarousel, ProjectExplorer, news sections) — plan 003
- Duplicate cards/CTAs/god-file splits — plan 005

## Git workflow

- Branch: `fix/app-shell` (repo uses `fix/<name>` per README)
- Commit per step, e.g. `fix: scope suspense to outlet`, `fix: recoverable error retry`
- Do NOT push or open a PR unless instructed.

## Steps

### Step 1: Narrow Suspense to `<Outlet />` only

In `src/layouts/MainLayout.jsx`, move `<Suspense>` so it wraps ONLY
`<Outlet />`. Keep `BrandingNavBar`, `ScrollToTop`, `BrandingFooter`
mounted across transitions:

```jsx
<BrandingNavBar />
<Suspense fallback={/* keep existing spinner */}>
  <Outlet />
</Suspense>
<ScrollToTop />
<BrandingFooter />
```

Keep the existing fallback markup verbatim (spinner + Loading text).

**Verify**: `npm run build` → exit 0. Manual: `npm run dev`, visit `/`,
click to `/about` — navbar must not flicker/replay animation.

### Step 2: Make ErrorBoundary retry recover from lazy chunk failures

Replace `handleRetry` with a recovery mechanism. Minimal correct shape:

```jsx
handleRetry = () => {
  const isChunkError = /ChunkLoadError|Loading chunk|Failed to fetch dynamically/i.test(
    this.state.error?.message ?? ''
  );
  if (isChunkError) {
    window.location.reload();
    return;
  }
  this.setState({ hasError: false, error: null });
  this.setState((s, p) => ({ retryKey: (s.retryKey ?? 0) + 1 }));
};
```

And render `this.props.children` with `key={this.state.retryKey ?? 0}` so a
non-chunk retry remounts children (busts the cached rejected lazy
promise). Do not add reload loops: only chunk errors reload, once per click.

**Verify**: `npm run build` → exit 0; `npm run test -- --run` → pass.

### Step 3: Guard `useLenis` + hash-aware `ScrollToTop`

In `src/hooks/useLenis.js`, throw a descriptive error when context is null:

```js
export const useLenis = () => {
  const ctx = useContext(LenisContext);
  if (!ctx) throw new Error('useLenis must be used within <LenisProvider>');
  return ctx;
};
```

In `src/components/ScrollToTop.jsx`, skip hash navigations and prefer the
Lenis path (already provided by context). Shape:

```jsx
const { pathname, hash } = useLocation();
useEffect(() => {
  if (hash) return; // let anchor navigation work
  stop();
  scrollToTop();
  start();
}, [pathname, hash, stop, start, scrollToTop]);
```

Do not call `window.scrollTo` directly here — `scrollToTop` in context
already handles the fallback.

**Verify**: `npm run build` → exit 0. Manual: `/about#some-id` must not jump
to top.

### Step 4: Lenis cleanup — restore ticker, no setState on unmount, drop unused SplitText

In `src/contexts/LenisContext.jsx`:

1. Change import to `{ ScrollTrigger } from 'gsap/all'` (or
   `gsap/ScrollTrigger`) and register only `ScrollTrigger`. Remove all
   `SplitText` references (verified unused: repo-wide grep returns only
   this file).
2. Save prior lagSmoothing state is not directly readable — set it and
   restore a sane default in cleanup: before `gsap.ticker.lagSmoothing(0)`,
   add comment; in cleanup add `gsap.ticker.lagSmoothing(500, 33)` (GSAP
   defaults) — or better, capture via `gsap.ticker` only if API exposes it;
   minimal acceptable: restore defaults with comment citing this plan.
3. Remove `notify(null)` / `setInstance(null)` from the cleanup function
   (lines 44-45). Keep `lenisRef.current = null`, `gsap.ticker.remove`,
   `lenis.off`, `lenis.destroy()`. Never setState in unmount.
4. Add a module-level ref-counted lock API in this file (do NOT change
   consumers yet beyond keeping `stop/start` working):
   `let lockCount = 0;` `acquireLock()` stops on 0→1, `releaseLock()`
   starts on 1→0. Export via context value alongside existing
   `stop/start` (keep both for compat; consumers migrate in plan 005).

**Verify**: `npm run build` → exit 0; `npm run lint` → exit 0. Manual: open
mobile menu + project modal simultaneously — closing one must not resume
background scroll while the other is open (verify visually; full consumer
migration is plan 005).

### Step 5: Rename `constents.js` typo (import-path-only change)

Rename `src/contexts/constents.js` → `src/contexts/lenisContext.js`
(default export unchanged: the context object). Update exactly two
importers: `src/contexts/LenisContext.jsx:5` and `src/hooks/useLenis.js:1`.
Verify no other importers: `grep -rn "constents" src/` must return no
matches after the change.

Do NOT colocate provider+context in this plan (plan 005 may do that).

**Verify**: `grep -rn "constents" src/` → no matches. `npm run build` → 0.
`npm run typecheck` → 0.

## Test plan

- New `src/components/ScrollToTop.test.jsx` (or colocated): hash present →
  no scroll call; pathname change without hash → `scrollToTop` called once.
  Mock `useLenis` and `useLocation` via `vi.mock`.
- Existing baseline tests from plan 001 must keep passing.
- Verification: `npm run test -- --run` → all pass including new tests.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `npm run build` exits 0
- [ ] `npm run test -- --run` exits 0 (incl. new ScrollToTop tests)
- [ ] `npm run typecheck` exits 0; `npm run lint` exits 0
- [ ] `grep -rn "constents" src/` returns no matches
- [ ] `grep -rn "SplitText" src/` returns no matches
- [ ] MainLayout Suspense wraps only `<Outlet />` (grep `Outlet` inside
      `<Suspense` block, nav/footer outside)
- [ ] No files outside scope modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- Excerpts don't match (drifted shell code).
- `window.location.reload` approach conflicts with an existing retry-key
  pattern — stop, don't stack both.
- Lenis version installed has no `lenis.off` (cleanup line 42) — stop and
  report version.
- Any step requires touching feature sections or router lazy map.

## Maintenance notes

- Plan 005 migrates the three scroll-lock consumers onto the ref-counted
  API added here; until then `stop/start` remain for compat.
- Reviewer: check no reload loop (chunk-gated reload only), fallback height
  avoids CLS, anchor links still work.
- Deferred: full GSAP barrel removal + Helmet/Image work (plan 004).
