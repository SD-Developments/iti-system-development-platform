import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import Learn from '../components/Learn';
import Projects from '../components/Projects';
import Cta from '@/components/Cta';
import Architecture from '../components/Architecture';
import Compare from '../components/Compare';

const TracksPage = () => {
  return (
    <>
      <main className="bg-background text-foreground">
        <Hero />
        <Tracks />
        <Architecture />
        <Learn />
        <Projects />
        <Compare />
        <Cta variant="tracks" />
      </main>
    </>
  );
};

export default TracksPage;
