import Reveal from './Reveal';
import { differentials } from '../data/differentials';
import { siteMetadata } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

export default function Differentials() {
  const { t } = useLanguage();
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="differentials section-anchor" tabIndex={-1}>
      <Reveal><div className="differentials-intro"><p className="eyebrow">{t(siteMetadata.differentialsEyebrow)}</p><h3 id="diferenciais-title">{t(siteMetadata.differentialsTitle)}</h3><p>{t(siteMetadata.differentialsDescription)}</p></div></Reveal>
      <div className="differential-grid">
        {differentials.map((item, index) => {
          const Icon = item.icon;
          return <Reveal key={item.id} delay={index * 45}><article className="differential-card"><Icon size={22} aria-hidden="true" /><h4>{t(item.title)}</h4><p>{t(item.description)}</p></article></Reveal>;
        })}
      </div>
    </section>
  );
}
