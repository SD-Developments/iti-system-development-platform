import { getLenis } from '@/lib/lenis';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    // Stop Lenis so its raf loop doesn't fight the reset
    lenis?.stop();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    // Sync native scroll too (Lenis mirrors it)
    window.scrollTo(0, 0);
    // Refresh AFTER the reset, next frame when new Outlet DOM has height
    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
      lenis?.start();
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
