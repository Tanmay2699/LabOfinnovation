import { Link } from 'react-router-dom';
import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import Button from '../UI/Button';
import StarField from '../Space/StarField';
import NebulaWash from '../Space/NebulaWash';

/**
 * Closing CTA — the second and last atmospheric band on the page.
 *
 * Was: a saturated primary-to-secondary gradient field with two 384px
 * blurred colour circles counter-rotating on 20s and 25s loops. Now the
 * ground is bg-surface-void with the canvas starfield and a single ember
 * wash, and the content sits on a translucent panel so the headline keeps
 * its contrast wherever the stars happen to fall.
 *
 * The ember element in this band is the "Explore Programs" button.
 * The ember NebulaWash is decoration at z-nebula and carries no meaning —
 * nothing else in this band may go warm.
 */
const CTASection = () => {
  const trust = [
    { value: '100%', label: 'Industry Certified' },
    { value: '24/7', label: 'Support Available' },
    { value: '500+', label: 'Success Stories' },
  ];

  return (
    <section className="band-atmospheric section-padding-hero hairline-top">
      <StarField density="sparse" />
      {/* Only the top of the blob clears the bottom edge, so it reads as light
          rather than as a circle. left is a calc, not -translate-x-1/2: the
          breathe keyframes own `transform`. */}
      <NebulaWash tone="ember" size={620} bottom={-320} left="calc(50% - 310px)" />

      <div className="container-custom relative z-content">
        <Reveal variant="rise">
          <div className="rounded-panel border border-line-hairline bg-surface-raised/90 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <SectionHeading
                size="display"
                title={<>Ready to Start Your<br /><span className="text-signal-300">Innovation Journey?</span></>}
                lead="Join thousands of learners and organizations transforming the future through robotics. Whether you're a student, educator, or professional, we have the perfect program for you."
              />

              <div className="shrink-0 w-full lg:w-64 flex flex-col gap-3">
                <Link to="/programs/school" className="block">
                  <Button variant="key" size="lg" fullWidth>
                    Explore Programs
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="outline" size="lg" fullWidth>
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 hairline-top">
              {trust.map((item) => (
                <div key={item.label}>
                  <div className="font-heading text-2xl lg:text-heading-2 text-ink mb-1">
                    {item.value}
                  </div>
                  <div className="text-caption text-ink-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
