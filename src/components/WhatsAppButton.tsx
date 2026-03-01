import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';

const WhatsAppButton = () => {
  const message = 'Olá! Gostaria de solicitar um orçamento para desenvolvimento de site.';
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-share-preview-hidden="true"
      className="focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-state-success/70 bg-state-success text-slate-950 shadow-brand transition-transform duration-200 hover:scale-105 sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-5 md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] md:right-6"
      aria-label="Contato via WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={27} aria-hidden="true" />
      <span className="pointer-events-none absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border border-bg-base bg-green-300" />
    </a>
  );
};

export default WhatsAppButton;
