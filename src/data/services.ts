import type { LucideIcon } from 'lucide-react';
import { BookImage, Building2, Monitor } from 'lucide-react';

interface Service {
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
    title: 'Criação de sites e landing pages',
    description:
      'Landing pages para campanhas, sites institucionais e portfólios responsivos. Design UI/UX, carregamento rápido e estrutura pensada para transformar visitas em contatos.',
    deliverables: ['Institucionais', 'Landing pages', 'Portfólios profissionais'],
    icon: Building2,
  },
  {
    id: 'catalogos-online',
    eyebrow: 'Produtos e vendas',
    title: 'Catálogos online',
    description:
      'Vitrines digitais e catálogos online com UI/UX, organização por categorias e navegação simples para melhorar o atendimento comercial.',
    deliverables: ['Vitrines digitais', 'Catálogos por categoria', 'Busca e filtros'],
    icon: BookImage,
  },
  {
    id: 'sistemas-web',
    eyebrow: 'Operação e gestão',
    title: 'Sistemas web personalizados',
    description:
      'Desenvolvimento de sistemas web personalizados, dashboards e painéis administrativos com React, TypeScript e interfaces escaláveis.',
    deliverables: ['Áreas internas', 'Dashboards', 'Fluxos sob medida'],
    icon: Monitor,
  },
];
