import HeroCarousel from '../components/HeroCarousel';
import CtaSectoin from '../components/CtaSectoin';
import PathSection from '../components/PathSection';
import LifeSection from '../components/LifeSection';
import StudentSection from '../components/StudentSection';
import BuiltSection from '../components/BuiltSection';
import PartnersSection from '../components/PartnersSection';

function Home() {
  return (
    <>
      <main className="bg-background text-foreground">
        <HeroCarousel />
        <PathSection />
        <BuiltSection />
        <LifeSection />
        <StudentSection />
        <PartnersSection />
        <CtaSectoin />
      </main>
    </>
  );
}

export default Home;
