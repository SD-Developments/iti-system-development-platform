import { lazy } from 'react';

export const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));
export const TracksPage = lazy(() => import('./features/tracks/pages/TracksPage'));
export const ProjectsPage = lazy(() => import('./features/projects/pages/ProjectsPage'));
export const IntakesPage = lazy(() => import('./features/intakes/pages/IntakesPage'));
export const NewsAndActivities = lazy(
  () => import('./features/news-activities/pages/NewsAndActivities')
);
