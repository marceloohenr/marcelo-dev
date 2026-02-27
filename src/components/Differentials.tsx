import { Code2, Zap, Palette, TrendingUp, FolderTree } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Code2,
      title: 'Código Organizado',
      description: 'Estrutura limpa e bem documentada para fácil manutenção',
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Sites rápidos que oferecem a melhor experiência ao usuário',
    },
    {
      icon: Palette,
      title: 'Design Moderno',
      description: 'Layouts atuais que transmitem profissionalismo',
    },
    {
      icon: TrendingUp,
      title: 'Foco em Conversão',
      description: 'Estratégia voltada para gerar resultados reais',
    },
    {
      icon: FolderTree,
      title: 'Estrutura Escalável',
      description: 'Preparado para crescer junto com seu negócio',
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Diferenciais
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            O que faz meus projetos se destacarem
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-400" size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;

