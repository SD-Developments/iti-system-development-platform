import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Home from './features/home/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutPage from './features/about/pages/AboutPage';
import ProgramsPage from './features/programs/pages/ProgramsPage';
import TracksPage from './features/tracks/pages/TracksPage';
import BranchesPage from './features/branches/pages/BranchesPage';
import ProjectsPage from './features/projects/pages/ProjectsPage';
import EventsPage from './features/events/pages/EventsPage';
import IntakesPage from './features/intakes/pages/IntakesPage';
// import MainLayout from './layouts/mainLayout';
import MainLayout from './layouts/mainLayout';
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
          path: 'events',
          element: <EventsPage />,
        },

        {
          path: 'intakes',
          element: <IntakesPage />,
        },

        {
          path: 'programs',
          element: <ProgramsPage />,
        },

        {
          path: 'tracks',
          element: <TracksPage />,
        },

        {
          path: 'branches',
          element: <BranchesPage />,
        },

        {
          path: 'projects',
          element: <ProjectsPage />,
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
