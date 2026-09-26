import { LenisContext } from '@/contexts/constents';
import { useContext } from 'react';

export const useLenis = () => {
  return useContext(LenisContext);
};
