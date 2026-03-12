import { ArrowUpRight, FolderKanban } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data/projects';
import { siteMetadata } from '../data/site';

const sortedProjects = [...projects].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
);

const Projects = () => {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-shell-alt section-anchor">
      <div className="content-shell">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-end lg:justify-between">
          <Reveal>
            <header className="max-w-3xl">
              <div className="section-eyebrow">
                <FolderKanban size={16} aria-hidden="true" />
                <span>{siteMetadata.projectsEyebrow}</span>
              </div>
              <h2 id="projetos-title" className="section-title text-left">
                {siteMetadata.projectsTitle}
              </h2>
              <p className="section-subtitle mx-0 max-w-2xl text-left text-pretty">
                {siteMetadata.projectsDescription}
              </p>
            </header>
          </Reveal>

          <Reveal delay={90}>
            <div className="card-base p-5 sm:p-6">
              <p className="text-caption uppercase tracking-[0.18em] text-brand-300">
                Prova visual
              </p>
              <p className="mt-3 text-pretty text-body text-text-secondary">
                Cada card abaixo usa screenshot real do projeto publicado para transmitir mais
                confiança e padrão profissional.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-link flex h-full min-w-0 flex-col overflow-hidden p-0"
                aria-label={`Abrir projeto ${project.name} em nova aba`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-bg-base">
                  <img
                    src={project.previewImage}
                    alt={`Preview do projeto ${project.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,22,0.04),rgba(6,11,22,0.14)_55%,rgba(6,11,22,0.85))]" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="status-pill-primary">{project.category}</span>
                    {project.isNew ? <span className="status-pill-new">Novo projeto</span> : null}
                  </div>

                  <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-bg-base/[0.72] text-brand-300 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-300/[0.42]">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-5">
                  <div>
                    <p className="text-caption uppercase tracking-[0.18em] text-text-muted">
                      Projeto publicado
                    </p>
                    <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                      {project.name}
                    </h3>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4">
                    <span className="text-body font-medium text-text-secondary">
                      {project.ctaLabel ?? 'Ver projeto'}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/[0.22] bg-brand-400/10 px-3 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-brand-300">
                      Abrir
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
