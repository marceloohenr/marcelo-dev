import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('shows projects in a stacked scroll showcase and filters by category', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: 'Monop\u00F3lio Pods' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Cosme Ra\u00E7\u00F5es' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nuvle' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Gabriela Mendes' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ronaldo Le\u00E3o' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Sistemas/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Projeto seguinte/i })).not.toBeInTheDocument();
    const projectLinks = screen.getAllByRole('link', { name: /Abrir projeto/i });

    expect(projectLinks).toHaveLength(5);
    expect(projectLinks[0].style.getPropertyValue('--stack-offset')).toBe('0px');
    expect(projectLinks[1].style.getPropertyValue('--stack-offset')).toBe('12px');
    expect(projectLinks.every((link) => link.parentElement?.classList.contains('project-stack-list')))
      .toBe(true);

    fireEvent.click(screen.getByRole('button', { name: /Portf\u00F3lio/i }));

    expect(screen.getByRole('heading', { name: 'Gabriela Mendes' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ronaldo Le\u00E3o' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Cosme Ra\u00E7\u00F5es' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Nuvle' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Monop\u00F3lio Pods' })).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Abrir projeto/i })).toHaveLength(2);
  });
});
