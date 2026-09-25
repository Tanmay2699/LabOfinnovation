/**
 * A blurred gradient blob at z-nebula.
 *
 * Position it so only part of the blob is visible — a fully visible blob reads
 * as a circle rather than as light. The parent needs `position: relative` and
 * `overflow: hidden`.
 *
 * Two per section, maximum, and give the second a `phase` of 2–3 seconds so
 * the pair never breathes in sync. Synchronised pulsing is the clearest tell
 * that a background is decorative rather than atmospheric.
 *
 * Cost scales with blurred area, so keep `size` under ~700. If a page is
 * struggling on low-end hardware this is the first thing to cut; a
 * pre-rendered WebP of the blur is a legitimate swap.
 *
 * `ember` is only ever used behind the one ember CTA band on a page.
 */
const NebulaWash = ({
  tone = 'indigo',
  size = 560,
  top,
  left,
  right,
  bottom,
  phase = 0,
  className = '',
}) => (
  <div
    aria-hidden="true"
    className={`sky-nebula sky-nebula--${tone} ${className}`}
    style={{
      width: size,
      height: size,
      top,
      left,
      right,
      bottom,
      animationDelay: `${phase}ms`,
    }}
  />
);

export default NebulaWash;
