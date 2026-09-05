import { useGSAP } from '@gsap/react';
import { bandingNavLinks } from '../constants';
import gsap from 'gsap';

function BrandingNavBar() {
  useGSAP(() => {
    gsap.from('nav', {
      y: -100,
      duration: 1,
    });

    let tlNav = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
    });

    tlNav.fromTo(
      'nav',
      {
        backgroundColor: 'transparent',
      },
      {
        backgroundColor: '#ffffff',
      }
    );
  }, []);
  return (
    <>
      <nav>
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
              if (l.id === 'more') {
                return (
                  <li key={l.id}>
                    <a href="#" className="relative group transition-all">
                      {l.title}

                      <div class="absolute top-full left-0 pt-2 hidden transition-all group-hover:block z-50 min-w-50">
                        <div class="bg-background rounded-xl shadow-xl border border-border p-2 space-y-1 normal-case tracking-normal flex-col justify-center items-center">
                          <a
                            class="flex items-center gap-2.5 px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                            href="#alumni"
                          >
                            <span class="material-symbols-outlined text-[16px] text-primary">
                              groups
                            </span>
                            <span class="">Community &amp; Talent</span>
                          </a>
                          <a
                            class="flex items-center gap-2.5 px-3 py-2 text-xs text-[#545f73] hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                            href="#events"
                          >
                            <span class="material-symbols-outlined text-[16px] text-primary">
                              event
                            </span>
                            <span class="">Events &amp; Hackathons</span>
                          </a>
                          <a
                            class="flex items-center gap-2.5 px-3 py-2 text-xs text-[#545f73] hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                            href="#culture"
                          >
                            <span class="material-symbols-outlined text-[16px] text-primary">
                              biotech
                            </span>
                            <span class="">Faculty &amp; Research</span>
                          </a>
                        </div>
                      </div>
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
