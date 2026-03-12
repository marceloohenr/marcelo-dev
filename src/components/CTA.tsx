import { Instagram, MessageCircle, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';

const CtaSection = () => {
  const budgetUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section aria-labelledby="cta-title" className="section-shell">
      <div className="content-shell">
        <Reveal>
          <div className="card-base relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(62,168,255,0.28),transparent_42%),radial-gradient(circle_at_84%_22%,rgba(22,131,255,0.18),transparent_24%),linear-gradient(135deg,rgba(62,168,255,0.08),rgba(6,11,22,0.08))]" />
            <div className="surface-grid absolute inset-0 opacity-[0.05]" />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-center">
              <div className="min-w-0 text-center lg:text-left">
                <div className="section-eyebrow">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>{siteMetadata.ctaEyebrow}</span>
                </div>

                <h2
                  id="cta-title"
                  className="mx-auto mt-5 max-w-3xl text-balance font-display text-h1 text-text-primary lg:mx-0"
                >
                  {siteMetadata.ctaTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-body-lg text-text-secondary lg:mx-0">
                  {siteMetadata.ctaDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                  <a
                    href={budgetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp min-h-14 px-7 text-body-lg sm:min-w-[16rem]"
                  >
                    {siteMetadata.budgetLabel}
                    <MessageCircle size={18} aria-hidden="true" />
                  </a>

                  <a
                    href={contactInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary min-h-14 px-7 text-body-lg sm:min-w-[14rem]"
                  >
                    {siteMetadata.ctaSecondaryLabel}
                    <Instagram size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="card-base bg-[linear-gradient(180deg,rgba(14,25,46,0.92),rgba(7,13,27,0.96))] p-5 text-left sm:p-6">
                <p className="text-caption uppercase tracking-[0.18em] text-brand-300">
                  Caminho mais rápido
                </p>
                <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                  Me envie uma mensagem com o tipo de projeto e eu retorno com o melhor direcionamento.
                </h3>
                <div className="mt-6 space-y-3">
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                      Ideal para
                    </p>
                    <p className="mt-2 text-body text-text-primary">
                      Sites institucionais, catálogos online e sistemas web.
                    </p>
                  </div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                      Atendimento
                    </p>
                    <p className="mt-2 text-body text-text-primary">
                      Comunicação direta pelo WhatsApp, Instagram, LinkedIn ou e-mail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
