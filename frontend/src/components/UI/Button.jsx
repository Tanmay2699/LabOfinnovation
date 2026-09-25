import { useCallback, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Deep Field button.
 *
 * Four real looks. `key` (ember) marks the single highest-intent action on a
 * PAGE — enrolment, a quote, an order — and never appears in the same viewport
 * as another ember element. Everything else is signal, outline or ghost; there
 * is no second saturated fill and no glow.
 *
 * Deep Field lightens the accent, so a primary button carries a DARK label
 * (ink-onSignal, 6.7:1) rather than white. That is deliberate — white on
 * signal-500 is 2.7:1 and fails.
 *
 * Motion, all tier 1:
 *   - colour over dur-instant, press to 0.98 over dur-quick
 *   - magnetic pull: within the button, it translates up to 4px toward the
 *     pointer and the label follows at half that. Pointer devices only.
 *   - sheen: one pass across a primary on hover. One pass, never a loop.
 * Both switch off under prefers-reduced-motion. Pass `magnetic={false}` in a
 * dense toolbar, where several pulling buttons read as jitter.
 *
 * Labels are a verb and its object in sentence case: "Book a lab session",
 * never "Learn more" or "Submit".
 *
 * Legacy variant names still resolve:
 *   accent | success       -> key
 *   secondary | outlineWhite | outlineSecondary -> outline
 *   info | ghostWhite      -> ghost
 */
const VARIANTS = {
  key: `
    bg-ember-500 border border-ember-500 text-ink-onEmber
    hover:bg-ember-300 hover:border-ember-300
    active:bg-ember-500
    disabled:bg-ember-900 disabled:border-ember-900 disabled:text-ink-muted
  `,
  primary: `
    bg-signal-500 border border-signal-500 text-ink-onSignal
    hover:bg-signal-300 hover:border-signal-300
    active:bg-signal-700 active:text-ink
    disabled:bg-signal-900 disabled:border-signal-900 disabled:text-ink-muted
  `,
  outline: `
    bg-surface-signal border border-line-strong text-ink
    hover:border-signal-500 hover:shadow-ring
    active:bg-surface-inset
    disabled:border-line-hairline disabled:text-ink-muted disabled:bg-transparent
  `,
  ghost: `
    bg-transparent border border-line-strong text-ink
    hover:border-signal-300 hover:text-signal-300
    active:bg-surface-raised
    disabled:border-line-hairline disabled:text-ink-muted
  `,
  danger: `
    bg-transparent border border-line-hairline text-status-danger
    hover:border-status-danger
    active:bg-surface-raised
    disabled:border-line-hairline disabled:text-ink-muted
  `,
};

const ALIAS = {
  accent: 'key',
  success: 'key',
  ember: 'key',
  secondary: 'outline',
  outlineWhite: 'outline',
  outlineSecondary: 'outline',
  info: 'ghost',
  ghostWhite: 'ghost',
};

// Every target clears 44px including padding. `xs` is icon-only chrome and
// must never carry a primary action.
const SIZES = {
  xs: 'px-3 py-1.5 text-xs min-h-[32px]',
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-[15px] min-h-[44px]',
  lg: 'px-7 py-3.5 text-[15px] min-h-[48px]',
  xl: 'px-9 py-4 text-lg min-h-[52px]',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  magnetic = true,
  pill = false,
  arrow = false,
  icon,
  onClick,
  type = 'button',
  href,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [sweeping, setSweeping] = useState(false);

  const resolved = VARIANTS[variant] ? variant : ALIAS[variant] || 'primary';
  const pullActive = magnetic && !reduceMotion && !disabled;

  // Measured once per hover: re-measuring a button that has already been
  // pulled returns the moved box and the pull oscillates. One write per frame.
  const box = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  const applyPull = useCallback(() => {
    raf.current = 0;
    const el = ref.current;
    const b = box.current;
    if (!el || !b) return;
    const top = b.top - (window.scrollY - b.scrollY);
    const dx = (pointer.current.x - (b.left + b.width / 2)) / b.width;
    const dy = (pointer.current.y - (top + b.height / 2)) / b.height;
    el.style.transform = `translate3d(${(dx * 8).toFixed(2)}px, ${(dy * 8).toFixed(2)}px, 0)`;
    const label = el.querySelector('[data-btn-label]');
    if (label) label.style.transform = `translate3d(${(dx * 4).toFixed(2)}px, ${(dy * 4).toFixed(2)}px, 0)`;
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!pullActive || !el || e.pointerType === 'touch') return;
      if (!box.current) {
        const r = el.getBoundingClientRect();
        box.current = { left: r.left, top: r.top, width: r.width, height: r.height, scrollY: window.scrollY };
      }
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      if (!raf.current) raf.current = requestAnimationFrame(applyPull);
    },
    [pullActive, applyPull]
  );

  const reset = useCallback(() => {
    box.current = null;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = 0;
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    const label = el.querySelector('[data-btn-label]');
    if (label) label.style.transform = '';
  }, []);

  const onPointerEnter = () => {
    if (reduceMotion || resolved !== 'primary' || disabled) return;
    setSweeping(false);
    requestAnimationFrame(() => setSweeping(true));
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={ref}
      href={href}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled ? 'true' : undefined}
      onClick={onClick}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={() => {
        reset();
        setSweeping(false);
      }}
      onBlur={reset}
      className={`
        relative inline-flex items-center justify-center gap-2 isolate overflow-hidden no-underline
        font-semibold tracking-[0.01em] ${pill ? 'rounded-pill' : 'rounded-control'}
        transition-[background-color,border-color,color,box-shadow,transform]
        duration-instant ease-standard
        focus:outline-none
        active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)] disabled:active:scale-100
        ${VARIANTS[resolved]}
        ${SIZES[size] || SIZES.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {resolved === 'primary' && (
        <span
          aria-hidden="true"
          className={`sheen-band ${sweeping ? 'animate-sheen' : ''}`}
        />
      )}
      <span data-btn-label className="relative z-[2] inline-flex items-center gap-2 transition-transform duration-instant ease-standard">
        {icon}
        {children}
        {arrow && (
          <span aria-hidden="true" className="transition-transform duration-base ease-standard group-hover:translate-x-1">
            &#8594;
          </span>
        )}
      </span>
    </Tag>
  );
};

export default Button;
