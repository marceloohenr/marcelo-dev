import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, MessageCircle, Sparkles } from 'lucide-react';

export interface HeroProof {
  icon: LucideIcon;
  label: string;
}

export const heroProofs: HeroProof[] = [
  {
    icon: Sparkles,
    label: 'Entrega',
  },
  {
    icon: BadgeCheck,
    label: 'Qualidade',
  },
  {
    icon: MessageCircle,
    label: 'Atendimento',
  },
];
