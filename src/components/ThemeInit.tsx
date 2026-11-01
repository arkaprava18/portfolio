import { useEffect } from 'react';
import { useUiStore } from '../store/uiStore';

export function ThemeInit() {
  const initializeTheme = useUiStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return null;
}
