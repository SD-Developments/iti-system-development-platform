import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import Cta from '@/components/Cta';
import Architecture from '../components/Architecture';
import Compare from '../components/Compare';
import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';

const TracksPage = () => {
  return (
    <>
      <Seo {...PAGE_SEO.tracks} />
      <main className="bg-background text-foreground">
        <Hero />
        <Tracks />
        <Architecture />
        <Compare />
        <Cta variant="tracks" />
      </main>
    </>
  );
};

export default TracksPage;
