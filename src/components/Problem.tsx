import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Seu negócio não tem presença digital profissional?',
    'Seu site é lento ou desatualizado?',
    'Você perde clientes por falta de autoridade online?',
  ];

  return (
    <section id="problema" aria-labelledby="problema-title" className="section-shell section-anchor">
      <div className="content-shell">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <h2 id="problema-title" className="section-title">O Problema que Eu Resolvo</h2>
            <p className="section-subtitle max-w-xl">
              Muitos negócios perdem oportunidades por não comunicar valor com clareza no ambiente digital.
            </p>

            <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <AlertCircle className="mt-1 flex-shrink-0 text-rose-400" size={20} />
                  <p className="text-body text-text-secondary md:text-body-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-base p-6 sm:p-7 md:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 flex-shrink-0 text-brand-400" size={22} />
              <div>
                <h3 className="text-h3 text-text-primary">A Solução</h3>
                <p className="mt-4 text-body-lg text-text-secondary">
                  Eu desenvolvo sites <span className="font-semibold text-brand-400">modernos</span>,{' '}
                  <span className="font-semibold text-brand-400">rápidos</span> e{' '}
                  <span className="font-semibold text-brand-400">estratégicos</span> para transformar
                  visitantes em clientes.
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-slate-700/70 pt-6 text-body text-text-muted">
              Seu negócio merece uma presença digital que transmita profissionalismo e gere resultados reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
