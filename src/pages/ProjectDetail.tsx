import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-20">
        <Container>
          <SectionHeading title="Project not found" subtitle="Return to the project archive." />
          <div className="mt-6">
            <Link
              to="/projects"
              className="rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200"
            >
              Back to projects
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {project.name} | {profile.name}
        </title>
        <meta name="description" content={`${project.name} - ${project.summary}`} />
      </Helmet>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-6">
            <Link to="/projects" className="text-xs uppercase tracking-[0.3em] text-emerald-500">
              Back to projects
            </Link>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{project.category}</p>
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100 sm:text-5xl">
                {project.name}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <SectionHeading title="Project Summary" />
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <SectionHeading title="Highlights" />
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <SectionHeading title="Screenshots" subtitle="Plug in images via data/projects.ts" />
              {project.screenshots.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-6 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40">
                  Add `screenshots` entries in `src/data/projects.ts` to render visuals here.
                </div>
              ) : (
                <div className="space-y-4">
                  {project.screenshots.map((shot) => (
                    <img
                      key={shot.src}
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
