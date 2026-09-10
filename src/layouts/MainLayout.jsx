import { Outlet } from 'react-router';

import BrandingNavBar from '../components/BrandingNavBar';
import BrandingFooter from '../components/BrandingFooter';

const MainLayout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <BrandingNavBar />

        {/* <main className="flex-1"> */}
        <Outlet />
        {/* </main> */}
        <BrandingFooter />
      </div>
    </>
  );
};

export default MainLayout;
