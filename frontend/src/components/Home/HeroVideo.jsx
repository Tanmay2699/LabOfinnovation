import { motion, useReducedMotion } from 'framer-motion';
import { heroBeat, motionSafe } from '../../motion/variants';

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
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_0%_100%,rgba(0,0,0,0.65),transparent)]"
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-10 left-6 right-6 sm:left-10 md:bottom-14 md:left-16 max-w-3xl"
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={motionSafe(heroBeat(0), reduceMotion)}
          className="mb-3 flex items-center gap-3 font-['Space_Grotesk',sans-serif] text-sm font-semibold uppercase tracking-[0.35em] text-ember-300 md:text-base"
        >
          <span className="h-px w-12 bg-ember-300" aria-hidden="true" />
          Lab of Innovation
        </motion.p>
        <motion.p
          variants={motionSafe(heroBeat(1), reduceMotion)}
          className="font-['Space_Grotesk',sans-serif] text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Where bold ideas become <span className="bg-gradient-to-r from-ember-300 to-ember-500 bg-clip-text text-transparent">working reality.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroVideo;
