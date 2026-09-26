import { useLenis } from '@/hooks/useLenis';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();
  const { stop, start, scrollToTop } = useLenis();
  useEffect(() => {
    stop();
    scrollToTop(); // ref.read + window fallback
    start();
  }, [pathname, stop, start, scrollToTop]);
  return null;
}

export default ScrollToTop;
