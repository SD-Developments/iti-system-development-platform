// import { Box, Edges, OrbitControls } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ITILogoModel from '../components/3dModels/Iti-logo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

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
    // const tl = gsap.timeline();

    gsap.from('.hero1', {
      duration: 1,
      scale: 0,
      ease: 'circ.inOut',
    });
    gsap.from(titleSplit.lines, {
      y: 100,
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
          <div className="absolute inset-0 z-0">
            <img
              alt="Young Egyptian software engineering students collaborating in ITI Smart Village developer studio"
              className="w-full h-full object-cover scale-100 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeseTrw9fKR-RtuWB8uU27t7PHC7W5q85YPiFl9cbRdqSXuXmxLjWqsNVXMHqFcKNP5Bm5v7yv-slsPOWJPjC26n41gq5nDf27goBa0BZrOz4IELr07eAtXIwKVeiBRlmA8wIuOk15DvFACxTeU6_Y1RRwhyBg9c0D9EEKEOdkjAnn3X23UAmm9z-XqlEgDY4nUSTf133pZcmdMMb3chIJrbnBBCnNqueqhdBhCp_46lrTzM1mW1jxJg"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#090d16]/90 via-[#090d16]/75 to-[#87152b]/40"></div>
            <div className="absolute inset-0 bg-linear-to-l from-[#0f172a] via-[#0f172a]/30 to-black/40"></div>
          </div>
          <div className="hero1  w-1/2 px-7 py-24 lg:py-32 z-10 h-full">
            <div className="max-w-3xl flex flex-col items-start gap-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-tech-badge text-[11px] tracking-widest text-[#ffdada] uppercase font-semibold">
                  EGYPT'S FLAGSHIP SOFTWARE ENGINEERING COMMUNITY • ITI SD
                </span>
              </div>
              <h1 className="titleheading font-display-hero text-4xl sm:text-5xl lg:text-[64px] font-black text-white tracking-tight leading-[1.05]">
                BUILDING THE NEXT GENERATION OF{' '}
                <span className="gradient-wrap inline-block">
                  <span className="gradient-text  text-transparent bg-clip-text bg-linear-to-r from-primary via-[#ffb2b6] to-amber-300">
                    SOFTWARE ENGINEERS
                  </span>
                </span>
              </h1>
              <p className="deshero font-body-lg text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl font-normal">
                The Software Development Department at ITI develops software engineers through
                hands-on learning, real-world projects, modern technologies, and nationwide
                collaboration.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full">
                <a
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#87152b] hover:bg-[#640019] text-white font-semibold text-sm transition-all duration-200 shadow-xl hover:shadow-[#87152b]/40 border border-white/10 group"
                  href="#pathways"
                >
                  <span className="">Explore Programs</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-medium text-sm transition-all border border-white/20"
                  href="#impact"
                >
                  <span className="material-symbols-outlined text-[18px] text-amber-400">
                    explore
                  </span>
                  <span className="">Discover Our Impact</span>
                </a>
              </div>
              <div className="w-full pt-8 mt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-y-3 text-white/85 font-tech-badge text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">hub</span>
                  <span className="">11 Tech Hubs Nationwide</span>
                </div>
                <span className="hidden sm:inline text-white/30">•</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#ffdada]">
                    terminal
                  </span>
                  <span className="">24+ Active Tracks</span>
                </div>
                <span className="hidden sm:inline text-white/30">•</span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400">
                    verified
                  </span>
                  <span className="">100% MCIT Funded</span>
                </div>
                <span className="hidden sm:inline text-white/30">•</span>
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="">Intake 45 Live</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-full z-10 ">
            <Canvas
              className="   w-1/2 canvas"
              camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
            >
              <ambientLight intensity={1.2} />

              <directionalLight position={[4, 6, -5]} intensity={2} />

              <directionalLight position={[4, -2, 3]} intensity={1.5} />

              <ITILogoModel position={[0, 0, 0]} scale={2} />
              {/* gives you mouse control over that camera. */}
              <OrbitControls
                target={[0, 0, 0]}
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
              />
            </Canvas>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
