import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * The block that opens a section: eyebrow, title, optional lead, and a
 * constellation rule whose nodes light when the block enters view.
 *
 * The rule is the smallest instance of the system's core metaphor — a star
 * chart and a circuit trace at once — and it is what ties a plain heading to
 * the theme without decorating it. Pass `rule={false}` where headings stack
 * closely; a rule under every heading becomes a pattern of lines.
 *
 * `size="display"` opens a page region. Default opens a section inside one.
 * Set `level` independently so the document outline stays correct.
 *
 * `tone="ember"` warms the eyebrow and counts against the page's single ember
 * element. Centre only the closing CTA and full-bleed bands — a page of
 * centred headings reads as a landing-page template.
 */
const NODES = [8, 96, 184, 248, 320];

const SectionHeading = ({
  eyebrow,
  title,
  lead,
  align = 'left',
  size = 'h2',
  tone = 'signal',
  level = 'h2',
  rule = true,
  className = '',
}) => {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const Title = level;
  const centered = align === 'center';

  return (
    <div
      ref={ref}
      className={`relative max-w-[720px] ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <span className={`block mb-3 eyebrow ${tone === 'ember' ? 'eyebrow--ember' : ''}`}>
          {eyebrow}
        </span>
      )}

      <Title
        className={`m-0 font-display font-semibold text-ink ${
          size === 'display' ? 'text-display' : 'text-h2'
        }`}
      >
        {title}
      </Title>

      {lead && (
        <p className={`mt-4 mb-0 text-body-lg text-ink-body max-w-[62ch] ${centered ? 'mx-auto' : ''}`}>
          {lead}
        </p>
      )}

      {rule && (
        <svg
          aria-hidden="true"
          width="340"
          height="10"
          viewBox="0 0 340 10"
          className={`block mt-6 overflow-visible ${centered ? 'mx-auto' : ''}`}
        >
          <line
            x1="8" y1="5" x2="320" y2="5"
            stroke="var(--constellation)"
            strokeWidth="1"
            strokeDasharray="1 5"
            strokeLinecap="round"
            opacity="var(--opacity-orbit)"
          />
          {NODES.map((x, i) => (
            <motion.circle
              key={x}
              cx={x}
              cy={5}
              r={2}
              initial={false}
              animate={{
                fill: inView ? 'var(--signal-300)' : 'var(--constellation)',
                opacity: inView ? 1 : 0.45,
              }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.32, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }
              }
            />
          ))}
        </svg>
      )}
    </div>
  );
};

export default SectionHeading;
