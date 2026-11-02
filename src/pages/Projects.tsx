import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectGrid } from '../features/projects/ProjectGrid';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

const filters = [
  { value: 'all', label: 'All projects' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'backend', label: 'Backend' },
] as const;

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const requestedType = searchParams.get('type') ?? 'all';
  const activeType = filters.some((filter) => filter.value === requestedType) ? requestedType : 'all';
  const search = query.trim().toLowerCase();
  const filteredProjects = projects.filter((project) =>
    (activeType === 'all' || project.type === activeType) &&
    [project.name, project.category, project.summary, ...project.techStack].join(' ').toLowerCase().includes(search),
  );

  function updateSearch(value: string) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set('q', value);
    else next.delete('q');
    setSearchParams(next, { replace: true });
  }

  function updateType(value: string) {
    const next = new URLSearchParams(searchParams);
    if (value === 'all') next.delete('type');
    else next.set('type', value);
    setSearchParams(next, { replace: true });
  }

  return (
    <>
      <Helmet>
        <title>Projects | {profile.name}</title>
        <meta
          name="description"
          content={`Projects delivered by ${profile.name}, spanning e-commerce, content platforms, and internal tools.`}
        />
      </Helmet>
      <section className="py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Project Archive"
            subtitle="Each project highlights a complete workflow: from data modeling to scalable UI delivery."
          />
          <div className="mt-8 space-y-5 rounded-3xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="space-y-2">
              <label htmlFor="project-search" className="text-sm font-medium text-slate-700 dark:text-slate-200">Find a project</label>
              <input
                id="project-search"
                type="search"
                value={query}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder="Search by name, technology or keyword"
                aria-controls="project-results"
                className="min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
            <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={activeType === filter.value}
                  aria-controls="project-results"
                  onClick={() => updateType(filter.value)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition ${activeType === filter.value ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 text-slate-600 hover:border-emerald-400 dark:border-slate-700 dark:text-slate-300'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p role="status" className="text-sm text-slate-500 dark:text-slate-400">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </p>
            {query || activeType !== 'all' ? (
              <button type="button" onClick={() => setSearchParams({}, { replace: true })} className="min-h-11 rounded-full px-4 text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400">
                Clear filters
              </button>
            ) : null}
          </div>
          <div id="project-results" className="mt-6">
            {filteredProjects.length > 0 ? (
              <ProjectGrid projects={filteredProjects} />
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-12 text-center dark:border-slate-700">
                <h2 className="text-xl font-semibold">No matching projects</h2>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Try another keyword or clear the filters to see all projects.</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
