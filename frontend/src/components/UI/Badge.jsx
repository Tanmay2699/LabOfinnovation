/**
 * Deep Field badge. One shape doing three jobs that look alike and behave
 * differently.
 *
 * STATUS — success / caution / danger / info tint the text with the matching
 * status token on surface-signal-wash. Always pass `dot` AND write the word:
 * status-success and status-danger are separated mainly by hue in this
 * palette, so the dot alone is not the signal. "Shipped" and "Payment failed"
 * are.
 *
 * READOUT — mono on surface-inset, for SKUs, batch codes, session IDs and
 * cohort references. This is where the mission-control register is earned, so
 * use real identifiers, not decorative strings.
 *
 * FILTER — passing `onClick` or `pressed` renders a button with aria-pressed,
 * a line-strong border at rest and a signal fill when pressed. The pressed
 * state is a fill change over dur-instant: no scale, no bounce.
 *
 * Keep a card's meta row to three badges; past that it wraps and the card
 * stops scanning. `accent`/`ember` counts against the page's single ember
 * element.
 */
const VARIANTS = {
  neutral: 'bg-surface-inset text-ink border-line-hairline',
  primary: 'bg-surface-signal text-signal-300 border-line-hairline',
  secondary: 'bg-surface-signal text-signal-300 border-line-hairline',
  accent: 'bg-surface-ember text-ember-500 border-ember-900',
  ember: 'bg-surface-ember text-ember-500 border-ember-900',
  success: 'bg-surface-signal text-status-success border-line-hairline',
  warning: 'bg-surface-signal text-status-caution border-line-hairline',
  caution: 'bg-surface-signal text-status-caution border-line-hairline',
  danger: 'bg-surface-signal text-status-danger border-line-hairline',
  info: 'bg-surface-signal text-status-info border-line-hairline',
  readout: 'bg-surface-inset text-ink-muted border-line-hairline font-mono tracking-[0.06em] font-medium',
};

const SIZES = {
  sm: 'px-2.5 py-1 text-[11px]',
  md: 'px-3 py-1.5 text-xs',
  lg: 'px-3.5 py-2 text-sm',
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  dot = false,
  pressed,
  onClick,
  className = '',
  ...props
}) => {
  const pressable = onClick != null || pressed != null;
  const Tag = pressable ? 'button' : 'span';

  const filterLook = pressed
    ? 'bg-signal-500 border-signal-500 text-ink-onSignal'
    : 'bg-transparent border-line-strong text-ink-body hover:border-signal-500 hover:text-ink';

  return (
    <Tag
      type={pressable ? 'button' : undefined}
      onClick={onClick}
      aria-pressed={pressed == null ? undefined : String(!!pressed)}
      className={`
        inline-flex items-center gap-1.5 rounded-pill font-semibold border whitespace-nowrap
        transition-[background-color,border-color,color] duration-instant ease-standard
        ${pressable ? filterLook : VARIANTS[variant] || VARIANTS.primary}
        ${SIZES[size] || SIZES.md}
        ${className}
      `}
      {...props}
    >
      {dot && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-current flex-none" />}
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </Tag>
  );
};

export default Badge;
