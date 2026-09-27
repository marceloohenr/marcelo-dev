import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigationItems, siteMetadata } from '../data/site';
import { contactInfo } from '../data/contact';
import { buildWhatsappUrl } from '../utils/contact';
import BrandMark from './BrandMark';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const desktopIds = new Set(['sobre', 'stack', 'projetos', 'servicos', 'contato']);

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<string | null>(null);

  useEffect(() => {
    const initialHash = window.location.hash;
    if (!initialHash) return;
    let id: string;
    try {
      id = decodeURIComponent(initialHash.slice(1));
    } catch {
      return;
    }
    let disposed = false;
    let frame = 0;
    // The browser may resolve a fragment before React has mounted its target.
    const alignInitialAnchor = () => {
      if (disposed) return;
      frame = requestAnimationFrame(() => {
        if (window.location.hash === initialHash && window.scrollY === 0) {
          document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
        }
      });
    };
    if (document.fonts) void document.fonts.ready.then(alignInitialAnchor);
    else alignInitialAnchor();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 24);
      const probe = Math.min(window.innerHeight * 0.2, 180);
      const sections = navigationItems
        .map(item => document.getElementById(item.id))
        .filter((element): element is HTMLElement => element !== null);
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= probe);
      setActiveSection(current?.id ?? 'inicio');
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    const background = Array.from(document.querySelectorAll<HTMLElement>('main, footer, .floating-whatsapp, .navbar-bar'));
    const inertStates = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    panel?.querySelector<HTMLButtonElement>('button')?.focus();
    const closeOnDesktop = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setIsOpen(false); }
      if (event.key !== 'Tab' || !panel) return;
      const elements = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) {
        event.preventDefault(); first?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      background.forEach((element, index) => { element.inert = inertStates[index]; });
      document.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', closeOnDesktop);
      const destination = destinationRef.current;
      destinationRef.current = null;
      if (destination) document.getElementById(destination)?.focus({ preventScroll: true });
      else trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="content-shell navbar-bar">
        <a className="brand-link" href="#inicio" aria-label={t('Marcelo Henrique, início')}><BrandMark /><span className="nav-brand-name">Marcelo Henrique<small>FULL STACK DEVELOPER</small></span></a>
        <nav aria-label={t('Navegação principal')} className="navbar-desktop">
          {navigationItems.filter(item => desktopIds.has(item.id)).map(item => <a key={item.id} href={`#${item.id}`} className="nav-link" aria-current={activeSection === item.id ? 'location' : undefined}>{t(item.label)}</a>)}
        </nav>
        <div className="navbar-actions"><LanguageSwitcher /><a href={buildWhatsappUrl(contactInfo.whatsappNumber, t(siteMetadata.budgetMessage))} target="_blank" rel="noopener noreferrer" className="nav-cta">{t('Vamos conversar')} <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button ref={triggerRef} type="button" className="menu-trigger" aria-label={t('Abrir menu')} aria-expanded={isOpen} aria-controls="menu-mobile" onClick={() => setIsOpen(true)}><Menu size={22} aria-hidden="true" /></button></div>
      </div>
      {isOpen && <div className="mobile-menu-backdrop" onClick={() => setIsOpen(false)}>
        <div ref={panelRef} id="menu-mobile" role="dialog" aria-modal="true" aria-labelledby="menu-title" className="mobile-menu-panel" onClick={event => event.stopPropagation()}>
          <div className="mobile-menu-top"><p id="menu-title" className="eyebrow">{t('Explore o portfólio')}</p><button className="menu-trigger" type="button" aria-label={t('Fechar menu')} onClick={() => setIsOpen(false)}><X size={24} aria-hidden="true" /></button></div>
          <nav aria-label={t('Navegação mobile')}>{navigationItems.map((item, index) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} onClick={() => { destinationRef.current = item.id; setIsOpen(false); }}><span>0{index + 1}</span>{t(item.label)}<ArrowUpRight size={18} aria-hidden="true" /></a>)}</nav>
          <p className="mobile-menu-caption">Marcelo Henrique · {t('Brasil e mundo')}</p>
        </div>
      </div>}
    </header>
  );
}
