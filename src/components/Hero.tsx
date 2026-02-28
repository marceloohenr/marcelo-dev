import { ArrowRight, Code2, MessageCircle } from 'lucide-react';
import avatar120 from '../assets/marcelo-henrique-avatar-y120.jpg';
import avatar170 from '../assets/marcelo-henrique-avatar-y170.jpg';
import avatar220 from '../assets/marcelo-henrique-avatar-y220.jpg';
import { contactInfo } from '../data/contact';
import { getScrollBehavior } from '../utils/motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: getScrollBehavior() });
    }
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para desenvolvimento de site.'
  )}`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="section-anchor relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-bg-surface via-bg-base to-bg-base pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_80%_78%,rgba(59,130,246,0.12),transparent_42%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iIzI1NjNlYiIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30" />

      <div className="content-shell relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border border-brand-500/45 shadow-brand animate-fade-in sm:h-24 sm:w-24">
            <img
              src={avatar220}
              srcSet={`${avatar120} 120w, ${avatar170} 170w, ${avatar220} 220w`}
              sizes="(max-width: 640px) 80px, 96px"
              width={220}
              height={220}
              alt="Foto de Marcelo Henrique"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="section-eyebrow animate-fade-in">
            <Code2 size={16} aria-hidden="true" />
            <span>Desenvolvedor Web</span>
          </div>

          <h1 id="hero-title" className="mx-auto max-w-3xl text-display text-text-primary animate-fade-in-up">
            Marcelo Henrique
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-body-lg font-medium text-text-secondary animate-fade-in-up delay-200 sm:text-h3">
            Criação de sites modernos que geram <span className="text-brand-400">autoridade</span>{' '}
            e <span className="text-brand-400">clientes</span> para o seu negócio
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center animate-fade-in-up delay-300">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp sm:min-w-[13rem]"
            >
              Solicitar Orçamento
              <MessageCircle size={18} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('projetos')}
              className="btn-secondary sm:min-w-[13rem]"
            >
              Ver Projetos
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
