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
    title: 'Atendimento direto',
    description: 'Você fala direto comigo do início aos ajustes finais.',
    icon: MessageCircle,
  },
  {
    id: 'clareza-na-estrutura',
    title: 'Clareza na estrutura',
    description: 'Seções pensadas para o visitante entender rápido o que está sendo oferecido.',
    icon: LayoutTemplate,
  },
  {
    id: 'visual-que-passa-confianca',
    title: 'Visual que passa confiança',
    description: 'Interface organizada para valorizar serviço, produto ou operação.',
    icon: Sparkles,
  },
  {
    id: 'desktop-e-mobile-bem-resolvidos',
    title: 'Desktop e mobile bem resolvidos',
    description: 'Layout adaptado para leitura, navegação e contato nas telas mais usadas.',
    icon: MonitorSmartphone,
  },
];
