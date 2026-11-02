import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';
import { Container } from './Container';
import { ProfilePhoto } from './ProfilePhoto';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/#skills', isHash: true },
  { label: 'Experience', to: '/#experience', isHash: true },
  { label: 'Contact', to: '/#contact', isHash: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function renderLink(link: (typeof navLinks)[number]) {
    const active = link.isHash
      ? `${pathname}${hash}` === link.to
      : link.to === '/' ? pathname === '/' && !hash : pathname === link.to || pathname.startsWith(`${link.to}/`);

    return (
      <Link
        key={link.label}
        to={link.to}
        onClick={() => setOpen(false)}
        aria-current={active ? link.isHash ? 'location' : 'page' : undefined}
        className={`inline-flex min-h-11 items-center rounded-lg transition hover:text-emerald-600 dark:hover:text-emerald-400 ${active ? 'font-semibold text-emerald-700 dark:text-emerald-400' : ''}`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
          <ProfilePhoto />
          <Link to="/" onClick={() => setOpen(false)}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-600 sm:text-sm sm:tracking-[0.2em]">
              {profile.name}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">{profile.title}</p>
          </Link>
        </div>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
          {navLinks.map(renderLink)}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open ? 'M6 6l12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </Container>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={open ? 'border-t border-slate-200/70 bg-white/90 px-6 py-4 text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-300 lg:hidden' : 'hidden'}>
        <div className="flex flex-col gap-1">
          {navLinks.map(renderLink)}
        </div>
      </nav>
    </header>
  );
}
