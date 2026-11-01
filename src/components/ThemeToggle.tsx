import { useUiStore } from '../store/uiStore';

export function ThemeToggle() {
  const theme = useUiStore((state) => state.theme);
  const toggleTheme = useUiStore((state) => state.toggleTheme);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-500/70 dark:hover:text-emerald-300"
      aria-label="Toggle dark mode"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
