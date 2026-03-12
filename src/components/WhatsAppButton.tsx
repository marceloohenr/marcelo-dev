import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';

const WhatsAppButton = () => {
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-state-success/70 bg-state-success text-slate-950 shadow-[0_26px_60px_-26px_rgba(53,208,127,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] md:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] md:right-5 lg:w-auto lg:gap-2 lg:px-5 xl:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] xl:right-6"
      aria-label="Chamar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span className="hidden text-body font-semibold lg:inline">{siteMetadata.budgetLabel}</span>
    </a>
  );
};

export default WhatsAppButton;
