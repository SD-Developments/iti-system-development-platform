import { useRef } from 'react';
import { NavLink } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Search, ChevronDown, Command, ArrowRight, Menu } from 'lucide-react';
import { bandingNavLinks } from '../constants';
import clsx from 'clsx';
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from './ui/avatar';
import logo from '../assets/images/iti_sd_logo.svg';
import avatar1 from '../assets/images/avatar1.png';

function BrandingNavBar() {
  const navRef = useRef(null);

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
        sticky top-0 z-50
        w-full
        border-b border-border/70
        bg-background/95
        backdrop-blur-md
      "
    >
      <div className="flex py-2 w-full items-center px-6 xl:px-8">
        {/* ================= Logo ================= */}
        <NavLink to="/" className="flex shrink-0 items-center gap-1">
          <img src={logo} className="w-16" alt="ITI Logo" />

          {/* Logo - بدون تغيير الشكل */}
          <p className="flex-col justify-start items-center border-l-3 pl-2 text-xl font-semibold leading-5 border-gray-400">
            <span className="block text-sd-red">ITI</span>
            <span className="block text-muted-foreground">System</span>
            <span className="block">Development</span>
          </p>
        </NavLink>

        {/* ================= Desktop Navigation ================= */}

        <ul className="ml-8 hidden items-center gap-1 xl:flex">
          {bandingNavLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  clsx(
                    `relative flex items-center
                    whitespace-nowrap
                    rounded-lg
                    px-3 py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-200`,
                    {
                      'bg-primary/10 text-primary': isActive,
                      'text-muted-foreground hover:bg-muted hover:text-foreground': !isActive,
                    }
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />}

                    {link.title}
                  </>
                )}
              </NavLink>
            </li>
          ))}

          {/* ================= More ================= */}

          <li>
            <button
              type="button"
              className="
                flex items-center gap-1
                rounded-lg
                px-3 py-2

                text-sm
                font-medium
                text-muted-foreground

                transition-all
                duration-200

                hover:bg-muted
                hover:text-foreground
              "
            >
              More
              <ChevronDown size={16} />
            </button>
          </li>
        </ul>

        {/* ================= Right Side ================= */}

        <div className="ml-auto flex items-center gap-3">
          {/* Search */}
          <div
            className="
              hidden
              h-11
              w-57.5
              shrink-0
              items-center
              gap-2
              rounded-xl
              border
              border-border
              bg-muted/40
              px-3
              lg:flex
            "
          >
            <Search size={18} className="shrink-0 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search..."
              className="
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-sm
                text-foreground
                outline-none
                placeholder:text-muted-foreground
              "
            />

            <span
              className="
                flex
                shrink-0
                items-center
                gap-1
                rounded-md
                border
                border-border
                bg-background
                px-1.5
                py-1
                text-[10px]
                text-muted-foreground
              "
            >
              <Command size={11} />K
            </span>
          </div>

          {/* Profile */}
          {/* <button
            type="button"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border-2
              border-primary/20
              bg-muted
              text-sm
              font-semibold
              transition-all
              hover:border-primary
              hover:scale-105
            "
          >
            SD
          </button> */}
          <Avatar>
            <AvatarImage src={avatar1} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>

          {/* Explore Intakes */}
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

              hover:bg-primary/90
              hover:shadow-md

              xl:flex
            "
          >
            Explore Intakes
            <ArrowRight size={17} />
          </NavLink>

          {/* Mobile Menu */}

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
