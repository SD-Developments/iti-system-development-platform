import HeroCarousel from '../components/HeroCarousel';
import PathSection from '../components/PathSection';
import LifeSection from '../components/LifeSection';
import StudentSection from '../components/StudentSection';
import BuiltSection from '../components/BuiltSection';
import FAQ from '../components/FAQ';
import Outcomes from '../components/Outcomes';
import JourneyToOutcomes from '../components/JourneyToOutcomes';
import BranchHubsSection from '../components/BranchHubsSection';
import Seo from '@/components/Seo';
import { PAGE_SEO, SITE } from '@/lib/seo';

const homeStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE.name,
    alternateName: 'ITI SD',
    url: SITE.url,
    description:
      'ITI Software Development Department — immersive software engineering education in Egypt since 1993: 9-month professional diploma, 4-month accelerator, production capstones and nationwide hubs.',
    foundingDate: '1993',
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'Information Technology Institute (ITI), MCIT Egypt',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'en',
  },
];

function Home() {
  return (
    <>
      <Seo {...PAGE_SEO.home} structuredData={homeStructuredData} />
      <main className="relative bg-background text-foreground">
        <HeroCarousel />
        <PathSection />
        <BranchHubsSection />
        <BuiltSection />
        <LifeSection />
        <StudentSection />
        <JourneyToOutcomes />
        <Outcomes />
        <FAQ />
      </main>
    </>
  );
}

export default Home;
