import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { LanguageContext } from './LanguageContext';
import { getLanguage, translate } from './language';
import { supportedLanguages } from './locales';
import { serviceFaq } from '../data/serviceFaq';
import { getSeo, renderSeoHead } from '../data/seo';
import { englishMessages } from './messages';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { processSteps } from '../data/profile';

afterEach(() => { cleanup(); window.history.replaceState(null, '', '/'); });

describe('Multilingual pages', () => {
  it('detects only the English path and preserves query and fragment when switching', () => {
    expect(getLanguage('/en/')).toBe('en');
    expect(getLanguage('/en')).toBe('en');
    expect(getLanguage('/english')).toBe('pt');
    expect(supportedLanguages).toEqual(['pt', 'en']);
    window.history.replaceState(null, '', '/?ref=portfolio#projetos');
    const view = render(<LanguageSwitcher />);
    expect(screen.getByRole('link', { name: 'English', hidden: true })).toHaveAttribute('href', '/en/?ref=portfolio#projetos');
    view.rerender(<LanguageContext.Provider value="en"><LanguageSwitcher /></LanguageContext.Provider>);
    expect(screen.getByRole('link', { name: 'Português', hidden: true })).toHaveAttribute('href', '/?ref=portfolio#projetos');
  });

  it('translates all sections, accessible labels, filters and contact messages', () => {
    const { container } = render(<LanguageContext.Provider value="en"><App /></LanguageContext.Provider>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Full StackDeveloper.');
    expect(screen.getByRole('heading', { name: 'Design thinking. A developer’s perspective.' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Technology that serves the idea.' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Landing pages, websites and custom web projects.' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Great work starts with a clear process.' })).toBeInTheDocument();
    expect(within(container.querySelector('#inicio')!).getByRole('link', { name: /Discuss my project/ })).toHaveAttribute('href', expect.stringContaining('Hi%20Marcelo'));
    expect(container.textContent).not.toMatch(/Recife|Pernambuco|Pausar efeitos|Minha atuação|O objetivo|Ver projeto|Todos os direitos/);
    expect(screen.getByRole('status')).toHaveTextContent('5 of 5 projects');
    fireEvent.click(screen.getByRole('button', { name: /Catalogs/ }));
    expect(screen.getByRole('status')).toHaveTextContent('3 of 5 projects');
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('link', { name: /Services/ })).toHaveAttribute('href', '#servicos');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus();
    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://marcelodev.online/en/');
  });

  it('has translations for the descriptions and goals in the existing data', () => {
    const copy = [
      ...projects.flatMap(project => [project.description, project.focus]),
      ...services.flatMap(service => [service.title, service.description]),
      ...processSteps.flatMap(step => [step.title, step.description]),
      ...serviceFaq.flatMap(item => [item.question, item.answer]),
    ];
    copy.forEach(text => expect(englishMessages[text], text).toBeTruthy());
  });

  it('uses self canonicals, reciprocal language links and worldwide service schemas', () => {
    for (const language of supportedLanguages) {
      const seo = getSeo(language);
      expect(seo.alternates.map(link => link.language)).toEqual([...supportedLanguages, 'x-default']);
      const head = renderSeoHead(language);
      expect(head).not.toMatch(/Recife|Pernambuco|geo\.region|name="keywords"|PostalAddress/);
      expect(head).toContain('Worldwide');
      expect(head).toContain('https://ronaldoleaonutri.online/');
      expect(head).toContain('https://monopoliopods.com/');
      expect(head).toContain(`rel="canonical" href="${seo.url}"`);
      expect(seo.meta.filter(item => item.property === 'og:locale')).toHaveLength(1);
      expect(seo.meta.filter(item => item.property === 'og:locale:alternate')).toHaveLength(1);
      expect(head).not.toMatch(/hreflang="(?:es|fr)"/);
    }
  });

  it('keeps translation placeholders intact', () => {
    for (const [portuguese, english] of Object.entries(englishMessages)) {
      expect(english.match(/\{\w+\}/g)?.sort() ?? []).toEqual(portuguese.match(/\{\w+\}/g)?.sort() ?? []);
    }
  });

  it.each(['pt', 'en'] as const)('renders useful service questions in %s with answers in the document', language => {
    const { container } = render(<LanguageContext.Provider value={language}><App /></LanguageContext.Provider>);
    expect(screen.getByRole('heading', { name: translate('Seu próximo projeto, sem dúvidas.', language) })).toBeInTheDocument();
    serviceFaq.forEach(item => {
      expect(screen.getByText(translate(item.question, language))).toBeInTheDocument();
      expect(screen.getByText(translate(item.answer, language))).toBeInTheDocument();
    });
    expect(container.querySelectorAll('.service-faq-list details')).toHaveLength(6);
    expect(document.querySelectorAll('meta[property="og:locale:alternate"]')).toHaveLength(1);
  });

  it('closes the native language picker with Escape and returns focus', () => {
    const { container } = render(<LanguageSwitcher />);
    const details = container.querySelector('details')!;
    details.open = true;
    fireEvent.keyDown(details, { key: 'Escape' });
    expect(details.open).toBe(false);
    expect(details.querySelector('summary')).toHaveFocus();
    details.open = true;
    fireEvent.pointerDown(document.body);
    expect(details.open).toBe(false);
  });
});
