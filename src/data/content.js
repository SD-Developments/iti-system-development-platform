// Central place for all dynamic (API-shaped) content.
//
// Phase 1: the JSON files in ./api are the source. Phase 2: replace the imports
// below with fetched data; the exported names and shapes stay the same.
// Rules (see README Appendix B): every record has `id` and `status`; text is
// `{ en, ar? }`; relations use ids; dates are ISO 8601; no UI classes or components.
//
// Features turn these records into UI-friendly shapes inside their own data.js.

import programsJson from './api/programs.json';
import intakesJson from './api/intakes.json';
import tracksJson from './api/tracks.json';
import branchesJson from './api/branches.json';
import projectsJson from './api/projects.json';
import newsJson from './api/news.json';
import partnersJson from './api/partners.json';
import taxonomiesJson from './api/taxonomies.json';

export const DEFAULT_LANG = 'en';

const published = (records) => records.filter((record) => record.status === 'published');

export const programs = published(programsJson);
export const intakes = published(intakesJson);
export const tracks = published(tracksJson);
export const branches = published(branchesJson);
export const projects = published(projectsJson);
export const news = published(newsJson);
export const partners = published(partnersJson);
export const taxonomies = taxonomiesJson;

const indexById = (records) => new Map(records.map((record) => [record.id, record]));
const programsById = indexById(programs);
const tracksById = indexById(tracks);
const branchesById = indexById(branches);

export const getProgram = (id) => programsById.get(id);
export const getTrack = (id) => tracksById.get(id);
export const getBranch = (id) => branchesById.get(id);

const labelOf = (list, id) => list.find((item) => item.id === id)?.label;
export const getRegion = (id) => taxonomies.regions.find((region) => region.id === id);
export const getProjectDomain = (id) => labelOf(taxonomies.projectDomains, id);
export const getTrackCategory = (id) => labelOf(taxonomies.trackCategories, id);

// Resolve a translatable `{ en, ar }` value (or a plain string) to text.
export const t = (value, lang = DEFAULT_LANG) => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value[DEFAULT_LANG] ?? '';
};

export const formatDuration = ({ min, max, unit }) => {
  const label = unit.charAt(0).toUpperCase() + unit.slice(1);
  return min === max ? `${min} ${label}` : `${min}–${max} ${label}`;
};

export const formatHours = ({ min, max }) => {
  const number = (value) => value.toLocaleString('en-US');
  if (max == null) return `${number(min)}+`;
  return min === max ? number(min) : `${number(min)}–${number(max)}`;
};

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// Parses an ISO date (YYYY-MM-DD) without timezone shifts.
export const parseDate = (iso) => {
  const [year, month, day] = iso.slice(0, 10).split('-').map(Number);
  return { year, month: MONTHS[month - 1], day: String(day).padStart(2, '0') };
};

// "SEP 10, 2026"
export const formatDate = (iso) => {
  const { year, month, day } = parseDate(iso);
  return `${month} ${day}, ${year}`;
};
