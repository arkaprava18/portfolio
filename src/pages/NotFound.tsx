import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="Page not found" subtitle="The page you're looking for doesn't exist." />
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
