import Badge from './Badge';
import useCardMotion from './useCardMotion';

/**
 * The card that carries the system's central metaphor.
 *
 * On hover five nodes light and the lines between them draw in — a star chart
 * and a circuit diagram at the same time, which is precisely the connection
 * between the space theme and robotics. Three things happen together: the
 * constellation lights over dur-base, the card tilts toward the pointer with a
 * travel-xs lift, and the glint tracks the cursor.
 *
 * Programme and lab content only. NOT the store: ProductCard is quieter on
 * purpose, because a catalogue that performs on every hover feels slow the
 * second time a customer visits, and the second visit is the one that
 * converts. Using the constellation everywhere spends its meaning.
 *
 * Make the whole card a link rather than putting a button inside it, and let
 * the focus ring land on the card.
 */
const NODES = [
  [18, 26],
  [74, 12],
  [128, 40],
  [46, 70],
  [104, 86],
];

const EDGES = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 4],
];

const ProgramCard = ({
  eyebrow,
  title,
  summary,
  tags = [],
  duration,
  cta,
  tilt = true,
  className = '',
  ...props
}) => {
  const m = useCardMotion(tilt);

  return (
    <article
      ref={m.ref}
      onPointerMove={m.onPointerMove}
      onPointerLeave={m.onPointerLeave}
      className={`group card-surface relative flex flex-col p-5 overflow-hidden isolate
        [transform-style:preserve-3d]
        transition-[transform,box-shadow,border-color] duration-base ease-standard
        hover:shadow-lift hover:border-line-strong ${className}`}
      {...props}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 160 100"
        preserveAspectRatio="none"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a][0]} y1={NODES[a][1]}
            x2={NODES[b][0]} y2={NODES[b][1]}
            stroke="var(--constellation)"
            strokeWidth="1"
            className="opacity-0 transition-opacity duration-base ease-entrance group-hover:opacity-45"
          />
        ))}
        {NODES.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx} cy={cy} r="2"
            fill="var(--constellation)"
            className="opacity-45 transition-all duration-base ease-entrance
              group-hover:opacity-100 group-hover:[fill:var(--signal-300)] group-hover:[r:3]"
          />
        ))}
      </svg>

      <span className="card-glint" aria-hidden="true" />

      {eyebrow && <span className="eyebrow mb-2">{eyebrow}</span>}

      <h3 className="m-0 font-display text-h3 font-semibold text-ink">{title}</h3>
      <p className="mt-3 mb-0 text-body-sm text-ink-body">{summary}</p>

      <div className="mt-auto pt-5 flex items-center gap-3 flex-wrap">
        {tags.map((t) => (
          <Badge key={t} variant="neutral" size="sm">
            {t}
          </Badge>
        ))}
        {duration && <span className="readout">{duration}</span>}
      </div>

      {cta && (
        <span className="mt-5 pt-4 hairline-top inline-flex items-center gap-2 text-sm font-semibold text-signal-300 group-hover:text-ink transition-colors duration-quick ease-standard">
          {cta}
          <span aria-hidden="true" className="transition-transform duration-quick ease-standard group-hover:translate-x-0.5">&#8594;</span>
        </span>
      )}
    </article>
  );
};

export default ProgramCard;
