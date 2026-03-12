import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { differentials } from '../data/differentials';
import { siteMetadata } from '../data/site';

const Differentials = () => {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="section-shell-alt section-anchor"
    >
      <div className="content-shell">
        <Reveal>
          <header className="section-header">
            <div className="section-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              <span>{siteMetadata.differentialsEyebrow}</span>
            </div>
            <h2 id="diferenciais-title" className="section-title">
              {siteMetadata.differentialsTitle}
            </h2>
            <p className="section-subtitle text-pretty">
              {siteMetadata.differentialsDescription}
            </p>
          </header>
        </Reveal>

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id} className="h-full" delay={index * 65}>
                <article className="card-balanced card-interactive items-center text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/25 bg-brand-400/10">
                    <Icon className="text-brand-300" size={24} />
                  </div>
                  <h3 className="mt-5 text-balance font-display text-h3 text-text-primary">
                    {item.title}
                  </h3>
                  <p className="card-copy mt-3 text-pretty text-body text-text-secondary">
                    {item.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-[0.14em] text-brand-300">
                    Mais organização visual
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
