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

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id} delay={index * 70}>
                <article className="card-balanced card-interactive h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-500/10 text-brand-300">
                    <Icon size={20} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-balance font-display text-h3 text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-pretty text-body leading-[1.72] text-text-secondary">
                    {item.description}
                  </p>
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
