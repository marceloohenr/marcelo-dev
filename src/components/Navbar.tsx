import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { getScrollBehavior } from '../utils/motion';

const MENU_ITEMS = [
  { label: 'Início', id: 'hero' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
] as const;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hashSectionId = window.location.hash.replace('#', '');
    if (!hashSectionId) {
      return;
    }

    const sectionExists = MENU_ITEMS.some((item) => item.id === hashSectionId);
    if (sectionExists) {
      setActiveSection(hashSectionId);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hashSectionId = window.location.hash.replace('#', '');
      const sectionExists = MENU_ITEMS.some((item) => item.id === hashSectionId);

      if (sectionExists) {
        setActiveSection(hashSectionId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sectionElements = MENU_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (element): element is HTMLElement => Boolean(element)
    );

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-38% 0px -50% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: getScrollBehavior() });
      setActiveSection(id);
      window.history.replaceState(null, '', `#${id}`);
      setIsMobileMenuOpen(false);
    }
  };

  const handleSectionLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para desenvolvimento de site.'
  )}`;

  return (
    <nav
      aria-label="Navegação principal"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-800/90 bg-bg-surface/95 shadow-soft backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="content-shell">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#hero"
            onClick={(event) => handleSectionLinkClick(event, 'hero')}
            className="focus-ring text-lg font-extrabold tracking-tight text-text-primary transition-colors hover:text-brand-400 md:text-xl"
          >
            Marcelo Henrique
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleSectionLinkClick(event, item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-5 py-2.5 text-caption"
            >
              Solicitar Orçamento
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-button border border-slate-700 bg-bg-elevated text-text-secondary transition-colors hover:text-brand-400 md:hidden"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 top-16 z-0 bg-slate-950/70 backdrop-blur-[1px] md:hidden"
          />

          <div id="menu-mobile" className="relative z-10 border-t border-slate-800/90 bg-bg-surface/98 backdrop-blur md:hidden">
            <div className="content-shell py-6">
              <div className="flex flex-col gap-2">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(event) => handleSectionLinkClick(event, item.id)}
                    className={`nav-link w-full rounded-button px-4 py-3 text-left ${
                      activeSection === item.id ? 'bg-brand-600/10 nav-link-active' : ''
                    }`}
                    aria-current={activeSection === item.id ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-2 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
