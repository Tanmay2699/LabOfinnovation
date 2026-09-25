import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DUR, EASE, TRAVEL } from '../../motion/variants';

/**
 * Section entrance — the tier-2 arrival from motion/variants: travel-md on
 * ease-entrance over dur-slow, fired once. Slides use travel-sm; on a dark
 * page a long sideways slide reads as a carousel.
 */
const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = DUR.slow,
}) => {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = {
    fadeUp: { hidden: { opacity: 0, y: TRAVEL.md }, visible: { opacity: 1, y: 0 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scaleIn: { hidden: { opacity: 0, y: TRAVEL.sm, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } },
    slideLeft: { hidden: { opacity: 0, x: -TRAVEL.sm }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: TRAVEL.sm }, visible: { opacity: 1, x: 0 } },
  };
  animations.fade = animations.fadeIn;
  animations.scale = animations.scaleIn;

  // With reduced motion the content still fades, but nothing travels.
  const variants = reduceMotion ? animations.fadeIn : (animations[animation] || animations.fadeUp);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: reduceMotion ? 0.01 : duration,
        delay: reduceMotion ? 0 : Math.min(delay, 0.6),
        ease: EASE.entrance,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
