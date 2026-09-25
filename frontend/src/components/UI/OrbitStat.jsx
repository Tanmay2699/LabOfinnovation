import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * A figure that counts up inside two slowly rotating orbit rings.
 *
 * Numbers are this brand's strongest asset, and this is where they get room.
 * The count starts at 40% visibility, once, and runs over dur-cinematic with a
 * cubic ease-out. Numerals are tabular so the width does not jitter mid-count.
 *
 * The final value is ALWAYS in the DOM in a visually hidden span, whatever the
 * visible count is doing — a screen reader arriving mid-animation hears the
 * real number, not a partial one. Under reduced motion the visible figure
 * jumps straight to the final value.
 *
 * The rings counter-rotate and sit at different tilts, which is what makes the
 * pair read as an orrery rather than a target.
 *
 * Four in a band is right; three works, five crowds. Exactly one stat on a
 * page may take tone="ember", and that is usually the page's whole ember
 * budget — check before putting an ember button below it.
 *
 * Do not use it for prices, stock levels, or anything that changes while the
 * user is looking.
 */
const OrbitStat = ({
  value = 0,
  prefix = '',
  suffix = '',
  label,
  tone = 'signal',
  locale = 'en-IN',
  className = '',
}) => {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setShown(value);
      return undefined;
    }
    const duration = 900;
    const start = performance.now();
    let raf = 0;
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setShown(Math.round(value * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduceMotion]);

  const format = (n) => n.toLocaleString(locale);
  const full = `${prefix}${format(value)}${suffix}`;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center px-4 py-8 min-w-[180px] ${className}`}
    >
      {/* Each ring rotates its own <svg>, not an inner <g>: a transform on an
          SVG child repaints the whole drawing every frame, while one on the
          <svg> box is composited. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-ornament"
        style={{ opacity: 'var(--opacity-orbit)' }}
      >
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-orbit">
          <ellipse cx="100" cy="100" rx="78" ry="30" transform="rotate(-18 100 100)"
            fill="none" stroke="var(--orbit-ring)" strokeWidth="1" />
        </svg>
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-orbit-reverse">
          <ellipse cx="100" cy="100" rx="62" ry="24" transform="rotate(26 100 100)"
            fill="none" stroke="var(--orbit-ring)" strokeWidth="1" />
        </svg>
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full animate-orbit"
          style={{ animationDuration: 'calc(var(--dur-orbit) * 0.7)' }}
        >
          <circle cx="178" cy="100" r="2.5" fill="var(--signal-300)" />
        </svg>
      </div>

      <span
        aria-hidden="true"
        className={`relative z-content font-display text-stat-xl tabular-nums ${
          tone === 'ember' ? 'text-ember-500' : 'text-ink'
        }`}
      >
        {prefix}
        {format(shown)}
        {suffix}
      </span>

      <span className="relative z-content mt-3 text-body-sm text-ink-muted max-w-[20ch]">
        {label}
      </span>

      <span className="sr-only">
        {full} {label}
      </span>
    </div>
  );
};

export default OrbitStat;
