import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

export const useRevealOnScroll = <T extends HTMLElement>(
  threshold = 0.14,
  rootMargin = '0px 0px -12% 0px'
) => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { ref, isVisible };
};
