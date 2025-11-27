import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ハッシュ(#)がある場合はそのIDの要素へスクロール
    if (hash) {
      const id = hash.replace('#', '');
      // ページ遷移後のレンダリングを待つため少し遅延させる
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // ハッシュがない場合はページトップへ
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};