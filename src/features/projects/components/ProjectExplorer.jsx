import { projectCategories, projects } from '@/features/projects/data';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';

import { useEffect, useMemo, useRef, useState } from 'react';

const MAX_PROJECTS = 6;

const ProjectExplorer = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  // -----------------------------------------
  // Active category
  // -----------------------------------------
  const [activeCategory, setActiveCategory] = useState('All Projects');

  // -----------------------------------------
  // Show more / show less
  // -----------------------------------------
  const [showAll, setShowAll] = useState(false);

  // -----------------------------------------
  // Horizontal wheel scrolling
  // -----------------------------------------
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

  // -----------------------------------------
  // Filter projects by category
  // -----------------------------------------
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }

    return projects.filter((project) => project.domains?.includes(activeCategory));
  }, [activeCategory]);

  // -----------------------------------------
  // Projects to display
  // -----------------------------------------
  const displayedProjects = useMemo(() => {
    if (showAll) {
      return filteredProjects;
    }

    return filteredProjects.slice(0, MAX_PROJECTS);
  }, [filteredProjects, showAll]);

  // -----------------------------------------
  // Category project count
  // -----------------------------------------
  const getCategoryCount = (category) => {
    if (category === 'All Projects') {
      return projects.length;
    }

    return projects.filter((project) => project.domains?.includes(category)).length;
  };

  // -----------------------------------------
  // Change category
  // -----------------------------------------
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    // Always return to first 6 projects
    // when changing category
    setShowAll(false);
  };

  return (
    <section id="projects-grid" className="border-b border-border bg-sd-bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* =========================================
            HEADER
        ========================================= */}
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

          {/* Verified Capstones */}
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 font-mono text-xs text-foreground shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            <span className="font-bold">342 Verified Capstones</span>
          </div>
        </div>

        {/* =========================================
            CATEGORY PILLS
        ========================================= */}
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
                  onClick={() => handleCategoryChange(category)}
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

        {/* =========================================
            PROJECT RESULT COUNT
        ========================================= */}
        <div className="mb-6 font-mono text-xs text-muted-foreground">
          Showing <span className="font-bold text-foreground">{displayedProjects.length}</span> of{' '}
          <span className="font-bold text-foreground">{filteredProjects.length}</span> projects
        </div>

        {/* =========================================
            PROJECT GALLERY
        ========================================= */}
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}

        {/* =========================================
            SHOW MORE / SHOW LESS
        ========================================= */}
        {filteredProjects.length > MAX_PROJECTS && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-mono text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>

              <span
                className={`text-lg transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}

        {/* =========================================
            EMPTY STATE
        ========================================= */}
        {filteredProjects.length === 0 && (
          <div className="flex min-h-60 items-center justify-center rounded-2xl border border-border bg-card">
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">No projects found</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                No projects are available in this category.
              </p>

              <button
                type="button"
                onClick={() => handleCategoryChange('All Projects')}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
              >
                View All Projects
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectExplorer;
