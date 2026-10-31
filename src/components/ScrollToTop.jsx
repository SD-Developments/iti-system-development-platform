import { useLenis } from '@/hooks/useLenis';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const HASH_RETRY_MS = 50;
const HASH_MAX_WAIT_MS = 2000;
const HEADER_OFFSET = -80;

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const { lenis, stop, start, scrollToTop } = useLenis();

  useEffect(() => {
    stop();
    scrollToTop(); // ref.read + window fallback
    start();
  }, [pathname, stop, start, scrollToTop]);

  // Lazy pages and Lenis break native #hash scrolling, so scroll manually
  // once the target element exists.
  useEffect(() => {
    if (!hash) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    let waited = 0;
    let timer;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset: HEADER_OFFSET });
        else el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      waited += HASH_RETRY_MS;
      if (waited < HASH_MAX_WAIT_MS) timer = setTimeout(tryScroll, HASH_RETRY_MS);
    };

    timer = setTimeout(tryScroll, HASH_RETRY_MS);
    return () => clearTimeout(timer);
  }, [pathname, hash, lenis]);

  return null;
}

export default ScrollToTop;
