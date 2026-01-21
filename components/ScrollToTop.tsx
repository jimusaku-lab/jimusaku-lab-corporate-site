import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ハッシュ(#)がある場合はそのIDの要素へスクロール
    const rawHash = window.location.hash;
    const rawPath = pathname.replace(/\/+$/, '');
    const routeId = rawPath.split('/').filter(Boolean)[0] ?? '';
    const sectionIds = new Set(['hero', 'services', 'cases', 'company', 'contact']);
    let targetId = '';
    if (hash) {
      targetId = hash.replace('#', '');
    } else if (rawHash && !rawHash.startsWith('#/')) {
      targetId = rawHash.replace('#', '');
    } else if (rawHash.startsWith('#/')) {
      const hashPath = rawHash.slice(2);
      const hashSegments = hashPath.split('/').filter(Boolean);
      if (hashSegments.length === 1 && sectionIds.has(hashSegments[0])) {
        targetId = hashSegments[0];
      }
    } else if (routeId && sectionIds.has(routeId) && rawPath.split('/').filter(Boolean).length === 1) {
      targetId = routeId;
    }
    if (targetId) {
      const start = performance.now();
      let rafId = 0;
      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        if (performance.now() - start < 1000) {
          rafId = requestAnimationFrame(tryScroll);
        }
      };
      // 初回描画で要素が未生成でも追従できるようにリトライする
      rafId = requestAnimationFrame(tryScroll);
      return () => cancelAnimationFrame(rafId);
    } else {
      // ハッシュがない場合はページトップへ
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
