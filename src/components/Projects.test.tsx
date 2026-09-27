import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import About from './About';
import Projects from './Projects';
import { projects } from '../data/projects';

afterEach(cleanup);

describe('Projects', () => {
  it('replaces the dated timeline with one visual showcase while keeping the legacy anchor', () => {
    const { container } = render(<><About /><Projects /></>);

    expect(screen.getByRole('heading', { name: 'Projetos que transformam ideias em produtos.' })).toBeInTheDocument();
    expect(container.querySelectorAll('time, .timeline')).toHaveLength(0);
    expect(screen.queryByText(/trajetória/i)).not.toBeInTheDocument();
    expect(container.querySelector('#projetos #experiencia')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Abrir projeto/i })).toHaveLength(projects.length);

    projects.forEach(project => {
      const card = screen.getByRole('link', { name: `Abrir projeto ${project.title} em nova aba` });
      expect(card).toHaveAttribute('href', project.projectUrl);
      expect(within(card).getByRole('img')).toHaveAttribute('src', project.previewImage);
      expect(within(card).getByText(project.focus)).toBeInTheDocument();
      expect(within(card).getByText('Minha atuação')).toBeInTheDocument();
      project.technologies.forEach(technology => expect(within(card).getByText(technology)).toBeInTheDocument());
    });
  });

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
    expect(screen.getByRole('status')).toHaveTextContent('5 de 5 projetos');
    expect(projectLinks[0].style.getPropertyValue('--stack-offset')).toBe('0px');
    expect(projectLinks[1].style.getPropertyValue('--stack-offset')).toBe('12px');
    expect(projectLinks[0].style.getPropertyValue('--stack-scale')).toBe('1');
    expect(projectLinks[4].style.getPropertyValue('--stack-scale')).toBe('1');
    expect(projectLinks.every((link) => link.parentElement?.classList.contains('project-stack-list')))
      .toBe(true);

    fireEvent.click(screen.getByRole('button', { name: /Portf\u00F3lio/i }));

    expect(screen.getByRole('heading', { name: 'Gabriela Mendes' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ronaldo Le\u00E3o' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Cosme Ra\u00E7\u00F5es' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Nuvle' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Monop\u00F3lio Pods' })).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Abrir projeto/i })).toHaveLength(2);
    expect(screen.getByRole('status')).toHaveTextContent('2 de 5 projetos');

    fireEvent.click(screen.getByRole('button', { name: /Catálogos/i }));
    expect(screen.getByRole('status')).toHaveTextContent('3 de 5 projetos');
    fireEvent.click(screen.getByRole('button', { name: /Todos/i }));
    expect(screen.getAllByRole('link', { name: /Abrir projeto/i })).toHaveLength(5);
  });
});
