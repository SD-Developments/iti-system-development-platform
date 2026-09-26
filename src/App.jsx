import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Home from './features/home/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutPage from './features/about/pages/AboutPage';
import TracksPage from './features/tracks/pages/TracksPage';
import ProjectsPage from './features/projects/pages/ProjectsPage';
import IntakesPage from './features/intakes/pages/IntakesPage';
import MainLayout from './layouts/MainLayout';
import Lenis from 'lenis';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import NewsAndActivities from './features/news-activities/pages/NewsAndActivities';
import { setLenis } from '@/lib/lenis';
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

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
    element: <h1>NotFound</h1>,
  },
]);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    setLenis(lenis);
    lenis.on('scroll', ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
