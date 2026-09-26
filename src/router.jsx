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
        element: <Home />,
      },

      {
        path: 'about',
        element: <AboutPage />,
      },

      {
        path: 'intakes',
        element: <IntakesPage />,
      },

      {
        path: 'tracks',
        element: <TracksPage />,
      },

      {
        path: 'projects',
        element: <ProjectsPage />,
      },

      {
        path: 'news-activities',
        element: <NewsAndActivities />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
