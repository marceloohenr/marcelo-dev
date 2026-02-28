import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { getScrollBehavior } from '../utils/motion';

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: getScrollBehavior() });
    }
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para desenvolvimento de site.'
  )}`;

  return (
    <section id="cta" aria-labelledby="cta-title" className="section-shell-alt section-anchor relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.18),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.16),transparent_44%)]" />

      <div className="content-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            <span>Vamos trabalhar juntos</span>
          </div>

          <h2 id="cta-title" className="text-h2 text-text-primary md:text-h1">Vamos criar um site profissional para o seu negócio?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            Transforme sua presença digital e comece a conquistar mais clientes com um site moderno e
            estratégico.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp sm:min-w-[13rem]"
            >
              Solicitar Orçamento
              <MessageCircle size={18} aria-hidden="true" />
            </a>

            <button type="button" onClick={scrollToContact} className="btn-secondary sm:min-w-[13rem]">
              Ir para Contato
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-6 text-caption text-text-muted">Resposta em até 24 horas</p>
        </div>
      </div>
    </section>
  );
}
