import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, hash, search, key } = useLocation();
  const previousLocation = useRef({ pathname, hash, search });

  useLayoutEffect(() => {
    const previous = previousLocation.current;
    const onlySearchChanged = previous.pathname === pathname && previous.hash === hash && previous.search !== search;
    previousLocation.current = { pathname, hash, search };
    if (hash || onlySearchChanged) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, search, key]);
}
