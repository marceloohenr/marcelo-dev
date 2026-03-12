import type { LucideIcon } from 'lucide-react';
import { BookImage, Building2, Monitor } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'sites-profissionais',
    title: 'Sites profissionais',
    description:
      'Sites institucionais e páginas comerciais com visual moderno, mensagem clara e foco em contato.',
    icon: Building2,
  },
  {
    id: 'catalogos-online',
    title: 'Catálogos online',
    description:
      'Estruturas para apresentar produtos com organização, boa navegação e apoio direto ao atendimento.',
    icon: BookImage,
  },
  {
    id: 'sistemas-web',
    title: 'Sistemas web personalizados',
    description:
      'Painéis, áreas internas e ferramentas sob medida para organizar processos e operar com mais eficiência.',
    icon: Monitor,
  },
];
