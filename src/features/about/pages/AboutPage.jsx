import AboutHero from '../components/AboutHero';
import Leadership from '../components/Leadership';
import Cta from '@/components/Cta';
import TeamSection from '../components/TeamSection';
import SdStats from '../components/SdStats';
import StudentsBuilds from '../components/StudentsBuilds';
import Curriculum from '../components/Curriculum';
import TrackAi from '../components/TrackAi';
import Moment from '../components/Moment';
import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';

const AboutPage = () => {
  return (
    <>
      <Seo {...PAGE_SEO.about} />
      <main className="w-full bg-background text-foreground">
        <div className="flex w-full flex-col">
          <AboutHero />
          <SdStats />
          <StudentsBuilds />
          <Curriculum />
          <TrackAi />
          <Leadership />
          <TeamSection />
          <Moment />
          <Cta variant="about" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
