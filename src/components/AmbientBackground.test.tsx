import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AmbientBackground from './AmbientBackground';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

function mockMedia() {
  let reduced = false;
  const motion = new EventTarget() as MediaQueryList;
  const pointer = new EventTarget() as MediaQueryList;
  Object.defineProperty(motion, 'matches', { get: () => reduced });
  Object.defineProperty(pointer, 'matches', { value: true });
  vi.spyOn(window, 'matchMedia').mockImplementation(query => query.includes('reduced-motion') ? motion : pointer);
  return {
    motion,
    pointer,
    setReduced(value: boolean) { reduced = value; motion.dispatchEvent(new Event('change')); },
  };
}

describe('ambient motion', () => {
  it('keeps the decoration out of the accessibility tree and runs without a pause button', () => {
    mockMedia();
    const { container } = render(<AmbientBackground />);
    const field = container.querySelector('.ambient-field');
    expect(field).toHaveAttribute('aria-hidden', 'true');
    expect(field).toHaveAttribute('data-running', 'true');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('responds live to the system reduced motion preference', () => {
    const media = mockMedia();
    const { container } = render(<AmbientBackground />);
    act(() => media.setReduced(true));
    expect(container.querySelector('.ambient-field')).toHaveAttribute('data-running', 'false');
    act(() => media.setReduced(false));
    expect(container.querySelector('.ambient-field')).toHaveAttribute('data-running', 'true');
  });

  it('suspends work in a hidden tab and resumes when visible', () => {
    mockMedia();
    let hidden = false;
    vi.spyOn(document, 'hidden', 'get').mockImplementation(() => hidden);
    const { container } = render(<AmbientBackground />);
    act(() => { hidden = true; document.dispatchEvent(new Event('visibilitychange')); });
    expect(container.querySelector('.ambient-field')).toHaveAttribute('data-running', 'false');
    act(() => { hidden = false; document.dispatchEvent(new Event('visibilitychange')); });
    expect(container.querySelector('.ambient-field')).toHaveAttribute('data-running', 'true');
  });

  it('updates the pointer light in a frame, ignores touch and clears effects and subscriptions', async () => {
    const media = mockMedia();
    const subscribe = vi.spyOn(media.pointer, 'addEventListener');
    const unsubscribe = vi.spyOn(media.pointer, 'removeEventListener');
    const { container, unmount } = render(<><AmbientBackground /><article data-spotlight>Card</article></>);
    const card = screen.getByText('Card');
    const move = (pointerType: string) => {
      const event = new MouseEvent('pointermove', { bubbles: true, clientX: 100, clientY: 150 });
      Object.defineProperty(event, 'pointerType', { value: pointerType });
      fireEvent(card, event);
    };
    move('touch');
    expect(card).not.toHaveAttribute('data-pointer-active');
    move('mouse');
    await waitFor(() => expect(card).toHaveAttribute('data-pointer-active', 'true'));
    expect(card.style.getPropertyValue('--spot-x')).toBe('100.0px');
    const field = container.querySelector<HTMLElement>('.ambient-field');
    expect(field?.style.getPropertyValue('--pointer-x')).not.toBe('');
    act(() => media.setReduced(true));
    expect(card).not.toHaveAttribute('data-pointer-active');
    expect(card.style.getPropertyValue('--spot-x')).toBe('');
    expect(field?.style.getPropertyValue('--pointer-x')).toBe('');
    act(() => media.setReduced(false));
    move('mouse');
    await waitFor(() => expect(card).toHaveAttribute('data-pointer-active', 'true'));
    unmount();
    expect(card).not.toHaveAttribute('data-pointer-active');
    expect(unsubscribe).toHaveBeenCalledTimes(subscribe.mock.calls.length);
  });
});
