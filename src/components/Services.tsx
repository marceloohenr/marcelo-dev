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

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.id} className="h-full" delay={index * 70}>
                <article className="card-balanced card-interactive items-center text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-300/25 bg-brand-400/10 shadow-brand">
                    <Icon className="text-brand-300" size={22} />
                  </div>

                  <span className="status-pill-primary mt-5">{service.eyebrow}</span>

                  <h3 className="mt-5 text-balance font-display text-h3 text-text-primary">
                    {service.title}
                  </h3>
                  <p className="card-copy mt-3 text-pretty text-body text-text-secondary">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-brand-300/35 to-transparent" />
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
