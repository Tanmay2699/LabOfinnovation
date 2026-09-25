import { motion, useReducedMotion } from 'framer-motion';
import { VARIANTS, VIEWPORT, still, staggerDelay, STAGGER } from '../../motion/variants';

/**
 * The only sanctioned way content enters on scroll.
 *
 * Fires once at 18% visibility and never re-hides — re-animating on scroll-up
 * is the single most common way a site starts feeling cheap, and it makes the
 * page unusable for anyone reading back over something.
 *
 *   fade     opacity only. Copy following an already-revealed heading.
 *   rise     the default. Cards, headings, paragraphs, images.
 *   riseSm   stagger children: list items, chips, spec rows.
 *   scaleIn  media only: product shots, lab photography, video posters.
 *
 * Pass `index` to stagger siblings; total delay is capped at 600ms internally.
 * Do not nest one Reveal inside another — the delays compound and the child
 * lands after its parent has finished.
 *
 * `AnimatedSection` is the older component with the same job; it still works
 * and both are wired to the same tokens.
 */
const Reveal = ({
  children,
  variant = 'rise',
  index = 0,
  stagger = STAGGER.base,
  delay = 0,
  amount,
  as = 'div',
  className = '',
  ...props
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const chosen = reduceMotion ? still : VARIANTS[variant] || VARIANTS.rise;

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={amount ? { ...VIEWPORT, amount } : VIEWPORT}
      variants={chosen}
      transition={reduceMotion ? { duration: 0 } : { delay: delay + staggerDelay(index, stagger) }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
