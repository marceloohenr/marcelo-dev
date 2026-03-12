import {
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import profilePhoto from '../assets/marcelo-henrique-portrait.jpg';
import Reveal from './Reveal';
import { contactInfo } from '../data/contact';
import { heroProofs } from '../data/hero';
import { siteMetadata } from '../data/site';
import { buildWhatsappUrl } from '../utils/contact';
import { scrollToSection } from '../utils/motion';

const Hero = () => {
  const whatsappUrl = buildWhatsappUrl(contactInfo.whatsappNumber, siteMetadata.budgetMessage);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="section-anchor relative overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="surface-grid absolute inset-0 opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(96,165,250,0.12),transparent_22%),linear-gradient(180deg,rgba(8,17,29,0.08),rgba(8,17,29,0))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-base via-bg-base/80 to-transparent" />

      <div className="content-shell relative z-10 pb-14 pt-0 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto flex max-w-[42rem] flex-col items-center text-center">
          <Reveal>
            <div className="relative flex w-full justify-center">
              <div className="absolute inset-0 mx-auto h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_68%)] blur-3xl sm:h-[18rem] sm:w-[18rem] lg:h-[20rem] lg:w-[20rem]" />
              <div className="relative z-10">
                <div className="relative mx-auto">
                  <div className="absolute inset-0 scale-[0.88] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.18),transparent_72%)] blur-2xl" />
                  <div className="relative rounded-full border border-brand-300/20 bg-bg-elevated/80 p-3 shadow-glow sm:p-4">
                    <img
                      src={profilePhoto}
                      alt="Foto profissional de Marcelo Henrique"
                      className="h-[16rem] w-[16rem] rounded-full object-cover object-center sm:h-[18rem] sm:w-[18rem] lg:h-[20rem] lg:w-[20rem]"
                      loading="eager"
                      decoding="async"
                      width={900}
                      height={1200}
                      sizes="(min-width: 1280px) 30rem, (min-width: 768px) 24rem, 18rem"
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <p className="mt-7 text-caption uppercase tracking-[0.2em] text-text-muted">
              {siteMetadata.role}
            </p>
          </Reveal>

          <div className="min-w-0">
            <Reveal delay={110}>
              <h1
                id="hero-title"
                className="mx-auto mt-3 max-w-none whitespace-nowrap font-sans text-[clamp(2rem,8.7vw,5.1rem)] font-extrabold leading-[0.98] tracking-[-0.02em] text-text-primary sm:text-[clamp(2.35rem,7vw,5.1rem)]"
              >
                {siteMetadata.heroHeadline}
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mx-auto mt-4 max-w-[24ch] text-pretty font-display text-h2 text-gradient">
                {siteMetadata.heroDescription}
              </p>
            </Reveal>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {heroProofs.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label} delay={230 + index * 70}>
                  <div className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-bg-elevated/88 px-3.5 py-2 text-[0.82rem] font-semibold text-text-primary shadow-soft backdrop-blur-xl sm:min-h-11 sm:px-4">
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className={
                        item.label.startsWith('Atendimento') ? 'text-state-success' : 'text-brand-300'
                      }
                    />
                    <span>{item.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={320}>
            <div className="mt-7 flex w-full flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
