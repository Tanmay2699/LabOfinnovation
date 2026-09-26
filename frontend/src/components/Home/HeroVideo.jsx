import { useReducedMotion } from 'framer-motion';

/**
 * Full-bleed opening film. The header is transparent at scroll 0, so a top
 * scrim from surface-void gives the nav labels contrast and lets the bar
 * melt into the footage; a bottom scrim hands off to the frame sequence.
 * Source: public/hero/hero-v3.mp4, 720p original cropped to 1120x630 from the
 * top-left (drops the Gemini sparkle at x≥1136) and lanczos-scaled to 1080p.
 * Crop, not delogo: delogo leaves a smudge. Bump the filename on re-encode;
 * server.js caches 1y.
 */
const HeroVideo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-surface-void" aria-label="Lab of Innovation film">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero/hero-v3.mp4"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-surface-void via-surface-void/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-void to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroVideo;
