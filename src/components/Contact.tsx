import { ArrowUpRight, Mail } from 'lucide-react';
import Reveal from './Reveal';
import { contactChannels, contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contato" aria-labelledby="contato-title" className="contact-section section-anchor" tabIndex={-1}>
      <div className="content-shell">
        <Reveal><p className="eyebrow"><span>06</span> / {t('Sua ideia, nosso próximo projeto')}</p></Reveal>
        <div className="contact-layout">
          <Reveal>
            <h2 id="contato-title">{t('Vamos construir')}<br />{t('algo')} <span>{t('novo?')}</span></h2>
            <p className="contact-copy">{t('Um site, uma interface ou um sistema para tirar sua ideia do papel. Me conta o que você tem em mente.')}</p>
            <div className="contact-actions">
              <a href={buildWhatsappUrl(contactInfo.whatsappNumber, t(siteMetadata.budgetMessage))} target="_blank" rel="noopener noreferrer" className="btn-primary">{t('Conversar no WhatsApp')} <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a href={`mailto:${contactInfo.email}`} className="btn-text"><Mail size={17} aria-hidden="true" />{t('Enviar e-mail')}</a>
            </div>
            <p className="contact-location">{t(siteMetadata.finalAvailabilityLabel)}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="contact-channels" data-spotlight>
              <p className="eyebrow">{t('A conversa também pode começar por aqui')}</p>
              {contactChannels.map(({ id, label, value, href, icon: Icon }) => (
                <a key={id} href={href} target={id !== 'email' ? '_blank' : undefined} rel={id !== 'email' ? 'noopener noreferrer' : undefined} className="channel-link">
                  <Icon size={20} aria-hidden="true" /><span><strong>{label}</strong><span>{value}</span></span><ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
