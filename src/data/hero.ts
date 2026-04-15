import type { LucideIcon } from 'lucide-react';
import { LayoutTemplate, MessageCircle, Sparkles } from 'lucide-react';

interface HeroProof {
  icon: LucideIcon;
  label: string;
}

export const heroProofs: HeroProof[] = [
  {
    icon: MessageCircle,
    label: 'Contato direto',
  },
  {
    icon: LayoutTemplate,
    label: 'Estrutura bem organizada',
  },
  {
    icon: Sparkles,
    label: 'Visual bem resolvido',
  },
];
