import { useState } from 'react';
import { ArrowUpRight, FolderKanban } from 'lucide-react';
import Reveal from './Reveal';
import { projectCategories, projects, type ProjectCategory } from '../data/projects';
import { siteMetadata } from '../data/site';

type ProjectFilter = 'Todos' | ProjectCategory;

const filters: ProjectFilter[] = ['Todos', ...projectCategories];

const sortedProjects = [...projects].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
);

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
                className={`filter-chip ${activeFilter === filter ? 'filter-chip-active' : ''}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        {visibleProjects.length ? (
          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} className="h-full" delay={index * 80}>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-link flex h-full min-w-0 flex-col overflow-hidden p-0"
                  aria-label={`Abrir projeto ${project.title} em nova aba`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-bg-base">
                    <img
                      src={project.previewImage}
                      alt={`Preview do projeto ${project.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                      width={960}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.12)_56%,rgba(15,23,42,0.88))]" />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="status-pill-primary">{project.category}</span>
                      {project.isFeatured ? <span className="status-pill-new">Destaque</span> : null}
                    </div>

                    <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-bg-base/72 text-brand-400 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-400/40">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                          {project.projectType}
                        </p>
                        <h3 className="text-balance font-display text-h3 text-text-primary">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-pretty text-body text-text-secondary">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="chip-base text-text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-body font-semibold text-text-primary">
                          Acessar projeto
                        </span>
                        <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-[0.14em] text-brand-400">
                          Ver online
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
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
