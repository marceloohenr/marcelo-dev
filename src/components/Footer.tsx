import { ArrowUpRight } from 'lucide-react';
import { contactChannels } from '../data/contact';
import { siteMetadata } from '../data/site';
import Reveal from './Reveal';
import BrandMark from './BrandMark';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="content-shell">
        <Reveal><div className="footer-top">
          <a href="#inicio" className="brand-link" aria-label={t('Marcelo Henrique, voltar ao início')}><BrandMark /><span>Marcelo Henrique<small>{t('DESIGN & DESENVOLVIMENTO')}</small></span></a>
          <p>{t(siteMetadata.footerDescription)}</p>
          <a href="#inicio" className="btn-text">{t('Voltar ao início')} <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div></Reveal>
        <div className="footer-bottom"><p>{t(siteMetadata.footerCopyright)}</p><div>{contactChannels.map(channel => <a key={channel.id} href={channel.href} target={channel.id !== 'email' ? '_blank' : undefined} rel={channel.id !== 'email' ? 'noopener noreferrer' : undefined}>{channel.label}</a>)}</div></div>
      </div>
    </footer>
  );
}
