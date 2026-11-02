import { profile } from '../data/profile';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 text-sm text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} © {new Date().getFullYear()}
        </p>
        <div className="flex min-w-0 flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className="break-all hover:text-emerald-500">
            {profile.email}
          </a>
          {profile.links.github ? (
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
              GitHub
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
