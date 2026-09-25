import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import parallaxImage from '../../assets/img/parallax.webp';

/**
 * The inset band — the only place a background photograph belongs.
 *
 * The scrim is the whole trick: a flat two-stop wash of surface-void from 82%
 * to 92% keeps the headline above 4.5:1 at every scroll position, which a
 * coloured gradient overlay could not guarantee. `.product-plate` is the other
 * sanctioned photo treatment, but it is a padded plate with an inner rim — it
 * has nothing to grip on a full-bleed ground, so the scrim is what applies.
 *
 * ONE parallax layer, at --parallax-far (0.08). The system allows three and
 * never four; a background photograph is a far layer by definition and gets
 * nothing stacked on it. Travel is a percentage of the layer's own height so
 * it holds at any section height, and the layer is overscanned so the travel
 * can never uncover an edge. Under prefers-reduced-motion it resolves to zero.
 *
 * No nebula here. The photograph already supplies the light in this band, and
 * a wash over the scrim would eat into the contrast guarantee above.
 *
 * Removed: two 4px-bordered rings counter-rotating on 15s and 20s loops, a
 * scale 0.8 -> 1 -> 0.8 scroll transform that made the copy breathe. The
 * copy itself, emoji included, is the live site's and stays verbatim.
 */
const ParallaxSection = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // --parallax-far is 0.08, split either side of centre.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['-4%', '4%']
  );

  const features = [
    {
      icon: Award,
      title: 'Excellence in Education',
      description: 'Industry-recognized certifications and hands-on training programs',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with years of experience',
    },
    {
      icon: Target,
      title: 'Career-Focused',
      description: 'Programs designed to prepare you for real-world challenges',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Access to latest robotics and AI technology platforms',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden bg-surface-void hairline-top"
    >
      {/* Overscanned by 8% top and bottom so 4% of travel never shows a seam. */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] z-starfield"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        />
        {/* Flat, not coloured. Contrast must hold at every scroll offset. */}
        <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--c-surface-void)/0.82),rgb(var(--c-surface-void)/0.92))]" />
      </motion.div>

      <div className="container-custom relative z-content section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="🎓 Transform Your Future"
                title={<>Empowering Innovation<br /><span className="text-signal-300">Through Education</span></>}
                lead="Join a community of innovators, thinkers, and makers who are shaping the future of technology. Our comprehensive programs combine theoretical knowledge with practical, hands-on experience in robotics, AI, and automation."
              />
            </Reveal>

            {/* Both signal. The Home page's ember lives on the hero CTA. */}
            <Reveal index={1} className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <Link to="/programs/school" className="block">
                <Button variant="primary" size="lg" arrow fullWidth className="sm:w-auto group">
                  Explore Programs
                </Button>
              </Link>

              <Link to="/features/schedule-consultation" className="block">
                <Button variant="outline" size="lg" fullWidth className="sm:w-auto">
                  Book Consultation
                </Button>
              </Link>
            </Reveal>

            <Reveal index={2} className="grid grid-cols-2 gap-6 mt-11 pt-8 hairline-top">
              <div>
                <div className="font-display text-h2 text-ink mb-1">98%</div>
                <div className="text-caption text-ink-muted">Student Satisfaction</div>
              </div>
              <div>
                <div className="font-display text-h2 text-ink mb-1">15+</div>
                <div className="text-caption text-ink-muted">Years Experience</div>
              </div>
            </Reveal>
          </div>

          {/* Right — glass panels, because there is a photograph behind them */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                variant="riseSm"
                index={index}
                className="rounded-card bg-surface-card/90 border border-line-hairline p-6 transition-[border-color,box-shadow] duration-base ease-standard hover:border-line-strong hover:shadow-lift"
              >
                <div className="w-11 h-11 rounded-md border border-line-hairline bg-surface-inset flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-signal-300" aria-hidden="true" />
                </div>
                <h3 className="font-display text-h3 text-ink mb-2">{feature.title}</h3>
                <p className="text-body-sm text-ink-body">{feature.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
