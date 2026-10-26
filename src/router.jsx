import { createBrowserRouter } from 'react-router';
import Home from './features/home/pages/Home';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import { AboutPage, IntakesPage, NewsAndActivities, ProjectsPage, TracksPage } from './routerLazy';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,

        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
      },

      {
        path: 'about',
        element: (
          <ErrorBoundary>
            <AboutPage />
          </ErrorBoundary>
        ),
      },

      {
        path: 'intakes',
        element: (
          <ErrorBoundary>
            <IntakesPage />
          </ErrorBoundary>
        ),
      },

      {
        path: 'tracks',
        element: (
          <ErrorBoundary>
            <TracksPage />
          </ErrorBoundary>
        ),
      },

      {
        path: 'projects',
        element: (
          <ErrorBoundary>
            <ProjectsPage />
          </ErrorBoundary>
        ),
      },

      {
        path: 'news-activities',
        element: (
          <ErrorBoundary>
            <NewsAndActivities />
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    ),
  },
]);

export default router;
