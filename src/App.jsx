import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Home from './features/home/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutPage from './features/about/pages/AboutPage';
import TracksPage from './features/tracks/pages/TracksPage';
import ProjectsPage from './features/projects/pages/ProjectsPage';
import EventsPage from './features/events/pages/EventsPage';
import IntakesPage from './features/intakes/pages/IntakesPage';
import MainLayout from './layouts/MainLayout';
import NewsAndActivites from './features/newsandactivites/page/NewsAndActivites';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
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
          path: 'events',
          element: <EventsPage />,
        },
        {
          path: 'news-activites',
          element: <NewsAndActivites />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <BrandingNavBar />
      <Home />
      <div className="bg-red-400 w-full h-dvh"></div>
      <div className="bg-blue-400 w-full h-dvh"></div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
