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
      'Páginas para apresentar serviço, reforçar autoridade e facilitar contato com mais clareza.',
    deliverables: ['Institucionais', 'Landing pages', 'Portfólios'],
    icon: Building2,
  },
  {
    id: 'catalogos-online',
    eyebrow: 'Produtos e vendas',
    title: 'Catálogos online',
    description:
      'Estruturas para organizar produtos, destacar categorias e apoiar o atendimento comercial.',
    deliverables: ['Vitrines digitais', 'Catálogos por categoria', 'Listagens com busca'],
    icon: BookImage,
  },
  {
    id: 'sistemas-web',
    eyebrow: 'Operação e gestão',
    title: 'Sistemas web personalizados',
    description:
      'Painéis e áreas internas para reunir rotinas, consultas e fluxos em uma interface clara.',
    deliverables: ['Áreas internas', 'Painéis administrativos', 'Fluxos sob medida'],
    icon: Monitor,
  },
];
