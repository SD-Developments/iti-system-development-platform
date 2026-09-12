import AboutHero from '../components/AboutHero';
import DepartmentStory from '../components/DepartmentStory';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import ProductionPipeline from '../components/ProductionPipeline';
import AiInitiatives from '../components/AiInitiatives';
import Timeline from '../components/Timeline';
import Leadership from '../components/Leadership';
import Cta from '../components/Cta';

const AboutPage = () => {
  return (
    <>
      <main className="w-full bg-background text-foreground">
        <div className="flex w-full flex-col">
          <AboutHero />
          <DepartmentStory />
          <VisionMission />
          <CoreValues />
          <ProductionPipeline />
          <AiInitiatives />
          <Timeline />
          <Leadership />
          <Cta />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
