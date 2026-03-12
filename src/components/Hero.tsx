import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react';
import profilePhoto from '../assets/marcelo-henrique-portrait.jpg';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { scrollToSection } from '../utils/motion';

const heroProofs = [
  {
    icon: BadgeCheck,
    label: 'Disponibilidade',
    value: siteMetadata.heroAvailability,
    tone: 'success',
  },
  {
    icon: Clock3,
    label: 'Retorno',
    value: siteMetadata.heroResponseLabel,
    tone: 'primary',
  },
  {
    icon: MonitorSmartphone,
    label: 'Entrega',
    value: 'Sites, catálogos e sistemas web',
    tone: 'primary',
  },
] as const;

const Hero = () => {
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="section-anchor relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="surface-grid absolute inset-0 opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(15,23,42,0.1),rgba(15,23,42,0))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-base via-bg-base/80 to-transparent" />

      <div className="content-shell relative z-10 pb-14 pt-4 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.98fr)] xl:items-center xl:gap-14">
          <div className="min-w-0">
            <Reveal>
              <div className="section-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                <span>{siteMetadata.heroEyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1
                id="hero-title"
                className="mt-6 max-w-[12ch] text-balance font-display text-display text-text-primary sm:max-w-[13ch]"
              >
                {siteMetadata.heroHeadline}
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-5 max-w-[26ch] text-pretty font-display text-h2 text-gradient">
                {siteMetadata.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => scrollToSection('projetos')}
                  className="btn-primary sm:min-w-[13rem]"
                >
                  {siteMetadata.heroPrimaryCtaLabel}
                  <ArrowRight size={18} aria-hidden="true" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp sm:min-w-[14rem]"
                >
                  {siteMetadata.heroSecondaryCtaLabel}
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-6 flex flex-wrap gap-3">
                {siteMetadata.heroHighlights.map((item) => (
                  <span key={item} className="chip-base px-4 text-text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-3">
              {heroProofs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.label} className="h-full" delay={420 + index * 70}>
                    <div className="metric-card items-start text-left">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${
                          item.tone === 'success'
                            ? 'border-state-success/35 bg-state-success/12 text-state-success'
                            : 'border-brand-400/25 bg-brand-500/10 text-brand-400'
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

          <Reveal delay={180}>
            <aside className="relative mx-auto w-full max-w-[30rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_66%)] blur-3xl" />
              <div className="card-base relative overflow-hidden p-3 shadow-glow sm:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 bg-bg-surface">
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.58))]" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="status-pill-success">Novos projetos</span>
                    <span className="status-pill-primary">{siteMetadata.heroResponseLabel}</span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-[1.2rem] border border-white/10 bg-bg-base/80 p-4 backdrop-blur-xl sm:p-5">
                      <p className="text-caption uppercase tracking-[0.16em] text-brand-400">
                        Marcelo Henrique
                      </p>
                      <p className="mt-2 text-balance font-display text-h3 text-text-primary">
                        Portfólio profissional para atrair clientes interessados em desenvolvimento web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
