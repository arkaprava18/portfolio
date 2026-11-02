import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export default function NotFound() {
  return (
    <section className="py-20">
      <Helmet>
        <title>Page not found | {profile.name}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container>
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-emerald-600 dark:text-emerald-400">404</p>
        <SectionHeading as="h1" title="Page not found" subtitle="The page you're looking for doesn't exist." />
        <div className="mt-6">
          <Link
            to="/"
            className="rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200"
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  );
}
