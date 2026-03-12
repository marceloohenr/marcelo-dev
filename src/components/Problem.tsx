import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { scrollToSection } from '../utils/motion';

const problems = [
  'Seu negócio não tem presença digital profissional?',
  'Seu site é lento ou desatualizado?',
  'Você perde clientes por falta de autoridade online?',
];

const Problem = () => {
  return (
    <section id="problemas" aria-labelledby="problemas-title" className="section-shell section-anchor">
      <div className="content-shell">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] xl:items-start">
          <Reveal>
            <div className="min-w-0">
              <div className="section-eyebrow">
                <AlertCircle size={16} aria-hidden="true" />
                <span>Problemas que eu resolvo</span>
              </div>

              <h2 id="problemas-title" className="section-title">
                Sua presença digital precisa trabalhar a favor do seu negócio.
              </h2>
              <p className="section-subtitle max-w-xl text-pretty">
                Um site fraco transmite pouca confiança, reduz percepção de valor e afasta clientes que
                já estavam prontos para entrar em contato.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-base p-5 sm:p-6 lg:p-8">
              <div className="space-y-4">
                {problems.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-button border border-slate-700/70 bg-bg-base/70 px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="mt-0.5 shrink-0 text-rose-400" size={20} />
                      <p className="text-body text-text-secondary">{problem}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-card border border-brand-400/20 bg-brand-400/10 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-400" size={22} />
                  <div className="min-w-0">
                    <h3 className="text-h3 text-text-primary">A solução</h3>
                    <p className="mt-3 text-pretty text-body-lg text-text-secondary">
                      Desenvolvo sites modernos e estratégicos que transformam visitantes em clientes,
                      organizam sua apresentação profissional e geram mais confiança para a tomada de
                      decisão.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('servicos')}
                  className="link-action mt-5"
                >
                  Ver serviços
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Problem;
