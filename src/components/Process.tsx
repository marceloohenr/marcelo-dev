import { processSteps } from '../data/profile';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Differentials from './Differentials';
import { useLanguage } from '../i18n/LanguageContext';

export default function Process() {
  const { t } = useLanguage();
  return (
    <section id="processo" className="section-shell section-anchor process-section" aria-labelledby="processo-title" tabIndex={-1}>
      <div className="content-shell">
        <SectionHeading id="processo-title" number="05" label={t('Como eu trabalho')} title={t('Boas entregas começam com um bom processo.')} description={t('Você participa das decisões e acompanha a construção. Um caminho claro, da conversa inicial aos próximos passos.')} />
        <ol className="process-grid">{processSteps.map(({ id, title, description, icon: Icon }, index) => (
          <li key={id}><Reveal delay={index * 40}><article className="process-card"><div className="process-card-top"><span>{String(index + 1).padStart(2, '0')}</span><Icon size={23} aria-hidden="true" /></div><h3>{t(title)}</h3><p>{t(description)}</p></article></Reveal></li>
        ))}</ol>
        <Differentials />
      </div>
    </section>
  );
}
