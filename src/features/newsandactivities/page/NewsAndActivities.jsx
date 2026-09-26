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

const NewsAndActivities = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('Latest');

  const filterInfo = useMemo(() => ({ activeCategory, sort }), [activeCategory, sort]);
  return (
    <>
      <div className="bg-sd-bg-light text-foreground antialiased">
        <NewsActivitiesHero />
        <CategoryFilterBar
          {...filterInfo}
          onCategoryChange={setActiveCategory}
          onSortChange={setSort}
        />
        <main className="max-w-335 mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          <FeaturedSection />
          <LatestSection />
          <EventsSection />
          <WorkshopsSection />
          <StudentLifeSection />
          <AchievementsSection />
          <ProjectsSection />
          <AnnouncementsSection />
          <GallerySection />
        </main>
        <TimelineSection />
        <StayConnectedCTA />
      </div>
    </>
  );
};

export default NewsAndActivities;
