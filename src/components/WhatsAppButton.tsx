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
      className="focus-ring floating-cta group fixed bottom-[calc(0.875rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-state-success/70 bg-state-success text-slate-950 shadow-[0_26px_60px_-26px_rgba(53,208,127,0.6)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] md:bottom-[calc(1.1rem+env(safe-area-inset-bottom))] md:right-5 xl:bottom-[calc(1.35rem+env(safe-area-inset-bottom))] xl:right-6 xl:w-auto xl:gap-2 xl:px-5"
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
    >
      <MessageCircle
        size={24}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="hidden text-body font-semibold xl:inline">{siteMetadata.budgetLabel}</span>
    </a>
  );
};

export default WhatsAppButton;
