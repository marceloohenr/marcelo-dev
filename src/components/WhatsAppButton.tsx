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
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
      <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full"></span>
    </a>
  );
};

export default WhatsAppButton;

