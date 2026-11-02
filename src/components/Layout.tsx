import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ThemeInit } from './ThemeInit';
import { useHashScroll } from '../hooks/useHashScroll';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function Layout() {
  useScrollToTop();
  useHashScroll();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-emerald-600 focus:px-5 focus:py-3 focus:text-white">
        Skip to content
      </a>
      <ThemeInit />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
