import { Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import { services } from '../data/services';
import { siteMetadata } from '../data/site';

const Services = () => {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="section-shell section-anchor">
      <div className="content-shell">
        <Reveal>
          <header className="section-header">
            <div className="section-eyebrow">
              <Briefcase size={16} aria-hidden="true" />
              <span>{siteMetadata.servicesEyebrow}</span>
            </div>
            <h2 id="servicos-title" className="section-title">
              {siteMetadata.servicesTitle}
            </h2>
            <p className="section-subtitle text-pretty">{siteMetadata.servicesDescription}</p>
          </header>
        </Reveal>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.id} className="h-full" delay={index * 70}>
                <article className="card-balanced card-interactive">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-400/25 bg-brand-500/10 text-brand-400 shadow-brand">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className="status-pill-primary">{service.eyebrow}</span>
                  </div>

                  <h3 className="mt-6 text-balance font-display text-h3 text-text-primary">
                    {service.title}
                  </h3>
                  <p className="card-copy mt-3 text-pretty text-body text-text-secondary">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-gradient-to-r from-brand-400/30 via-white/10 to-transparent" />
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

export default Services;
