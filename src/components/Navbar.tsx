import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';
import { Container } from './Container';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/#skills', isHash: true },
  { label: 'Experience', to: '/#experience', isHash: true },
  { label: 'Contact', to: '/#contact', isHash: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
          <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-slate-900" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              {profile.name}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">{profile.title}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navLinks.map((link) =>
            link.isHash ? (
              <Link key={link.label} to={link.to} className="transition hover:text-emerald-500">
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `transition hover:text-emerald-500 ${isActive ? 'text-emerald-500' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span className="h-0.5 w-5 rounded bg-current" />
          </button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-slate-200/70 bg-white/90 px-6 py-4 text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-300 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isHash ? (
                <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
