import { NavLink } from 'react-router';
import logo from '../assets/images/iti_sd_logo.svg';
const SdLogo = () => {
  return (
    <>
      <NavLink to="/" className="flex shrink-0 items-center gap-1">
        <img src={logo} className="w-16" alt="ITI Logo" />
        <p className="flex-col justify-start items-center border-l-3 pl-2 text-xl font-semibold leading-5 border-gray-400">
          <span className="block text-sd-red">ITI</span>
          <span className="block text-muted-foreground">System</span>
          <span className="block">Development</span>
        </p>
      </NavLink>
    </>
  );
};

export default SdLogo;
