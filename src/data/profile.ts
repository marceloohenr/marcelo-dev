import type { LucideIcon } from 'lucide-react';
import { Code2, PenTool, GitBranch, Search, Server, Workflow, MessageSquare, Rocket, ShieldCheck, RefreshCw } from 'lucide-react';
import { Css3Icon, Html5Icon, JavaScriptIcon, NextJsIcon, NodeJsIcon, ReactIcon, TailwindIcon, TypeScriptIcon } from '../components/TechIcons';

type Icon = LucideIcon | typeof ReactIcon;
interface TechnologyGroup {
  id: string;
  title: string;
  description: string;
  items: { name: string; icon: Icon }[];
}

export const technologyGroups: TechnologyGroup[] = [
  { id: 'linguagens', title: 'A base de tudo.', description: 'Linguagens', items: [
    { name: 'TypeScript', icon: TypeScriptIcon }, { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'HTML5', icon: Html5Icon }, { name: 'CSS3', icon: Css3Icon },
  ] },
  { id: 'interfaces', title: 'O que se sente.', description: 'Interfaces', items: [
    { name: 'React', icon: ReactIcon }, { name: 'Tailwind CSS', icon: TailwindIcon }, { name: 'UI/UX', icon: PenTool },
  ] },
  { id: 'aplicacoes', title: 'O que faz funcionar.', description: 'Aplicações', items: [
    { name: 'Next.js', icon: NextJsIcon }, { name: 'Node.js', icon: NodeJsIcon }, { name: 'Sistemas web', icon: Workflow },
  ] },
  { id: 'entrega', title: 'Do código ao ar.', description: 'Entrega e qualidade', items: [
    { name: 'Git', icon: GitBranch }, { name: 'Vite', icon: Code2 }, { name: 'VPS', icon: Server }, { name: 'SEO técnico', icon: Search },
  ] },
];

interface ProcessStep { id: string; title: string; description: string; icon: Icon }

export const processSteps: ProcessStep[] = [
  { id: 'entender', title: 'Entender', description: 'Uma conversa para conhecer seu negócio, seu público e o que precisa funcionar melhor.', icon: MessageSquare },
  { id: 'planejar', title: 'Planejar', description: 'Organizar escopo, conteúdo e experiência antes de começar a construir.', icon: PenTool },
  { id: 'desenvolver', title: 'Desenvolver', description: 'Transformar a direção visual em interfaces e funcionalidades feitas para o seu projeto.', icon: Code2 },
  { id: 'testar', title: 'Testar', description: 'Conferir navegação, acessibilidade, velocidade e comportamento em diferentes telas.', icon: ShieldCheck },
  { id: 'publicar', title: 'Publicar', description: 'Preparar o ambiente, colocar o projeto no ar e verificar se tudo está funcionando.', icon: Rocket },
  { id: 'evoluir', title: 'Evoluir', description: 'Acompanhar o uso e conversar sobre ajustes e próximos passos conforme a necessidade.', icon: RefreshCw },
];
