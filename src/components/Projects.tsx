import type { CSSProperties } from 'react';
import { useState } from 'react';
import {
  ArrowUpRight,
  BookImage,
  FolderKanban,
  Layers3,
  MonitorSmartphone,
  Target,
  UserRound,
} from 'lucide-react';
import Reveal from './Reveal';
import {
  getAvailableProjectCategories,
  projects,
  type ProjectCategory,
} from '../data/projects';
import { siteMetadata } from '../data/site';

type ProjectFilter = 'Todos' | ProjectCategory;
type Project = (typeof projects)[number];

const sortedProjects = [...projects].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
);
const availableCategories = getAvailableProjectCategories(sortedProjects);
const filters: ProjectFilter[] = ['Todos', ...availableCategories];
const getCategoryIcon = (category: ProjectCategory) => {
  if (category.startsWith('Cat')) return BookImage;
  if (category === 'Sistemas') return MonitorSmartphone;
  return UserRound;
};

const ProjectShowcase = ({
  index,
  project,
  stackStyle,
}: {
  index: number;
  project: Project;
  stackStyle: CSSProperties;
}) => {
  const CategoryIcon = getCategoryIcon(project.category);
  const isReversed = index % 2 === 1;
  const projectFacts = [
    {
      label: 'Categoria',
      value: project.category,
      icon: CategoryIcon,
    },
    {
      label: 'Segmento',
      value: project.segment,
      icon: Target,
    },
    {
      label: 'Stack',
      value: project.technologies.slice(0, 2).join(' + '),
      icon: Layers3,
    },
  ] as const;

  return (
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring project-showcase project-showcase-sticky group block min-w-0"
      aria-label={`Abrir projeto ${project.title} em nova aba`}
      style={stackStyle}
    >
      <div className="project-showcase-outline" aria-hidden="true" />
      <div className="grid items-start gap-6 sm:gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-12">
        <div
          className={`project-copy-panel order-2 space-y-5 sm:space-y-6 lg:space-y-7 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="status-pill-primary">
              <CategoryIcon size={14} aria-hidden="true" />
              {project.category}
            </span>
          </div>

          <div className="space-y-4 lg:space-y-5">
            <p className="text-caption uppercase tracking-[0.18em] text-brand-300">
              {project.segment}
            </p>
            <h3 className="max-w-[13ch] text-balance font-sans text-[clamp(1.75rem,9vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-text-primary sm:text-[clamp(2rem,6.8vw,3.8rem)]">
              {project.title}
            </h3>
            <p className="project-description max-w-none text-pretty text-[0.98rem] leading-[1.75] text-text-secondary sm:max-w-[34ch] sm:text-[1.05rem]">
              {project.description}
            </p>
            <p className="project-focus-inline text-[0.78rem] font-medium leading-relaxed text-text-secondary">
              {project.focus}
            </p>
          </div>

          <div className="project-detail-grid grid gap-3 sm:grid-cols-2">
            <div className="project-metric project-focus-card">
              <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                Foco principal
              </p>
              <p className="mt-3 text-[1rem] leading-[1.7] text-text-primary">{project.focus}</p>
            </div>

            <div className="project-metric project-tech-card">
              <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                Tecnologias
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="chip-base border-brand-300/10 bg-brand-500/10 text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <span className="status-pill border-white/10 bg-white/[0.04] text-text-secondary">
              Acesso online
            </span>
            <span className="project-access-cta inline-flex items-center gap-2 text-body font-semibold text-text-primary">
              Confira o projeto
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="text-brand-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </div>
        </div>

        <div
          className={`project-media-panel order-1 space-y-3 sm:space-y-4 ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="project-showcase-panel overflow-hidden">
            <div className="mt-1 flex items-center gap-1 border-b border-white/10 px-2.5 py-1.5 sm:mt-1.5 sm:px-3 sm:py-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400/85" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-amber-300/85" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/85" aria-hidden="true" />
              <span className="ml-1.5 inline-flex min-w-0 items-center gap-1.5 truncate rounded-full border border-white/10 bg-bg-base/55 px-2.5 py-0.5 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-text-muted">
                <CategoryIcon size={12} aria-hidden="true" className="shrink-0 text-brand-300" />
                <span className="truncate">{project.title}</span>
              </span>
            </div>

            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.3rem] border border-white/10 bg-bg-base/80 sm:aspect-[16/10] sm:rounded-[1.45rem]">
              <img
                                src={project.previewImage}
                                alt={`Preview do projeto ${project.title}, case de desenvolvimento web com ${project.technologies.join(', ')}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                style={{
                  objectPosition: project.imageObjectPosition ?? 'center top',
                }}
                draggable={false}
                loading="lazy"
                decoding="async"
                width={1280}
                height={800}
                sizes="(min-width: 1280px) 46rem, (min-width: 1024px) 54vw, (min-width: 768px) 88vw, 92vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0)_44%,rgba(8,17,29,0.16)_100%)]" />
            </div>
          </div>

          <div className="project-facts-grid grid gap-3 min-[560px]:grid-cols-3">
            {projectFacts.map((fact) => {
              const FactIcon = fact.icon;

              return (
                <div key={fact.label} className="project-metric">
                  <div className="inline-flex items-center gap-2 text-caption uppercase tracking-[0.14em] text-text-muted">
                    <FactIcon size={14} aria-hidden="true" className="text-brand-300" />
                    <span>{fact.label}</span>
                  </div>
                  <p className="mt-3 text-balance text-[1rem] font-semibold leading-[1.45] text-text-primary">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Todos');

  const visibleProjects =
    activeFilter === 'Todos'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter);
  const shouldUseStackEffect = visibleProjects.length > 1;

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="section-shell-alt section-anchor"
    >
      <div className="content-shell">
        <Reveal>
          <header className="section-header">
            <div className="section-eyebrow">
              <FolderKanban size={16} aria-hidden="true" />
              <span>{siteMetadata.projectsEyebrow}</span>
            </div>
            <h2 id="projetos-title" className="section-title">
              {siteMetadata.projectsTitle}
            </h2>
            <p className="section-subtitle text-pretty">{siteMetadata.projectsDescription}</p>
          </header>
        </Reveal>

        {availableCategories.length > 1 ? (
          <Reveal delay={90}>
            {/* Filtros por tipo de projeto */}
            <div
              className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10 lg:mb-12"
              aria-label={siteMetadata.projectsFilterLabel}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-chip gap-2 ${
                    activeFilter === filter ? 'filter-chip-active' : ''
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  <span>{filter}</span>
                </button>
              ))}
            </div>
          </Reveal>
        ) : null}

        {visibleProjects.length ? (
          <div
            className={`project-stack-list ${
              shouldUseStackEffect ? 'project-stack-list-layered' : 'project-stack-list-single'
            }`}
            aria-live="polite"
          >
            {visibleProjects.map((project, index) => {
              const stackStyle = {
                '--stack-depth': index,
                '--stack-offset': shouldUseStackEffect ? `${Math.min(index, 4) * 12}px` : '0px',
                '--stack-progress': 1,
                '--stack-recede': 0,
                '--stack-visibility': 1,
                '--stack-settle': 1,
              } as CSSProperties;

              return (
                <ProjectShowcase
                  key={project.id}
                  index={index}
                  project={project}
                  stackStyle={stackStyle}
                />
              );
            })}
          </div>
        ) : (
          <Reveal>
            <div className="card-balanced items-center text-center">
              <h3 className="text-balance font-display text-h3 text-text-primary">
                Ainda não há projetos publicados nesta categoria.
              </h3>
              <p className="card-copy mt-3 text-pretty text-body text-text-secondary">
                A estrutura já está pronta para receber novos trabalhos. Basta adicionar um novo
                item na base central de projetos.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Projects;

