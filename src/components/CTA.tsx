import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-8">
          <Sparkles size={18} className="text-blue-400" />
          <span className="text-blue-300 text-sm font-medium">Vamos trabalhar juntos</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 leading-tight">
          Vamos criar um site profissional para o seu negócio?
        </h2>

        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Transforme sua presença digital e comece a conquistar mais clientes com um site moderno e estratégico
        </p>

        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-600/20"
        >
          Solicitar Orçamento
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-slate-500 text-sm mt-6">
          Resposta em até 24 horas
        </p>
      </div>
    </section>
  );
};

export default CTA;
