import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import Card from '../UI/Card';
import { DUR, EASE, TRAVEL } from '../../motion/variants';

/**
 * Testimonials.
 *
 * Copy and emoji avatars are the live site's, verbatim. The avatar sits on a
 * quiet inset disc rather than a gradient; when real headshots arrive, drop
 * them onto `.product-plate`, cropped square.
 *
 * No ember on this band. The page spends it on the closing CTA, so the
 * active pip is signal-300.
 */
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const testimonials = [
    {
      name: 'Naveen Kumar',
      role: 'High School Teacher',
      organization: 'Rashtriya Military School',
      image: '👨‍🔬',
      content:
        'Lab of Innovation transformed our STEM program. Students are more engaged and excited about robotics than ever before. The curriculum is comprehensive and the support is exceptional.',
    },
    {
      name: 'Amit Alfred',
      role: 'High School Teacher',
      organization: 'Maheshwari Public School',
      image: '👨‍🔬',
      content:
        'The school program provided our students with industry-relevant skills. Many secured internships and jobs in leading tech companies. Truly outstanding!',
    },
    {
      name: 'Rekha Mehra',
      role: 'Principal of College',
      organization: 'Government Engineering College',
      image: '👩‍💼',
      content:
        'Corporate training exceeded our expectations. Our team upskilled quickly and we saw immediate improvements in automation projects. Highly recommended!',
    },
    {
      name: 'Yogendra Singh',
      role: 'HOD of Robotics',
      organization: 'Savitri College',
      image: '👨‍🏫',
      content:
        'The college program provided our students with industry-relevant skills. Many secured internships and jobs in leading tech companies. Truly outstanding!',
    },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIndex];

  // Tier 2: the slide arrives on ease-entrance and leaves at half that on
  // ease-exit. Reduced motion keeps the crossfade but drops the travel.
  const slide = {
    initial: { opacity: 0, y: reduceMotion ? 0 : TRAVEL.sm },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : DUR.base, ease: EASE.entrance },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -TRAVEL.xs,
      transition: { duration: reduceMotion ? 0 : DUR.quick, ease: EASE.exit },
    },
  };

  return (
    <section className="section-padding bg-surface-raised hairline-top">
      <div className="container-custom">
        <Reveal index={0} className="mb-11">
          <SectionHeading
            title={<>What Our <span className="text-signal-300">Community Says</span></>}
            lead="Hear from educators, students, and professionals who've experienced our programs"
          />
        </Reveal>

        <div className="max-w-4xl">
          <Reveal index={1}>
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} {...slide}>
                <Card>
                  <figure className="m-0">
                    <Quote className="w-7 h-7 text-signal-300 mb-6" aria-hidden="true" />

                    <blockquote className="text-lg md:text-xl leading-8 text-ink mb-8">
                      "{active.content}"
                    </blockquote>

                    <figcaption className="flex items-center gap-4 pt-6 hairline-top">
                      <div
                        className="w-12 h-12 shrink-0 rounded-full border border-line-hairline bg-surface-inset flex items-center justify-center text-2xl"
                        aria-hidden="true"
                      >
                        {active.image}
                      </div>
                      <div>
                        <div className="text-[15px] leading-6 font-semibold text-ink">
                          {active.name}
                        </div>
                        <div className="text-[13px] leading-5 text-signal-300">{active.role}</div>
                        <div className="text-xs leading-[18px] text-ink-muted">
                          {active.organization}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal index={2} variant="riseSm" className="flex items-center gap-3 mt-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-control border border-line-hairline bg-surface-overlay flex items-center justify-center text-ink-body hover:text-ink hover:border-line-strong transition-colors duration-quick ease-standard"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-control border border-line-hairline bg-surface-overlay flex items-center justify-center text-ink-body hover:text-ink hover:border-line-strong transition-colors duration-quick ease-standard"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex gap-1 ml-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={index === activeIndex}
                  className="group h-11 px-1.5 flex items-center justify-center"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 rounded-pill transition-all duration-base ease-standard ${
                      index === activeIndex
                        ? 'w-7 bg-signal-300'
                        : 'w-1.5 bg-line-strong group-hover:bg-signal-500'
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
