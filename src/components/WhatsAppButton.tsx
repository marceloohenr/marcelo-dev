import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { useLanguage } from '../i18n/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const inView = new Set<string>(['inicio']);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) inView.add(entry.target.id);
        else inView.delete(entry.target.id);
      });
      setVisible(inView.size === 0);
    });
    ['inicio', 'contato'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return <a href={buildWhatsappUrl(contactInfo.whatsappNumber, t(siteMetadata.budgetMessage))} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" data-visible={visible} aria-hidden={!visible} tabIndex={visible ? 0 : -1} aria-label={t('Conversar no WhatsApp')}><MessageCircle size={22} aria-hidden="true" /><span>{t('Vamos conversar?')}</span></a>;
}
