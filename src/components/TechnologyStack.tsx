import { technologyGroups } from '../data/profile';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function TechnologyStack() {
  const { t } = useLanguage();
  return (
    <section id="stack" className="section-shell section-anchor stack-section" aria-labelledby="stack-title" tabIndex={-1}>
      <div className="content-shell">
        <SectionHeading id="stack-title" number="02" label={t('Ferramentas de trabalho')} title={t('Tecnologia a serviço da ideia.')} description={t('Cada escolha técnica tem um objetivo: construir uma experiência bem resolvida, do que você vê ao que acontece por trás.')} />
        <div className="technology-grid">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 55}>
              <article className={`technology-card tech-${group.id}`} data-spotlight>
                <span className="eyebrow">{t(group.description)}</span><h3>{t(group.title)}</h3>
                <ul>{group.items.map(({ name, icon: Icon }) => <li key={name}><span aria-hidden="true"><Icon size={21} /></span><span>{t(name)}</span></li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
