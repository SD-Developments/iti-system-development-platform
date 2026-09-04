# ITI System Development Portal

A modern web platform for showcasing the **ITI System Development Department**, its tracks, projects, activities, instructors, students, and community.

The current phase focuses on building a public-facing website for branding, marketing, and presenting the department.

## Project Goals

- Present the ITI System Development Department in a modern and professional way
- Showcase department tracks and learning paths
- Highlight student projects and achievements
- Promote activities, events, and workshops
- Introduce instructors and department members
- Provide information for prospective students
- Support department branding and visibility

## Current Scope

The current version focuses on the public website only.

Main planned areas include:

- Home
- About
- Tracks
- Projects
- Activities
- Community
- Instructors
- Partners
- News
- Admission
- Contact
- FAQ

## Tech Stack

- React
- JavaScript
- Vite
- ESLint
- Prettier
- Husky
- lint-staged

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd sd-platform
```

### Install Dependencies

```bash
npm install
```

This will also initialize Husky through the project's `prepare` script.

### Start Development Server

```bash
npm run dev
```

Vite will start the local development server.

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build the Project

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Check Formatting

```bash
npm run format:check
```

## Code Quality

The project uses several tools to keep the codebase clean and consistent.

### ESLint

ESLint is used to identify JavaScript and React code-quality issues.

It focuses mainly on code correctness and development best practices.

### Prettier

Prettier is used for automatic code formatting.

It keeps code consistent in areas such as:

- Indentation
- Spacing
- Quotes
- Line breaks
- Semicolons
- Maximum line width

### eslint-config-prettier

`eslint-config-prettier` disables ESLint formatting rules that may conflict with Prettier.

This keeps responsibilities separated:

```text
ESLint
  ↓
Code quality

Prettier
  ↓
Code formatting

eslint-config-prettier
  ↓
Prevents conflicts
```

### Husky

Husky is used to run Git hooks automatically.

The project currently uses a `pre-commit` hook.

When a developer runs:

```bash
git commit
```

Husky runs before Git creates the commit.

### lint-staged

`lint-staged` runs commands only against files that have been staged using:

```bash
git add
```

This prevents the whole project from being checked during every commit.

The current workflow is:

```text
Developer changes files
        ↓
git add
        ↓
git commit
        ↓
Husky pre-commit hook
        ↓
lint-staged
        ↓
ESLint + Prettier
        ↓
Commit succeeds
```

If ESLint finds a blocking issue, the commit will not be created until the problem is resolved.

## Git Workflow

Avoid working directly on `main`.

Create a branch for each feature or fix.

### Feature Branch Example

```bash
git checkout -b feature/home-page
```

Other examples:

```text
feature/tracks-page
feature/projects-page
feature/activities-section
feature/instructors-page
feature/news-section
```

For fixes:

```text
fix/mobile-navbar
fix/project-card-layout
fix/responsive-header
```

For refactoring:

```text
refactor/navbar-component
refactor/project-card
```

After completing your changes:

```bash
git add .
git commit -m "feat: add home page"
git push origin feature/home-page
```

Then create a Pull Request before merging into `main`.

## Commit Message Guidelines

Commitlint is not enforced in this project, but clear and descriptive commit messages are recommended.

Examples:

```text
feat: add tracks page
feat: add projects section
fix: resolve navbar issue
style: improve project cards
refactor: reorganize components
docs: update readme
chore: configure prettier
```

Recommended prefixes:

| Prefix     | Purpose                      |
| ---------- | ---------------------------- |
| `feat`     | New feature                  |
| `fix`      | Bug fix                      |
| `style`    | UI or formatting changes     |
| `refactor` | Code restructuring           |
| `docs`     | Documentation changes        |
| `test`     | Test-related changes         |
| `chore`    | Configuration or maintenance |

## Project Structure

The initial project structure is:

```text
sd-platform/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── sections/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .husky/
│   └── pre-commit
│
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The structure may evolve as development progresses.

## Planned Website Areas

The current public website is expected to include:

### Home

Main marketing and department overview page.

### About

Information about the System Development Department, its mission, vision, approach, and identity.

### Tracks

Presentation of the department's available tracks and learning paths.

### Projects

Showcase of student projects, technologies, and achievements.

### Activities

Department activities such as:

- Workshops
- Events
- Technical sessions
- Hackathons
- Competitions
- Company visits
- Demo days

### Community

Content related to students, graduates, success stories, and department life.

### Instructors

Profiles of instructors, mentors, and department members.

### Partners

Industry, academic, technology, and community partners.

### News

Department announcements, activities, achievements, and updates.

### Admission

Information for prospective students and links to official admission channels.

### Contact

Department contact information and communication channels.

### FAQ

Answers to frequently asked questions.

## Development Principles

The project should follow these principles:

- Keep components reusable
- Avoid unnecessary duplication
- Keep pages and features organized
- Use clear naming conventions
- Keep code readable and maintainable
- Use responsive layouts
- Keep content separate from reusable UI components where possible
- Avoid adding unnecessary dependencies
- Keep the website focused on public-facing content during the current phase

## Pull Requests

Before creating a Pull Request:

- Make sure the project builds successfully
- Make sure ESLint passes
- Make sure the code is formatted with Prettier
- Review your own changes
- Remove debugging code such as unnecessary `console.log` statements

A good Pull Request should explain:

- What was changed
- Why it was changed
- How it can be tested
- Any screenshots needed for visual changes

## Environment Variables

If environment variables are introduced later, do not commit private values.

Use:

```text
.env
```

for local values and provide:

```text
.env.example
```

with example variable names.

Example:

```env
VITE_API_URL=
```

Never commit passwords, API keys, or secrets.

## Contributors

Developed for the **ITI System Development Department**.

## Project Status

🚧 **Under Development**

The project is currently in its initial public website development phase.
