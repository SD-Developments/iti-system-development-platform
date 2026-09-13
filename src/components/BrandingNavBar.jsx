import { useRef } from 'react';
import { NavLink } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import { ArrowRight, Menu, Monitor, Moon, Sun } from 'lucide-react';

import { bandingNavLinks } from '../constants';
import clsx from 'clsx';
import SdLogo from './SdLogo';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useTheme from '../hooks/useTheme';

function BrandingNavBar() {
  const navRef = useRef(null);
  const { theme, setTheme } = useTheme();
  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="
        fixed top-0 z-50
        w-full
        border-b border-border/70
        bg-background/95
        backdrop-blur-md
      "
    >
      <div className="flex w-full items-center justify-between px-6 py-2 xl:px-8">
        {/* Logo */}
        <SdLogo />

        {/* Desktop Navigation */}
        <ul className="ml-8 hidden items-center gap-1 xl:flex">
          {bandingNavLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  clsx(
                    `
                      relative flex items-center
                      whitespace-nowrap
                      rounded-lg
                      px-3 py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                    `,
                    {
                      'bg-primary/10 text-primary dark:bg-sd-teal/10 dark:text-sd-teal': isActive,

                      'text-muted-foreground hover:bg-muted hover:text-foreground': !isActive,
                    }
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary dark:bg-sd-teal" />
                    )}

                    {link.title}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="ml-auto flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  className="
                    group
                    relative
                    hidden
                    h-11
                    w-20.5
                    items-center
                    xl:flex
                    focus:outline-none
                  "
                >
                  <span
                    className="
                      absolute
                      left-10
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      text-muted-foreground
                      shadow-sm
                      transition-all
                      duration-200
                      p-1
                      group-hover:left-9
                      group-hover:text-foreground
                    "
                  >
                    <img src={facebook} alt="facebook" />
                  </span>
                  <span
                    className="
                      absolute
                      left-3
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      text-muted-foreground
                      shadow-sm
                      transition-all
                      duration-200
                      p-1
                      group-hover:left-4.5
                      group-hover:text-foreground
                    "
                  >
                    <img src={linkedin} alt="linkedin" />
                  </span>
                </button>
              }
            />

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Contact Us</DropdownMenuLabel>

                <DropdownMenuItem>
                  <a href="" className="flex font-semibold w-full">
                    <img src={facebook} alt="facebook" className="mr-2 w-5 h-5" />
                    Facebook
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="" className="flex font-semibold w-full">
                    <img src={linkedin} alt="linkedin" className="mr-2 w-5 h-5" />
                    Linkedin
                  </a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              text-muted-foreground
              shadow-sm
              transition-all
              duration-200
              hidden
              hover:bg-muted
              hover:text-foreground
              xl:inline-flex
            "

            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
          >
            {theme === 'light' && <Sun size={18} />}
            {theme === 'dark' && <Moon size={18} />}
            {theme === 'system' && <Monitor size={18} />}
          </Button>

          {/* ==============================================
              EXPLORE INTAKES
          ============================================== */}

          <NavLink
            to="/intakes"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-5
              py-3
              text-sm
              font-semibold
              text-primary-foreground
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-primary/90
              hover:shadow-md
              xl:flex
            "
          >
            Explore Intakes
            <ArrowRight size={17} />
          </NavLink>

          {/* ==============================================
              MOBILE MENU
          ============================================== */}

          <button
            type="button"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              border
              border-border
              transition-all
              hover:bg-muted
              xl:hidden
            "
          >
            <Menu size={21} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default BrandingNavBar;
