import { NavLink } from 'react-router';
import { Terminal, Code2, PlayCircle, Globe } from 'lucide-react';
import SdLogo from './SdLogo';
import { academicPathways, departmentLinks, technicalTracks } from '../constants';

function BrandingFooter() {
  return (
    <footer className="w-full border-t border-border bg-background transition-colors">
      {/* ================= Main Footer ================= */}
      <div className="mx-auto max-w-[1920px] px-8 py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ================= Brand Section ================= */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <SdLogo />

            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Pioneering software engineering talent across Egypt through immersive industry-focused
              education, hands-on production capstones, and nationwide community hubs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: Terminal, title: 'Terminal' },
                { icon: Code2, title: 'Code Repository' },
                { icon: PlayCircle, title: 'Community Videos' },
                { icon: Globe, title: 'National Hubs' },
              ].map((item) => (
                <a
                  key={item.title}
                  href="#"
                  title={item.title}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl
                    bg-muted
                    text-muted-foreground
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-sd-red
                    hover:text-white
                  "
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= Academic Pathways ================= */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="text-lg font-bold text-foreground">Academic Pathways</h4>

            <ul className="space-y-3">
              {academicPathways.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-sd-red"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Technical Tracks ================= */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="text-lg font-bold text-foreground">Technical Tracks</h4>

            <ul className="space-y-3">
              {technicalTracks.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-sd-red"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Department & Hubs ================= */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="text-lg font-bold text-foreground">Department & Hubs</h4>

            <ul className="space-y-3">
              {departmentLinks.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-sd-red"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= Bottom Footer ================= */}
      <div className="border-t border-border bg-muted/40 backdrop-blur-sm">
        <div
          className="
            mx-auto flex max-w-[1920px]
            flex-col items-center justify-between
            gap-4 px-8 py-5
            text-xs text-muted-foreground
            md:flex-row lg:px-10
          "
        >
          {/* Copyright */}
          <p>
            © 2026 Information Technology Institute (ITI) • Software Development Department • MCIT
            Egypt.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Admission
            </a>

            <span className="font-mono text-[11px] tracking-wide text-sd-red">
              Crafted for Egypt&apos;s Next Gen Engineers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BrandingFooter;
