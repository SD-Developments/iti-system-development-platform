import FeaturedProject from '../components/FeaturedProject';
import KhedmacloudSpotlight from '../components/KhedmacloudSpotlight';
import ProjectExplorer from '../components/ProjectExplorer';
import ProjectsHeroSection from '../components/ProjectsHeroSection';

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHeroSection />
      <FeaturedProject />
      <ProjectExplorer />
      <KhedmacloudSpotlight />
    </>
  );
};

export default ProjectsPage;
