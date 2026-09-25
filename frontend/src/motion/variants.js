/**
 * Lab of Innovation — motion variants.
 *
 * Every animation in the product belongs to one of four tiers. If you cannot
 * name the tier, do not ship the animation.
 *
 *   1 RESPONSE      the user did something. dur-instant..dur-quick,
 *                   ease-standard. Never longer than dur-base — laggy buttons
 *                   are the fastest way to make an expensive site feel cheap.
 *   2 ARRIVAL       content entering. dur-base..dur-slow, ease-entrance,
 *                   rising by a travel-* value. Exits run at half the
 *                   entrance duration on ease-exit.
 *   3 AMBIENT       nobody triggered it and it runs forever. Starfield, orbit,
 *                   robot bob, marquee. CSS animations, not springs — a
 *                   permanently mounted spring is wasted main-thread work.
 *                   See tailwind.config.js `animation`.
 *   4 CHOREOGRAPHY  a composed sequence of tier-2 beats. One per viewport.
 *
 * Durations and curves below mirror src/styles/tokens.css. They are literals
 * here because Framer Motion needs numbers, not CSS strings; if you change a
 * token, change it in both places.
 */

// ease-standard / entrance / exit / overshoot, as bezier arrays
export const EASE = {
  standard: [0.22, 0.61, 0.36, 1],
  entrance: [0.16, 1, 0.3, 1],
  exit: [0.7, 0, 0.84, 0],
  overshoot: [0.34, 1.4, 0.64, 1],
};

// seconds
export const DUR = {
  instant: 0.09,
  quick: 0.18,
  base: 0.32,
  slow: 0.56,
  cinematic: 0.9,
  reveal: 1.2,
};

// px
export const TRAVEL = { xs: 8, sm: 16, md: 32, lg: 64, xl: 120 };

// seconds
export const STAGGER = { tight: 0.04, base: 0.08, loose: 0.14, wave: 0.22 };

/** Total stagger delay is capped at 600ms — past that the last card in a row
 *  feels forgotten. */
export const staggerDelay = (index, step = STAGGER.base) =>
  Math.min(index * step, 0.6);

/* ── tier 2: arrival ──────────────────────────────────────────────────── */

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DUR.base, ease: EASE.entrance } },
};

/** The default. Cards, headings, paragraphs, images. */
export const rise = {
  hidden: { opacity: 0, y: TRAVEL.md },
  show: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE.entrance } },
};

/** Stagger children: list items, chips, spec rows, table rows. */
export const riseSm = {
  hidden: { opacity: 0, y: TRAVEL.sm },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE.entrance } },
};

/** Media only: product shots, lab photography, video posters. */
export const scaleIn = {
  hidden: { opacity: 0, y: TRAVEL.sm, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: DUR.slow, ease: EASE.entrance } },
};

/** SVG line-art: constellation rules, the MissionPath spine, orbit rings. */
export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: DUR.cinematic, ease: EASE.entrance },
  },
};

export const VARIANTS = { fade, rise, riseSm, scaleIn, draw };

/** Parent wrapper for a staggered group. Never stagger across a section
 *  boundary — someone landing mid-page should not wait on a sequence that
 *  started above the fold. */
export const staggerGroup = (step = STAGGER.base) => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: 0.04 } },
});

/* ── tier 4: the hero ─────────────────────────────────────────────────── */

/**
 * Home hero beats, in order: eyebrow, headline, sub-copy, buttons, robot.
 * Last beat lands inside 2.2s and the headline is readable by 900ms — never
 * gate the value proposition behind a full animation.
 *
 * Split a headline by LINE if you split it at all. Per-character animation is
 * the gamer-UI tell the brief rules out.
 */
export const heroBeat = (index, variant = rise) => ({
  ...variant,
  show: {
    ...variant.show,
    transition: {
      ...variant.show.transition,
      delay: index * STAGGER.wave,
      duration: index === 1 ? DUR.cinematic : variant.show.transition.duration,
    },
  },
});

/* ── viewport ─────────────────────────────────────────────────────────── */

/** `once: true` is what enforces the fire-once rule. Re-animating on scroll-up
 *  makes a page unusable for anyone reading back over something. */
export const VIEWPORT = { once: true, amount: 0.18 };

/** Everything above, flattened for `prefers-reduced-motion: reduce`: instant
 *  opacity, no transform. It never hides content in any state. */
export const still = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { duration: 0 } },
};

/** Pick the right variant set for the current motion preference. */
export const motionSafe = (variant, reduced) => (reduced ? still : variant);
