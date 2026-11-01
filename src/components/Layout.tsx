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
      <ThemeInit />
      <Navbar />
      <main className="pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
