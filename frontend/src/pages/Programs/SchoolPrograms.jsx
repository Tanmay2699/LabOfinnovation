import PageSky from '../../components/Space/PageSky';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';

const SchoolPrograms = () => {
  const ageGroups = [
    {
      age: '6-8 Years',
      title: 'Junior Explorers',
      description: 'Introduction to robotics through play-based learning and simple mechanisms.',
      duration: '6 Months',
      sessions: '24',
      features: ['Basic Concepts', 'Visual Programming', 'Team Projects'],
    },
    {
      age: '9-12 Years',
      title: 'Young Innovators',
      description: 'Block-based programming, sensor integration, and creative problem-solving.',
      duration: '9 Months',
      sessions: '36',
      features: ['Block Programming', 'Sensor Integration', 'Competitions'],
    },
    {
      age: '13-15 Years',
      title: 'Tech Masters',
      description: 'Text-based coding, advanced robotics, and engineering principles.',
      duration: '12 Months',
      sessions: '48',
      features: ['C/C++ Programming', 'Advanced Sensors', 'Project Based'],
    },
    {
      age: '16-18 Years',
      title: 'Future Engineers',
      description: 'AI integration, IoT connectivity, and industry-standard practices.',
      duration: '12 Months',
      sessions: '48',
      features: ['AI & Machine Learning', 'IoT Integration', 'Industry Projects'],
    },
  ];

  const benefits = [
    'Hands-on project-based learning',
    'Industry-certified instructors',
    'Complete robotics kits provided',
    'Regular progress assessments',
    'Competition opportunities',
    'Certificate upon completion',
    'Parent-teacher meetings',
    'Online learning resources',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeUp">
              <Badge variant="primary" className="mb-6 bg-primary-500/20 border border-primary-500/50 text-indigo-300">
 🎓 School Programs
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Inspiring Young Minds Through <span className="text-gradient">Robotics</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Age-appropriate curriculum designed to build strong STEM foundations 
                and ignite passion for technology from ages 6 to 18.
              </p>
              <Button size="lg">
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
              Programs by <span className="text-gradient">Age Group</span>
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
              Tailored learning paths that grow with your child's development
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ageGroups.map((program, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <Card className="h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="primary">{program.age}</Badge>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-ink" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-semibold text-ink mb-3">
                      {program.title}
                    </h3>

                    <p className="text-ink-secondary mb-6">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-ink-secondary">
                        <Clock className="w-4 h-4 mr-2 text-indigo-300" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-ink-secondary">
                        <Users className="w-4 h-4 mr-2 text-indigo-300" />
                        {program.sessions} Sessions
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-ink-secondary">
                          <CheckCircle className="w-4 h-4 mr-2 text-success-text" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button fullWidth>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6">
                Why Choose Our <span className="text-gradient">School Programs?</span>
              </h2>
              <p className="text-xl text-ink-secondary mb-8">
                We provide comprehensive robotics education that prepares students 
                for the technology-driven future while making learning fun and engaging.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span className="text-ink-secondary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <Card className="bg-surface-raised">
                <div className="p-8">
                  <Award className="w-16 h-16 text-indigo-300 mb-6" />
                  <h3 className="text-2xl font-heading font-semibold text-ink mb-4">
                    Certification & Recognition
                  </h3>
                  <p className="text-ink-secondary mb-6">
                    Students receive industry-recognized certificates upon completion, 
                    showcasing their skills and achievements in robotics and programming.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-ink-secondary">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      Official completion certificate
                    </li>
                    <li className="flex items-center text-ink-secondary">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      Skill assessment report
                    </li>
                    <li className="flex items-center text-ink-secondary">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      Portfolio of projects
                    </li>
                    <li className="flex items-center text-ink-secondary">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      Competition participation badges
                    </li>
                  </ul>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <AnimatedSection animation="scaleIn" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-ink-secondary mb-8">
              Enroll your child today and watch them become tomorrow's innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Enroll Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SchoolPrograms;
