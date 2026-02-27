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
      <div className="h-full w-full flex flex-col items-center justify-center gap-2 px-4 text-center">
        <Code2 size={52} className="text-blue-400 opacity-70" />
        <p className="text-slate-300 text-sm font-medium">{getSiteHostname(link)}</p>
        <p className="text-slate-500 text-xs">Preview indisponível no momento</p>
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
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Projetos Realizados
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos desenvolvidos com foco em performance e conversão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const hasPreview = isValidSiteUrl(project.link);

            return (
              <div
                key={project.id}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-slate-800">
                  {hasPreview ? (
                    <ProjectPreview title={project.title} link={project.link!} />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <Code2
                        size={64}
                        className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-100 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">{project.client}</p>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {hasPreview ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group/link"
                    >
                      Ver Projeto
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  ) : (
                    <p className="text-slate-500 text-sm">Link público em breve</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

