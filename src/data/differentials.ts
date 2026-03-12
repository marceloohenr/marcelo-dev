import type { LucideIcon } from 'lucide-react';
import { LayoutTemplate, MessageCircle, MonitorSmartphone, Sparkles } from 'lucide-react';

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentials: Differential[] = [
  {
    id: 'atendimento-direto',
    title: 'Atendimento direto',
    description: 'Você fala comigo de forma direta, sem repasse e sem ruído no projeto.',
    icon: MessageCircle,
  },
  {
    id: 'visual-profissional',
    title: 'Visual profissional',
    description: 'Layout pensado para transmitir mais confiança e apresentar melhor o negócio.',
    icon: Sparkles,
  },
  {
    id: 'estrutura-clara',
    title: 'Estrutura clara',
    description: 'Seções e conteúdo organizados para facilitar leitura, navegação e contato.',
    icon: LayoutTemplate,
  },
  {
    id: 'entrega-responsiva',
    title: 'Entrega responsiva',
    description: 'Projeto preparado para funcionar bem no desktop e no mobile.',
    icon: MonitorSmartphone,
  },
];
