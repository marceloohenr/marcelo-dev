import { ArrowRight, BadgeCheck, Clock3, MessageCircle, Sparkles } from 'lucide-react';
import profilePhoto from '../assets/marcelo-henrique-portrait.jpg';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { scrollToSection } from '../utils/motion';

const proofItems = [
  {
    icon: BadgeCheck,
    label: 'Disponibilidade',
    value: siteMetadata.heroAvailability,
    tone: 'success',
  },
  {
    icon: Clock3,
    label: 'Atendimento',
    value: siteMetadata.heroResponseLabel,
    tone: 'primary',
  },
  {
    icon: Sparkles,
    label: 'Foco',
    value: 'Sites e sistemas bem apresentados',
    tone: 'primary',
  },
] as const;

const Hero = () => {
  const budgetUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="section-anchor relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="surface-grid absolute inset-0 opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(62,168,255,0.22),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(22,131,255,0.16),transparent_20%),linear-gradient(180deg,rgba(6,11,22,0.06),rgba(6,11,22,0))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-base via-bg-base/[0.72] to-transparent" />

      <div className="content-shell relative z-10 pb-14 pt-4 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[58rem] text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.6rem] border border-brand-300/25 bg-bg-surface shadow-glow sm:h-28 sm:w-28">
                <img
                  src={profilePhoto}
                  alt="Foto profissional de Marcelo Henrique"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                  width={900}
                  height={1200}
                  fetchPriority="high"
                />
              </div>

              <div className="section-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                <span>{siteMetadata.heroEyebrow}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-title"
              className="mx-auto mt-6 max-w-[12ch] text-balance font-display text-display text-text-primary sm:max-w-[16ch]"
            >
              {siteMetadata.heroHeadline}
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-5 max-w-[34ch] text-pretty font-display text-h2 text-gradient">
              {siteMetadata.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={budgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary sm:min-w-[14rem]"
              >
                {siteMetadata.heroPrimaryCtaLabel}
                <MessageCircle size={18} aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('projetos')}
                className="btn-secondary sm:min-w-[12rem]"
              >
                {siteMetadata.heroSecondaryCtaLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {siteMetadata.heroHighlights.map((item) => (
                <span key={item} className="chip-base px-4 text-text-primary">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {proofItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label} className="h-full" delay={400 + index * 80}>
                  <div className="metric-card">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        item.tone === 'success'
                          ? 'border-state-success/[0.35] bg-state-success/[0.12] text-state-success'
                          : 'border-brand-300/25 bg-brand-400/10 text-brand-300'
                      }`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-caption uppercase tracking-[0.16em] text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-2 text-balance text-body font-semibold text-text-primary">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
