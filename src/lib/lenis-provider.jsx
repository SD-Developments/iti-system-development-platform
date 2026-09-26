import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Lenis from 'lenis';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { setLenis } from '@/lib/lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    setLenis(lenis);
    lenis.on('scroll', ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return children;
}

export default LenisProvider;
