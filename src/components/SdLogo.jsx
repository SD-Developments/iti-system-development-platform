import { NavLink } from 'react-router';
import lightLogo from '../assets/images/logos/iti_sd_logo.png';
import darkLogo from '../assets/images/logos/iti_sd_logo_dark.png';
import useTheme from '@/hooks/useTheme';
const SdLogo = () => {
  const { theme } = useTheme();
  return (
    <>
      <NavLink to="/" className="flex shrink-0 items-center gap-1">
        <img src={theme === 'dark' ? darkLogo : lightLogo} className="w-16" alt="ITI Logo" />
        <p className="flex-col justify-start items-center border-s-3 ps-2 text-xl font-semibold leading-5 border-gray-400">
          <span className="block text-sd-red">ITI</span>
          <span className="block text-muted-foreground">System</span>
          <span className="block">Development</span>
        </p>
      </NavLink>
    </>
  );
};

export default SdLogo;
