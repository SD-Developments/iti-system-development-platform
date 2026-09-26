import { Outlet } from 'react-router';

import BrandingNavBar from '../components/BrandingNavBar';
import BrandingFooter from '../components/BrandingFooter';
import ScrollToTop from '@/components/ScrollToTop';
import { Suspense } from 'react';

const MainLayout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Suspense
          fallback={
            <div className="flex min-h-[80vh] flex-1 flex-col items-center justify-center gap-5 bg-background">
              <div className="relative h-14 w-14">
                <div className="absolute inset-0 rounded-full border-2 border-muted" />
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                </div>
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Loading
                <span className="animate-pulse">…</span>
              </p>
            </div>
          }
        >
          <BrandingNavBar />

          <Outlet />
          <ScrollToTop />
          <BrandingFooter />
        </Suspense>
      </div>
    </>
  );
};

export default MainLayout;
