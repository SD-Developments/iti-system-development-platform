import { useState } from 'react';
import AnnouncementsSection from '../components/AnnouncementsSection';
import CategoryFilterBar from '../components/CategoryFilterBar';
import EventsSection from '../components/EventsSection';
import LatestSection from '../components/LatestSection';
import NewsActivitiesHero from '../components/NewsActivitiesHero';
import StayConnectedCTA from '../components/StayConnectedCTA';
import StudentLifeSection from '../components/StudentLifeSection';
import TimelineSection from '../components/TimelineSection';
import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';

const NewsAndActivities = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('Latest');
  const [search, setSearch] = useState('');

  return (
    <>
      <Seo {...PAGE_SEO.news} />
      <div className="bg-sd-bg-light text-foreground antialiased">
        <NewsActivitiesHero />
        <main className="max-w-335 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14 sm:space-y-20">
          <LatestSection
            category={activeCategory}
            sort={sort}
            search={search}
            filterBar={
              <CategoryFilterBar
                activeCategory={activeCategory}
                sort={sort}
                search={search}
                onCategoryChange={setActiveCategory}
                onSortChange={setSort}
                onSearchChange={setSearch}
              />
            }
          />
          <EventsSection />
          <StudentLifeSection />
          <AnnouncementsSection />
        </main>
        <TimelineSection />
        <StayConnectedCTA />
      </div>
    </>
  );
};

export default NewsAndActivities;
