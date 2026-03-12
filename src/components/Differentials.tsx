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

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id} delay={index * 65}>
                <article className="card-base card-interactive h-full min-w-0 p-5 sm:p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/25 bg-brand-400/10">
                    <Icon className="text-brand-400" size={24} />
                  </div>
                  <h3 className="text-balance font-display text-h3 text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty text-body text-text-secondary">{item.description}</p>
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
