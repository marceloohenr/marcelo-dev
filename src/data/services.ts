import type { LucideIcon } from 'lucide-react';
import { BookImage, Building2, Monitor } from 'lucide-react';

export interface Service {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'sites-profissionais',
    eyebrow: 'Presença digital',
    title: 'Sites profissionais',
    description:
      'Sites institucionais e páginas comerciais com mensagem clara, visual forte e foco em gerar contato.',
    icon: Building2,
  },
  {
    id: 'catalogos-online',
    eyebrow: 'Produtos e vendas',
    title: 'Catálogos online',
    description:
      'Estruturas para apresentar produtos com organização, boa navegação e apoio direto ao atendimento.',
    icon: BookImage,
  },
  {
    id: 'sistemas-web',
    eyebrow: 'Operação e gestão',
    title: 'Sistemas web personalizados',
    description:
      'Painéis, áreas internas e ferramentas sob medida para organizar processos com mais clareza e eficiência.',
    icon: Monitor,
  },
];
