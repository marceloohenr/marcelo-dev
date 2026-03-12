import type { LucideIcon } from 'lucide-react';
import { BookImage, Building2, Monitor } from 'lucide-react';

export interface Service {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'sites-profissionais',
    eyebrow: 'Presença digital',
    title: 'Sites profissionais',
    description:
      'Sites institucionais, páginas comerciais e páginas de serviço com mensagem clara, visual forte e foco em gerar contato.',
    deliverables: ['Institucionais', 'Landing pages', 'Portfólios'],
    icon: Building2,
  },
  {
    id: 'catalogos-online',
    eyebrow: 'Produtos e vendas',
    title: 'Catálogos online',
    description:
      'Estruturas para apresentar produtos com organização, busca clara, hierarquia visual e apoio direto ao atendimento.',
    deliverables: ['Vitrines digitais', 'Catálogos por categoria', 'Listagens com busca'],
    icon: BookImage,
  },
  {
    id: 'sistemas-web',
    eyebrow: 'Operação e gestão',
    title: 'Sistemas web personalizados',
    description:
      'Painéis, áreas internas e ferramentas sob medida para organizar processos, consultas e rotinas com mais clareza.',
    deliverables: ['Áreas internas', 'Painéis administrativos', 'Fluxos sob medida'],
    icon: Monitor,
  },
];
