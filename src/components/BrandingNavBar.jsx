import { useGSAP } from '@gsap/react';
import { bandingNavLinks } from '../constants';
import gsap from 'gsap';

function BrandingNavBar() {
  useGSAP(() => {
    gsap.from('nav', {
      y: -100,
      duration: 1,
    });

    // let tlNav = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: 'nav',
    //     start: 'top top',
    //     end: '+=500',
    //     scrub: true,
    //   },
    // });

    // tlNav.fromTo(
    //   'nav',
    //   {
    //     backgroundColor: 'transparent',
    //   },
    //   {
    //     backgroundColor: '#ffffff',
    //   }
    // );
  }, []);
  return (
    <>
      <nav className="bg-background">
        <div>
          <a className="flex items-center gap-1" href="#home">
            <img src="images/iti-logo.svg" className="w-10" alt="" />
            <p className="flex-col leading-5 justify-start items-center border-l-3 pl-2 border-gray-400">
              <span className="block  text-muted-foreground">System</span>
              <span className="block">Development</span>
            </p>
          </a>

          <ul>
            {bandingNavLinks.map((l) => {
              if (l.id === 'tracks') {
                console.log('object');
                return (
                  <li key={l.id}>
                    <a
                      href="#"
                      className="bg-primary text-primary-foreground p-3 rounded-lg transition-all hover:bg-primary/70"
                    >
                      {l.title}
                    </a>
                  </li>
                );
              }
              return (
                <li key={l.id}>
                  <a
                    className="bg-transparent text-sm p-3 rounded-lg transition-all hover:bg-muted"
                    href="#"
                  >
                    {l.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default BrandingNavBar;
