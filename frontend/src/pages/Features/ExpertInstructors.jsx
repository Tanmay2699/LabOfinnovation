import PageSky from '../../components/Space/PageSky';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import {
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Target,
  Zap,
} from 'lucide-react';

const ExpertInstructors = () => {
  const instructors = [
    {
      name: 'Dr. Rajesh Kumar',
      image: '👨‍🏫',
      role: 'Lead Robotics Instructor',
      expertise: ['Robotics', 'AI/ML', 'Embedded Systems'],
      experience: '15+ years',
      education: 'PhD in Robotics - IIT Delhi',
      achievements: ['Published 20+ research papers', 'Led 50+ industry projects', '500+ students trained'],
      quote: 'Teaching robotics is about igniting curiosity and building confidence in young minds.',
    },
    {
      name: 'Priya Sharma',
      image: '👩‍💻',
      role: 'Senior Programming Instructor',
      expertise: ['Python', 'C++', 'ROS', 'Computer Vision'],
      experience: '12+ years',
      education: 'M.Tech Computer Science - IIT Bombay',
      achievements: ['Ex-Google Engineer', 'Open source contributor', '1000+ students mentored'],
      quote: 'Every student has the potential to code amazing robots—they just need the right guidance.',
    },
    {
      name: 'Amit Patel',
      image: '👨‍🔧',
      role: 'Mechatronics Specialist',
      expertise: ['Mechanical Design', 'Electronics', '3D Printing'],
      experience: '10+ years',
      education: 'B.Tech Mechanical - NIT Trichy',
      achievements: ['20+ robot designs', 'Competition judge', 'Industry consultant'],
      quote: 'Building robots teaches patience, precision, and the joy of seeing your creation come to life.',
    },
    {
      name: 'Sneha Reddy',
      image: '👩‍🔬',
      role: 'AI & IoT Instructor',
      expertise: ['Machine Learning', 'IoT', 'Data Science'],
      experience: '8+ years',
      education: 'M.S. Artificial Intelligence - Stanford',
      achievements: ['AI startup founder', 'TEDx speaker', 'Award-winning educator'],
      quote: 'The future belongs to those who can blend AI with robotics—let\'s prepare our students for it.',
    },
  ];

  const teachingApproach = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Our instructors genuinely love robotics and teaching, making every class engaging and inspiring.',
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Small batch sizes ensure personalized attention and tailored learning experiences.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Instructors regularly update their skills with the latest technologies and teaching methods.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Clear learning objectives and milestones help students track progress and stay motivated.',
    },
  ];

  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Advanced Degrees',
      stat: '100%',
      description: 'All instructors hold master\'s or doctoral degrees in relevant fields',
    },
    {
      icon: Briefcase,
      title: 'Industry Experience',
      stat: '10+ years',
      description: 'Average industry experience working on real-world robotics projects',
    },
    {
      icon: Award,
      title: 'Certified Trainers',
      stat: '50+',
      description: 'Professional certifications in teaching, robotics, and programming',
    },
    {
      icon: Star,
      title: 'Student Rating',
      stat: '4.9/5',
      description: 'Consistently high ratings from students and parents',
    },
  ];

  const supportFeatures = [
    'One-on-one mentoring sessions',
    '24/7 doubt resolution support',
    'Career guidance and counseling',
    'Regular progress assessments',
    'Parent-teacher meetings',
    'Workshop and webinar access',
    'Project review and feedback',
    'Post-course support',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade">
              <Badge variant="secondary" className="mb-6 bg-secondary-500/20 border border-secondary-500/50 text-indigo-300">
 👨‍🏫 Expert Instructors
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Learn from the <span className="text-gradient">Best</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Our world-class instructors combine deep technical expertise with a passion for teaching, ensuring every student reaches their full potential.
              </p>
              <Button size="lg">
                Meet Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Our Team</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Meet Your Mentors
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Industry veterans and passionate educators dedicated to your success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-6 mb-4">
                    <div className="w-16 h-16 shrink-0 rounded-full border border-line-strong bg-surface-field flex items-center justify-center text-4xl" aria-hidden="true">{instructor.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-ink mb-1">
                        {instructor.name}
                      </h3>
                      <Badge size="sm" variant="secondary" className="mb-3">
                        {instructor.role}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-ink-secondary mb-2">
                        <Briefcase size={14} />
                        <span>{instructor.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-ink-secondary">
                        <GraduationCap size={14} />
                        <span>{instructor.education}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-ink mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, idx) => (
                        <Badge key={idx} size="sm" variant="info">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-ink mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {instructor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-ink-secondary">
                          <CheckCircle size={14} className="text-indigo-300 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary-50 p-4 rounded-lg border-l-4 border-secondary-500">
                    <p className="text-sm italic text-ink-secondary">"{instructor.quote}"</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Credentials</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                World-Class Qualifications
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center h-full">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <qual.icon className="w-8 h-8 text-indigo-300" />
                  </div>
                  <div className="text-4xl font-semibold text-indigo-300 mb-2">{qual.stat}</div>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                    {qual.title}
                  </h3>
                  <p className="text-ink-secondary text-sm">{qual.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Our Philosophy</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                How We Teach
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                A proven methodology that combines technical excellence with empathetic teaching.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingApproach.map((approach, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="w-8 h-8 text-ink" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-ink-secondary">{approach.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <Badge variant="success" className="mb-4">Beyond Classes</Badge>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                  Comprehensive Support
                </h2>
                <p className="text-xl text-ink-secondary">
                  Our commitment to your success extends far beyond the classroom.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <div className="grid md:grid-cols-2 gap-6">
                  {supportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                      <span className="text-ink-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-secondary-600 to-primary-600 text-ink mt-8">
                <div className="text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    Small Batch Sizes
                  </h3>
                  <p className="text-ink-secondary mb-4">
                    Maximum 10 students per instructor to ensure personalized attention and effective learning.
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <div>
                      <div className="text-3xl font-semibold">1:10</div>
                      <div className="text-sm text-ink-secondary">Student Ratio</div>
                    </div>
                    <div className="w-px h-12 bg-white/20" />
                    <div>
                      <div className="text-3xl font-semibold">100%</div>
                      <div className="text-sm text-ink-secondary">Attention</div>
                    </div>
                  </div>
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
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center text-ink">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
                Start Learning with Expert Guidance
              </h2>
              <p className="text-xl mb-8 text-ink-secondary">
                Join our programs and experience the difference that expert instruction makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ExpertInstructors;
