import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

export function useProjectStack(count: number, filter: string) {
  const listRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const reducedMotion = useReducedMotion();
  const [cardsFit, setCardsFit] = useState(true);
  const enabled = count > 1 && cardsFit && !reducedMotion;

  useEffect(() => {
    const cards = projectRefs.current.slice(0, count).filter((card): card is HTMLAnchorElement => card !== null);
    let frame = 0;
    let disposed = false;
    const measure = () => {
      frame = 0;
      if (disposed) return;
      const height = window.visualViewport?.height ?? window.innerHeight;
      const baseTop = window.innerWidth >= 1024 ? clamp(window.innerHeight * 0.085, 86.4, 108.8) : 80;
      // Natural height, not transformed bounds: scaling must never change the fit decision.
      setCardsFit(cards.every((card, index) => card.offsetHeight + baseTop + Math.min(index, 4) * 12 + 16 <= height));
    };
    const schedule = () => { if (!disposed && !frame) frame = requestAnimationFrame(measure); };
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
    cards.forEach(card => observer?.observe(card));
    schedule();
    void document.fonts?.ready.then(schedule);
    window.addEventListener('resize', schedule);
    window.visualViewport?.addEventListener('resize', schedule);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('resize', schedule);
      window.visualViewport?.removeEventListener('resize', schedule);
    };
  }, [count, filter]);

  useEffect(() => {
    const list = listRef.current;
    const cards = projectRefs.current.slice(0, count).filter((card): card is HTMLAnchorElement => card !== null);
    let frame = 0;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let nearViewport = true;
    let stickyTops: number[] = [];
    const reset = () => cards.forEach(card => {
      card.style.setProperty('--stack-scale', '1');
      card.style.setProperty('--stack-tilt', '0deg');
      card.style.setProperty('--stack-recede-y', '0px');
      card.style.willChange = 'auto';
    });
    reset();

    const revealObserver = !reducedMotion && typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.entered = 'true';
          revealObserver?.unobserve(entry.target);
        }
      }), { rootMargin: '80px', threshold: 0.02 }) : null;
    cards.forEach(card => {
      card.dataset.entered = reducedMotion || !revealObserver || card.getBoundingClientRect().top < window.innerHeight ? 'true' : 'false';
      if (card.dataset.entered === 'false') revealObserver?.observe(card);
    });

    if (!enabled || !list) return () => revealObserver?.disconnect();

    const measureTops = () => {
      stickyTops = cards.map((card, index) => {
        const top = Number.parseFloat(getComputedStyle(card).top);
        return Number.isFinite(top) ? top : 88 + Math.min(index, 4) * 12;
      });
    };
    const update = () => {
      frame = 0;
      const entryStart = window.innerHeight * 0.9;
      const rects = cards.map(card => card.getBoundingClientRect());
      const arrivals = rects.map((rect, index) => index === 0 ? 0 : clamp((entryStart - rect.top) / Math.max(entryStart - stickyTops[index], 1)));
      cards.forEach((card, index) => {
        const depth = clamp(arrivals.slice(index + 1).reduce((sum, progress) => sum + progress, 0), 0, 4);
        card.style.setProperty('--stack-scale', (1 - depth * 0.012).toFixed(4));
        card.style.setProperty('--stack-tilt', `${(depth * 0.45).toFixed(3)}deg`);
        card.style.setProperty('--stack-recede-y', `${(depth * -4).toFixed(2)}px`);
        card.style.willChange = rects[index].top < window.innerHeight && rects[index].bottom > 0 ? 'transform' : 'auto';
      });
    };
    const schedule = () => {
      if (!nearViewport) return;
      if (!frame) frame = requestAnimationFrame(update);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => cards.forEach(card => { card.style.willChange = 'auto'; }), 180);
    };
    const onResize = () => { measureTops(); schedule(); };
    const visibilityObserver = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(([entry]) => {
      nearViewport = entry.isIntersecting;
      if (nearViewport) schedule();
    }, { rootMargin: '200px' }) : null;
    visibilityObserver?.observe(list);
    measureTops();
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(idleTimer);
      visibilityObserver?.disconnect();
      revealObserver?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      reset();
    };
  }, [count, filter, enabled, reducedMotion]);

  return { listRef, projectRefs, enabled };
}
