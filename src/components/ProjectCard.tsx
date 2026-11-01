import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { Badge } from './Badge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-emerald-200 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-500">
          <span>{project.category}</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>View details</span>
        <Link
          to={`/projects/${project.slug}`}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition group-hover:border-emerald-200 group-hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200"
        >
          Open
        </Link>
      </div>
    </article>
  );
}
