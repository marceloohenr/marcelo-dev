import { Briefcase, Code2, Target, UserRound } from 'lucide-react';
import profilePhoto from '../assets/marcelo-henrique-portrait.jpg';
import Reveal from './Reveal';

const highlights = [
  {
    icon: Code2,
    title: 'Desenvolvimento web com visão prática',
    description: 'Projetos objetivos, organizados e pensados para entregar valor real ao negócio.',
  },
  {
    icon: Target,
    title: 'Foco em soluções digitais eficientes',
    description: 'Sites que ajudam profissionais e pequenas empresas a se posicionarem melhor online.',
  },
  {
    icon: Briefcase,
    title: 'Atuação voltada para captação de clientes',
    description: 'Cada página é construída para comunicar autoridade e facilitar novos contatos.',
  },
];

const About = () => {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-shell section-anchor">
      <div className="content-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(18rem,0.88fr)_minmax(0,1.12fr)] xl:items-center">
          <Reveal>
            <div className="mx-auto w-full max-w-[22rem] sm:max-w-[24rem] xl:max-w-[25rem]">
              <div className="card-base overflow-hidden p-5 sm:p-6">
                <div className="aspect-[4/5] overflow-hidden rounded-card border border-slate-700/80">
                  <img
                    src={profilePhoto}
                    alt="Retrato de Marcelo Henrique"
                    className="block h-full w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 rounded-button border border-slate-700/70 bg-bg-base/70 px-4 py-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                  <div className="min-w-0">
                    <p className="text-caption uppercase tracking-[0.18em] text-text-muted">Disponível</p>
                    <p className="text-body font-semibold text-text-primary">Para novos projetos</p>
                  </div>
                  <span className="chip-base self-start min-[420px]:self-auto">Atendimento online</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <div className="section-eyebrow">
                <UserRound size={16} aria-hidden="true" />
                <span>Sobre Marcelo Henrique</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 id="sobre-title" className="section-title">
                Experiência em desenvolvimento web com foco em autoridade digital e conversão.
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-6 space-y-4">
                <p className="text-pretty text-body-lg text-text-secondary">
                  Marcelo Henrique atua no desenvolvimento web criando sites modernos, rápidos e
                  estratégicos para profissionais e pequenos negócios que precisam se posicionar melhor no
                  ambiente digital.
                </p>
                <p className="text-pretty text-body-lg text-text-secondary">
                  O foco está em soluções digitais eficientes, com organização técnica, visual
                  profissional e estrutura pensada para transformar visitas em oportunidades reais.
                </p>
                <p className="text-pretty text-body-lg text-text-secondary">
                  Cada projeto é conduzido com atenção à performance, clareza na comunicação e objetivos
                  comerciais bem definidos.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={240 + index * 70}>
                    <div className="card-base p-4 sm:p-5">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-button border border-brand-400/25 bg-brand-400/10">
                          <Icon className="text-brand-400" size={20} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="break-words text-body-lg font-semibold text-text-primary">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-pretty text-body text-text-secondary">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
