export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getScrollBehavior = (): ScrollBehavior => {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  return prefersReducedMotion() ? 'auto' : 'smooth';
};

export const scrollToSection = (id: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: getScrollBehavior(),
    block: 'start',
  });
};
