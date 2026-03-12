import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('filters visible projects by category', () => {
    render(<Projects />);

    expect(screen.getByText('Cosme Rações')).toBeInTheDocument();
    expect(screen.getByText('Nuvle')).toBeInTheDocument();
    expect(screen.getByText('Gabriela Mendes')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Sistemas/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Portfólio/i }));

    expect(screen.getByText('Gabriela Mendes')).toBeInTheDocument();
    expect(screen.queryByText('Cosme Rações')).not.toBeInTheDocument();
    expect(screen.queryByText('Nuvle')).not.toBeInTheDocument();
  });
});
