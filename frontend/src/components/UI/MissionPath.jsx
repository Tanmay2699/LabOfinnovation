import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * An ordered list of steps on a constellation spine that draws itself when the
 * list enters view. It is the `draw` reveal in component form, and it carries
 * every process on the site: the programme journey, the path to certification,
 * hands-on learning, ongoing support, the company timeline on About.
 *
 * The draw fires once at 25% visibility. Because the section usually enters
 * from the top, it reads as the path being traced downward as the user scrolls
 * into it — which is the point. Do not start it on page load.
 *
 * Node states: steps before `current` render done (signal-300 fill), `current`
 * fills ember-300 and scales 1.25x, later steps stay hollow. Omit `current`
 * for a process that is not in progress — a marketing page describing how a
 * programme works has no current step. The ember node counts against the
 * page's single ember element.
 *
 * Five to seven steps. Past seven the spine is long enough that the draw
 * finishes before the last step is on screen and the effect is lost.
 *
 * It renders a real `ol`, so the order exists for assistive technology and the
 * nodes are decoration. Do not use it for an unordered feature list — the
 * spine promises sequence, and a list of benefits on a spine is a lie the user
 * notices.
 */
const MissionPath = ({ steps = [], current = -1, className = '' }) => {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <ol ref={ref} className={`relative flex flex-col gap-8 pl-10 list-none m-0 ${className}`}>
      <svg
        aria-hidden="true"
        preserveAspectRatio="none"
        className="absolute left-[15px] top-2 bottom-2 w-0.5 overflow-visible"
      >
        <line
          x1="1" y1="0" x2="1" y2="100%"
          stroke="var(--constellation)" strokeWidth="2" strokeLinecap="round"
          opacity="var(--opacity-orbit)"
        />
        <motion.line
          x1="1" y1="0" x2="1" y2="100%"
          stroke="var(--signal-500)" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: inView || reduceMotion ? 1 : 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      {steps.map((step, i) => {
        const done = current >= 0 && i < current;
        const isCurrent = i === current;
        return (
          <li key={step.title} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[32px] top-1 w-4 h-4 rounded-full border-2
                transition-[background-color,border-color,transform] duration-base ease-standard
                ${
                  isCurrent
                    ? 'bg-ember-300 border-ember-300 scale-125'
                    : done
                    ? 'bg-signal-300 border-signal-300'
                    : 'bg-surface-base border-[color:var(--constellation)]'
                }`}
            />
            {step.tag && <span className="readout">{step.tag}</span>}
            <h4 className="m-0 font-display text-h4 font-semibold text-ink">{step.title}</h4>
            {step.copy && <p className="mt-2 mb-0 text-body-sm text-ink-body">{step.copy}</p>}
            {step.note && <span className="mt-2 inline-block readout text-signal-300">{step.note}</span>}
          </li>
        );
      })}
    </ol>
  );
};

export default MissionPath;
