import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
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
import { prefersReducedMotion } from '../utils/motion';

type ProjectFilter = 'Todos' | ProjectCategory;

const normalizeLoopOffset = (value: number, loopWidth: number, baseOffset: number) => {
  if (!Number.isFinite(loopWidth) || loopWidth <= 0) {
    return 0;
  }

  return (((value - baseOffset) % loopWidth) + loopWidth) % loopWidth + baseOffset;
};

const applyMarqueeOffset = ({
  baseOffset,
  loopWidth,
  shouldAnimate,
  track,
  value,
}: {
  baseOffset: number;
  loopWidth: number;
  shouldAnimate: boolean;
  track: HTMLDivElement | null;
  value: number;
}) => {
  const nextValue = shouldAnimate ? normalizeLoopOffset(value, loopWidth, baseOffset) : 0;

  if (track) {
    track.style.transform = `translate3d(${-nextValue}px, 0, 0)`;
  }

  return nextValue;
};

const getLoopBaseOffset = (loopWidth: number, shouldAnimate: boolean, isCompactViewport: boolean) =>
  shouldAnimate && !isCompactViewport ? loopWidth : 0;

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
  const [isDragging, setIsDragging] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const lastAnimationTimestampRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragMovedRef = useRef(false);
  const activePointerIdRef = useRef<number | null>(null);
  const dragPhaseRef = useRef<'idle' | 'pending' | 'dragging'>('idle');

  const visibleProjects =
    activeFilter === 'Todos'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter);

  const shouldAnimate = visibleProjects.length > 1 && !prefersReducedMotion();
  const marqueeSetCount = shouldAnimate ? (isCompactViewport ? 2 : 3) : 1;
  const marqueeProjects = Array.from({ length: marqueeSetCount }, () => visibleProjects).flat();
  const projectLoopDuration = isCompactViewport
    ? Math.max(30, visibleProjects.length * 10)
    : Math.max(24, visibleProjects.length * 8);
  const horizontalIntentThreshold = isCompactViewport ? 8 : 10;

  useEffect(() => {
    // Ajusta o comportamento do carrossel entre mobile e desktop.
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateViewportMode = (event?: MediaQueryListEvent) => {
      setIsCompactViewport(event ? event.matches : mediaQuery.matches);
    };

    updateViewportMode();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateViewportMode);

      return () => {
        mediaQuery.removeEventListener('change', updateViewportMode);
      };
    }

    mediaQuery.addListener(updateViewportMode);

    return () => {
      mediaQuery.removeListener(updateViewportMode);
    };
  }, []);

  useEffect(() => {
    // Mede a largura útil do loop para manter o carrossel contínuo.
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const measureLoopWidth = () => {
      const nextLoopWidth = shouldAnimate ? track.scrollWidth / marqueeSetCount : 0;
      const baseOffset = getLoopBaseOffset(nextLoopWidth, shouldAnimate, isCompactViewport);

      loopWidthRef.current = nextLoopWidth;
      offsetRef.current = applyMarqueeOffset({
        baseOffset,
        loopWidth: nextLoopWidth,
        shouldAnimate,
        track,
        value: offsetRef.current,
      });
    };

    measureLoopWidth();

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        measureLoopWidth();
      });

      resizeObserver.observe(track);

      if (viewportRef.current) {
        resizeObserver.observe(viewportRef.current);
      }
    }

    window.addEventListener('resize', measureLoopWidth);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', measureLoopWidth);
    };
  }, [activeFilter, isCompactViewport, marqueeSetCount, shouldAnimate, visibleProjects.length]);

  useEffect(() => {
    // Reinicia a posição quando o filtro muda.
    const baseOffset = getLoopBaseOffset(loopWidthRef.current, shouldAnimate, isCompactViewport);

    offsetRef.current = applyMarqueeOffset({
      baseOffset,
      loopWidth: loopWidthRef.current,
      shouldAnimate,
      track: trackRef.current,
      value: baseOffset,
    });
    lastAnimationTimestampRef.current = null;
  }, [activeFilter, isCompactViewport, shouldAnimate]);

  useEffect(() => {
    // Faz a rolagem automática quando há mais de um projeto visível.
    if (!shouldAnimate || isInteracting) {
      lastAnimationTimestampRef.current = null;
      return undefined;
    }

    const tick = (timestamp: number) => {
      const loopWidth = loopWidthRef.current;

      if (loopWidth > 0) {
        const previousTimestamp = lastAnimationTimestampRef.current ?? timestamp;
        const delta = Math.min(timestamp - previousTimestamp, 64);
        const pixelsPerMillisecond = loopWidth / (projectLoopDuration * 1000);

        offsetRef.current = applyMarqueeOffset({
          baseOffset: getLoopBaseOffset(loopWidth, true, isCompactViewport),
          loopWidth,
          shouldAnimate: true,
          track: trackRef.current,
          value: offsetRef.current + delta * pixelsPerMillisecond,
        });
      }

      lastAnimationTimestampRef.current = timestamp;
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== undefined) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = undefined;
      lastAnimationTimestampRef.current = null;
    };
  }, [isCompactViewport, isInteracting, projectLoopDuration, shouldAnimate]);

  const pauseAutoLoop = () => {
    if (animationFrameRef.current !== undefined) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = undefined;
    lastAnimationTimestampRef.current = null;
  };

  const finishDrag = (pointerId?: number) => {
    const viewport = viewportRef.current;

    if (
      pointerId !== undefined &&
      viewport &&
      typeof viewport.hasPointerCapture === 'function' &&
      viewport.hasPointerCapture(pointerId) &&
      typeof viewport.releasePointerCapture === 'function'
    ) {
      viewport.releasePointerCapture(pointerId);
    }

    activePointerIdRef.current = null;
    dragPhaseRef.current = 'idle';
    dragStartXRef.current = 0;
    dragStartYRef.current = 0;
    dragStartOffsetRef.current = offsetRef.current;
    setIsInteracting(false);
    setIsDragging(false);
    lastAnimationTimestampRef.current = null;
  };

  const beginDragInteraction = (pointerId: number) => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    pauseAutoLoop();
    dragPhaseRef.current = 'dragging';
    lastAnimationTimestampRef.current = null;
    setIsDragging(true);

    if (typeof viewport.setPointerCapture === 'function') {
      viewport.setPointerCapture(pointerId);
    }
  };

  const handleMarqueePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!shouldAnimate || (event.pointerType === 'mouse' && event.button !== 0)) {
      return;
    }

    activePointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragStartOffsetRef.current = offsetRef.current;
    dragMovedRef.current = false;
    setIsInteracting(true);
    pauseAutoLoop();

    if (event.pointerType === 'touch') {
      dragPhaseRef.current = 'pending';
      return;
    }

    beginDragInteraction(event.pointerId);
  };

  const handleMarqueePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!shouldAnimate || activePointerIdRef.current !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;
    const deltaY = event.clientY - dragStartYRef.current;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (dragPhaseRef.current === 'pending') {
      if (absDeltaY > horizontalIntentThreshold && absDeltaY > absDeltaX) {
        finishDrag();
        return;
      }

      if (absDeltaX <= horizontalIntentThreshold || absDeltaX <= absDeltaY) {
        return;
      }

      dragStartXRef.current = event.clientX;
      dragStartYRef.current = event.clientY;
      dragStartOffsetRef.current = offsetRef.current;
      beginDragInteraction(event.pointerId);
    }

    if (dragPhaseRef.current !== 'dragging') {
      return;
    }

    if (absDeltaX > 4) {
      dragMovedRef.current = true;
      event.preventDefault();
    }

    offsetRef.current = applyMarqueeOffset({
      baseOffset: getLoopBaseOffset(loopWidthRef.current, true, isCompactViewport),
      loopWidth: loopWidthRef.current,
      shouldAnimate: true,
      track: trackRef.current,
      value: dragStartOffsetRef.current - deltaX,
    });
  };

  const handleMarqueePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (activePointerIdRef.current !== event.pointerId) {
      return;
    }

    finishDrag(event.pointerId);
  };

  const handleMarqueePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (activePointerIdRef.current !== event.pointerId) {
      return;
    }

    finishDrag(event.pointerId);
  };

  const handleMarqueeClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!dragMovedRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    dragMovedRef.current = false;
  };

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
          <div className="project-marquee">
            {/* Área arrastável com os cards de projeto */}
            <div
              ref={viewportRef}
              className={`project-marquee-viewport ${
                shouldAnimate
                  ? 'project-marquee-viewport-draggable'
                  : isCompactViewport
                    ? 'project-marquee-viewport-mobile'
                    : ''
              } ${isDragging ? 'project-marquee-viewport-dragging' : ''}`.trim()}
              onPointerDown={handleMarqueePointerDown}
              onPointerMove={handleMarqueePointerMove}
              onPointerUp={handleMarqueePointerUp}
              onPointerCancel={handleMarqueePointerCancel}
              onClickCapture={handleMarqueeClickCapture}
            >
              <div
                ref={trackRef}
                className={`project-marquee-track ${
                  shouldAnimate
                    ? ''
                    : isCompactViewport
                      ? 'project-marquee-track-mobile'
                      : 'project-marquee-track-static'
                }`.trim()}
              >
                {marqueeProjects.map((project, index) => {
                  const CategoryIcon = categoryIcons[project.category];
                  const projectIndex = index % visibleProjects.length;
                  const isReversed = projectIndex % 2 === 1;
                  const isClone =
                    shouldAnimate &&
                    (isCompactViewport
                      ? index >= visibleProjects.length
                      : index < visibleProjects.length ||
                        index >= visibleProjects.length * 2);
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
                    <div
                      key={`${project.id}-${index}`}
                      className="project-marquee-slide"
                      aria-hidden={isClone}
                    >
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring project-showcase group block min-w-0"
                        aria-label={`Abrir projeto ${project.title} em nova aba`}
                        tabIndex={isClone ? -1 : 0}
                      >
                        <div className="project-showcase-outline" aria-hidden="true" />
                        <div className="grid items-start gap-6 sm:gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-12">
                          <div
                            className={`order-2 space-y-5 sm:space-y-6 lg:space-y-7 ${
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
                              <p className="max-w-none text-pretty text-[0.98rem] leading-[1.75] text-text-secondary sm:max-w-[34ch] sm:text-[1.05rem]">
                                {project.description}
                              </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                              <div className="project-metric">
                                <p className="text-caption uppercase tracking-[0.16em] text-text-muted">
                                  Foco principal
                                </p>
                                <p className="mt-3 text-[1rem] leading-[1.7] text-text-primary">
                                  {project.focus}
                                </p>
                              </div>

                              <div className="project-metric">
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
                              <span className="inline-flex items-center gap-2 text-body font-semibold text-text-primary">
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
                            className={`order-1 space-y-3 sm:space-y-4 ${
                              isReversed ? 'lg:order-1' : 'lg:order-2'
                            }`}
                          >
                            <div className="project-showcase-panel overflow-hidden">
                              <div className="mt-1 flex items-center gap-1 border-b border-white/10 px-2.5 py-1.5 sm:mt-1.5 sm:px-3 sm:py-1.5">
                                <span
                                  className="h-2 w-2 rounded-full bg-rose-400/85"
                                  aria-hidden="true"
                                />
                                <span
                                  className="h-2 w-2 rounded-full bg-amber-300/85"
                                  aria-hidden="true"
                                />
                                <span
                                  className="h-2 w-2 rounded-full bg-emerald-400/85"
                                  aria-hidden="true"
                                />
                                <span className="ml-1.5 inline-flex min-w-0 items-center gap-1.5 truncate rounded-full border border-white/10 bg-bg-base/55 px-2.5 py-0.5 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-text-muted">
                                  <CategoryIcon
                                    size={12}
                                    aria-hidden="true"
                                    className="shrink-0 text-brand-300"
                                  />
                                  <span className="truncate">{project.title}</span>
                                </span>
                              </div>

                              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.3rem] border border-white/10 bg-bg-base/80 sm:aspect-[16/10] sm:rounded-[1.45rem]">
                                <img
                                  src={project.previewImage}
                                  alt={`Preview do projeto ${project.title}`}
                                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                  style={{
                                    objectPosition: project.imageObjectPosition ?? 'center top',
                                  }}
                                  draggable={false}
                                  loading="lazy"
                                  decoding="async"
                                  width={1280}
                                  height={800}
                                  sizes="(min-width: 1280px) 46rem, (min-width: 1024px) 54vw, 100vw"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0)_44%,rgba(8,17,29,0.16)_100%)]" />
                              </div>
                            </div>

                            <div className="grid gap-3 min-[560px]:grid-cols-3">
                              {projectFacts.map((fact) => {
                                const FactIcon = fact.icon;

                                return (
                                  <div key={fact.label} className="project-metric">
                                    <div className="inline-flex items-center gap-2 text-caption uppercase tracking-[0.14em] text-text-muted">
                                      <FactIcon
                                        size={14}
                                        aria-hidden="true"
                                        className="text-brand-300"
                                      />
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
                    </div>
                  );
                })}
              </div>
            </div>
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
