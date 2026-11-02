import { useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ProjectCard } from '../../components/ProjectCard';

const tabletQuery = '(min-width: 768px)';
const desktopQuery = '(min-width: 1280px)';

function subscribeToViewport(onChange: () => void) {
  const queries = [tabletQuery, desktopQuery].map((query) => window.matchMedia(query));
  queries.forEach((query) => query.addEventListener('change', onChange));
  return () => queries.forEach((query) => query.removeEventListener('change', onChange));
}

function getItemsPerView() {
  return window.matchMedia(desktopQuery).matches ? 4 : window.matchMedia(tabletQuery).matches ? 2 : 1;
}

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = useSyncExternalStore(subscribeToViewport, getItemsPerView, () => 1);
  const reduceMotion = useReducedMotion();
  const maxIndex = Math.max(0, projects.length - itemsPerView);
  const activeIndex = Math.min(currentIndex, maxIndex);

  const next = () => {
    setCurrentIndex(Math.min(activeIndex + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(Math.max(activeIndex - 1, 0));
  };

  const visibleProjects = projects.slice(activeIndex, activeIndex + itemsPerView);

  return (
    <section className="relative" aria-label="Featured projects carousel" aria-roledescription="carousel">
      <div id="featured-project-cards" className="relative flex gap-6 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.slug}-${activeIndex + index}`}
              initial={reduceMotion ? false : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : index * 0.1 }}
              className="flex min-w-0 flex-1 flex-col"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > itemsPerView && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            type="button"
            aria-label="Previous projects"
            aria-controls="featured-project-cards"
            disabled={activeIndex === 0}
            className="rounded-full bg-slate-200 p-3 text-slate-600 transition hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show projects starting at ${i + 1}`}
                aria-current={i === activeIndex ? 'true' : undefined}
                aria-controls="featured-project-cards"
                onClick={() => setCurrentIndex(i)}
                className="flex h-11 w-11 items-center justify-center rounded-full"
              >
                <span className={`h-3 w-3 rounded-full transition ${
                  i === activeIndex
                    ? 'bg-emerald-500'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            type="button"
            aria-label="Next projects"
            aria-controls="featured-project-cards"
            disabled={activeIndex === maxIndex}
            className="rounded-full bg-slate-200 p-3 text-slate-600 transition hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {projects.length === 0 ? 'No projects' : `Projects ${activeIndex + 1} to ${Math.min(activeIndex + itemsPerView, projects.length)} of ${projects.length}`}
      </p>
    </section>
  );
}
