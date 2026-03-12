import { ArrowRight, MessageCircle } from 'lucide-react';
import profilePhoto from '../assets/marcelo-henrique-portrait.jpg';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { scrollToSection } from '../utils/motion';

const Hero = () => {
  const budgetUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="section-anchor relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(59,130,246,0.2),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(37,99,235,0.18),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-base via-bg-base/75 to-transparent" />

      <div className="content-shell relative z-10 pb-14 pt-4 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="grid gap-10 lg:gap-12 xl:grid-cols-[minmax(0,1.04fr)_minmax(20rem,0.96fr)] xl:items-center">
          <div className="min-w-0">
            <Reveal>
              <div className="section-eyebrow">
                <span>{siteMetadata.heroEyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1
                id="hero-title"
                className="mt-4 max-w-4xl text-balance font-display text-display text-text-primary"
              >
                {siteMetadata.personName}
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-4 font-display text-h2 text-brand-400">{siteMetadata.role}</p>
            </Reveal>

            <Reveal delay={260}>
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
                  className="btn-primary sm:min-w-[13rem]"
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

            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                {siteMetadata.heroHighlights.map((item) => (
                  <span key={item} className="chip-base">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="xl:justify-self-end" delay={220}>
            <aside className="card-base relative mx-auto w-full max-w-[31rem] overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%)]" />
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-bg-surface/80">
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

                <div className="mt-4 flex items-center justify-between gap-4 rounded-[1.1rem] border border-white/10 bg-bg-base/72 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-caption uppercase tracking-[0.18em] text-text-muted">
                      Disponibilidade
                    </p>
                    <p className="mt-1 font-display text-body-lg font-semibold text-text-primary">
                      {siteMetadata.heroAvailability}
                    </p>
                  </div>
                  <span className="chip-base shrink-0">Resposta rápida</span>
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
