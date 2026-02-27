import { AlertCircle, CheckCircle } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Seu negócio não tem presença digital profissional?',
    'Seu site é lento ou desatualizado?',
    'Você perde clientes por falta de autoridade online?',
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              O Problema que Eu Resolvo
            </h2>
            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertCircle className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300 text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">A Solução</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Eu desenvolvo sites <span className="text-blue-400 font-semibold">modernos</span>, <span className="text-blue-400 font-semibold">rápidos</span> e <span className="text-blue-400 font-semibold">estratégicos</span> para transformar visitantes em clientes.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-500/20">
              <p className="text-slate-400">
                Seu negócio merece uma presença digital que transmita profissionalismo e gere resultados reais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
