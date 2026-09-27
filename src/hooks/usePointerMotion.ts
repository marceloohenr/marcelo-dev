import { useEffect, type RefObject } from 'react';

export function usePointerMotion(ref: RefObject<HTMLDivElement>, enabled: boolean) {
  useEffect(() => {
    const field = ref.current;
    if (!field || !enabled) return;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let hovered: HTMLElement | null = null;
    let previous: HTMLElement | null = null;

    const clearSpotlight = (element: HTMLElement | null) => {
      element?.style.removeProperty('--spot-x');
      element?.style.removeProperty('--spot-y');
      element?.removeAttribute('data-pointer-active');
    };
    const update = () => {
      frame = 0;
      // Read geometry first; all style writes share one frame, without React renders.
      const rect = hovered?.isConnected ? hovered.getBoundingClientRect() : null;
      const pointerX = finePointer.matches ? (x / window.innerWidth - 0.5) * 28 : 0;
      const pointerY = finePointer.matches ? (y / window.innerHeight - 0.5) * 20 : 0;
      field.style.setProperty('--pointer-x', `${pointerX.toFixed(1)}px`);
      field.style.setProperty('--pointer-y', `${pointerY.toFixed(1)}px`);
      field.style.setProperty('--scroll-drift', `${(-Math.min(window.scrollY * 0.018, 110)).toFixed(1)}px`);
      if (previous !== hovered) clearSpotlight(previous);
      if (hovered && rect) {
        hovered.style.setProperty('--spot-x', `${(x - rect.left).toFixed(1)}px`);
        hovered.style.setProperty('--spot-y', `${(y - rect.top).toFixed(1)}px`);
        hovered.dataset.pointerActive = 'true';
      }
      previous = hovered;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType === 'touch') return;
      x = event.clientX;
      y = event.clientY;
      hovered = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-spotlight]') : null;
      schedule();
    };
    const resetPointer = () => {
      x = window.innerWidth / 2;
      y = window.innerHeight / 2;
      hovered = null;
      schedule();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', resetPointer);
    window.addEventListener('blur', resetPointer);
    document.documentElement.addEventListener('pointerleave', resetPointer);
    finePointer.addEventListener('change', resetPointer);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', resetPointer);
      window.removeEventListener('blur', resetPointer);
      document.documentElement.removeEventListener('pointerleave', resetPointer);
      finePointer.removeEventListener('change', resetPointer);
      clearSpotlight(previous);
      field.style.removeProperty('--pointer-x');
      field.style.removeProperty('--pointer-y');
      field.style.removeProperty('--scroll-drift');
    };
  }, [enabled, ref]);
}
