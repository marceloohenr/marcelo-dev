import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';

const CtaSection = () => {
  const budgetUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section id="contato" aria-labelledby="cta-title" className="section-shell section-anchor">
      <div className="content-shell">
        <Reveal>
          <div className="card-base relative overflow-hidden px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_48%),linear-gradient(135deg,rgba(59,130,246,0.08),rgba(15,23,42,0.02))]" />
            <div className="relative">
              <div className="section-eyebrow">
                <MessageCircle size={16} aria-hidden="true" />
                <span>{siteMetadata.ctaEyebrow}</span>
              </div>

              <h2
                id="cta-title"
                className="mx-auto max-w-3xl text-balance font-display text-h1 text-text-primary"
              >
                {siteMetadata.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-body-lg text-text-secondary">
                {siteMetadata.ctaDescription}
              </p>

              <a
                href={budgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-8 min-h-14 px-7 text-body-lg sm:min-w-[16rem]"
              >
                {siteMetadata.budgetLabel}
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
