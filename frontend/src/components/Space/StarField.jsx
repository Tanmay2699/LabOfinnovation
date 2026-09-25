import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Three-layer canvas starfield.
 *
 * Canvas, not DOM: a field at this density is ~220 stars, and 220 composited
 * elements is a scroll that stutters on mid-range hardware. The box-shadow
 * dot-list trick repaints the whole layer every frame and is slower still.
 *
 * Handled internally, so no call site needs to gate any of it:
 *   - device-pixel backing capped at 2
 *   - paused by IntersectionObserver when scrolled out of view
 *   - paused on visibilitychange
 *   - re-seeded on resize
 *   - one static frame and no loop under prefers-reduced-motion
 *
 * The parent needs `position: relative`. One starfield per page is the budget —
 * mount it on the shell and let sections reveal it, rather than one per band.
 */
const LAYERS = [
  { share: 0.55, r: 1.0, colorVar: '--star-dim', alphaVar: '--opacity-starfield-far', speed: 0.1 },
  { share: 0.31, r: 1.5, colorVar: '--star-dim', alphaVar: '--opacity-starfield-mid', speed: 0.22 },
  { share: 0.14, r: 2.0, colorVar: '--star-bright', alphaVar: '--opacity-starfield-near', speed: 0.42 },
];

const DENSITY = { sparse: 0.55, base: 1, dense: 1.6 };

// Stars drift at most ~7px/s, so 30fps is indistinguishable from 60 and halves
// the canvas uploads the compositor has to do.
const FRAME_MS = 1000 / 30;

// Painting is suspended while the page scrolls so the scroll owns the frame
// budget; the clock freezes with it, so nothing jumps on resume.
const SCROLL_IDLE_MS = 140;

const StarField = ({ density = 'base', className = '' }) => {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const css = getComputedStyle(document.documentElement);
    const layers = LAYERS.map((l) => ({
      ...l,
      color: css.getPropertyValue(l.colorVar).trim() || '#8fa0c4',
      alpha: parseFloat(css.getPropertyValue(l.alphaVar)) || 0.3,
    }));
    const scale = DENSITY[density] ?? 1;

    let stars = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let clock = 0; // ms of drift actually shown
    let prev = 0;
    let lastPaint = 0;
    let scrolling = false;
    let scrollTimer = 0;

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      // 1.5 is the ceiling: the stars are soft 1-2px dots, and a 2x full-bleed
      // canvas is a 4x texture upload every frame.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ~1 star per 9,000 CSS px, clamped so a 4K monitor is not a snowstorm
      const total = Math.min(260, Math.round(((w * h) / 9000) * scale));
      stars = [];
      layers.forEach((layer, li) => {
        const count = Math.round(total * layer.share);
        for (let i = 0; i < count; i += 1) {
          stars.push({
            l: li,
            x: Math.random() * w,
            y: Math.random() * h,
            phase: Math.random() * Math.PI * 2,
            period: 3000 + Math.random() * 4000, // each star on its own beat
          });
        }
      });
    };

    const paint = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i += 1) {
        const s = stars[i];
        const layer = layers[s.l];
        let x = s.x - (t * layer.speed) / 60;
        x = ((x % w) + w) % w;
        const twinkle = reduceMotion
          ? 1
          : 0.8 + 0.2 * Math.sin(s.phase + (t / s.period) * Math.PI * 2);
        ctx.globalAlpha = layer.alpha * twinkle;
        ctx.fillStyle = layer.color;
        ctx.beginPath();
        ctx.arc(x, s.y, layer.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now) => {
      if (!running) return;
      const dt = Math.min(now - prev, 100);
      prev = now;
      if (!scrolling) {
        clock += dt;
        if (now - lastPaint >= FRAME_MS) {
          lastPaint = now;
          paint(clock);
        }
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      prev = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    seed();
    paint(0);

    let io = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { threshold: 0 }
      );
      io.observe(canvas);
    } else {
      start();
    }

    const onVisibility = () => (document.hidden ? stop() : start());
    const onScroll = () => {
      scrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        scrolling = false;
      }, SCROLL_IDLE_MS);
    };
    // Mobile browsers fire resize as the URL bar hides; only re-seed on a real
    // width change, or the sky reshuffles mid-scroll.
    let lastW = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      seed();
      paint(clock);
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      stop();
      if (io) io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimer);
    };
  }, [density, reduceMotion]);

  return <canvas ref={canvasRef} className={`sky-starfield ${className}`} aria-hidden="true" />;
};

export default StarField;
