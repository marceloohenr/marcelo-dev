import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { getWhatsappBaseUrl } from '../utils/contact';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-bg-base py-10">
      <div className="content-shell">
        <div className="card-base px-5 py-7 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-caption uppercase tracking-[0.2em] text-brand-400">
                {siteMetadata.personName}
              </p>
              <h2 className="mt-3 font-display text-h2 text-text-primary">{siteMetadata.role}</h2>
              <p className="mt-3 max-w-2xl text-pretty text-body text-text-secondary">
                {siteMetadata.footerDescription}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="icon-link" aria-label="Email">
                <Mail size={18} />
              </a>
              <a
                href={getWhatsappBaseUrl(contactInfo.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-caption text-text-secondary sm:text-left lg:flex-row lg:items-center lg:justify-between">
            <p className="safe-break">{siteMetadata.footerCopyright}</p>
            <p>Atendimento online para todo o Brasil.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
