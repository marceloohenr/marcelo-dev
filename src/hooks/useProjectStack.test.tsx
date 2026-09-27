import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Projects from '../components/Projects';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe('adaptive project stack', () => {
  it('responds to reduced motion changes without losing projects or the selected filter', async () => {
    let reduced = false;
    const query = new EventTarget() as MediaQueryList;
    Object.defineProperty(query, 'matches', { get: () => reduced });
    const subscribe = vi.spyOn(query, 'addEventListener');
    const unsubscribe = vi.spyOn(query, 'removeEventListener');
    vi.spyOn(window, 'matchMedia').mockReturnValue(query);
    const { container, unmount } = render(<Projects />);
    fireEvent.click(screen.getByRole('button', { name: /Portfólio/i }));
    await waitFor(() => expect(container.querySelector('.project-stack-list')).toHaveClass('project-stack-list-layered'));
    act(() => { reduced = true; query.dispatchEvent(new Event('change')); });
    expect(container.querySelector('.project-stack-list')).toHaveClass('project-stack-list-flow');
    expect(screen.getByRole('status')).toHaveTextContent('2 de 5 projetos');
    expect(screen.getAllByRole('link', { name: /Abrir projeto/ })).toHaveLength(2);
    act(() => { reduced = false; query.dispatchEvent(new Event('change')); });
    await waitFor(() => expect(container.querySelector('.project-stack-list')).toHaveClass('project-stack-list-layered'));
    unmount();
    expect(unsubscribe).toHaveBeenCalledTimes(subscribe.mock.calls.length);
  });

  it('uses the natural card height to disable stacking in short viewports and restores it after resize', async () => {
    let cardHeight = 1100;
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(function (this: HTMLElement) {
      return this.classList.contains('project-showcase') ? cardHeight : 0;
    });
    const { container } = render(<Projects />);
    await waitFor(() => expect(container.querySelector('.project-stack-list')).toHaveClass('project-stack-list-flow'));
    expect(screen.getAllByRole('link', { name: /Abrir projeto/ })).toHaveLength(5);
    cardHeight = 300;
    fireEvent(window, new Event('resize'));
    await waitFor(() => expect(container.querySelector('.project-stack-list')).toHaveClass('project-stack-list-layered'));
  });
});
