import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Instagram,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
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
    label: 'Contato',
    value: siteMetadata.heroResponseLabel,
    tone: 'primary',
  },
  {
    icon: Sparkles,
    label: 'Entregas',
    value: 'Sites, catálogos e sistemas',
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
      <div className="surface-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(62,168,255,0.24),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(22,131,255,0.18),transparent_22%),linear-gradient(180deg,rgba(6,11,22,0.04),rgba(6,11,22,0))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-base via-bg-base/[0.72] to-transparent" />

      <div className="content-shell relative z-10 pb-14 pt-4 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.03fr)_minmax(22rem,0.97fr)] xl:items-center xl:gap-14">
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
                className="mt-6 max-w-4xl text-balance font-display text-display text-text-primary"
              >
                {siteMetadata.personName}
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-4 font-display text-h1 text-gradient">{siteMetadata.role}</p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-5 max-w-2xl text-pretty text-body-lg text-text-secondary">
                {siteMetadata.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
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

            <Reveal delay={390}>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-button border border-brand-300/30 bg-brand-400/10 px-4 py-3 text-body font-semibold text-brand-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300/[0.55] hover:bg-brand-400/[0.14] sm:w-auto"
                >
                  <Instagram size={18} aria-hidden="true" />
                  {contactInfo.instagramLabel}
                </a>

                <p className="text-caption font-medium uppercase tracking-[0.16em] text-text-muted">
                  Atendimento online para todo o Brasil
                </p>
              </div>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-6 flex flex-wrap gap-3">
                {siteMetadata.heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="chip-base border-brand-300/[0.18] bg-brand-400/[0.08] text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.label} delay={520 + index * 80}>
                    <div className="metric-card h-full">
                      <div className="flex items-start gap-3">
                        <div
                          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                            item.tone === 'success'
                              ? 'border-state-success/[0.35] bg-state-success/[0.12] text-state-success'
                              : 'border-brand-300/25 bg-brand-400/10 text-brand-300'
                          }`}
                        >
                          <Icon size={20} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                            {item.label}
                          </p>
                          <p className="mt-2 text-balance text-body font-semibold text-text-primary">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="xl:justify-self-end" delay={200}>
            <aside className="relative mx-auto w-full max-w-[34rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(62,168,255,0.2),transparent_62%)] blur-3xl" />
              <div className="card-base relative overflow-hidden p-3 shadow-glow sm:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-white/[0.12] bg-bg-surface">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,22,0.08),rgba(6,11,22,0.48))]" />
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

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="status-pill-success">
                      <BadgeCheck size={14} aria-hidden="true" />
                      Novos projetos
                    </span>
                    <span className="status-pill-primary">
                      <Clock3 size={14} aria-hidden="true" />
                      {siteMetadata.heroResponseLabel}
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-[1.35rem] border border-white/[0.12] bg-bg-base/[0.82] p-4 backdrop-blur-xl sm:p-5">
                      <p className="text-caption uppercase tracking-[0.16em] text-brand-300">
                        Marcelo Henrique
                      </p>
                      <p className="mt-2 text-balance font-display text-h3 text-text-primary">
                        Sites modernos e sistemas com foco em presença digital e conversão.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 bottom-8 hidden w-52 rounded-[1.35rem] border border-white/[0.12] bg-bg-elevated/[0.92] p-4 shadow-brand backdrop-blur-xl lg:block">
                <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                  Disponibilidade
                </p>
                <p className="mt-2 text-body font-semibold text-text-primary">
                  {siteMetadata.heroAvailability}
                </p>
              </div>

              <div className="absolute -right-3 top-10 hidden w-48 rounded-[1.35rem] border border-brand-300/[0.22] bg-brand-400/[0.12] p-4 shadow-brand backdrop-blur-xl lg:block">
                <p className="text-caption uppercase tracking-[0.16em] text-brand-300">
                  Status
                </p>
                <p className="mt-2 text-body font-semibold text-text-primary">
                  Atendimento ágil e comunicação direta.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
