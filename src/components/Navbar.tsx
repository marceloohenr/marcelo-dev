import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../data/site';
import { scrollToSection } from '../utils/motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

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

    let animationFrameId = 0;

    const updateActiveSection = () => {
      const headerOffset = window.innerWidth >= 768 ? 124 : 96;
      const probeY = window.scrollY + headerOffset + window.innerHeight * 0.16;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 4) {
        const lastSection = sections[sections.length - 1];

        if (lastSection) {
          setActiveSection((current) => (current === lastSection.id ? current : lastSection.id));
        }

        return;
      }

      const matchedSection = [...sections]
        .reverse()
        .find((section) => probeY >= section.offsetTop);

      const nextSectionId = matchedSection?.id ?? sections[0].id;
      setActiveSection((current) => (current === nextSectionId ? current : nextSectionId));
    };

    const handleViewportChange = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    };

    handleViewportChange();

    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
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
        <div className="flex h-16 items-center justify-end md:h-[4.75rem] md:justify-center">
          <div className="hidden items-center justify-center gap-5 md:flex lg:gap-7">
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

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-button border border-white/[0.12] bg-bg-elevated/90 text-text-secondary transition-colors hover:text-brand-300 md:hidden"
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
                        activeSection === item.id ? 'bg-brand-300/10 nav-link-active' : ''
                      }`}
                      aria-current={activeSection === item.id ? 'location' : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
