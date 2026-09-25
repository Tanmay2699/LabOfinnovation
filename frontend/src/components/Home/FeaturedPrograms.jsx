import { Link } from 'react-router-dom';
import { GraduationCap, Building2, Users, ArrowRight, Clock, Award } from 'lucide-react';
import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import Button from '../UI/Button';
import ProgramCard from '../UI/ProgramCard';

/**
 * Programme cards.
 *
 * Removed: a 128px CPU icon and a 96px cog, both parallax-translated and
 * scroll-rotated at 30% opacity. On a near-black ground a light-indigo
 * 128px glyph is the loudest thing on the screen — the exact failure the
 * "stars stay under 8% of the visual weight" rule exists to prevent.
 *
 * The hand-rolled card is gone too. This is programme content, which is
 * exactly what ProgramCard is for: the constellation lights on hover and the
 * whole card is the link, so there is no "Learn more" button competing with
 * the title for the click. Per-programme icon tiles are not part of that
 * card — three differently-lit tiles in one row is a light-theme device and
 * the heading already does the differentiating.
 *
 * Duration and the enrolled count share the card's single readout slot;
 * the three feature tags already fill the meta row's badge budget.
 *
 * Home's band rhythm puts this section on `base`. It stays flat — the
 * atmospheric bands either side of it are the hero and the closing CTA.
 */
const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: 'School Programs',
      icon: GraduationCap,
      description:
        'Age-appropriate robotics curricula designed to spark curiosity and build foundational STEM skills.',
      features: ['Ages 6-18', 'Project-Based Learning', 'Certification'],
      duration: '6-12 Months',
      students: '5000+',
      path: '/programs/school',
    },
    {
      id: 2,
      title: 'College Programs',
      icon: Award,
      description:
        'Advanced robotics, AI, and IoT programs with hands-on projects and industry collaboration.',
      features: ['Advanced Curriculum', 'Industry Projects', 'Internships'],
      duration: '1-2 Years',
      students: '3000+',
      path: '/programs/college',
    },
    {
      id: 3,
      title: 'Corporate Training',
      icon: Building2,
      description:
        'Customized upskilling programs for organizations embracing automation and innovation.',
      features: ['Custom Workshops', 'On-site Training', 'Certification'],
      duration: 'Flexible',
      students: '2000+',
      path: '/programs/corporate',
    },
  ];

  return (
    <section className="section-padding bg-surface-base">
      <div className="container-custom">
        <Reveal>
          <div className="mb-11">
            <SectionHeading
              title={<>Our <span className="text-signal-300">Programs</span></>}
              lead="Comprehensive robotics education tailored for every stage of learning and professional development"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, index) => (
            <Reveal key={program.id} index={index}>
              <Link to={program.path} className="block h-full rounded-lg no-underline">
                <ProgramCard
                  className="h-full"
                  title={program.title}
                  summary={program.description}
                  tags={program.features}
                  cta="Learn More"
                  duration={
                    <span className="inline-flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-signal-300" aria-hidden="true" />
                        {program.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-signal-300" aria-hidden="true" />
                        {program.students}
                      </span>
                    </span>
                  }
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Link to="/programs/school">
            <Button size="lg">
              View All Programs
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
