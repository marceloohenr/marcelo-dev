import { User, Briefcase, Code2, Target } from 'lucide-react';

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
    <section id="sobre" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
              <User size={18} className="text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Sobre mim</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Marcelo Henrique
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                Desenvolvedor Web com base sólida em lógica de programação e foco em soluções digitais eficientes.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Especializado na criação de sites modernos para profissionais e pequenos negócios que desejam fortalecer sua presença digital e conquistar mais clientes.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Cada projeto é desenvolvido com atenção aos detalhes, performance e estratégia de conversão, garantindo que seu investimento gere resultados reais.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-400" size={20} />
                    </div>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30">
                    <User size={64} className="text-white" />
                  </div>
                  <p className="text-slate-400 text-sm">
                    Desenvolvedor Web
                  </p>
                  <p className="text-blue-400 font-medium mt-2">
                    Disponível para novos projetos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
