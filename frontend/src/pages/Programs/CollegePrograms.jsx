import PageSky from '../../components/Space/PageSky';
import { useState } from 'react';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Users, 
  Clock, 
  BookOpen,
  Cpu,
  Brain,
  Zap,
  CheckCircle,
  Target,
  TrendingUp,
  Code
} from 'lucide-react';

const CollegePrograms = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const programs = [
    {
      title: 'B.Tech Robotics Engineering',
      duration: '4 Years',
      level: 'Undergraduate',
      icon: Cpu,
      description: 'Comprehensive robotics engineering program covering mechanics, electronics, programming, and AI.',
      modules: [
        'Robot Kinematics & Dynamics',
        'Embedded Systems Design',
        'Computer Vision & Perception',
        'Control Systems',
        'Machine Learning for Robotics',
        'IoT & Industry 4.0'
      ],
      outcomes: ['Design autonomous robots', 'Build industrial automation systems', 'Develop AI algorithms'],
      placement: '95% placement rate',
    },
    {
      title: 'B.Tech EIC',
      duration: '2 Years',
      level: 'Undergraduate',
      icon: Brain,
      description: 'Advanced research-oriented program focusing on cutting-edge robotics and AI technologies.',
      modules: [
        'Advanced AI & Deep Learning',
        'Swarm Robotics',
        'Human-Robot Interaction',
        'Autonomous Navigation',
        'Research Methodology',
        'Thesis Project'
      ],
      outcomes: ['Lead R&D teams', 'Publish research papers', 'Innovate new technologies'],
      placement: '100% placement rate',
    },
    {
      title: 'Diploma in Robotics',
      duration: '1 Year',
      level: 'Diploma',
      icon: Zap,
      description: 'Intensive practical program for quick entry into the robotics industry.',
      modules: [
        'Robot Programming (ROS)',
        'Sensor Integration',
        '3D Printing & Fabrication',
        'Industrial Automation',
        'PLC Programming',
        'Capstone Project'
      ],
      outcomes: ['Work as robotics technician', 'Build custom robots', 'Setup automation systems'],
      placement: '90% placement rate',
    },
    {
      title: 'Certificate in AI & Robotics',
      duration: '6 Months',
      level: 'Certificate',
      icon: Code,
      description: 'Short-term program focusing on AI integration in robotics applications.',
      modules: [
        'Python for Robotics',
        'TensorFlow & PyTorch',
        'Computer Vision Basics',
        'Robot Operating System',
        'IoT Integration',
        'Project Portfolio'
      ],
      outcomes: ['Build AI-powered robots', 'Implement ML models', 'Create smart automation'],
      placement: '85% placement rate',
    },
  ];

  const partnershipBenefits = [
    {
      icon: BookOpen,
      title: 'Industry-Aligned Curriculum',
      description: 'Courses designed with input from leading robotics companies and research labs.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from professors with PhDs and industry professionals with 15+ years experience.',
    },
    {
      icon: Briefcase,
      title: 'Internship Opportunities',
      description: 'Guaranteed internships with partner companies in robotics, automation, and AI sectors.',
    },
    {
      icon: Award,
      title: 'Recognized Certifications',
      description: 'Industry-recognized certifications valid globally, endorsed by major tech companies.',
    },
    {
      icon: Target,
      title: 'Research Projects',
      description: 'Work on cutting-edge research projects with funding and publication opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Career Support',
      description: 'Dedicated placement cell, resume building, interview prep, and job matching services.',
    },
  ];

  const partnerUniversities = [
    { name: 'IIT Delhi', courses: 25, students: 500 },
    { name: 'MIT Manipal', courses: 18, students: 350 },
    { name: 'VIT Vellore', courses: 22, students: 450 },
    { name: 'BITS Pilani', courses: 20, students: 400 },
    { name: 'NIT Trichy', courses: 15, students: 300 },
    { name: 'Anna University', courses: 12, students: 280 },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      image: '👩‍🎓',
      program: 'B.Tech EIC',
      university: 'Government Engineering College, Ajmer',
      quote: 'The program provided hands-on experience with industry-standard tools. I landed a job at a leading robotics startup even before graduation!',
      company: 'RoboTech Inc.',
      position: 'Robotics Engineer',
    },
    {
      name: 'Rahul Kumar',
      image: '👨‍🎓',
      program: 'B.Tech Computer Science Engineering',
      university: 'Government Engineering College, Ajmer',
      quote: 'The curriculum is perfectly balanced between theory and practice. The internship opportunity helped me build a strong foundation.',
      company: 'Tech Mahindra',
      position: 'Automation Engineer',
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
              <Badge variant="secondary" className="mb-6 bg-secondary-500/20 border border-secondary-500/50 text-indigo-300">
 🎓 College Partnerships
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Advanced Robotics & <span className="text-gradient">AI Education</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Industry-aligned programs in robotics, AI, IoT, and automation with hands-on projects, internships, and guaranteed placements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Why Partner With Us</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Comprehensive support for educational institutions to deliver world-class robotics education.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <benefit.icon className="w-10 h-10 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-secondary leading-relaxed">{benefit.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Our Programs</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Choose Your Path
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                From undergraduate degrees to specialized certificates, find the perfect program for your career goals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <program.icon className="w-8 h-8 text-indigo-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-ink mb-3">
                        {program.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge size="sm" variant="secondary">{program.level}</Badge>
                        <Badge size="sm" variant="info" icon={<Clock size={12} />}>
                          {program.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-ink-secondary mb-6 leading-relaxed">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-ink mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-secondary-500 rounded-full"></span>
                      Key Modules
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.modules.map((module, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-secondary-50/50 p-2 rounded-lg">
                          <CheckCircle size={16} className="text-indigo-300 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-ink-secondary">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-ink mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-green-500 rounded-full"></span>
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-ink-secondary flex items-start gap-2">
                          <span className="text-status-success font-bold mt-0.5">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
                    <Badge variant="success" icon={<TrendingUp size={14} />} size="md">
                      {program.placement}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      {/* <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Our Network</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Partner Universities
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Trusted by leading educational institutions across India.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerUniversities.map((university, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center">
 <div className="text-4xl mb-3"></div>
                  <h3 className="text-xl font-semibold text-ink mb-2">{university.name}</h3>
                  <div className="flex justify-center gap-4 text-sm text-ink-secondary">
                    <span>{university.courses} Courses</span>
                    <span>•</span>
                    <span>{university.students}+ Students</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Success Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Student Testimonials
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 shrink-0 rounded-full border border-line-strong bg-surface-field flex items-center justify-center text-4xl" aria-hidden="true">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold text-ink text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-ink-secondary">{testimonial.program}</p>
                      <p className="text-sm text-indigo-300 font-semibold">{testimonial.university}</p>
                    </div>
                  </div>
                  <div className="bg-secondary-50/50 p-4 rounded-xl mb-4">
                    <p className="text-ink-secondary italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="pt-4 border-t-2 border-gray-100">
                    <p className="text-sm font-semibold text-ink">{testimonial.position}</p>
                    <p className="text-sm text-indigo-300">{testimonial.company}</p>
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
                Ready to Transform Education?
              </h2>
              <p className="text-xl mb-8 text-ink-secondary">
                Partner with us to bring world-class robotics education to your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Enroll Now
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CollegePrograms;
