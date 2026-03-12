import type { LucideIcon } from 'lucide-react';
import { Code2, Layers3, Palette, Zap } from 'lucide-react';

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentials: Differential[] = [
  {
    id: 'design-moderno',
    title: 'Design moderno',
    description: 'Layout atual, contrastado e alinhado com a imagem profissional do negócio.',
    icon: Palette,
  },
  {
    id: 'performance',
    title: 'Performance otimizada',
    description: 'Carregamento rápido e navegação fluida para melhorar a percepção de valor.',
    icon: Zap,
  },
  {
    id: 'codigo-organizado',
    title: 'Código organizado',
    description: 'Base clara, bem estruturada e fácil de evoluir sem remendos.',
    icon: Code2,
  },
  {
    id: 'estrutura-escalavel',
    title: 'Estrutura escalável',
    description: 'Projeto pronto para crescer com novas páginas, áreas e integrações.',
    icon: Layers3,
  },
];
