// import { branchesData} from '@/constants';
// import { useMemo, useState } from 'react';
import AllBranches from '../components/AllBranches';
import BranchHeroSection from '../components/BranchHeroSection';
import BranchHubsSection from '../components/BranchHubsSection';
import EditorialFeature from '../components/EditorialFeature';
import RegionalCommunities from '../components/RegionalCommunities';
import StudentsExperience from '../components/StudentsExperience';

// import collaborationImage from '../../../assets/images/about2.png'

const BranchesPage = () => {
  // const [activeRegion, setActiveRegion] = useState('all');
  // const [searchQuery, setSearchQuery] = useState('');

  // const filteredBranches = useMemo(() => {
  //   const query = searchQuery.trim().toLowerCase();

  //   return branchesData.filter((branch) => {
  //     const matchesRegion = activeRegion === 'all' || branch.region === activeRegion;

  //     const searchableText = [
  //       branch.name,
  //       branch.location,
  //       branch.locationDescription,
  //       branch.keywords,
  //       ...branch.tags,
  //     ]
  //       .join(' ')
  //       .toLowerCase();

  //     const matchesSearch = !query || searchableText.includes(query);

  //     return matchesRegion && matchesSearch;
  //   });
  // }, [activeRegion, searchQuery]);

  return (
    <>
      <BranchHeroSection></BranchHeroSection>
      <BranchHubsSection></BranchHubsSection>
      <RegionalCommunities></RegionalCommunities>
      <StudentsExperience></StudentsExperience>
      <EditorialFeature></EditorialFeature>
      <AllBranches></AllBranches>
    </>
  );
};

export default BranchesPage;
