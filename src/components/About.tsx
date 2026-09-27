import { ArrowUpRight } from 'lucide-react';
import { projects, getAvailableProjectCategories } from '../data/projects';
import { contactInfo } from '../data/contact';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="sobre" className="section-shell section-anchor about-section" aria-labelledby="sobre-title" tabIndex={-1}>
      <div className="content-shell">
        <SectionHeading id="sobre-title" number="01" label={t('Quem está por trás')} title={t('Pensamento de design. Olhar de desenvolvedor.')} />
        <div className="about-layout">
          <Reveal>
            <div className="about-copy">
              <p className="about-lead">{t('Sou Marcelo Henrique.')}<br />{t('Conecto o que seu negócio precisa ao que as pessoas querem usar.')}</p>
              <p>{t('Sou desenvolvedor web freelancer, com atuação em desenvolvimento full stack e UI/UX para clientes no Brasil e no mundo. Crio landing pages, sites institucionais, catálogos online e aplicações web personalizadas.')}</p>
              <p>{t('Da interface ao funcionamento, meu foco é construir experiências claras, acessíveis e rápidas, com atenção ao visual e à base técnica de cada projeto.')}</p>
              <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-text">{t('Meu perfil profissional')} <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="about-facts">
              <div><strong>{String(projects.length).padStart(2, '0')}</strong><span>{t('projetos publicados')}</span></div>
              <div><strong>{String(getAvailableProjectCategories(projects).length).padStart(2, '0')}</strong><span>{t('categorias de projetos')}</span></div>
              <div className="about-principle"><span className="eyebrow">{t('O que orienta cada entrega')}</span><p>{t('Clareza na experiência.')}<br />{t('Cuidado em cada detalhe.')}</p><span>Frontend · Backend · UI/UX</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
