// Validates src/data/api/*.json against the data model (README Appendix B).
// Run: npm run validate:data
import { readFileSync } from 'node:fs';
import { existsSync } from 'node:fs';

const load = (name) => JSON.parse(readFileSync(`src/data/api/${name}.json`, 'utf8'));
const data = Object.fromEntries(
  ['programs', 'intakes', 'tracks', 'branches', 'projects', 'news', 'partners', 'taxonomies'].map(
    (name) => [name, load(name)]
  )
);
const { programs, intakes, tracks, branches, projects, news, partners, taxonomies } = data;

const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);
const warn = (message) => warnings.push(message);
const ids = (list) => new Set(list.map((item) => item.id));
const programIds = ids(programs);
const trackIds = ids(tracks);
const branchIds = ids(branches);
const statuses = new Set(['draft', 'published', 'archived']);
const isIsoDate = (value) => /^\d{4}-\d{2}-\d{2}/.test(value ?? '');
const hasText = (value) => value && typeof value === 'object' && typeof value.en === 'string';

for (const [name, list] of Object.entries({
  programs,
  intakes,
  tracks,
  branches,
  projects,
  news,
  partners,
})) {
  const seen = new Set();
  for (const record of list) {
    if (seen.has(record.id)) fail(`${name}: duplicate id ${record.id}`);
    seen.add(record.id);
    if (!statuses.has(record.status)) fail(`${name}/${record.id}: invalid status`);
  }
}

const requireText = (name, record, fields) => {
  for (const field of fields) {
    if (record[field] != null && !hasText(record[field])) {
      fail(`${name}/${record.id}: ${field} must be { en: string }`);
    }
  }
};

for (const program of programs) {
  requireText('programs', program, ['name', 'tagline', 'summary', 'bestFor']);
  for (const id of program.trackIds) {
    if (!trackIds.has(id)) fail(`programs/${program.id}: unknown track ${id}`);
  }
}

for (const intake of intakes) {
  if (!programIds.has(intake.programId)) fail(`intakes/${intake.id}: unknown program`);
  const allowed = ['upcoming', 'open', 'closed', 'in-progress'];
  if (!allowed.includes(intake.applicationStatus)) {
    fail(`intakes/${intake.id}: applicationStatus must be one of ${allowed.join(', ')}`);
  }
}

const categoryIds = ids(taxonomies.trackCategories);
for (const track of tracks) {
  requireText('tracks', track, ['title', 'shortTitle', 'summary']);
  if (!programIds.has(track.programId)) fail(`tracks/${track.id}: unknown program`);
  if (!categoryIds.has(track.category)) fail(`tracks/${track.id}: unknown category`);
  if (!Number.isFinite(track.hours)) fail(`tracks/${track.id}: hours must be a number`);
  for (const id of track.branchIds) {
    if (!branchIds.has(id)) fail(`tracks/${track.id}: unknown branch ${id}`);
    const branch = branches.find((item) => item.id === id);
    if (branch && !branch.trackIds.includes(track.id)) {
      fail(`tracks/${track.id}: branch ${id} does not list this track`);
    }
  }
  const program = programs.find((item) => item.id === track.programId);
  if (program && !program.trackIds.includes(track.id)) {
    fail(`tracks/${track.id}: not listed in program ${program.id} trackIds`);
  }
}

for (const program of programs) {
  const hours = tracks.filter((track) => track.programId === program.id).map((t) => t.hours);
  if (hours.length) {
    const { min, max } = program.contactHours;
    if (min !== Math.min(...hours) || max !== Math.max(...hours)) {
      fail(`programs/${program.id}: contactHours must match its tracks (${Math.min(...hours)}–${Math.max(...hours)})`);
    }
  }
}

const regionIds = ids(taxonomies.regions);
for (const branch of branches) {
  requireText('branches', branch, ['name', 'shortName', 'address', 'description']);
  if (!hasText(branch.shortName)) fail(`branches/${branch.id}: shortName required`);
  if (!regionIds.has(branch.region)) fail(`branches/${branch.id}: unknown region`);
  for (const id of branch.programIds) {
    if (!programIds.has(id)) fail(`branches/${branch.id}: unknown program ${id}`);
  }
  for (const id of branch.trackIds) {
    if (!trackIds.has(id)) fail(`branches/${branch.id}: unknown track ${id}`);
  }
}

const domainIds = ids(taxonomies.projectDomains);
for (const project of projects) {
  requireText('projects', project, ['title', 'summary']);
  if (project.slug !== project.id) fail(`projects/${project.id}: slug should equal id`);
  if (!programIds.has(project.programId)) fail(`projects/${project.id}: unknown program`);
  if (project.trackId && !trackIds.has(project.trackId)) fail(`projects/${project.id}: unknown track`);
  if (!branchIds.has(project.branchId)) fail(`projects/${project.id}: unknown branch`);
  for (const id of project.domains) {
    if (!domainIds.has(id)) fail(`projects/${project.id}: unknown domain ${id}`);
  }
  const src = project.cover?.src;
  if (src && !existsSync(`public${src}`)) fail(`projects/${project.id}: missing file public${src}`);
  for (const [key, url] of Object.entries(project.links)) {
    if (url && /example\.com|github\.com\/demo/.test(url)) fail(`projects/${project.id}: fake ${key} link`);
  }
}

for (const item of news) {
  requireText('news', item, ['title', 'summary']);
  if (!taxonomies.newsTypes.includes(item.type)) fail(`news/${item.id}: unknown type ${item.type}`);
  if (item.branchId && !branchIds.has(item.branchId)) fail(`news/${item.id}: unknown branch`);
  if (item.publishedAt && !isIsoDate(item.publishedAt)) fail(`news/${item.id}: bad publishedAt`);
  if (['event', 'workshop'].includes(item.type)) {
    if (!isIsoDate(item.event?.startDate)) fail(`news/${item.id}: ${item.type} needs event.startDate`);
  } else if (!item.publishedAt) {
    warn(`news/${item.id}: publishedAt missing (ask the department); hidden from date-sorted lists`);
  }
}

for (const partner of partners) {
  if (typeof partner.name !== 'string') fail(`partners/${partner.id}: name required`);
}

if (warnings.length) {
  console.warn(`Warnings (${warnings.length}):\n- ${warnings.join('\n- ')}`);
}

if (errors.length) {
  console.error(`Data validation failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('Data validation passed.');
