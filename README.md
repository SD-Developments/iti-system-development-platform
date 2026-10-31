# Business Requirements Document: ITI SD Public Website Redesign

|                       |                                                                       |
| --------------------- | --------------------------------------------------------------------- |
| **Document status**   | Draft v0.1                                                            |
| **Date**              | 31 Oct 2026                                                           |
| **Project**           | ITI Software Development (SD) public website redesign                 |
| **Owner / Approvers** | _To be filled_ (department head, communications lead, technical lead) |
| **Related files**     | `src/data/api/*.json` (API-ready content), this document              |

Items marked **[OPEN]** need a decision or a fact from the department before sign-off. They are collected in section 14.

---

## 1. Executive summary

The SD website presents the ITI Software Development Department to prospective students, employers and alumni. It already has five pages (Home, About, Tracks, Projects Hub, News & Activities), but the main call to action, "Explore Intakes", opens an empty placeholder page. Several links lead to pages that do not exist, there is no contact path, and content is hard-coded in components with conflicting facts across pages.

This project will:

1. Redesign the site so it reflects the department's brand and gets applicants to the official ITI application portal.
2. Fill the page gaps: Admissions (with Programs content), Branches, Contact.
3. Move all editable content into structured data that matches the future **SD management system and dashboard**, so the site can switch from JSON files to an API with little rework.
4. Make the site RTL-ready, with Arabic content delivered in a later phase.

Target launch: **1 month** from approval, in English.

## 2. Business context and problem statement

| #   | Problem observed in the current site                                                                             | Impact                                     |
| --- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| P1  | `/intakes` is a placeholder (`<h1>Intakes Page</h1>`) yet it is the main call to action in the navbar and hero   | Visitors cannot learn how or when to apply |
| P2  | Links to `/programs`, `/programs/ptp`, `/programs/itp`, `/events`, `/branches` lead to 404                       | Broken trust, lost visitors                |
| P3  | No Contact page, no real social URLs (the links go to facebook.com and linkedin.com)                             | Visitors cannot reach the department       |
| P4  | Hero buttons and many `href="#"` buttons do nothing                                                              | Looks unfinished                           |
| P5  | All 15 project demo links are `example.com`; GitHub links are `github.com/demo/...`                              | Broken or fake links on the showcase page  |
| P6  | Facts conflict between pages (see Appendix C)                                                                    | Credibility risk                           |
| P7  | Content lives inside components and data files mixed with UI code (icons as components, display-formatted dates) | Cannot be moved to a dashboard             |
| P8  | About 15 MB of images over 1 MB each; duplicated fonts                                                           | Slow loading on mobile                     |
| P9  | Branch data and a partner section were built but are unused                                                      | Wasted content; Branches page missing      |

## 3. Objectives and success measures

Goals in priority order, as decided by the department: **Branding → Applicants → Employers**, then Showcase projects and Reduce inquiries.

| Objective                             | Measure (to be baselined after launch)                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| O1. Strengthen department branding    | Consistent design system across all pages; verified statistics shown with source and date; Lighthouse Accessibility ≥ 90 |
| O2. Increase qualified applicants     | Click-through rate on "Apply" to the ITI portal; share of visitors reaching Admissions                                   |
| O3. Engage employers and partners     | Visits to Projects and Partners content; contact emails received from companies                                          |
| O4. Showcase student work             | Project views; share of projects with real demo or repository link                                                       |
| O5. Reduce repeated inquiries         | FAQ views vs. inquiry volume; Contact page used only for non-FAQ questions                                               |
| O6. Prepare for the management system | 100% of editable content served from JSON files that match the API data model                                            |

Performance targets: Lighthouse Performance ≥ 85 on mobile, LCP < 2.5 s on 4G for the home page.

## 4. Scope

### In scope, Phase 1 (1 month, English)

- Redesign of the visual design and layout of the existing pages: Home, About, Tracks, Projects Hub, News & Activities.
- New pages: **Admissions / Intakes** (includes Programs: PTP, ITP, Summer), **Branches**, **Contact**, **Privacy**.
- Fix all broken links and dead buttons; remove unused or fake links.
- Content moved to JSON files following the API data model (Appendix B).
- RTL-ready layout (logical CSS properties, language switch plumbing, no hard-coded left/right), English content only.
- Responsive design (mobile first), accessibility to WCAG 2.1 AA, SEO basics (per-page metadata, sitemap, robots).
- Image optimization.

### Out of scope, Phase 1

- Arabic translation of content (structure is ready; content is Phase 2).
- Building the SD management system and dashboard (separate project; this BRD defines the data contract it must serve).
- Online application form or applicant accounts (applicants are sent to the official ITI portal).
- Visitor login of any kind.
- Contact form backend (Phase 1 shows contact details only).

### Phase 2 and later

Arabic content and RTL QA; program detail and track detail pages; project detail pages (`/projects/:slug`); news article pages; instructors page; alumni stories and verified testimonials; partner logos strip; contact form with a backend; gallery/media; connecting the site to the dashboard API; site search; analytics dashboards.

## 5. Stakeholders and audiences

| Audience                    | Needs                                                              | Priority |
| --------------------------- | ------------------------------------------------------------------ | -------- |
| Prospective students        | What SD offers, which track, where, when, cost, how to apply       | High     |
| Employers and partners      | Quality of graduates, projects, partner programs, a way to contact | High     |
| Alumni and current students | News, events, project showcase, community                          | Medium   |
| ITI / MCIT leadership       | Strong branding and verified impact numbers                        | Medium   |
| SD staff (content editors)  | Update content without a developer (via the future dashboard)      | High     |

Parents are a secondary audience served by the same content.

## 6. Business requirements

| ID    | Requirement                                                                                                                                        | Priority                                   |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| BR-01 | The site shall present a consistent SD brand identity (current red, navy and teal palette may evolve) across all pages and in light and dark modes | Must                                       |
| BR-02 | Every page shall offer a clear path to apply, by linking to the official ITI application portal                                                    | Must                                       |
| BR-03 | The site shall let visitors compare programs (PTP, ITP, Summer) and see their tracks, requirements and intake dates                                | Must                                       |
| BR-04 | The site shall show all branches/hubs with region, address, labs, seats and tracks offered                                                         | Must                                       |
| BR-05 | The site shall showcase student projects with filtering and search, and shall not show links that do not work                                      | Must                                       |
| BR-06 | The site shall publish news, events and announcements with correct dates                                                                           | Must                                       |
| BR-07 | The site shall provide official contact details and social links                                                                                   | Must                                       |
| BR-08 | Every statistic shown shall be verified, and carry a source and an "as of" date in the data                                                        | Must                                       |
| BR-09 | All editable content shall come from structured data that mirrors the dashboard's API model                                                        | Must                                       |
| BR-10 | The site shall support Arabic and RTL without redesign; Arabic content follows in Phase 2                                                          | Must (RTL-ready) / Should (Arabic content) |
| BR-11 | The site shall give employers a way to learn about partnering and contact the department                                                           | Should                                     |
| BR-12 | The site shall be usable on mobile devices and meet WCAG 2.1 AA                                                                                    | Must                                       |

## 7. Information architecture

```
Home
Admissions / Intakes        (programs, intake dates, requirements, how to apply, FAQ)
Tracks
Branches
Projects Hub
News & Activities
About
Contact
Privacy
404
```

Navigation: Home · Admissions · Tracks · Branches · Projects · News & Activities · About · Contact, with an **Apply** button that goes to the ITI portal. Footer: programs, tracks, branches, contact details, social links, privacy.

Routes that are removed or redirected: `/programs` and `/programs/*` → `/intakes`; `/events` → `/news-activities`; `/branches` becomes a real page.

## 8. Functional requirements by page

### 8.1 Global (all pages)

| ID    | Requirement                                                                                                                      |
| ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| FR-G1 | Header with main navigation, Apply button, theme toggle, and a language switch placeholder (visible when Arabic is enabled)      |
| FR-G2 | Optional announcement bar controlled from data (text and link), e.g. open applications                                           |
| FR-G3 | Footer with contact details, social links, program, track and branch links, and legal links. No link may lead to a missing route |
| FR-G4 | Per-page SEO metadata and Open Graph image; `sitemap.xml` and `robots.txt`                                                       |
| FR-G5 | Loading, empty and error states for every data-driven section                                                                    |
| FR-G6 | Respect `prefers-reduced-motion`; autoplaying content must have a pause control                                                  |
| FR-G7 | Layout uses logical CSS properties so RTL works without rework                                                                   |

### 8.2 Home

| ID    | Requirement                                                                                                          | Data             |
| ----- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| FR-H1 | One clear hero with a primary Apply/Explore Intakes action and a secondary action to Projects. All buttons must work | page content     |
| FR-H2 | Statistics strip (verified figures only)                                                                             | stats **[OPEN]** |
| FR-H3 | Programs overview (PTP, ITP, Summer) linking to Admissions                                                           | `programs`       |
| FR-H4 | Branches overview with link to Branches page                                                                         | `branches`       |
| FR-H5 | Featured projects (flagged `featured`)                                                                               | `projects`       |
| FR-H6 | Latest news and next event                                                                                           | `news`           |
| FR-H7 | Partners strip (logos when available)                                                                                | `partners`       |
| FR-H8 | FAQ (top questions)                                                                                                  | faqs **[OPEN]**  |

### 8.3 Admissions / Intakes (new, includes Programs)

| ID    | Requirement                                                                                                                                                 | Data                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| FR-A1 | Program comparison table (duration, hours, schedule, audience, capstone, cost), built from data                                                             | `programs`              |
| FR-A2 | Next intake per program: status, application window, start date, deadline                                                                                   | `intakes`               |
| FR-A3 | Apply button linking to `intake.applyUrl` (ITI portal). If no intake is open, show "Applications closed" and the next expected date, or a notify-me contact | `intakes`               |
| FR-A4 | Program phases (PTP stages, ITP sprints)                                                                                                                    | `programs.phases`       |
| FR-A5 | Tracks grouped by program, linking to the Tracks page                                                                                                       | `tracks`                |
| FR-A6 | How to apply steps, eligibility, required documents                                                                                                         | page content **[OPEN]** |
| FR-A7 | Admissions FAQ                                                                                                                                              | faqs **[OPEN]**         |

### 8.4 Tracks

| ID    | Requirement                                                                  | Data                             |
| ----- | ---------------------------------------------------------------------------- | -------------------------------- |
| FR-T1 | Track list with search and filters (program, branch, category, technology)   | `tracks`, `programs`, `branches` |
| FR-T2 | Each track card: title, summary, hours, technologies, job profiles, branches | `tracks`                         |
| FR-T3 | Learning architecture (stages) and comparison table, built from data         | `tracks` + page content          |

### 8.5 Branches (new)

| ID    | Requirement                                                                             | Data                             |
| ----- | --------------------------------------------------------------------------------------- | -------------------------------- |
| FR-B1 | List of all branches with region filter and search                                      | `branches`, `taxonomies.regions` |
| FR-B2 | Branch card: name, city, address, labs, seats, focus areas, programs and tracks offered | `branches`                       |
| FR-B3 | Region totals (hubs, seats) calculated from data, never typed in                        | `branches`                       |
| FR-B4 | Map view and branch detail pages (Phase 2)                                              | `branches.coordinates`           |

### 8.6 Projects Hub

| ID    | Requirement                                                                              | Data                                    |
| ----- | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| FR-P1 | Project grid with domain filter, text search, and "show more"                            | `projects`, `taxonomies.projectDomains` |
| FR-P2 | Counts next to filters and the total number of projects are calculated from data         | `projects`                              |
| FR-P3 | Project card and detail view: title, summary, technologies, branch, program, cover image | `projects`                              |
| FR-P4 | Demo and repository buttons shown **only** when the link exists                          | `projects.links`                        |
| FR-P5 | Featured project and spotlight selected by data flag, not hard-coded                     | `projects.featured`                     |
| FR-P6 | Project detail pages at `/projects/:slug` (Phase 2)                                      | `projects.slug`                         |
| FR-P7 | Show student names only when `consentToPublish` is true                                  | `projects.consentToPublish`             |

### 8.7 News & Activities

| ID    | Requirement                                                                                                     | Data                     |
| ----- | --------------------------------------------------------------------------------------------------------------- | ------------------------ |
| FR-N1 | Latest feed with type filter, sort and search                                                                   | `news`                   |
| FR-N2 | Upcoming events and workshops from items of type `event` or `workshop` whose `event.startDate` is in the future | `news`                   |
| FR-N3 | Announcements and achievements sections from `type`                                                             | `news`                   |
| FR-N4 | Dates stored as ISO values and formatted by the UI, in the active language                                      | `news`                   |
| FR-N5 | Article detail pages (Phase 2)                                                                                  | `news.slug`, `news.body` |

### 8.8 About

| ID     | Requirement                                                                                                                         | Data                                    |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| FR-AB1 | Story, mission, values, milestones, learning pipeline, leadership. Shorter than today (currently 9 sections) with anchor navigation | page content (kept in code for Phase 1) |
| FR-AB2 | Statistics section uses verified stats only                                                                                         | stats **[OPEN]**                        |

### 8.9 Contact (new)

| ID    | Requirement                                                          | Data                     |
| ----- | -------------------------------------------------------------------- | ------------------------ |
| FR-C1 | Official email, phone, address, map link, office hours, social links | site settings **[OPEN]** |
| FR-C2 | Contacts per purpose (admissions, partnerships, media)               | site settings **[OPEN]** |
| FR-C3 | Per-branch contact where available                                   | `branches.contact`       |
| FR-C4 | Contact form (Phase 2, requires backend)                             | —                        |

## 9. Non-functional requirements

| ID     | Area               | Requirement                                                                                                                                                 |
| ------ | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-01 | Performance        | Mobile Lighthouse Performance ≥ 85; images in WebP/AVIF at display size; no image over 300 KB without a reason; fonts self-hosted, one family plus one mono |
| NFR-02 | Accessibility      | WCAG 2.1 AA: contrast, keyboard navigation, visible focus, alt text from data, labelled controls, reduced motion                                            |
| NFR-03 | Responsive         | 320 px to 1920 px; mobile first                                                                                                                             |
| NFR-04 | Browsers           | Latest two versions of Chrome, Edge, Safari, Firefox; iOS Safari and Android Chrome                                                                         |
| NFR-05 | i18n / RTL         | All visible text from data or UI string files; logical CSS; `dir` and `lang` set per language; Arabic font chosen                                           |
| NFR-06 | SEO                | Unique title and description per route, Open Graph images 1200×630, sitemap, robots, structured data for the organization and courses                       |
| NFR-07 | Security & privacy | HTTPS only; no personal data collected in Phase 1; Privacy page; no student names without consent                                                           |
| NFR-08 | Maintainability    | Content separated from UI; data validated against the schema in CI; README updated                                                                          |
| NFR-09 | Observability      | Privacy-friendly analytics with events for Apply click, nav usage, project filters                                                                          |
| NFR-10 | Availability       | Static hosting with CDN; deploy by pull request after lint and build pass                                                                                   |

## 10. Data and integration requirements

### 10.1 Approach

- Phase 1: JSON files in `src/data/api/` are the single source of content. They follow the model in Appendix B.
- Phase 2: the dashboard exposes the same collections through an API. The site changes from importing the JSON to fetching it; field names and shapes do not change.
- Rules for all collections: stable `id`; `status` = `draft | published | archived`; translatable text stored as `{ "en": "...", "ar": "..." }`; images as `{ src, alt }`; relationships by id; dates as ISO 8601; numbers as numbers; no UI classes, colors or components in data.

### 10.2 Collections delivered (API-ready)

| File              | Records now                                               | Dashboard module    |
| ----------------- | --------------------------------------------------------- | ------------------- |
| `programs.json`   | 3 (PTP, ITP, Summer)                                      | Programs & intakes  |
| `intakes.json`    | 1 draft (dates unknown)                                   | Programs & intakes  |
| `tracks.json`     | 9                                                         | Programs & intakes  |
| `projects.json`   | 15                                                        | Projects            |
| `news.json`       | 17 (news, events, workshops, announcements, achievements) | News & events       |
| `branches.json`   | 11                                                        | Branches & partners |
| `partners.json`   | 7 (names only)                                            | Branches & partners |
| `taxonomies.json` | project domains, regions, news types                      | Shared lists        |

### 10.3 Data that stays in code in Phase 1

Page copy such as the hero text, About story and milestones, and learning-stage descriptions. These can be moved into the dashboard later as "page content" if the department wants it **[OPEN]**.

### 10.4 Content the department must supply

| Item                                                                                        | Needed for            | Owner      | Needed by |
| ------------------------------------------------------------------------------------------- | --------------------- | ---------- | --------- |
| Verified statistics (graduates, capstones, hiring rate, partner count) with source and date | Home, About, Projects | **[OPEN]** | Week 1    |
| Intake dates, deadlines, selection stages, ITI portal URL                                   | Admissions            | **[OPEN]** | Week 1    |
| Real photos for branches, activities, events, team                                          | All pages             | **[OPEN]** | Week 1–2  |
| Official email, phone, address, map link, social URLs                                       | Contact, footer       | **[OPEN]** | Week 1    |
| Project real demo/repo links, team names, year, supervisor, and publishing consent          | Projects              | **[OPEN]** | Week 2    |
| Partner logos and permission to use them                                                    | Home                  | **[OPEN]** | Week 2    |
| Final branch list (count, names, labs, seats, coordinates)                                  | Branches              | **[OPEN]** | Week 1    |
| Alumni testimonials with consent (current ones cannot be verified)                          | Home, About           | **[OPEN]** | Phase 2   |
| Arabic translations                                                                         | All pages             | **[OPEN]** | Phase 2   |

### 10.5 Dashboard API contract (for the management system team)

Minimum read endpoints the public site will need once the dashboard exists:

```
GET /api/programs        GET /api/programs/:id
GET /api/intakes?status=published&applicationStatus=open
GET /api/tracks          GET /api/tracks/:id
GET /api/branches        GET /api/branches/:id
GET /api/projects        GET /api/projects/:slug
GET /api/news?type=&from=&to=
GET /api/partners
GET /api/taxonomies
```

Requirements: return only `status = published`; support `?lang=en|ar` with fallback to `en`; send cache headers; keep the shapes in `src/data/api/` unchanged. Write access (create, edit, publish) is limited to staff roles in the dashboard and is outside the public site.

## 11. Technical constraints and decisions

| Topic              | Decision / constraint                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Stack              | Keep React, Vite, Tailwind, React Router, existing theme tokens. Do not rebuild from scratch                                 |
| Hosting and domain | `sd.iti.gov.eg` is the canonical URL in the current metadata **[OPEN]**: confirm hosting, approvals and deployment process   |
| Application        | ITI portal URL provided by the department; no application form on this site                                                  |
| Analytics          | Choose a privacy-friendly tool **[OPEN]**                                                                                    |
| Images             | Stored in `public/images/...` and referenced by path in the data. Project images already copied to `public/images/projects/` |
| Third-party images | Remove hot-linked `googleusercontent` images in the news data; replace with department-owned photos                          |

## 12. Assumptions, risks and dependencies

| ID  | Item                                                          | Type       | Mitigation                                                                    |
| --- | ------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| R1  | Content (photos, stats, dates) arrives late                   | Risk       | Freeze content by end of week 1; launch with placeholders hidden, not visible |
| R2  | Conflicting facts remain unresolved (Appendix C)              | Risk       | Department decides in week 1; one source per fact                             |
| R3  | Dashboard backend is not ready for launch                     | Dependency | JSON files are the source of truth in Phase 1                                 |
| R4  | One month leaves limited review time                          | Risk       | Weekly review checkpoints; defer Phase 2 items                                |
| R5  | Students' names or work published without consent             | Risk       | `consentToPublish` flag; names shown only when true                           |
| R6  | Partner logos used without permission                         | Risk       | Show names only until approved                                                |
| R7  | Arabic added later breaks layout                              | Risk       | RTL checks in Phase 1 using test strings                                      |
| A1  | Applications are handled entirely by the ITI portal           | Assumption | Confirm portal URL and stability                                              |
| A2  | SD identity (colors, logo) can evolve; no strict ITI template | Assumption | Confirm with ITI communications                                               |

## 13. Timeline (4 weeks)

| Week | Deliverables                                                                                                                                                                                             |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | BRD sign-off; content freeze list; resolve data conflicts; design system (colors, type, spacing, components); wireframes for Home, Admissions, Branches, Contact; fix broken links and remove fake links |
| 2    | Build global layout, header/footer, Admissions page, Branches page, Contact page; wire pages to the JSON files                                                                                           |
| 3    | Redesign Home, About, Tracks, Projects, News; image optimization; SEO; accessibility pass                                                                                                                |
| 4    | Content QA with the department; RTL smoke test; performance and browser testing; deploy and handover                                                                                                     |

**Phase 2** is planned after launch and depends on the dashboard schedule.

## 14. Open questions

1. Who owns each content item in 10.4 and what are the dates?
2. What is the official ITI application portal URL, and are intakes always open or in windows?
3. Official branch list: how many hubs, and is "Minya, Sohag & Qena" one hub or three?
4. Which statistics are verified and can be published? (See Appendix C.)
5. Which testimonials are real and approved? If none, remove until verified.
6. Should page copy (hero, About) be editable from the dashboard, or stay in code?
7. Should stats and site settings (contact, social links, announcement bar) be dashboard modules? The current dashboard scope does not include them, but every number and link on the site would otherwise need a developer to change.
8. Hosting, domain and deployment process, and approval workflow at ITI/MCIT.
9. Do you need an English-only launch for Contact, or a contact form earlier?
10. Which analytics tool is allowed?

## 15. Acceptance criteria

The Phase 1 release is accepted when:

1. All pages in section 7 exist, and no navigation or footer link leads to a 404 or `#`.
2. The Apply button opens the official ITI portal on every page where it appears.
3. All content on those pages is loaded from `src/data/api/*.json` or page content files, with no facts typed into components that exist in data.
4. Every statistic shown has a verified entry (source and date).
5. No `example.com` or placeholder demo/repo link is displayed.
6. Lighthouse (mobile): Performance ≥ 85, Accessibility ≥ 90, SEO ≥ 90 on Home, Admissions and Projects.
7. The site renders correctly at 320 px to 1920 px and in `dir="rtl"` with English test content (no overlapping or broken layout).
8. Linting, formatting and production build pass.
9. The department signs off on the content.

Sign-off: ______________________ (Department head) ______________________ (Technical lead) Date: __________

---

## Appendix A. Page inventory

| Route              | Page                 | Status today        | Phase 1 work                                                   |
| ------------------ | -------------------- | ------------------- | -------------------------------------------------------------- |
| `/`                | Home                 | Exists              | Redesign, simplify hero, data-driven sections                  |
| `/about`           | About                | Exists              | Shorten, anchors, verified stats                               |
| `/tracks`          | Tracks               | Exists              | Polish, data from `tracks.json`, remove "Coming soon"          |
| `/projects`        | Projects Hub         | Exists              | Search + filters, remove fake links, data from `projects.json` |
| `/news-activities` | News & Activities    | Exists              | Data from `news.json`, fix dead links                          |
| `/intakes`         | Admissions / Intakes | Placeholder         | **Build**                                                      |
| `/branches`        | Branches             | Removed (data kept) | **Build**                                                      |
| `/contact`         | Contact              | Missing             | **Build**                                                      |
| `/privacy`         | Privacy              | Missing             | **Build** (short)                                              |
| `*`                | 404                  | Exists              | Restyle                                                        |

## Appendix B. Data model

Common fields on every record: `id`, `status`. Text fields marked `T` are `{ "en": string, "ar"?: string }`.

**programs**: `id`, `code`, `name T`, `kind` (diploma | accelerator | summer), `tagline T`, `summary T`, `duration {min,max,unit}`, `contactHours {min,max}`, `schedule T`, `academicCycle T`, `cohortsPerYear`, `targetAudience T`, `capstone T`, `careerOutcome T`, `cost {type, note T}`, `phases[] {order,title T,period T,summary T,topics[]}`, `trackIds[]`, `brochureUrl`.

**intakes**: `id`, `programId`, `number`, `applicationStatus` (upcoming | open | closed | in-progress), `applicationOpens`, `applicationDeadline`, `startDate`, `endDate` (ISO dates), `branchIds[]`, `applyUrl`, `selectionStages[] {order,title T,date}`.

**tracks**: `id`, `category`, `title T`, `shortTitle T`, `summary T`, `programId`, `hours`, `projectHours`, `technologies[]`, `jobProfiles[]`, `branchIds[]`, `icon` (name string, mapped to an icon in the UI).

**branches**: `id`, `code`, `name T`, `region` (taxonomy), `city`, `address T`, `description T`, `coordinates {lat,lng}`, `isFlagship`, `labs`, `seats`, `focus[]`, `programIds[]`, `trackIds[]`, `image {src,alt T}`, `contact {email,phone,mapUrl}`.

**projects**: `id`, `slug`, `title T`, `tagline T`, `summary T`, `year`, `intakeId`, `programId`, `trackId`, `trackName`, `branchId`, `domains[]` (taxonomy), `industry`, `technologies[]`, `team[] {name,role,linkedin}`, `supervisor`, `cover {src,alt T}`, `gallery[]`, `links {demo,github,video}`, `featured`, `award`, `consentToPublish`.

**news**: `id`, `slug`, `type` (news | event | workshop | achievement | announcement | student-activity), `title T`, `summary T`, `body T` (markdown), `publishedAt`, `event {startDate,endDate,location,format,level,durationHours,registerUrl}` (events and workshops only), `tags[]`, `branchId`, `image {src,alt T}`, `featured`, `pinned`.

**partners**: `id`, `name`, `type`, `logo`, `url`.

**taxonomies**: `projectDomains[] {id,label T}`, `regions[] {id,label T,description T}`, `newsTypes[]`.

**Not yet delivered, pending decision (section 14, Q7):** `stats` (`key,value,suffix,label T,source,asOf,verified`), `site` settings (contact, social links, announcement bar), `faqs` (`category,question T,answer T,order`), `people` (leadership and instructors), `testimonials`, `media`.

## Appendix C. Data conflicts found in the current site

These must be resolved before launch. The JSON files use the value shown in the "Used in JSON" column unless noted.

| #   | Conflict                                                                                                                                                                                                                                                | Where                           | Used in JSON                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------- |
| C1  | "11 hubs/branches" vs only 4 branches named in tracks (Smart Village, Alexandria, Suez Canal, Aswan). The 11th record, "Minya, Sohag & Qena Hubs" (HUB-08/09/12), is actually three hubs, so the real count may be 13. Summer page also says "272 hubs" | home, branches, tracks, intakes | 11 records as in the source data      |
| C2  | PTP is "Intake 45" on the Admissions page but "Intake 48 begins Sep 2026" in news. Unknown whether these are different counts                                                                                                                           | intakes, news                   | `ptp-intake-45` draft, dates empty    |
| C3  | PTP "1,200+ hours" vs PTP track hours of 1,032 to 1,137                                                                                                                                                                                                 | intakes, tracks                 | `contactHours.min = 1200`             |
| C4  | ITP "500+ hours" vs ITP track hours of 420 to 594                                                                                                                                                                                                       | intakes, tracks                 | `contactHours.min = 500`              |
| C5  | ITP tracks differ completely: Admissions/Home list Angular & React, Python FastAPI, Flutter, QA (500 h each); the Tracks page lists Front-End + Mobile, .NET, MEARN, Power BI, Software Fundamentals, UI/UX                                             | intakes, home, tracks           | `tracks.json` follows the Tracks page |
| C6  | PTP tracks on the Admissions page (Full-Stack, Cross-Platform Mobile, .NET) use different names from the Tracks page                                                                                                                                    | intakes, tracks                 | Tracks page names                     |
| C7  | Summer duration "4 to 8 weeks" vs "4 to 6 weeks"; "120h average" vs "120–180 hours"                                                                                                                                                                     | intakes                         | 4–8 weeks, 120–180 h                  |
| C8  | Assiut Tech Zone: 5 labs in the list, 8 labs in the featured card                                                                                                                                                                                       | branches                        | 5 labs                                |
| C9  | Smart Village "houses 14 specialized software tracks" vs 9 tracks in the data                                                                                                                                                                           | branches, tracks                | text kept as is; **[OPEN]**           |
| C10 | Projects reference the track "AI & Intelligent Systems", which does not exist in the tracks list; news "featured projects" EduConnect and MediTrack are not in the projects list                                                                        | projects, news                  | `trackId = null`, `trackName` kept    |
| C11 | Unverified numbers on the site: "94.8% placement", "450+ hiring partners", "342 verified capstones", "4,500+ students", "27 governorates"                                                                                                               | home, projects, intakes         | Not included until verified           |
| C12 | Testimonials (e.g. named alumni at Fawry, Dell) cannot be verified                                                                                                                                                                                      | home                            | Not included                          |

## Appendix D. Changes already made to the data

- Removed all fake links: 15 `*.example.com` demo URLs and 15 `github.com/demo/*` URLs are now `null`; the UI must hide those buttons.
- Icons are stored as names (for example `"smartphone"`), not React components.
- Dates are ISO (`2026-09-10`), not display text (`SEP 10, 2026`).
- Branch, program and track references use ids, not names.
- Removed duplicate news items that appeared in both `latestNews` and `achievements`.
- News images pointing at `googleusercontent.com` are `null` until department photos are supplied.
- Project cover images were copied to `public/images/projects/` and are referenced as `/images/projects/<file>.jpg`.
- Facts with unknown values (coordinates, contact details, team, year, intake dates, apply URL, logos) are `null`, never guessed.
- Added `branches[].shortName T`, `programs[].bestFor T` and the `trackCategories` taxonomy (labels for `tracks[].category`), because the UI needs them.
- Program `contactHours` equals the min and max of its tracks (PTP 1,032–1,137 h, ITP 420–594 h).
- The intake record is `ptp-intake-48` (`upcoming`, `published`).
- `news.pinned = true` marks the announcements shown in the Announcements section. `publishedAt` is optional for workshops (they use `event.startDate`) and is still missing for 2 announcements and 2 achievements.
- The API contract is documented in `docs/API.md`.
