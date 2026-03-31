import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('filters visible projects by category', () => {
    render(<Projects />);

    expect(screen.getByText('Monop\u00F3lio Pods')).toBeInTheDocument();
    expect(screen.getByText('Cosme Ra\u00E7\u00F5es')).toBeInTheDocument();
    expect(screen.getByText('Nuvle')).toBeInTheDocument();
    expect(screen.getByText('Gabriela Mendes')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Sistemas/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Portf\u00F3lio/i }));

    expect(screen.getByText('Gabriela Mendes')).toBeInTheDocument();
    expect(screen.queryByText('Cosme Ra\u00E7\u00F5es')).not.toBeInTheDocument();
    expect(screen.queryByText('Nuvle')).not.toBeInTheDocument();
    expect(screen.queryByText('Monop\u00F3lio Pods')).not.toBeInTheDocument();
  });
});
