import { Plus } from 'lucide-react';
import { serviceFaq } from '../data/serviceFaq';
import { useLanguage } from '../i18n/LanguageContext';

export default function ServiceFaq() {
  const { t } = useLanguage();
  return (
    <section id="duvidas" className="service-faq section-anchor" aria-labelledby="duvidas-title">
      <div className="service-faq-heading">
        <p className="eyebrow">{t('Antes de começar')}</p>
        <h3 id="duvidas-title">{t('Seu próximo projeto, sem dúvidas.')}</h3>
        <p>{t('Respostas para quem procura desenvolvimento web sob medida.')}</p>
        <a className="btn-text" href="#contato">{t('Conversar sobre meu projeto')}</a>
      </div>
      <div className="service-faq-list">
        {serviceFaq.map(item => (
          <details key={item.id} id={item.id} className="section-anchor">
            <summary><span>{t(item.question)}</span><Plus size={18} aria-hidden="true" /></summary>
            <p>{t(item.answer)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
