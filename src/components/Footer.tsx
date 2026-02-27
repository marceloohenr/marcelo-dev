import { Code2, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={24} className="text-blue-400" />
            <span className="text-xl font-bold text-slate-100">Marcelo Henrique</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <p className="text-slate-400 mb-1">Desenvolvedor Web</p>
          <p className="text-slate-500 text-sm mb-1">{contactInfo.email}</p>
          <p className="text-slate-500 text-sm mb-2">WhatsApp: {contactInfo.displayPhone}</p>
          <p className="text-slate-500 text-sm">© {currentYear} Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

