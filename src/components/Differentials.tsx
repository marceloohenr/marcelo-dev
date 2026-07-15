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

        {/* Pontos que ajudam a reforçar o posicionamento do trabalho */}
        <div className="card-grid-4up">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id} delay={index * 70}>
                <article className="differential-card group card-balanced card-interactive h-full">
                  <div className="icon-shell icon-shell-md">
                    <Icon
                      size={20}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-3"
                    />
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
