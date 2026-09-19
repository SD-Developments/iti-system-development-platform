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
// import NewsAndActivites from './features/newsandactivites/NewsAndActivites';
import Lenis from 'lenis';
import NewsAndActivites from './features/newsandactivites/page/NewsAndActivites';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});
lenis.on('scroll', ScrollTrigger.update); // Whenever Lenis produces a scroll update, tell ScrollTrigger to recalculate/update.
// GSAP uses this to continuously update animations. in animation loop
// Every time GSAP's animation loop runs, execute this function.
gsap.ticker.add((time) => {
  // GSAP passes a time value into your callback. (GSAP's ticker time is in seconds.)
  lenis.raf(time * 1000); // Lenis's raf() expects a timestamp in milliseconds in this setup.
  // Tell Lenis to update itself using the current animation-loop timestamp.
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
