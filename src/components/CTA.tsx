import { Github, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';

const CtaSection = () => {
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section aria-labelledby="cta-title" className="section-shell">
      <div className="content-shell">
        <Reveal>
          <div className="card-base relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.26),transparent_42%),radial-gradient(circle_at_84%_20%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(135deg,rgba(37,99,235,0.08),rgba(15,23,42,0.08))]" />
            <div className="surface-grid absolute inset-0 opacity-[0.05]" />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-center">
              <div className="min-w-0 text-center lg:text-left">
                <div className="section-eyebrow">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>{siteMetadata.ctaEyebrow}</span>
                </div>

                <h2
                  id="cta-title"
                  className="mx-auto mt-5 max-w-[18ch] text-balance font-display text-h1 text-text-primary lg:mx-0"
                >
                  {siteMetadata.ctaTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-[36ch] text-pretty text-body-lg text-text-secondary lg:mx-0">
                  {siteMetadata.ctaDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                  <a
                    href={whatsappUrl}
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

              <div className="card-balanced bg-[linear-gradient(180deg,rgba(30,41,59,0.92),rgba(17,24,39,0.96))]">
                <p className="text-caption uppercase tracking-[0.18em] text-brand-400">
                  Links profissionais
                </p>
                <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                  Conheça meu trabalho e entre em contato pelo canal mais prático.
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={contactInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    <Github size={18} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={contactInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    <Instagram size={18} aria-hidden="true" />
                    Instagram
                  </a>
                </div>

                <div className="mt-6 info-card">
                  <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                    Foco do portfólio
                  </p>
                  <p className="mt-2 text-body text-text-primary">
                    Projetos de sites, catálogos online e sistemas web com visual profissional e boa
                    estrutura para escalar.
                  </p>
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
