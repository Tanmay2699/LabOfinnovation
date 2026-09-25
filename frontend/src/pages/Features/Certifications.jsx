import MissionPath from '../../components/UI/MissionPath';
import GridLattice from '../../components/Space/GridLattice';
import PageSky from '../../components/Space/PageSky';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import {
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Briefcase,
  GraduationCap,
  Trophy,
  ArrowRight,
  FileText,
  Download,
  Globe,
} from 'lucide-react';

const Certifications = () => {
  const certificationTypes = [
    {
      icon: GraduationCap,
      title: 'Course Completion Certificate',
      level: 'Basic',
      description: 'Awarded upon successful completion of any robotics program.',
      features: [
        'Official certificate with unique ID',
        'Digitally verifiable',
        'Program details and duration',
        'Skills acquired listed',
      ],
      validity: 'Lifetime',
    },
    {
      icon: Star,
      title: 'Skill Proficiency Certificate',
      level: 'Intermediate',
      description: 'Demonstrates mastery in specific robotics skills and technologies.',
      features: [
        'Skill assessment results',
        'Project portfolio included',
        'Level of proficiency indicated',
        'Industry recognized',
      ],
      validity: 'Lifetime',
    },
    {
      icon: Trophy,
      title: 'Advanced Certification',
      level: 'Advanced',
      description: 'Premium certification for advanced programs with industry partnership.',
      features: [
        'Co-branded with industry partners',
        'Comprehensive skill evaluation',
        'Interview preparation support',
        'Priority job placement',
      ],
      validity: '3 years (renewable)',
    },
    {
      icon: Award,
      title: 'Professional Accreditation',
      level: 'Expert',
      description: 'Top-tier certification for professional-level robotics expertise.',
      features: [
        'Globally recognized credential',
        'Detailed competency report',
        'LinkedIn certification badge',
        'Industry endorsement',
      ],
      validity: '5 years (renewable)',
    },
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Career Advancement',
      description: 'Stand out in job applications and interviews with recognized certifications.',
      stats: '85% of our certified students receive job offers within 6 months',
    },
    {
      icon: TrendingUp,
      title: 'Skill Validation',
      description: 'Prove your robotics expertise with industry-standard credentials.',
      stats: '95% of employers recognize our certifications',
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Our certificates are accepted by institutions and companies worldwide.',
      stats: 'Valid in 50+ countries',
    },
    {
      icon: Target,
      title: 'Portfolio Building',
      description: 'Each certificate adds to your professional portfolio and credibility.',
      stats: '1,000+ students certified and employed',
    },
  ];

  const certificationProcess = [
    {
      step: '1',
      title: 'Complete Program',
      description: 'Attend all classes and complete required projects',
      duration: 'Program dependent',
    },
    {
      step: '2',
      title: 'Project Submission',
      description: 'Submit final project for evaluation',
      duration: '1-2 weeks',
    },
    {
      step: '3',
      title: 'Assessment',
      description: 'Technical and practical skill evaluation',
      duration: '1 week',
    },
    {
      step: '4',
      title: 'Certificate Issued',
      description: 'Receive digital and physical certificate',
      duration: 'Immediate',
    },
  ];

  const recognitions = [
    {
      name: 'Industry Partners',
      count: '50+',
      description: 'Leading companies recognize our certifications',
 logos: ['🏢', '🏭', '💼', '🏛️'],
    },
    {
      name: 'Universities',
      count: '30+',
      description: 'Academic institutions accept our credits',
 logos: ['🎓', '📚', '🏫', '📖'],
    },
    {
      name: 'Government Bodies',
      count: '10+',
      description: 'Official recognition from education boards',
 logos: ['🏛️', '⚖️', '📜', '🏅'],
    },
  ];

  const sampleProjects = [
    {
      title: 'Autonomous Navigation Robot',
      student: 'Rahul Kumar',
      grade: 'A+',
      description: 'Built a self-navigating robot using SLAM algorithms',
      skills: ['ROS', 'Python', 'Computer Vision', 'Path Planning'],
    },
    {
      title: 'IoT-Based Home Automation',
      student: 'Priya Sharma',
      grade: 'A',
      description: 'Developed smart home system with voice control',
      skills: ['IoT', 'Arduino', 'Node.js', 'Cloud Integration'],
    },
    {
      title: 'AI-Powered Sorting System',
      student: 'Amit Patel',
      grade: 'A+',
      description: 'Created automated sorting using computer vision and ML',
      skills: ['TensorFlow', 'OpenCV', 'Robotics', 'Machine Learning'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade">
              <Badge variant="accent" className="mb-6 bg-accent-500/20 border border-accent-500/50 text-copper-400">
 🏆 Certifications
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Industry-Recognized <span className="text-gradient">Credentials</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Earn globally recognized certifications that validate your robotics expertise and accelerate your career.
              </p>
              <Button size="lg" variant="key">
                View Sample Certificates
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certification Types */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Our Certificates</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Certification Levels
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Progress through certification levels as you advance your robotics skills.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {certificationTypes.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-7 h-7 text-copper-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-heading font-semibold text-ink">
                          {cert.title}
                        </h3>
                      </div>
                      <Badge size="sm" variant={
                        cert.level === 'Basic' ? 'success' :
                        cert.level === 'Intermediate' ? 'info' :
                        cert.level === 'Advanced' ? 'warning' : 'danger'
                      }>
                        {cert.level}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-ink-secondary mb-4">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-ink mb-2">Includes:</h4>
                    <ul className="space-y-2">
                      {cert.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-ink-secondary">
                          <CheckCircle size={16} className="text-copper-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-dark-100 flex items-center justify-between">
                    <div className="text-sm text-ink-secondary">
                      <span className="font-semibold">Validity:</span> {cert.validity}
                    </div>
                    <Button variant="outline" size="sm">
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

      {/* Benefits */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">Why Get Certified</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Certification Benefits
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-copper-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-ink-secondary mb-3">{benefit.description}</p>
                      <div className="bg-accent-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-copper-400">{benefit.stats}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="section-padding bg-surface-base relative overflow-hidden">
        <GridLattice />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">How It Works</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Certification Process
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                A straightforward path from enrollment to certification.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <MissionPath
              steps={certificationProcess.map((p) => ({
                tag: p.step,
                title: p.title,
                copy: p.description,
                note: p.duration,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Global Recognition</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Trusted Worldwide
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Our certifications are recognized by leading organizations globally.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center">
                  <div className="flex justify-center gap-2 text-4xl mb-4">
                    {recognition.logos.map((logo, idx) => (
                      <span key={idx}>{logo}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-ink mb-2">
                    {recognition.name}
                  </h3>
                  <div className="text-3xl font-semibold text-copper-400 mb-2">{recognition.count}</div>
                  <p className="text-ink-secondary">{recognition.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">Certified Projects</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Award-Winning Projects
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                See what our certified students have built.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8 text-warning-text" />
                    <Badge variant="success">{project.grade}</Badge>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-secondary mb-3">by {project.student}</p>
                  <p className="text-ink-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <Badge key={idx} size="sm" variant="info">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
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
                Start Your Certification Journey
              </h2>
              <p className="text-xl mb-8 text-ink-secondary">
                Earn credentials that open doors to exciting robotics careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="key">
                  Enroll in a Program
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

export default Certifications;
