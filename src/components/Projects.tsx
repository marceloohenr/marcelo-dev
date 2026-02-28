import { useMemo, useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const isValidSiteUrl = (link?: string) => Boolean(link && /^https?:\/\//i.test(link));

const getPreviewCandidates = (link: string) => {
  const encodedLink = encodeURIComponent(link);
  return [
    `https://s.wordpress.com/mshots/v1/${encodedLink}?w=1200`,
    `https://image.thum.io/get/width/1200/crop/760/noanimate/${link}`,
    `https://image.thum.io/get/width/1200/crop/760/${link}`,
  ];
};

const getSiteHostname = (link: string) => {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
};

type ProjectPreviewProps = {
  title: string;
  link: string;
};

const ProjectPreview = ({ title, link }: ProjectPreviewProps) => {
  const previewCandidates = useMemo(() => getPreviewCandidates(link), [link]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [allSourcesFailed, setAllSourcesFailed] = useState(false);

  const currentSource = previewCandidates[candidateIndex];

  const handleImageError = () => {
    setCandidateIndex((currentIndex) => {
      if (currentIndex < previewCandidates.length - 1) {
        return currentIndex + 1;
      }

      setAllSourcesFailed(true);
      return currentIndex;
    });
  };

  if (allSourcesFailed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
        <Code2 size={46} className="text-brand-400/80" />
        <p className="text-caption font-semibold text-text-secondary">{getSiteHostname(link)}</p>
        <p className="text-caption text-text-muted">Preview indisponível no momento</p>
      </div>
    );
  }

  return (
    <img
      src={currentSource}
      alt={`Preview do projeto ${title}`}
      className="h-full w-full object-cover object-top"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={handleImageError}
    />
  );
};

const Projects = () => {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-shell-alt section-anchor">
      <div className="content-shell">
        <header className="section-header">
          <h2 id="projetos-title" className="section-title">Projetos Realizados</h2>
          <p className="section-subtitle">
            Confira alguns dos projetos desenvolvidos com foco em performance e conversão.
          </p>
        </header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const hasPreview = isValidSiteUrl(project.link);

            return (
              <article key={project.id} className="card-base card-interactive flex h-full flex-col overflow-hidden">
                <div className="aspect-[16/10] border-b border-slate-700/70 bg-gradient-to-br from-brand-600/20 to-bg-elevated">
                  {hasPreview ? (
                    <ProjectPreview title={project.title} link={project.link!} />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Code2 size={58} className="text-brand-400/70" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <h3 className="text-h3 text-text-primary">{project.title}</h3>
                    <p className="mt-1 text-caption font-semibold text-brand-400">{project.client}</p>
                  </div>

                  <p className="mt-4 text-body text-text-secondary">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip-base">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    {hasPreview ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-action"
                        aria-label={`Abrir projeto ${project.title} em nova aba`}
                      >
                        Ver Projeto
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="text-caption text-text-muted">Link público em breve</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
