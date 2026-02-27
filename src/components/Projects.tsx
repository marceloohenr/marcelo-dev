import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/projects';

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
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-slate-800 flex items-center justify-center">
                <Code2 size={64} className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">{project.client}</p>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

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

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group/link"
                  >
                    Ver Projeto
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
