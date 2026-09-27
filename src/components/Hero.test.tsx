import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Hero from './Hero';
import profilePortrait from '../assets/marcelo-perfil.webp';
import illustratedLogo from '../assets/mh-avatar-seal.webp';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';

afterEach(cleanup);

describe('Hero', () => {
  it('highlights the real portrait, retains the illustrated logo and keeps the primary actions', () => {
    const { container } = render(<Hero />);
    const portrait = screen.getByRole('img', { name: 'Retrato de Marcelo Henrique' });
    expect(portrait).toHaveAttribute('src', profilePortrait);
    expect(portrait).toHaveAttribute('loading', 'eager');
    expect(portrait).toHaveAttribute('width', '640');
    expect(portrait).toHaveAttribute('height', '853');
    expect(screen.getByRole('img', { name: 'Logo ilustrada MH de Marcelo Henrique' })).toHaveAttribute('src', illustratedLogo);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('DesenvolvedorFull Stack.');
    expect(screen.getByRole('link', { name: /Conversar sobre meu projeto/ })).toHaveAttribute('href', buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage));
    expect(screen.getByRole('link', { name: /Ver projetos/ })).toHaveAttribute('href', '#projetos');
    expect(screen.getByRole('link', { name: /Conheça meu trabalho/ })).toHaveAttribute('href', '#sobre');
  });
});
