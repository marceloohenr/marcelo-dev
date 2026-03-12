import { useState } from 'react';
import {
  ArrowUpRight,
  BookImage,
  FolderKanban,
  MonitorSmartphone,
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

const sortedProjects = [...projects].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
);
const availableCategories = getAvailableProjectCategories(sortedProjects);
const filters: ProjectFilter[] = ['Todos', ...availableCategories];
const categoryIcons: Record<ProjectCategory, typeof UserRound> = {
  Portfólio: UserRound,
  Catálogos: BookImage,
  Sistemas: MonitorSmartphone,
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Todos');

  const visibleProjects =
    activeFilter === 'Todos'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter);

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
            <div
              className="mb-8 flex flex-wrap items-center justify-center gap-3"
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
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category];

              return (
                <Reveal key={project.id} className="h-full" delay={index * 80}>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card-link flex h-full min-w-0 flex-col overflow-hidden p-0"
                    aria-label={`Abrir projeto ${project.title} em nova aba`}
                  >
                    <div className="border-b border-white/10 p-5 sm:p-6">
                      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-bg-base shadow-[0_22px_48px_-36px_rgba(8,17,29,0.95)]">
                        <div className="flex items-center gap-1.5 border-b border-white/10 bg-bg-base/92 px-3 py-2">
                          <span className="h-2 w-2 rounded-full bg-rose-400/85" aria-hidden="true" />
                          <span className="h-2 w-2 rounded-full bg-amber-300/85" aria-hidden="true" />
                          <span
                            className="h-2 w-2 rounded-full bg-emerald-400/85"
                            aria-hidden="true"
                          />
                          <span className="ml-2 inline-flex items-center gap-2 truncate rounded-full border border-white/10 bg-bg-base/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-text-muted">
                            <CategoryIcon
                              size={12}
                              aria-hidden="true"
                              className="text-brand-300"
                            />
                            {project.category}
                          </span>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={project.previewImage}
                            alt={`Preview do projeto ${project.title}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ objectPosition: project.imageObjectPosition ?? 'center top' }}
                            loading="lazy"
                            decoding="async"
                            width={960}
                            height={600}
                            sizes="(min-width: 1536px) 22rem, (min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-base/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
                      <div className="space-y-5">
                        <div className="space-y-2.5">
                          <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                            {project.segment}
                          </p>
                          <h3 className="text-balance font-display text-h3 text-text-primary">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-pretty text-[0.98rem] leading-[1.72] text-text-secondary">
                          {project.description}
                        </p>

                        <div className="info-card space-y-2.5">
                          <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                            Foco do projeto
                          </p>
                          <p className="text-[0.98rem] font-medium leading-[1.65] text-text-primary">
                            {project.focus}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <span key={tech} className="chip-base text-text-primary">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-body font-semibold text-text-primary">
                            Abrir projeto
                          </span>
                          <ArrowUpRight
                            size={16}
                            aria-hidden="true"
                            className="text-brand-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </Reveal>
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
                A estrutura já está pronta para receber novos trabalhos. Basta adicionar um novo item
                na base central de projetos.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
