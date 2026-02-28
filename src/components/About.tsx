import { User, Briefcase, Code2, Target } from 'lucide-react';
import profilePhoto from '../assets/marcelo-henrique-portrait.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      text: 'Base sólida em lógica de programação',
    },
    {
      icon: Target,
      text: 'Foco em soluções digitais eficientes',
    },
    {
      icon: Briefcase,
      text: 'Especializado em sites para profissionais e negócios',
    },
  ];

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-shell section-anchor">
      <div className="content-shell">
        <div className="grid gap-8 md:gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="section-eyebrow">
              <User size={16} aria-hidden="true" />
              <span>Sobre mim</span>
            </div>

            <h2 id="sobre-title" className="section-title">Marcelo Henrique</h2>

            <div className="mt-6 space-y-4">
              <p className="text-body-lg text-text-secondary">
                Desenvolvedor Web com base sólida em lógica de programação e foco em soluções digitais
                eficientes.
              </p>
              <p className="text-body-lg text-text-secondary">
                Especializado na criação de sites modernos para profissionais e pequenos negócios que
                desejam fortalecer sua presença digital e conquistar mais clientes.
              </p>
              <p className="text-body-lg text-text-secondary">
                Cada projeto é desenvolvido com atenção aos detalhes, performance e estratégia de conversão,
                garantindo que seu investimento gere resultados reais.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="card-base flex items-center gap-3 px-4 py-3">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button border border-brand-500/25 bg-brand-600/10">
                      <Icon className="text-brand-400" size={19} />
                    </div>
                    <p className="text-body text-text-secondary">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mx-auto w-full max-w-[22rem] sm:max-w-[24rem]">
              <div className="card-base p-5 sm:p-6">
                <div className="aspect-[3/4] overflow-hidden rounded-card border border-slate-700/80">
                  <img
                    src={profilePhoto}
                    alt="Foto de Marcelo Henrique"
                    className="block h-full w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <p className="mt-5 text-center text-caption text-text-muted">Desenvolvedor Web</p>
                <p className="mt-1 text-center text-body font-semibold text-brand-400">
                  Disponível para novos projetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
