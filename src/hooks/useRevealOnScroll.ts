import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export const useRevealOnScroll = <T extends HTMLElement>(
  threshold = 0.14,
  rootMargin = '0px 0px -12% 0px'
) => {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    // Observa o elemento e libera a animação só quando ele entra na área visível.
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
  }, [isVisible, reducedMotion, rootMargin, threshold]);

  return { ref, isVisible };
};
