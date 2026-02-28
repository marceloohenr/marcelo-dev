import { Code2, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/90 bg-bg-base py-10">
      <div className="content-shell">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2">
            <Code2 size={22} className="text-brand-400" />
            <span className="text-h3 text-text-primary">Marcelo Henrique</span>
          </div>

          <div className="mb-5 flex items-center gap-3">
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="icon-link" aria-label="Email">
              <Mail size={18} />
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <p className="text-body text-text-secondary">Desenvolvedor Web</p>
          <p className="mt-1 text-caption text-text-muted">{contactInfo.email}</p>
          <p className="mt-1 text-caption text-text-muted">WhatsApp: {contactInfo.displayPhone}</p>
          <p className="mt-3 text-caption text-text-muted/90">© {currentYear} Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
