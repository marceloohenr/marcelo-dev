import { useSyncExternalStore } from 'react';
import { prefersReducedMotion } from '../utils/motion';

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

export const useReducedMotion = () => useSyncExternalStore(subscribe, prefersReducedMotion, () => true);
