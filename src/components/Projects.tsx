import { useMemo, useState } from 'react';
import { ArrowUpRight, FolderKanban } from 'lucide-react';
import Reveal from './Reveal';
import { projects, type ProjectRecord } from '../data/projects';
import { siteMetadata } from '../data/site';

const ProjectPreview = ({ project }: { project: ProjectRecord }) => {
  const [hasImageError, setHasImageError] = useState(false);

  if (!project.previewImage || hasImageError) {
    return (
      <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(145deg,rgba(59,130,246,0.2),rgba(15,23,42,0.98))] p-5 sm:p-6">
        <p className="text-caption font-semibold uppercase tracking-[0.18em] text-brand-400">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-h3 text-text-primary">{project.name}</h3>
      </div>
    );
  }

  return (
    <img
      src={project.previewImage}
      alt={`Preview do projeto ${project.name}`}
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      loading="lazy"
      decoding="async"
      onError={() => setHasImageError(true)}
    />
  );
};

const Projects = () => {
  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
      ),
    []
  );

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-shell-alt section-anchor">
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {sortedProjects.map((project, index) => {
            const content = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-bg-base/70">
                  <ProjectPreview project={project} />
                  {project.projectUrl ? (
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-end bg-gradient-to-t from-bg-base/10 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-bg-base/78 text-brand-400">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col justify-end p-5">
                  <p className="text-caption font-semibold uppercase tracking-[0.18em] text-brand-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-balance font-display text-h3 text-text-primary">
                    {project.name}
                  </h3>
                </div>
              </>
            );

            return (
              <Reveal key={project.id} delay={index * 70}>
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card-link flex h-full min-w-0 flex-col overflow-hidden p-0"
                    aria-label={`Abrir projeto ${project.name} em nova aba`}
                  >
                    {content}
                  </a>
                ) : (
                  <article className="group card-base flex h-full min-w-0 flex-col overflow-hidden">
                    {content}
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
