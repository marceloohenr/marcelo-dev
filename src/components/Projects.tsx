import type { CSSProperties } from 'react';
import { useState } from 'react';
import {
  ArrowUpRight,
  BookImage,
  MonitorSmartphone,
  UserRound,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useProjectStack } from '../hooks/useProjectStack';
import {
  getAvailableProjectCategories,
  projects,
  type ProjectCategory,
} from '../data/projects';
import { siteMetadata } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

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
  elementRef,
}: {
  index: number;
  project: Project;
  stackStyle: CSSProperties;
  elementRef: (element: HTMLAnchorElement | null) => void;
}) => {
  const CategoryIcon = getCategoryIcon(project.category);
  const { t } = useLanguage();
  const isReversed = index % 2 === 1;
  return (
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring project-showcase project-showcase-sticky group"
      aria-label={t('Abrir projeto {project} em nova aba').replace('{project}', project.title)}
      style={stackStyle}
      ref={elementRef}
    >
      <div className="project-showcase-outline" aria-hidden="true" />
      <div className={`project-card-layout ${isReversed ? 'project-card-reversed' : ''}`}>
        <div className="project-copy-panel">
          <div className="project-card-top">
            <span className="status-pill-primary"><CategoryIcon size={13} aria-hidden="true" />{t(project.category)}</span>
            <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="project-card-heading">
            <p className="eyebrow">{t(project.segment)}</p>
            <h3>{project.title}</h3>
          </div>
          <p className="project-description">{t(project.description)}</p>
          <div className="project-focus">
            <p>{t('O objetivo')}</p>
            <p>{t(project.focus)}</p>
          </div>
          <ul className="project-technologies" aria-label={t('Tecnologias do projeto')}>
            {project.technologies.map(tech => <li key={tech} className="chip-base">{tech}</li>)}
          </ul>
          <p className="project-role"><span>{t('Minha atuação')}</span> {t('Design & desenvolvimento')}</p>
          <span className="project-access-cta">{t('Ver projeto')} <ArrowUpRight size={18} aria-hidden="true" /></span>
        </div>
        <div className="project-media-panel">
          <div className="project-showcase-panel">
            <div className="project-browser-bar" aria-hidden="true"><span /><span /><span /><span className="project-browser-label">{new URL(project.projectUrl).hostname}</span><ArrowUpRight size={12} /></div>
            <div className="project-preview">
              <img
                src={project.previewImage}
                alt={t('Tela inicial do projeto {project}, desenvolvido com {technologies}').replace('{project}', project.title).replace('{technologies}', project.technologies.join(', '))}
                style={{ objectPosition: project.imageObjectPosition ?? 'center top' }}
                draggable={false}
                loading="lazy"
                decoding="async"
                width={1280}
                height={800}
              />
            </div>
          </div>
          <div className="project-media-caption"><span>{t('Preview da interface')}</span><span><span className="availability-dot" />{t('Projeto publicado')}</span></div>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Todos');
  const visibleProjects = activeFilter === 'Todos' ? sortedProjects : sortedProjects.filter(project => project.category === activeFilter);
  const { listRef, projectRefs, enabled } = useProjectStack(visibleProjects.length, activeFilter);

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section-shell section-anchor projects-section" tabIndex={-1}>
      <div className="content-shell">
        <div id="experiencia" className="section-anchor" tabIndex={-1}>
          <SectionHeading id="projetos-title" number="03" label={t(siteMetadata.projectsEyebrow)} title={t(siteMetadata.projectsTitle)} description={t(siteMetadata.projectsDescription)} />
        </div>
        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label={t(siteMetadata.projectsFilterLabel)}>
            {filters.map(filter => (
              <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`filter-chip ${activeFilter === filter ? 'filter-chip-active' : ''}`} aria-pressed={activeFilter === filter}>
                {t(filter)}<small aria-hidden="true">{filter === 'Todos' ? projects.length : projects.filter(project => project.category === filter).length}</small>
              </button>
            ))}
          </div>
          <p className="project-count" role="status" aria-live="polite">{t('{visible} de {total} projetos').replace('{visible}', String(visibleProjects.length)).replace('{total}', String(projects.length))}</p>
        </div>
        {visibleProjects.length ? (
          <div ref={listRef} className={`project-stack-list ${enabled ? 'project-stack-list-layered' : 'project-stack-list-flow'} ${visibleProjects.length === 1 ? 'project-stack-list-single' : ''}`}>
            {visibleProjects.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                index={index}
                project={project}
                stackStyle={{
                  '--stack-depth': index,
                  '--stack-offset': `${Math.min(index, 4) * 12}px`,
                  '--stack-scale': '1',
                  '--stack-tilt': '0deg',
                  '--stack-recede-y': '0px',
                } as CSSProperties}
                elementRef={element => { projectRefs.current[index] = element; }}
              />
            ))}
          </div>
        ) : <Reveal><p>{t('Nenhum projeto nesta categoria.')}</p></Reveal>}
        <div className="project-afterword"><p>{t('Seu negócio pode ser o próximo a ganhar uma nova experiência.')}</p><a href="#contato" className="btn-text">{t('Vamos tirar sua ideia do papel')} <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
};

export default Projects;

