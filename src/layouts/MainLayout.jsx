import { Outlet } from 'react-router';

import BrandingNavBar from '../components/BrandingNavBar';
import BrandingFooter from '../components/BrandingFooter';
import ScrollToTop from '@/components/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <BrandingNavBar />
        <Outlet />
        <ScrollToTop />
        <BrandingFooter />
      </div>
    </>
  );
};

export default MainLayout;
