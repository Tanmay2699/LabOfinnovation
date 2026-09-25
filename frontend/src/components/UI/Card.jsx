import useCardMotion from './useCardMotion';

/**
 * Deep Field card.
 *
 * Rest is surface-raised plus a hairline and shadow-raised. Hover moves to
 * shadow-lift with a line-strong border, tilts up to 4 degrees toward the
 * pointer and lifts travel-xs, with the glint tracking the cursor.
 *
 * Elevation on a near-black ground comes from darkness plus a hairline edge,
 * not from spread — and no shadow here is chromatic. A coloured halo around a
 * card reads as neon signage, which is out of bounds; shadow-ring at one pixel
 * is the whole hover-edge vocabulary.
 *
 * `selected` adds a signal border plus a 2px ember cap — the one place ember
 * is allowed to repeat on a page.
 *
 * Pass `tilt={false}` in a dense grid or where the card wraps a form. Touch
 * pointers and prefers-reduced-motion switch the tilt off automatically.
 */
const Card = ({
  children,
  className = '',
  hover = true,
  selected = false,
  tilt = true,
  gradient = false, // legacy no-op: the old white->primary-50 wash is retired
  ...props
}) => {
  const m = useCardMotion(hover && tilt);

  return (
    <div
      ref={m.ref}
      onPointerMove={hover ? m.onPointerMove : undefined}
      onPointerLeave={hover ? m.onPointerLeave : undefined}
      className={`
        group relative overflow-hidden isolate rounded-card p-6
        bg-surface-card border shadow-raised
        ${selected ? 'border-signal-500' : 'border-line-hairline'}
        [transform-style:preserve-3d]
        transition-[transform,background-color,border-color,box-shadow] duration-base ease-standard
        ${hover ? 'hover:border-line-strong hover:shadow-lift' : ''}
        ${className}
      `}
      {...props}
    >
      {hover && <span className="card-glint" aria-hidden="true" />}
      {selected && (
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-ember-500" />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default Card;
