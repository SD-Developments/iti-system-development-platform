import GlanceHomeSection from '../components/GlanceHomeSection';
import HeroCarousel from '../components/HeroCarousel';

function Home() {
  return (
    <>
      <main className="bg-background text-foreground">
        <HeroCarousel />
        <GlanceHomeSection />
      </main>
    </>
  );
}

export default Home;
