import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import Compare from '../components/Compare';
import Learn from '../components/Learn';
import Projects from '../components/Projects';
import Cta from '../components/Cta';

const TracksPage = () => {
  return (
    <>
      <main className="bg-background text-foreground">
        <Hero />
        <Tracks />
        <Compare />
        <Learn />
        <Projects />
        <Cta />
      </main>
    </>
  );
};

export default TracksPage;
