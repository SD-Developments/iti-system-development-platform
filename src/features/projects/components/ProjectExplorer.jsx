import { projectCategories, projects } from '@/constants';
import ProjectCardComp from './ProjectCardComp';

import { useEffect, useMemo, useRef, useState } from 'react';

const ProjectExplorer = () => {
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All Projects');
  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    const handleWheel = (e) => {
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };

    element.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }
    return projects.filter((project) => project.domains?.includes(activeCategory));
  }, [activeCategory]);

  const getCategoryCount = (category) => {
    if (category === 'All Projects') {
      return projects.length;
    }

    return projects.filter((project) => project.domains?.includes(category)).length;
  };

  return (
    <section id="projects-grid" className="border-b border-border bg-sd-bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-accent">
              DIGITAL ENGINEERING GALLERY
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Explore SD Projects
            </h2>

            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              From AI and high-concurrency clearing switches to WebXR, automotive firmware, and edge
              hydrology networks.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 font-mono text-xs text-foreground shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            <span className="font-bold">342 Verified Capstones</span>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="custom-scrollbar mb-10 w-full min-w-0 max-w-full overflow-x-auto pb-3"
        >
          <div className="flex w-max min-w-full items-center gap-2.5">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;

              const categoryCount = getCategoryCount(category);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-xl px-4 py-2 font-mono text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'bg-sd-navy text-primary-foreground shadow-sm'
                      : 'border border-border bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {category} ({categoryCount})
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6 font-mono text-xs text-muted-foreground">
          Showing <span className="font-bold text-foreground">{filteredProjects.length}</span> of{' '}
          <span className="font-bold text-foreground">{projects.length}</span> projects
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {filteredProjects.map((project) => (
            <ProjectCardComp key={project.title} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="flex min-h-60 items-center justify-center rounded-2xl border border-border bg-card">
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">No projects found</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                No projects are available in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('All Projects')}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
              >
                View All Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectExplorer;
