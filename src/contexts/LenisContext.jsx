import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Lenis from 'lenis';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LenisContext } from './constents';
gsap.registerPlugin(ScrollTrigger, SplitText);

function LenisProvider({ children }) {
  const lenisRef = useRef(null); // live read
  const [instance, setInstance] = useState(null); // triggers re-render when ready
  const stop = useCallback(() => lenisRef.current?.stop(), []);
  const start = useCallback(() => lenisRef.current?.start(), []);
  const scrollToTop = useCallback(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const onScroll = () => ScrollTrigger.update();
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    const notify = (x) => {
      lenisRef.current = x;
      setInstance(x);
    };
    notify(lenis);

    lenis.on('scroll', onScroll);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.off?.('scroll', onScroll);
      lenis.destroy();
      lenisRef.current = null;
      notify(null);
    };
  }, []);
  const value = useMemo(
    () => ({ lenis: instance, stop, start, scrollToTop }),
    [instance, stop, start, scrollToTop]
  );
  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
export default LenisProvider;
