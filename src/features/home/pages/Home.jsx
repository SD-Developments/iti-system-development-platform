import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import ItiModel from '../../../components/3dModels/Iti-model';
import HeroBranding from '../../../components/HeroBranding';

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
        <section className="relative w-full overflow-hidden bg-black text-white h-dvh flex justify-center items-center">
          <HeroBranding />
          <ItiModel />
        </section>
      </main>
    </>
  );
}

export default Home;
