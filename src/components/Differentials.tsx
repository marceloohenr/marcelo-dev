import { Code2, Zap, Palette, TrendingUp, FolderTree } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Code2,
      title: 'Código Organizado',
      description: 'Estrutura limpa e bem documentada para fácil manutenção.',
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Sites rápidos que oferecem a melhor experiência ao usuário.',
    },
    {
      icon: Palette,
      title: 'Design Moderno',
      description: 'Layouts atuais que transmitem profissionalismo e confiança.',
    },
    {
      icon: TrendingUp,
      title: 'Foco em Conversão',
      description: 'Estratégia voltada para gerar resultados reais para o negócio.',
    },
    {
      icon: FolderTree,
      title: 'Estrutura Escalável',
      description: 'Preparado para crescer junto com seu negócio.',
    },
  ];

  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="section-shell-alt section-anchor">
      <div className="content-shell">
        <header className="section-header">
          <h2 id="diferenciais-title" className="section-title">Diferenciais</h2>
          <p className="section-subtitle">O que faz meus projetos se destacarem.</p>
        </header>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="card-base card-interactive p-5 sm:p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/25 bg-brand-600/10">
                  <Icon className="text-brand-400" size={24} />
                </div>

                <h3 className="text-h3 text-text-primary">{item.title}</h3>
                <p className="mt-3 text-body text-text-secondary">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
