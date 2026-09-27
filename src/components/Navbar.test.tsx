import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import Navbar from './Navbar';
import { navigationItems } from '../data/site';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  window.history.replaceState(null, '', '/');
});

function renderNavigation() {
  return render(<><Navbar /><main>{navigationItems.map(item => <section key={item.id} id={item.id} tabIndex={-1}>{item.label}</section>)}</main></>);
}

describe('Navbar', () => {
  it('resolves an incoming fragment after the React target has mounted', async () => {
    window.history.replaceState(null, '', '/#experiencia');
    const scrollIntoView = vi.fn();
    render(<><Navbar /><main><div id="experiencia" ref={element => { if (element) element.scrollIntoView = scrollIntoView; }} /></main></>);

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'instant' }));
  });

  it('does not replace a scroll position already restored by the browser', async () => {
    window.history.replaceState(null, '', '/#experiencia');
    vi.stubGlobal('scrollY', 600);
    const scrollIntoView = vi.fn();
    const frame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => { callback(0); return 1; });
    render(<><Navbar /><main><div id="experiencia" ref={element => { if (element) element.scrollIntoView = scrollIntoView; }} /></main></>);

    await waitFor(() => expect(frame).toHaveBeenCalled());
    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it('traps focus in the mobile menu, closes with Escape and restores focus and scrolling', () => {
    renderNavigation();
    const trigger = screen.getByRole('button', { name: 'Abrir menu' });
    trigger.focus();
    fireEvent.click(trigger);
    const dialog = screen.getByRole('dialog');
    const close = within(dialog).getByRole('button', { name: 'Fechar menu' });
    expect(close).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.querySelector('main')?.inert).toBe(true);
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(within(dialog).getByRole('link', { name: /Contato/ })).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(close).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
    expect(document.querySelector('main')?.inert).not.toBe(true);
  });

  it('keeps native anchor links and focuses the destination after selecting a mobile item', () => {
    renderNavigation();
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
    const projectsLink = within(screen.getByRole('dialog')).getByRole('link', { name: /Projetos/ });
    expect(projectsLink).toHaveAttribute('href', '#projetos');
    fireEvent.click(projectsLink);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.getElementById('projetos')).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
  });
});
