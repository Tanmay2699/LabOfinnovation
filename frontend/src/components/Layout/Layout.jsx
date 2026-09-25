import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Transacting flows switch to Dock, the light theme: a buyer who has decided
// to spend money meets a conventional, obviously-secure form.
const DOCK_ROUTES = ['/cart', '/checkout'];

// The walking-robot loader lives in index.html so it paints before the bundle
// on a hard reload. It stays up for at least one full stride (1s) so it reads
// as a moment rather than a flicker.
const LOADER_MIN_MS = 1000;

const setLoader = (visible) => {
  const el = document.getElementById('page-loader');
  if (!el) return;
  el.classList.toggle('is-visible', visible);
  el.setAttribute('aria-hidden', visible ? 'false' : 'true');
  document.body.style.overflow = visible ? 'hidden' : '';
};

const Layout = ({ children }) => {
  const location = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    let timer = 0;
    const hideAfter = (ms) => {
      timer = window.setTimeout(() => setLoader(false), Math.max(0, ms));
    };

    if (firstLoad.current) {
      // Reload: already showing from index.html. Hide once the page's images
      // are in, measured from navigation start.
      firstLoad.current = false;
      const done = () => hideAfter(LOADER_MIN_MS - performance.now());
      if (document.readyState === 'complete') done();
      else window.addEventListener('load', done, { once: true });
      return () => {
        window.removeEventListener('load', done);
        window.clearTimeout(timer);
      };
    }

    setLoader(true);
    hideAfter(LOADER_MIN_MS);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Instant: html has scroll-behavior: smooth, which would otherwise animate
    // a scroll back through the whole previous page on every navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-grow bg-surface-base text-ink-body"
        data-theme={DOCK_ROUTES.includes(location.pathname) ? 'dock' : undefined}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
