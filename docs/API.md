# SD Platform API

Read-only API that serves the content of the ITI Software Development (SD) public website. The sample data for every collection is in `src/data/api/*.json`; the files use exactly the shapes described here.

## Conventions

| Topic             | Rule                                                                                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format            | JSON, UTF-8                                                                                                                                                                  |
| Base path         | `/api`                                                                                                                                                                       |
| Methods           | `GET` only. Create, edit and publish happen in the management dashboard                                                                                                      |
| Identifiers       | Every record has a stable string `id` (kebab-case)                                                                                                                           |
| Status            | `status` is `draft`, `published` or `archived`. The public API returns only `published` records                                                                              |
| Translatable text | Fields marked **T** are objects: `{ "en": "...", "ar": "..." }`. `ar` is optional. With `?lang=ar` the API returns the Arabic text and falls back to `en` when it is missing |
| Images            | `{ "src": "/images/x.jpg", "alt": T }` or `null`                                                                                                                             |
| Dates             | ISO 8601 (`2026-09-10`), never display text                                                                                                                                  |
| Numbers           | JSON numbers, never strings (`"hours": 570`)                                                                                                                                 |
| Relations         | By id (`programId`, `trackIds`, `branchId`)                                                                                                                                  |
| Unknown values    | `null` or `[]`. The API never guesses a value                                                                                                                                |
| No presentation   | No colours, CSS classes, icon components or layout flags in the data. Icons are name strings                                                                                 |

Common query parameter: `lang=en|ar`. Responses should carry cache headers.

## Endpoints

| Method | Path                  | Returns                                                                                    |
| ------ | --------------------- | ------------------------------------------------------------------------------------------ |
| GET    | `/api/programs`       | list of programs                                                                           |
| GET    | `/api/programs/:id`   | one program                                                                                |
| GET    | `/api/intakes`        | list of intakes. Filters: `programId`, `applicationStatus`                                 |
| GET    | `/api/intakes/:id`    | one intake                                                                                 |
| GET    | `/api/tracks`         | list of tracks. Filters: `programId`, `branchId`, `category`                               |
| GET    | `/api/tracks/:id`     | one track                                                                                  |
| GET    | `/api/branches`       | list of branches. Filters: `region`, `programId`, `trackId`                                |
| GET    | `/api/branches/:id`   | one branch                                                                                 |
| GET    | `/api/projects`       | list of projects. Filters: `programId`, `trackId`, `branchId`, `domain`, `featured`        |
| GET    | `/api/projects/:slug` | one project                                                                                |
| GET    | `/api/news`           | list of news items. Filters: `type`, `from`, `to`, `featured`, `pinned`, `tag`, `branchId` |
| GET    | `/api/news/:slug`     | one news item                                                                              |
| GET    | `/api/partners`       | list of partners                                                                           |
| GET    | `/api/taxonomies`     | shared lists (see below)                                                                   |

List endpoints return a plain array. Sorting: news newest first by `publishedAt`, events soonest first by `event.startDate`; other lists in dashboard order.

### Errors

| Status | Meaning                                                       |
| ------ | ------------------------------------------------------------- |
| 404    | The id or slug does not exist, or the record is not published |
| 400    | An invalid filter value                                       |

Error body: `{ "error": { "code": "not_found", "message": "..." } }`.

## Collections

`T` = translatable text. `?` = may be `null` or empty. Fields without `?` are required.

### programs

| Field            | Type                 | Notes                                                                              |
| ---------------- | -------------------- | ---------------------------------------------------------------------------------- |
| `id`             | string               | `ptp`, `itp`, `summer`                                                             |
| `code`           | string               | Short code shown in the UI, e.g. `PTP`                                             |
| `name`           | T                    |                                                                                    |
| `kind`           | enum                 | `diploma`, `accelerator`, `summer`                                                 |
| `tagline`        | T                    |                                                                                    |
| `summary`        | T                    |                                                                                    |
| `bestFor`        | T?                   | Who the program is for, one sentence                                               |
| `duration`       | `{ min, max, unit }` | `unit`: `months` or `weeks`                                                        |
| `contactHours`   | `{ min, max? }`      | Must equal the min and max of its tracks' `hours`. `max: null` means "min or more" |
| `schedule`       | T?                   |                                                                                    |
| `academicCycle`  | T?                   |                                                                                    |
| `cohortsPerYear` | number?              |                                                                                    |
| `targetAudience` | T                    |                                                                                    |
| `capstone`       | T                    |                                                                                    |
| `careerOutcome`  | T                    |                                                                                    |
| `cost`           | `{ type, note: T }`  | `type`: `free` or `paid`                                                           |
| `phases`         | array                | `{ order, title: T, period: T, summary: T, topics: string[] }`                     |
| `trackIds`       | string[]             | Ids from `tracks`                                                                  |
| `brochureUrl`    | string?              |                                                                                    |
| `status`         | enum                 |                                                                                    |

```json
{
  "id": "ptp",
  "code": "PTP",
  "name": { "en": "Professional Training Program" },
  "kind": "diploma",
  "duration": { "min": 9, "max": 9, "unit": "months" },
  "contactHours": { "min": 1032, "max": 1137 },
  "cost": { "type": "free", "note": { "en": "Fully funded by MCIT" } },
  "trackIds": ["cross-platform-mobile-ai", "dotnet-enterprise-ai", "fullstack-web-ui-ai"],
  "status": "published"
}
```

### intakes

| Field                 | Type     | Notes                                       |
| --------------------- | -------- | ------------------------------------------- |
| `id`                  | string   | e.g. `ptp-intake-48`                        |
| `programId`           | string   |                                             |
| `number`              | number   | The latest number is the "current intake"   |
| `applicationStatus`   | enum     | `upcoming`, `open`, `closed`, `in-progress` |
| `applicationOpens`    | date?    |                                             |
| `applicationDeadline` | date?    |                                             |
| `startDate`           | date?    |                                             |
| `endDate`             | date?    |                                             |
| `branchIds`           | string[] | Branches running this intake                |
| `applyUrl`            | string?  | ITI application portal                      |
| `selectionStages`     | array    | `{ order, title: T, date? }`                |
| `status`              | enum     |                                             |

### tracks

| Field          | Type     | Notes                                                                                 |
| -------------- | -------- | ------------------------------------------------------------------------------------- |
| `id`           | string   |                                                                                       |
| `category`     | string   | An `id` from `taxonomies.trackCategories`                                             |
| `title`        | T        |                                                                                       |
| `shortTitle`   | T        |                                                                                       |
| `summary`      | T        |                                                                                       |
| `programId`    | string   |                                                                                       |
| `hours`        | number   | Total contact hours                                                                   |
| `projectHours` | number?  | Hours inside the program reserved for the project                                     |
| `technologies` | string[] |                                                                                       |
| `jobProfiles`  | string[] |                                                                                       |
| `branchIds`    | string[] | Branches offering the track. Must match each branch's `trackIds`                      |
| `icon`         | string   | Icon name, e.g. `smartphone`, `workflow`, `code-2`, `database`, `terminal`, `palette` |
| `status`       | enum     |                                                                                       |

```json
{
  "id": "fullstack-mearn-genai",
  "category": "web-full-stack",
  "title": { "en": "Full-Stack Web & Generative AI Development using MEARN" },
  "shortTitle": { "en": "MEARN Full Stack + Gen AI" },
  "programId": "itp",
  "hours": 570,
  "projectHours": 90,
  "branchIds": ["smart-village-hq"],
  "icon": "code-2",
  "status": "published"
}
```

### branches

| Field         | Type                          | Notes                                                       |
| ------------- | ----------------------------- | ----------------------------------------------------------- |
| `id`          | string                        |                                                             |
| `code`        | string                        | e.g. `HUB-01`                                               |
| `name`        | T                             |                                                             |
| `shortName`   | T                             | Short label used in filters and chips, e.g. "Smart Village" |
| `region`      | string                        | An `id` from `taxonomies.regions`                           |
| `city`        | string                        |                                                             |
| `address`     | T                             |                                                             |
| `description` | T?                            |                                                             |
| `coordinates` | `{ lat, lng }?`               |                                                             |
| `isFlagship`  | boolean                       |                                                             |
| `labs`        | number                        |                                                             |
| `seats`       | number                        |                                                             |
| `focus`       | string[]                      | Technology focus areas                                      |
| `programIds`  | string[]                      |                                                             |
| `trackIds`    | string[]                      |                                                             |
| `image`       | image?                        |                                                             |
| `contact`     | `{ email?, phone?, mapUrl? }` |                                                             |
| `status`      | enum                          |                                                             |

### projects

| Field              | Type                         | Notes                                                                    |
| ------------------ | ---------------------------- | ------------------------------------------------------------------------ |
| `id`, `slug`       | string                       | `slug` equals `id`                                                       |
| `title`            | T                            |                                                                          |
| `tagline`          | T?                           |                                                                          |
| `summary`          | T                            |                                                                          |
| `year`             | number?                      |                                                                          |
| `intakeId`         | string?                      |                                                                          |
| `programId`        | string                       |                                                                          |
| `trackId`          | string?                      | `null` when the project's track is not in the catalog                    |
| `trackName`        | string                       | Track label to display                                                   |
| `branchId`         | string                       |                                                                          |
| `domains`          | string[]                     | Ids from `taxonomies.projectDomains`                                     |
| `industry`         | string                       | e.g. "Sports Technology"                                                 |
| `technologies`     | string[]                     |                                                                          |
| `team`             | array                        | `{ name, role, linkedin? }`                                              |
| `supervisor`       | string?                      |                                                                          |
| `cover`            | image                        | Files live in `/images/projects/`                                        |
| `gallery`          | image[]                      |                                                                          |
| `links`            | `{ demo?, github?, video? }` | A `null` link means the UI hides the button. Never use placeholder links |
| `featured`         | boolean                      |                                                                          |
| `award`            | string?                      |                                                                          |
| `consentToPublish` | boolean?                     | Students' consent to publish                                             |
| `status`           | enum                         |                                                                          |

### news

One collection for news, events, workshops, achievements, announcements and student activities.

| Field         | Type     | Notes                                                                                                                                                        |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`, `slug`  | string   | `slug` equals `id`                                                                                                                                           |
| `type`        | enum     | An entry of `taxonomies.newsTypes`                                                                                                                           |
| `title`       | T        |                                                                                                                                                              |
| `summary`     | T        |                                                                                                                                                              |
| `body`        | T?       | Markdown                                                                                                                                                     |
| `publishedAt` | date?    | Required for every type except `event` and `workshop`, which use `event.startDate` (still empty for 4 announcement and achievement items in the sample data) |
| `event`       | object?  | Required for `event` and `workshop`, `null` otherwise                                                                                                        |
| `tags`        | string[] | Lower-case keywords                                                                                                                                          |
| `branchId`    | string?  |                                                                                                                                                              |
| `image`       | image?   |                                                                                                                                                              |
| `featured`    | boolean  |                                                                                                                                                              |
| `pinned`      | boolean  | Pinned announcements are shown in the announcements block                                                                                                    |
| `status`      | enum     |                                                                                                                                                              |

`event` object:

| Field           | Type    | Notes                                                |
| --------------- | ------- | ---------------------------------------------------- |
| `startDate`     | date    | Required                                             |
| `endDate`       | date?   |                                                      |
| `location`      | string? |                                                      |
| `format`        | enum?   | `in-person`, `online`, `hybrid`                      |
| `level`         | enum?   | `beginner`, `intermediate`, `advanced`, `all-levels` |
| `durationHours` | number? |                                                      |
| `registerUrl`   | string? |                                                      |

```json
{
  "id": "sd-career-day",
  "slug": "sd-career-day",
  "type": "event",
  "title": { "en": "SD Career Day" },
  "summary": { "en": "Meet industry experts and explore career opportunities at SD." },
  "publishedAt": "2026-09-10",
  "event": { "startDate": "2026-09-28", "location": "Smart Village, Cairo", "format": "in-person" },
  "tags": ["career"],
  "featured": true,
  "pinned": false,
  "status": "published"
}
```

### partners

| Field    | Type    | Notes           |
| -------- | ------- | --------------- |
| `id`     | string  |                 |
| `name`   | string  |                 |
| `type`   | string  | e.g. `industry` |
| `logo`   | image?  |                 |
| `url`    | string? |                 |
| `status` | enum    |                 |

### taxonomies

A single object with shared lists:

| Key               | Item shape                                                                             |
| ----------------- | -------------------------------------------------------------------------------------- |
| `projectDomains`  | `{ id, label: T }`                                                                     |
| `regions`         | `{ id, label: T, description: T }`                                                     |
| `trackCategories` | `{ id, label: T }`                                                                     |
| `newsTypes`       | string: `news`, `event`, `workshop`, `achievement`, `announcement`, `student-activity` |

## Relationships

```
programs 1 --- * tracks          (tracks.programId, programs.trackIds)
programs 1 --- * intakes         (intakes.programId)
tracks   * --- * branches        (tracks.branchIds, branches.trackIds)
programs * --- * branches        (branches.programIds)
branches 1 --- * projects        (projects.branchId)
programs 1 --- * projects        (projects.programId)
tracks   1 --- * projects        (projects.trackId, nullable)
branches 1 --- * news            (news.branchId, nullable)
```

Both sides of `tracks` and `branches` must list each other.

## Integrity rules

- Every id in a relation field exists in the target collection.
- A program's `contactHours` equals the min and max of its tracks' `hours`.
- `projects[].links` never contain placeholder URLs; use `null`.
- Project cover files exist under `/images/projects/`.
- Dates are valid ISO dates.

## Collections not built yet

Waiting for the department to decide (README section 14, Q7). Until then this content stays in code.

| Collection     | Planned fields                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `stats`        | `key`, `value`, `suffix`, `label` T, `source`, `asOf`, `verified`                              |
| `site`         | contact (`email`, `phone`, `address`, `mapUrl`), `social[]`, `announcementBar`                 |
| `faqs`         | `category`, `question` T, `answer` T, `order`                                                  |
| `people`       | `name`, `role` T, `bio` T, `photo`, `group` (`leader` or `instructor`), `linkedin?`, `github?` |
| `testimonials` | `quote` T, `name`, `role`, `programId`, `photo?`, `consent`                                    |
| `media`        | `src`, `alt` T, `caption` T, `takenAt`, `tags[]`                                               |
