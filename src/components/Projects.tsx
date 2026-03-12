import { ArrowUpRight, FolderKanban } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data/projects';
import { siteMetadata } from '../data/site';

const sortedProjects = [...projects].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
);

const Projects = () => {
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

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <Reveal key={project.id} className="h-full" delay={index * 90}>
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
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,22,0.02),rgba(6,11,22,0.12)_58%,rgba(6,11,22,0.88))]" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="status-pill-primary">{project.category}</span>
                    {project.isNew ? <span className="status-pill-new">Novo projeto</span> : null}
                  </div>

                  <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-bg-base/[0.72] text-brand-300 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-300/[0.42]">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6">
                  <div className="space-y-3 text-left">
                    <p className="text-caption uppercase tracking-[0.18em] text-text-muted">
                      Projeto publicado
                    </p>
                    <h3 className="text-balance font-display text-h3 text-text-primary">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
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
