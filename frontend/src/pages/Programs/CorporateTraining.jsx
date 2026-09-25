import PageSky from '../../components/Space/PageSky';
import { useState } from 'react';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import Input from '../../components/UI/Input';
import Textarea from '../../components/UI/Textarea';
import Select from '../../components/UI/Select';
import { 
  ArrowRight, 
  Users, 
  Target, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  Building,
  Lightbulb,
  Zap,
  Settings,
  BarChart,
  Cpu,
  Mail,
  Phone,
  User,
  Briefcase
} from 'lucide-react';

const CorporateTraining = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    employees: '',
    program: '',
    message: '',
  });

  const trainingPrograms = [
    {
      title: 'Industry 4.0 Transformation',
      duration: '3-6 Months',
      icon: Settings,
      description: 'Comprehensive training on smart manufacturing, IoT, and automation technologies.',
      modules: [
        'Introduction to Industry 4.0',
        'Smart Sensors & IoT Integration',
        'Predictive Maintenance',
        'Data Analytics for Manufacturing',
        'Automation & Robotics',
        'Change Management'
      ],
      outcomes: ['Reduce downtime by 40%', 'Increase productivity by 30%', 'Lower operational costs'],
      ideal: 'Manufacturing & Production Teams',
    },
    {
      title: 'Robotics Process Automation',
      duration: '2-4 Months',
      icon: Cpu,
      description: 'Learn to automate repetitive tasks using software robots and AI-powered automation.',
      modules: [
        'RPA Fundamentals',
        'UiPath & Automation Anywhere',
        'Bot Development',
        'Process Mining',
        'AI & ML Integration',
        'ROI Measurement'
      ],
      outcomes: ['Automate 50+ processes', 'Save 1000+ hours/month', 'Improve accuracy to 99%'],
      ideal: 'IT, Finance & Operations Teams',
    },
    {
      title: 'AI & Machine Learning',
      duration: '4-6 Months',
      icon: Lightbulb,
      description: 'Hands-on training in AI/ML implementation for business automation and intelligence.',
      modules: [
        'Python for AI',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'Computer Vision',
        'Natural Language Processing',
        'AI Strategy & Ethics'
      ],
      outcomes: ['Build custom AI models', 'Automate decision-making', 'Gain competitive advantage'],
      ideal: 'Data Science & Analytics Teams',
    },
    {
      title: 'IoT & Smart Systems',
      duration: '2-3 Months',
      icon: Zap,
      description: 'Design and implement IoT solutions for smart buildings, cities, and industrial applications.',
      modules: [
        'IoT Architecture',
        'Sensor Networks',
        'Edge Computing',
        'Cloud Integration (AWS/Azure)',
        'Security & Privacy',
        'Real-world Projects'
      ],
      outcomes: ['Deploy IoT solutions', 'Monitor in real-time', 'Reduce energy costs by 25%'],
      ideal: 'Engineering & Operations Teams',
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Industry veterans with 15+ years of hands-on experience in robotics and automation.',
    },
    {
      icon: Target,
      title: 'Customized Curriculum',
      description: 'Tailored programs designed specifically for your industry, challenges, and goals.',
    },
    {
      icon: BarChart,
      title: 'Measurable ROI',
      description: 'Track progress with KPIs and see tangible improvements in productivity and efficiency.',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Globally recognized certifications that add value to your team\'s credentials.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Weekend batches, online sessions, and on-site training to fit your business needs.',
    },
    {
      icon: Building,
      title: 'Post-Training Support',
      description: '12 months of ongoing support, consultation, and access to learning resources.',
    },
  ];

  const successStories = [
    {
      company: 'TechCorp India',
      industry: 'Manufacturing',
 logo: '🏭',
      challenge: 'Manual quality inspection causing 15% defect rate',
      solution: 'Implemented computer vision-based automated inspection',
      results: ['Defect rate reduced to 2%', '3x faster inspection', 'ROI achieved in 8 months'],
      employees: 150,
    },
    {
      company: 'FinServe Solutions',
      industry: 'Financial Services',
 logo: '💼',
      challenge: 'Processing 10,000+ invoices manually each month',
      solution: 'Deployed RPA bots for invoice processing and reconciliation',
      results: ['90% automation achieved', '500 hours saved/month', 'Zero processing errors'],
      employees: 80,
    },
    {
      company: 'SmartCity Infrastructure',
      industry: 'Infrastructure',
 logo: '🏗️',
      challenge: 'High energy costs and inefficient building management',
      solution: 'Implemented IoT-based smart building automation',
      results: ['30% energy savings', 'Real-time monitoring', 'Predictive maintenance'],
      employees: 200,
    },
  ];

  const pricingOptions = [
    {
      name: 'Starter',
      price: '₹2,50,000',
      duration: 'per program',
      features: [
        'Up to 25 employees',
        '40 hours of training',
        'Basic certification',
        'Online sessions',
        '3 months support',
        'Training materials',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹5,00,000',
      duration: 'per program',
      features: [
        'Up to 50 employees',
        '80 hours of training',
        'Advanced certification',
        'Hybrid (online + on-site)',
        '6 months support',
        'Custom use cases',
        'Monthly consultations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'contact us',
      features: [
        'Unlimited employees',
        'Customized duration',
        'Industry-specific certification',
        'Fully on-site training',
        '12 months support',
        'Dedicated account manager',
        'White-label solutions',
        'Implementation support',
      ],
      popular: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our team will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade">
              <Badge variant="accent" className="mb-6 bg-accent-500/20 border border-accent-500/50 text-copper-400">
 💼 Corporate Training
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Upskill Your Team in <span className="text-gradient">Robotics & Automation</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Customized training programs to drive innovation, boost productivity, and transform your organization with cutting-edge automation technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="key">
                  Request Consultation
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

      {/* Training Programs */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Our Programs</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Tailored Training Solutions
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Industry-specific programs designed to address your unique challenges and drive measurable results.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-7 h-7 text-copper-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-ink mb-2">
                        {program.title}
                      </h3>
                      <div className="flex gap-2 mb-2">
                        <Badge size="sm" variant="accent">{program.ideal}</Badge>
                        <Badge size="sm" variant="info">
                          <Clock size={12} className="mr-1" />
                          {program.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-ink-secondary mb-4">{program.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-ink mb-2">Training Modules:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.modules.map((module, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-copper-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-ink-secondary">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-ink mb-2">Expected Outcomes:</h4>
                    <ul className="space-y-1">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-ink-secondary">• {outcome}</li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" size="sm" fullWidth>
                    Get Custom Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Your Success is Our Mission
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center h-full">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-copper-400" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ink-secondary">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">Success Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Real Results, Real Impact
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                See how organizations transformed their operations with our training programs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="text-5xl mb-4">{story.logo}</div>
                  <h3 className="text-xl font-semibold text-ink mb-1">{story.company}</h3>
                  <Badge size="sm" variant="info" className="mb-4">{story.industry}</Badge>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-ink-secondary mb-1">Challenge:</h4>
                      <p className="text-sm text-ink-secondary">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink-secondary mb-1">Solution:</h4>
                      <p className="text-sm text-ink-secondary">{story.solution}</p>
                    </div>
                  </div>

                  <div className="bg-accent-50 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold text-copper-400 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-copper-400 flex items-start gap-2">
                          <CheckCircle size={14} className="mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-dark-100">
                    <p className="text-xs text-ink-tertiary">{story.employees} employees trained</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Pricing</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Investment Plans
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Flexible pricing options to match your team size and training requirements.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card 
                  hover 
                  className={`h-full ${plan.popular ? 'ring-2 ring-accent-500 relative' : ''}`}
                >
                  {plan.popular && (
                    <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-heading font-semibold text-ink mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-semibold text-copper-400 mb-1">{plan.price}</div>
                    <div className="text-sm text-ink-secondary">{plan.duration}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-copper-400 mt-0.5 flex-shrink-0" />
                        <span className="text-ink-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    fullWidth
                    className={plan.popular ? 'bg-accent-600 hover:bg-accent-700' : ''}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="text-center text-ink mb-8">
                <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
                  Schedule a Free Consultation
                </h2>
                <p className="text-xl text-ink-secondary">
                  Let's discuss how we can help transform your team's capabilities.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      icon={<User size={20} />}
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      icon={<Building size={20} />}
                      placeholder="Company Inc."
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      icon={<Mail size={20} />}
                      placeholder="john@company.com"
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      icon={<Phone size={20} />}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Number of Employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select...' },
                        { value: '1-25', label: '1-25 employees' },
                        { value: '26-50', label: '26-50 employees' },
                        { value: '51-100', label: '51-100 employees' },
                        { value: '100+', label: '100+ employees' },
                      ]}
                      required
                    />
                    <Select
                      label="Program Interest"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select...' },
                        { value: 'industry40', label: 'Industry 4.0 Transformation' },
                        { value: 'rpa', label: 'Robotics Process Automation' },
                        { value: 'ai', label: 'AI & Machine Learning' },
                        { value: 'iot', label: 'IoT & Smart Systems' },
                        { value: 'custom', label: 'Custom Program' },
                      ]}
                      required
                    />
                  </div>

                  <Textarea
                    label="Tell us about your requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your training needs, challenges, and goals..."
                    rows={4}
                    required
                  />

                  <Button type="submit" fullWidth size="lg" className="bg-accent-600 hover:bg-accent-700">
                    Submit Request
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTraining;
