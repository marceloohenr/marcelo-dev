import type { LucideIcon } from 'lucide-react';
import { LayoutTemplate, MessageCircle, Sparkles } from 'lucide-react';

interface HeroProof {
  icon: LucideIcon;
  label: string;
}

export const heroProofs: HeroProof[] = [
  {
    icon: MessageCircle,
    label: 'Atendimento direto',
  },
  {
    icon: LayoutTemplate,
    label: 'Estrutura clara',
  },
  {
    icon: Sparkles,
    label: 'Visual profissional',
  },
];
