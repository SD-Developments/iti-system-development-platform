import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import facebook from '../assets/images/logos/facebook.png';
import linkedin from '../assets/images/logos/linkedin.png';
import { ArrowRight, Menu, Monitor, Moon, Sun, X } from 'lucide-react';

import { brandingNavLinks, socialLinks } from './layout/data';
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
import { useLenis } from '@/hooks/useLenis';

const socialIcons = { facebook, linkedin };

function ThemeIcon({ theme, size = 18 }) {
  if (theme === 'light') return <Sun size={size} />;
  if (theme === 'dark') return <Moon size={size} />;
  return <Monitor size={size} />;
}

function ThemeToggleDesktop({ theme, setTheme }) {
  return (
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
      aria-label="Toggle theme"
    >
      <ThemeIcon theme={theme} size={18} />
    </Button>
  );
}

function ThemeToggleMobile({ theme, setTheme }) {
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-border
        bg-card
        px-4
        py-3
        text-sm
        font-semibold
        transition
        hover:bg-muted
      "
    >
      <span>Theme</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <ThemeIcon theme={theme} size={16} />
      </span>
    </button>
  );
}

function DesktopNavLinks() {
  return (
    <ul className="ml-8 hidden w-1/2 items-center justify-end gap-1 xl:flex">
      {brandingNavLinks.map((link) => (
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
  );
}

function MobileNavLinks({ onNavigate }) {
  return (
    <div className="flex flex-col gap-1">
      {brandingNavLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          end={link.path === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            clsx(
              `
                flex
                items-center
                justify-between
                rounded-xl
                px-4
                py-3.5
                text-sm
                font-semibold
                transition-all
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
              <div className="flex items-center gap-3">
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-sd-teal" />
                )}
                <span>{link.title}</span>
              </div>
              <ArrowRight size={15} />
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}

function ContactDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label="Contact us"
            className="
              group
              relative
              hidden
              h-11
              w-20
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
                group-hover:left-4
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
          {socialLinks.map((social) => (
            <DropdownMenuItem key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex font-semibold w-full"
              >
                <img src={socialIcons[social.id]} alt={social.label} className="mr-2 w-5 h-5" />
                {social.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileSocialRow() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
      <div>
        <div className="text-xs font-semibold">Contact Us</div>
        <div className="mt-0.5 text-[10px] text-muted-foreground">Follow System Development</div>
      </div>
      <div className="flex items-center">
        {socialLinks.map((social, i) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              p-1
              ${i > 0 ? '-ml-2' : ''}
            `}
          >
            <img src={socialIcons[social.id]} alt={social.label} />
          </a>
        ))}
      </div>
    </div>
  );
}

function BrandingNavBar() {
  const navRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const { stop, start } = useLenis();

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
      });
    },
    { scope: navRef }
  );

  // Close mobile menu on route change (overlay must sync with external navigation)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional overlay reset on navigation
    setMobileMenu(false);
  }, [pathname]);

  // Lock background scroll (Lenis + native) while mobile menu is open
  useEffect(() => {
    if (!mobileMenu) return;
    stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenu(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      start();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenu, stop, start]);

  const closeMobileMenu = () => setMobileMenu(false);

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
      <div className="flex relative w-full items-center justify-between px-6 py-2 xl:px-8">
        {/* Logo */}
        <SdLogo />
        {/* Desktop Navigation */}
        <DesktopNavLinks />
        {/* Right Controls */}
        <div className="ml-auto flex items-center gap-3">
          <ContactDropdown />
          <ThemeToggleDesktop theme={theme} setTheme={setTheme} />

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

          <button
            type="button"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            aria-expanded={mobileMenu}
            aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
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
            {mobileMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenu && (
          <div
            className="
              absolute
              left-0
              top-full
              z-40
              flex
              w-full
              max-h-[calc(100dvh-60px)]
              flex-col
              border-t
              border-border
              bg-background/95
              px-6
              py-5
              shadow-xl
              overflow-y-auto
              backdrop-blur-xl
              xl:hidden
            "
          >
            {/* Navigation */}
            <MobileNavLinks onNavigate={closeMobileMenu} />

            {/* Divider */}
            <div className="my-5 h-px bg-border" />

            {/* Bottom controls */}
            <div className="flex flex-col gap-3">
              <MobileSocialRow />
              <ThemeToggleMobile theme={theme} setTheme={setTheme} />
              <NavLink
                to="/intakes"
                onClick={closeMobileMenu}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-primary
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-primary-foreground
                  shadow-sm
                  transition
                  hover:bg-primary/90
                "
              >
                Explore Intakes
                <ArrowRight size={17} />
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default BrandingNavBar;
