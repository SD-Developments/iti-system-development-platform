import { createBrowserRouter } from 'react-router';
import Home from './features/home/pages/Home';
import AboutPage from './features/about/pages/AboutPage';
import TracksPage from './features/tracks/pages/TracksPage';
import ProjectsPage from './features/projects/pages/ProjectsPage';
import IntakesPage from './features/intakes/pages/IntakesPage';
import NewsAndActivities from './features/news-activities/pages/NewsAndActivities';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

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
