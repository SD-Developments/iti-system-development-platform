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
import NewsAndActivites from './features/newsandactivites/NewsAndActivites';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const lenis = new Lenis({
  duration: 3,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
