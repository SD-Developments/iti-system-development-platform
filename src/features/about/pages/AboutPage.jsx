import AboutHero from '../components/AboutHero';
import Leadership from '../components/Leadership';
import Cta from '../components/Cta';
import TeamSection from '../components/TeamSection';
import SdStats from '../components/SdStats';
import StudentsBuilds from '../components/StudentsBuilds';
import Curriculum from '../components/Curriculum';
import TrackAi from '../components/TrackAi';
import Moment from '../components/Moment';

const AboutPage = () => {
  return (
    <>
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
          <Cta />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
