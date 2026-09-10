import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import HeroCarousel from '../../../components/HeroCarousel';

function Home() {
  useGSAP(() => {
    let titleSplit = new SplitText('.titleheading', {
      type: 'lines',
      ignore: '.gradient-text',
    });
    let desSplit = new SplitText('.deshero', {
      type: 'lines',
      ignore: '.gradient-text',
    });

    gsap.from('.hero1', {
      duration: 1,
      scale: 0,
      ease: 'circ.inOut',
    });
    gsap.from(titleSplit.lines, {
      y: 100,
      delay: 1,
      opacity: 0,
      duration: 0.2,
      stagger: 0.5,
    });
    gsap.from('.gradient-wrap', {
      x: -100,
      opacity: 0,
      duration: 0.2,
    });
    gsap.from(desSplit.lines, {
      x: 100,
      opacity: 0,
      delay: 1,
      duration: 0.2,
      stagger: 0.5,
    });
  }, []);

  return (
    <>
      <main>
        <section className="flex-center h-screen">
          <HeroCarousel />
        </section>
      </main>
    </>
  );
}

export default Home;
