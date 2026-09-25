/**
 * A continuously scrolling rail of partner institutions.
 *
 * The track is duplicated internally and translated -50%, which is what makes
 * the loop seamless — pass each item once.
 *
 * `duration` is seconds for one loop; 40 lands near 40px/s, slow enough to
 * read a name as it passes. It pauses on hover AND on focus-within, so a
 * keyboard user tabbing in is not chasing a moving target. Under reduced
 * motion it becomes a static row, which still composes.
 *
 * The edge mask is not decoration: without it the names cut off at a hard edge
 * and the rail reads as an overflow bug. The section behind it must be a flat
 * surface — the mask fades to transparent, not to a colour.
 *
 * NO PARTNER LOGO FILES WERE SUPPLIED, so this renders names in Poppins. That
 * is the honest version and it looks deliberate. When real logos arrive, set
 * them at a consistent OPTICAL height rather than a consistent box height, ask
 * for single-ink variants for a dark ground rather than filtering the colour
 * version, and check you have permission to display each mark in a marketing
 * context.
 *
 * Eight to fourteen items. One rail per page.
 */
const PartnerRail = ({
  items = [],
  duration = 40,
  label = 'Partner institutions',
  className = '',
}) => {
  const track = [...items, ...items];

  return (
    <div
      role="group"
      aria-label={label}
      className={`relative overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]
        ${className}`}
      style={{ '--rail-dur': `${duration}s` }}
    >
      <div className="flex w-max items-center gap-14 animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            aria-hidden={i >= items.length ? 'true' : undefined}
            className="whitespace-nowrap font-display text-[18px] font-semibold tracking-[-0.01em]
              text-ink-muted transition-colors duration-base ease-standard hover:text-ink"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PartnerRail;
