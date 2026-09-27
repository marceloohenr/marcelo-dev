import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ServiceFaq from './ServiceFaq';
import { services } from '../data/services';
import { contactInfo } from '../data/contact';
import { buildWhatsappUrl } from '../utils/contact';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="section-shell section-anchor services-section" tabIndex={-1}>
      <div className="content-shell">
        <SectionHeading id="servicos-title" number="04" label={t('Como posso ajudar')} title={t('Landing pages, sites e projetos web sob medida.')} description={t('Do primeiro site à sua próxima aplicação: desenvolvimento web com UI/UX, performance e SEO técnico para clientes no Brasil e no mundo.')} />
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 65}>
                <article id={service.id} className="service-card section-anchor" data-spotlight>
                  <div className="service-card-top"><Icon size={27} aria-hidden="true" /><span>0{index + 1}</span></div>
                  <p className="eyebrow">{t(service.eyebrow)}</p>
                  <h3>{t(service.title)}</h3>
                  <p>{t(service.description)}</p>
                  <ul>{service.deliverables.map(item => <li key={item}>{t(item)}</li>)}</ul>
                  <a href={buildWhatsappUrl(contactInfo.whatsappNumber, t('Olá, Marcelo! Quero conversar sobre {service}.').replace('{service}', t(service.title).toLowerCase()))} target="_blank" rel="noopener noreferrer" className="service-link">{t('Vamos conversar')} <ArrowUpRight size={17} aria-hidden="true" /></a>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="services-note">{t('Desenvolvimento frontend e backend, acessibilidade, performance e SEO técnico fazem parte do cuidado com cada solução.')}</p>
        <ServiceFaq />
      </div>
    </section>
  );
}
