import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import roboticsImage from '../../assets/img/1769856146152.webp';
import StarField from '../Space/StarField';
import NebulaWash from '../Space/NebulaWash';
import RobotDrifter from '../Space/RobotDrifter';
import Button from '../UI/Button';
import { heroBeat, motionSafe, fade as fadeVariant } from '../../motion/variants';

/**
 * Observatory hero.
 *
 * Removed from the previous version:
 *   - six lucide icons on a 20s infinite rotate + scale pulse
 *   - three 288px blurred colour blobs on an infinite pulse
 *   - a 6s float loop on the product photo (a drifting photo undermines
 *     every trust signal on the page)
 *   - the tri-colour clipped-gradient headline
 *
 * Kept: the scroll parallax, at half its former travel, and the hand-drawn
 * constellation that doubles as the "connected system" metaphor.
 *
 * Atmosphere is now the Deep Field primitives — the canvas StarField behind
 * the parallax layer and two NebulaWash blobs on different periods — not the
 * retired `.starfield` / `.nebula` classes, which rendered as empty boxes.
 *
 * Ember budget for this page is spent on ONE element: the quote CTA
 * (`variant="key"`). Nothing else in the hero may be ember.
 */
const HeroSection = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Halved from the original 300px / 200px ranges — 300px of travel is a
  // fairground ride, not a parallax.
  const yStars = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);
  const yPanel = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -40]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Tier 4: one composed sequence, eyebrow -> headline -> copy -> buttons.
  const beat = (index, variant) => motionSafe(heroBeat(index, variant), reduceMotion);

  const quickStats = [
    { value: '1K+', label: 'Students Trained' },
    { value: '20+', label: 'Organizations' },
    { value: '100+', label: 'Innovation Projects' },
  ];

  return (
    <section
      ref={sectionRef}
      className="band-atmospheric min-h-screen flex items-center pt-28 pb-24"
    >
      <motion.div style={{ y: yStars, opacity: fade }} className="absolute inset-0" aria-hidden="true">
        <StarField density="base" />
      </motion.div>

      <NebulaWash tone="indigo" size={620} top={-200} left={-160} />
      <NebulaWash tone="ion" size={460} bottom={-180} right={-120} phase={2600} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.08fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={beat(0)}
              className="flex items-center gap-2.5 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal-300 shrink-0" aria-hidden="true" />
              <span className="eyebrow">
                🚀 Leading Robotics Innovation Platform
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={beat(1)}
              className="font-heading text-4xl sm:text-5xl lg:text-display-1 text-ink mb-6"
            >
              Innovate.
              <br />
              <span className="text-signal-300">Build. Transform.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={beat(2)}
              className="text-lg leading-[30px] text-ink-body mb-9 max-w-xl"
            >
              Empowering the next generation with cutting-edge robotics education,
              professional training, and innovative product solutions. Join thousands
              in shaping the future of technology.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={beat(3)}
              className="flex flex-col sm:flex-row gap-3.5 mb-11"
            >
              {/* The page's single ember element. */}
              <Link to="/programs/school" className="w-full sm:w-auto">
                <Button variant="key" size="lg" fullWidth>
                  Explore Programs
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>

              <Link to="/products" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth>
                  Shop Products
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={beat(4)}
              className="grid grid-cols-3 gap-6 pt-8 hairline-top"
            >
              {quickStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl sm:text-heading-2 text-ink">
                    {stat.value}
                  </div>
                  <div className="text-[13px] leading-5 text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            style={{ y: yPanel }}
            initial="hidden"
            animate="show"
            /* opacity-only: `y` belongs to the parallax MotionValue above, and
               animating it here would overwrite the scroll transform. */
            variants={beat(2, fadeVariant)}
            className="relative"
          >
            {/* Constellation: thin line-art that reads as a network, not decoration.
                Static — a stroke-dashoffset draw-on is the single most game-like
                thing we could add here. */}
            <svg
              viewBox="0 0 560 480"
              className="absolute -top-7 -left-8 w-[calc(100%+4rem)] opacity-60 pointer-events-none hidden sm:block"
              aria-hidden="true"
            >
              <g stroke="var(--constellation)" strokeWidth="1" fill="none">
                <path d="M40 120 L150 62 L268 108 L392 54 L508 96" />
                <path d="M150 62 L168 176" />
                <path d="M268 108 L246 238" />
                <path d="M392 54 L430 168" />
                <path d="M60 356 L186 404 L318 362 L460 408" />
                <path d="M186 404 L168 176" />
                <path d="M318 362 L246 238" />
              </g>
              <g fill="var(--star-dim)">
                <circle cx="40" cy="120" r="2" />
                <circle cx="150" cy="62" r="2.6" />
                <circle cx="268" cy="108" r="2" />
                <circle cx="392" cy="54" r="2.6" />
                <circle cx="508" cy="96" r="2" />
                <circle cx="168" cy="176" r="1.8" />
                <circle cx="246" cy="238" r="1.8" />
                <circle cx="430" cy="168" r="1.8" />
                <circle cx="60" cy="356" r="2" />
                <circle cx="186" cy="404" r="2.4" />
                <circle cx="318" cy="362" r="2" />
                <circle cx="460" cy="408" r="2" />
              </g>
            </svg>

            {/* The brand figure — one per page. Hidden below 640px rather than
                scaled down, and never pointer-reactive. */}
            <RobotDrifter size={104} className="hidden sm:block absolute -top-12 -right-4 z-ornament" />

            <div className="relative card-surface p-4">
              {/* The photo keeps a deliberate light plate. Every asset in
                  assets/img has a white background; blending or inverting
                  eats the product along with it. */}
              <div className="product-plate aspect-square">
                <img
                  src={roboticsImage}
                  alt="Students assembling a robotics kit at a Lab of Innovation bench"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <div className="flex-1 rounded-md border border-line-hairline bg-surface-inset px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-md bg-surface-signal border border-signal-900 flex items-center justify-center">
                      <Play className="w-4 h-4 text-signal-300" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-heading text-[17px] text-ink">Live Labs</div>
                      <div className="text-xs text-ink-muted">Active Now</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-md border border-line-hairline bg-surface-inset px-4 py-3.5">
                  <div className="font-heading text-[15px] text-ink mb-2">Success Rate</div>
                  <div className="flex items-end gap-1 h-7" aria-hidden="true">
                    {[40, 70, 50, 90, 60, 95].map((h) => (
                      <span key={h} className="flex-1 rounded-sm bg-signal-500" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
