import { NavLink } from 'react-router';

import { Terminal, Code2, PlayCircle, Globe } from 'lucide-react';
import SdLogo from './SdLogo';
import { academicPathways, departmentLinks, technicalTracks } from '../constants';

function BrandingFooter() {
  return (
    <footer className="w-full border-t border-[#dae2fd] bg-white">
      {/* ================= Main Footer ================= */}
      <div className="mx-auto max-w-[1920px] px-8 py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ================= Brand Section ================= */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* Brand */}
            <NavLink to="/" className="flex w-fit items-center gap-3">
              <SdLogo></SdLogo>
            </NavLink>

            {/* Description */}
            <p className="max-w-md text-sm leading-7 text-[#545f73]">
              Pioneering software engineering talent across Egypt through immersive industry-focused
              education, hands-on production capstones, and nationwide community hubs.
            </p>

            {/* Social / Platform Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#"
                title="Terminal"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#f2f3ff]
                  text-[#545f73]
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:bg-[#87152b]
                  hover:text-white
                "
              >
                <Terminal size={18} />
              </a>

              <a
                href="#"
                title="Code Repository"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#f2f3ff]
                  text-[#545f73]
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:bg-[#87152b]
                  hover:text-white
                "
              >
                <Code2 size={18} />
              </a>

              <a
                href="#"
                title="Community Videos"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#f2f3ff]
                  text-[#545f73]
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:bg-[#87152b]
                  hover:text-white
                "
              >
                <PlayCircle size={18} />
              </a>

              <a
                href="#"
                title="National Hubs"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#f2f3ff]
                  text-[#545f73]
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:bg-[#87152b]
                  hover:text-white
                "
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* ================= Academic Pathways ================= */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="text-lg font-bold text-[#0f172a]">Academic Pathways</h4>

            <ul className="space-y-3">
              {academicPathways.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className="
                      text-sm
                      text-[#545f73]
                      transition-colors duration-200
                      hover:text-[#87152b]
                    "
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Technical Tracks ================= */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="text-lg font-bold text-[#0f172a]">Technical Tracks</h4>

            <ul className="space-y-3">
              {technicalTracks.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className="
                      text-sm
                      text-[#545f73]
                      transition-colors duration-200
                      hover:text-[#87152b]
                    "
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Department & Hubs ================= */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="text-lg font-bold text-[#0f172a]">Department & Hubs</h4>

            <ul className="space-y-3">
              {departmentLinks.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className="
                      text-sm
                      text-[#545f73]
                      transition-colors duration-200
                      hover:text-[#87152b]
                    "
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
      <div className="border-t border-[#eaedff] bg-[#faf8ff]">
        <div
          className="
            mx-auto flex
            max-w-[1920px]
            flex-col
            items-center
            justify-between
            gap-4
            px-8
            py-5
            text-xs
            text-[#545f73]
            md:flex-row
            lg:px-10
          "
        >
          {/* Copyright */}
          <p>
            © 2026 Information Technology Institute (ITI) • Software Development Department. MCIT
            Egypt.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="#"
              className="
                transition-colors
                hover:text-[#0f172a]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-colors
                hover:text-[#0f172a]
              "
            >
              Terms of Admission
            </a>

            <span className="font-mono text-[11px] tracking-wide text-[#87152b]">
              Crafted for Egypt&apos;s Next Gen Engineers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BrandingFooter;
