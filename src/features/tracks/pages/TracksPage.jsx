import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import Learn from '../components/Learn';
import Projects from '../components/Projects';
import Cta from '../components/Cta';
import ArchItecture from '../components/ArchItecture';
import Compare from '../components/Compare';

const TracksPage = () => {
  return (
    <>
      <main className="bg-background text-foreground">
        <Hero />
        <Tracks />
        <ArchItecture />
        <Learn />
        <Projects />
        <Compare />
        <Cta />
      </main>
    </>
  );
};

export default TracksPage;
