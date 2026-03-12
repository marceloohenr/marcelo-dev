import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { navigationItems, siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { scrollToSection } from '../utils/motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const budgetUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-38% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSectionLink = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    window.history.replaceState(null, '', `#${sectionId}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Navegação principal"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-bg-base/[0.82] shadow-soft backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="content-shell">
        <div className="flex h-16 items-center gap-3 md:h-[4.75rem] md:gap-4">
          <a
            href="#inicio"
            onClick={(event) => handleSectionLink(event, 'inicio')}
            className="focus-ring flex min-w-0 flex-1 items-center gap-3 rounded-button px-1 py-1 md:flex-none md:px-2"
            aria-label="Ir para o início"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-300/[0.35] bg-brand-400/[0.12] font-display text-body font-bold text-brand-300 shadow-brand">
              MH
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-[1rem] font-semibold text-text-primary">
                {siteMetadata.personName}
              </span>
              <span className="hidden text-[0.72rem] uppercase tracking-[0.18em] text-text-muted min-[420px]:block">
                {siteMetadata.role}
              </span>
            </span>
          </a>

          <div className="ml-auto hidden items-center gap-5 lg:gap-7 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleSectionLink(event, item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={budgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3 hidden md:inline-flex"
          >
            {siteMetadata.budgetLabel}
            <MessageCircle size={18} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="focus-ring ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-button border border-white/[0.12] bg-bg-elevated/90 text-text-secondary transition-colors hover:text-brand-300 md:hidden"
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
            className="fixed inset-0 top-16 z-0 bg-slate-950/75 backdrop-blur-[2px] md:hidden"
          />

          <div
            id="menu-mobile"
            className="relative z-10 border-t border-white/10 bg-bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="content-shell py-4">
              <div className="card-base p-3 sm:p-4">
                <div className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => handleSectionLink(event, item.id)}
                      className={`nav-link w-full rounded-button px-4 py-3 text-left ${
                        activeSection === item.id ? 'bg-brand-400/[0.12] nav-link-active' : ''
                      }`}
                      aria-current={activeSection === item.id ? 'location' : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <a
                  href={budgetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 w-full"
                >
                  {siteMetadata.budgetLabel}
                  <MessageCircle size={18} aria-hidden="true" />
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
