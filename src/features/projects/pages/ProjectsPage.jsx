import EngineeringJourney from '../components/EngineeringJourney';
import FeaturedProject from '../components/FeaturedProject';
import FinalCta from '../components/FinalCta';
import Impact from '../components/Impact';
import IndustryCollaboration from '../components/IndustryCollaboration';
import KhedmacloudSpotlight from '../components/KhedmacloudSpotlight';
import ProjectExplorer from '../components/ProjectExplorer';
import ProjectsHeroSection from '../components/ProjectsHeroSection';
import Seo from '@/components/Seo';
import { PAGE_SEO } from '@/lib/seo';

const ProjectsPage = () => {
  return (
    <>
      <Seo {...PAGE_SEO.projects} />
      <ProjectsHeroSection />
      <FeaturedProject />
      <ProjectExplorer />
      <KhedmacloudSpotlight />
      <EngineeringJourney />
      <Impact />
      <IndustryCollaboration />
      <FinalCta />
    </>
  );
};

export default ProjectsPage;
