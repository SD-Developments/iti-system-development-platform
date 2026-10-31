// Facts shown in several places on the site, computed from the content in ./content.js
// so they can never disagree with the underlying records.

import { branches, formatHours, getProgram, intakes } from './content';

export const branchCount = branches.length;
export const branchHubsLabel = `${branchCount} Hubs`;

// Latest intake number (the one currently running or about to start).
export const currentIntake = Math.max(...intakes.map((intake) => intake.number));

export const ptpHours = formatHours(getProgram('ptp').contactHours);
export const itpHours = formatHours(getProgram('itp').contactHours);
export const summerHours = formatHours(getProgram('summer').contactHours);
