import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { ReactIcon, TypeScriptIcon, NodeJsIcon } from './TechIcons';
import profilePortrait from '../assets/marcelo-perfil.webp';
import illustratedLogo from '../assets/mh-avatar-seal.webp';
import { contactInfo } from '../data/contact';
import { heroProofs } from '../data/hero';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, t(siteMetadata.budgetMessage));

  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero section-anchor" tabIndex={-1}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="content-shell">
        <div className="hero-layout">
          <div className="hero-visual hero-enter" style={{ animationDelay: '30ms' }}>
            <div className="portrait-frame">
              <div className="portrait-photo">
                <img src={profilePortrait} alt={t('Retrato de Marcelo Henrique')} width={640} height={853} loading="eager" decoding="async" />
              </div>
            </div>
            <div className="hero-brand-seal">
              <img src={illustratedLogo} alt={t('Logo ilustrada MH de Marcelo Henrique')} width={192} height={192} decoding="async" />
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow hero-enter" style={{ animationDelay: '90ms' }}>
              <span className="availability-dot" /> {t('Disponível para projetos')}
            </p>
            <p className="hero-name hero-enter" style={{ animationDelay: '140ms' }}>{siteMetadata.personName} <span> / {t('UI/UX & código')}</span></p>
            <h1 id="hero-title" className="hero-enter" style={{ animationDelay: '190ms' }}>
              {language === 'en' ? 'Full Stack' : t('Desenvolvedor')}<br /><span className="hero-title-accent">{language === 'en' ? 'Developer' : 'Full Stack'}<span className="title-dot">.</span></span>
            </h1>
            <p className="hero-description hero-enter" style={{ animationDelay: '240ms' }}>
              {t('Crio landing pages, sites profissionais e sistemas web sob medida. Design, tecnologia e SEO técnico para dar forma ao seu próximo projeto.')}
            </p>
            <div className="hero-actions hero-enter" style={{ animationDelay: '290ms' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('Conversar sobre meu projeto')} <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#projetos" className="btn-text">{t('Ver projetos')} <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
            <p className="hero-location hero-enter" style={{ animationDelay: '340ms' }}>
              <MapPin size={14} aria-hidden="true" /> {t('Atendimento online')} <span>·</span> {t('Brasil e todo o mundo')}
            </p>
          </div>
        </div>
        <div className="hero-bottom hero-enter" style={{ animationDelay: '390ms' }}>
          <div className="hero-proof-list">{heroProofs.map(({ label, icon: Icon }) => <span key={label}><Icon size={15} aria-hidden="true" />{t(label)}</span>)}</div>
          <div className="hero-tech-strip" aria-label={t('Tecnologias em destaque')}>
            <span><ReactIcon size={18} />React</span><span><TypeScriptIcon size={17} />TypeScript</span><span><NodeJsIcon size={18} />Node.js</span>
          </div>
          <a href="#sobre" className="explore-link">{t('Conheça meu trabalho')} <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
