import type { LucideIcon } from 'lucide-react';
import { LayoutTemplate, MessageCircle, MonitorSmartphone, Sparkles } from 'lucide-react';

interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentials: Differential[] = [
  {
    id: 'atendimento-direto',
    title: 'Contato sem intermediário',
    description: 'Você fala direto comigo do início do projeto até os ajustes finais.',
    icon: MessageCircle,
  },
  {
    id: 'clareza-na-estrutura',
    title: 'Estrutura pensada com clareza',
    description: 'As seções são organizadas para a pessoa entender rápido o que está sendo apresentado.',
    icon: LayoutTemplate,
  },
  {
    id: 'visual-que-passa-confianca',
    title: 'Visual que valoriza o projeto',
    description: 'O layout é construído para destacar o que importa e deixar a navegação mais agradável.',
    icon: Sparkles,
  },
  {
    id: 'desktop-e-mobile-bem-resolvidos',
    title: 'Desktop e mobile bem resolvidos',
    description: 'A interface é ajustada para funcionar bem tanto no celular quanto em telas maiores.',
    icon: MonitorSmartphone,
  },
];
