// import { branchesData} from '@/constants';
// import { useMemo, useState } from 'react';
import BranchHeroSection from '../components/BranchHeroSection';
import BranchHubsSection from '../components/BranchHubsSection';

// import collaborationImage from '../../../assets/images/about2.png'

// const getAccentClasses = (accent) => {
//   const classes = {
//     red: {
//       badge: 'bg-primary/10 text-primary',
//       dot: 'bg-primary',
//       text: 'text-primary',
//       hover: 'hover:border-primary/40',
//     },

//     teal: {
//       badge: 'bg-sd-teal/10 text-sd-teal',
//       dot: 'bg-sd-teal',
//       text: 'text-sd-teal',
//       hover: 'hover:border-sd-teal/40',
//     },

//     green: {
//       badge: 'bg-emerald-500/10 text-emerald-700',
//       dot: 'bg-emerald-500',
//       text: 'text-emerald-600',
//       hover: 'hover:border-emerald-500/40',
//     },

//     amber: {
//       badge: 'bg-amber-500/10 text-amber-700',
//       dot: 'bg-amber-500',
//       text: 'text-amber-600',
//       hover: 'hover:border-amber-500/40',
//     },

//     navy: {
//       badge: 'bg-sd-navy/10 text-sd-navy',
//       dot: 'bg-sd-navy',
//       text: 'text-sd-navy',
//       hover: 'hover:border-sd-navy/40',
//     },
//   };

//   return classes[accent] || classes.navy;
// };

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
    </>
  );
};

export default BranchesPage;
