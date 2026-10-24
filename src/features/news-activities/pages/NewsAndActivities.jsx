import { useMemo, useState } from 'react';
import AchievementsSection from '../components/AchievementsSection';
import AnnouncementsSection from '../components/AnnouncementsSection';
import CategoryFilterBar from '../components/CategoryFilterBar';
import EventsSection from '../components/EventsSection';
import FeaturedSection from '../components/FeaturedSection';
import GallerySection from '../components/GallerySection';
import LatestSection from '../components/LatestSection';
import NewsActivitiesHero from '../components/NewsActivitiesHero';
import ProjectsSection from '../components/ProjectsSection';
import StayConnectedCTA from '../components/StayConnectedCTA';
import StudentLifeSection from '../components/StudentLifeSection';
import TimelineSection from '../components/TimelineSection';
import WorkshopsSection from '../components/WorkshopsSection';
import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';
import { categorySections } from '../data';

const NewsAndActivities = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('Latest');

  const filterInfo = useMemo(() => ({ activeCategory, sort }), [activeCategory, sort]);
  const isVisible = (id) =>
    activeCategory === 'All' || (categorySections[activeCategory] ?? []).includes(id);

  // In-page links (hero, CTA) may point at a section the active filter hides:
  // reset the filter, then scroll once the section has rendered.
  const handleAnchorClick = (event) => {
    const link = event.target.closest('a[href^="#"]');
    const id = link?.getAttribute('href').slice(1);
    if (!id || document.getElementById(id)) return;
    event.preventDefault();
    setActiveCategory('All');
    requestAnimationFrame(() =>
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    );
  };

  return (
    <>
      <Seo {...PAGE_SEO.news} />
      <div className="bg-sd-bg-light text-foreground antialiased" onClick={handleAnchorClick}>
        <NewsActivitiesHero />
        <CategoryFilterBar
          {...filterInfo}
          onCategoryChange={setActiveCategory}
          onSortChange={setSort}
        />
        <main className="max-w-335 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14 sm:space-y-20">
          {isVisible('featured') && <FeaturedSection />}
          {isVisible('latest') && <LatestSection sort={sort} />}
          {isVisible('events') && <EventsSection />}
          {isVisible('workshops') && <WorkshopsSection />}
          {isVisible('community') && <StudentLifeSection />}
          {isVisible('achievements') && <AchievementsSection />}
          {isVisible('projects') && <ProjectsSection />}
          {isVisible('announcements') && <AnnouncementsSection />}
          {isVisible('gallery') && <GallerySection />}
        </main>
        <TimelineSection />
        <StayConnectedCTA />
      </div>
    </>
  );
};

export default NewsAndActivities;
