export const getScrollBehavior = (): ScrollBehavior => {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return prefersReducedMotion ? 'auto' : 'smooth';
};
