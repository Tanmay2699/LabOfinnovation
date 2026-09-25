import PageSky from '../components/Space/PageSky';
import { useState } from 'react';
import AnimatedSection from '../components/UI/AnimatedSection';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Badge from '../components/UI/Badge';
import Input from '../components/UI/Input';
import Textarea from '../components/UI/Textarea';
import Select from '../components/UI/Select';
import { 
  ArrowRight, 
  Lightbulb, 
  Cpu, 
  Microscope, 
  Zap,
  Users,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Rocket,
  Brain,
  Settings,
  Target,
  Award,
  BookOpen,
  Mail,
  Phone,
  User,
  Building
} from 'lucide-react';

const InnovationLab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectType: '',
    participants: '',
    date: '',
    message: '',
  });

  const labFeatures = [
    {
      icon: Cpu,
      title: 'Advanced Robotics Lab',
      description: 'State-of-the-art facility with industrial robots, collaborative robots, and mobile platforms.',
      specs: ['6-Axis Industrial Robots', 'Collaborative Cobots', 'AGV & AMR Systems', 'Robot Simulators'],
    },
    {
      icon: Brain,
      title: 'AI & ML Research Center',
      description: 'High-performance computing infrastructure for AI/ML research and development.',
      specs: ['GPU Clusters (100+ GPUs)', 'Deep Learning Frameworks', 'Computer Vision Lab', 'NLP Research Tools'],
    },
    {
      icon: Microscope,
      title: 'IoT Innovation Hub',
      description: 'Complete IoT prototyping facility with sensors, microcontrollers, and connectivity tools.',
      specs: ['Sensor Test Beds', 'Arduino & Raspberry Pi', 'LoRaWAN Network', 'Cloud Integration'],
    },
    {
      icon: Settings,
      title: '3D Printing & Fabrication',
      description: 'Rapid prototyping lab with FDM, SLA, and metal 3D printers plus CNC machines.',
      specs: ['10+ 3D Printers', 'CNC Milling', 'Laser Cutting', 'PCB Fabrication'],
    },
    {
      icon: Zap,
      title: 'Automation Testing Arena',
      description: 'Dedicated space for testing industrial automation, PLC programming, and SCADA systems.',
      specs: ['PLC Trainers', 'SCADA Systems', 'Servo Motors', 'Pneumatic Circuits'],
    },
    {
      icon: Rocket,
      title: 'Innovation Workspace',
      description: 'Collaborative workspace for brainstorming, prototyping, and project development.',
      specs: ['Meeting Rooms', 'Maker Space', 'Whiteboards', 'Presentation Area'],
    },
  ];

  const programs = [
    {
      title: 'Startup Incubation',
      duration: '6-12 Months',
      icon: Rocket,
      description: 'Launch your robotics startup with access to lab, mentorship, and funding support.',
      benefits: ['Free lab access', 'Expert mentorship', 'Funding assistance', 'Networking events'],
      price: 'Apply for Free',
    },
    {
      title: 'Research Collaboration',
      duration: 'Flexible',
      icon: Microscope,
      description: 'Partner with us for cutting-edge robotics and AI research projects.',
      benefits: ['Joint publications', 'Shared resources', 'Grant support', 'IP protection'],
      price: 'Custom Terms',
    },
    {
      title: 'Corporate Innovation',
      duration: '3-6 Months',
      icon: Building,
      description: 'Use our lab for corporate R&D, pilot projects, and product testing.',
      benefits: ['Private workspace', 'Technical support', 'Equipment rental', 'Testing facilities'],
      price: 'Starting ₹5,00,000',
    },
    {
      title: 'Student Projects',
      duration: '1-4 Months',
      icon: BookOpen,
      description: 'Work on your academic projects with access to professional equipment.',
      benefits: ['Supervised access', 'Tool training', 'Project guidance', 'Certification'],
      price: 'Custom Terms',
    },
  ];

  const equipmentList = [
    { category: 'Robotics', items: ['ABB IRB 1200', 'Universal Robots UR5', 'Fanuc LR Mate', 'Boston Dynamics Spot', 'DJI Drones'] },
    { category: 'AI/ML', items: ['NVIDIA DGX A100', 'Google Coral TPU', 'Intel Neural Compute', 'Jetson AGX Xavier'] },
    { category: 'IoT', items: ['Arduino Mega', 'Raspberry Pi 4', 'ESP32', 'LoRa Modules', 'Various Sensors'] },
    { category: 'Fabrication', items: ['Ultimaker S5', 'Formlabs Form 3', 'Markforged X7', 'CNC Router', 'Laser Cutter'] },
    { category: 'Testing', items: ['Siemens PLC', 'Allen-Bradley', 'Oscilloscopes', 'Logic Analyzers', 'Power Supplies'] },
  ];

  const successStories = [
    {
      name: 'RoboMed Solutions',
      image: '🏥',
      project: 'Surgical Robot Prototype',
      duration: '9 months',
      outcome: 'Secured ₹2 Cr seed funding, filed 3 patents',
      category: 'Healthcare',
    },
    {
      name: 'AgriTech Innovations',
      image: '🌾',
      project: 'AI-Powered Crop Monitoring Drone',
      duration: '6 months',
      outcome: 'Launched product serving 500+ farms',
      category: 'Agriculture',
    },
    {
      name: 'SmartCity Labs',
      image: '🏙️',
      project: 'IoT Traffic Management System',
      duration: '8 months',
      outcome: 'Deployed in 3 cities, won smart city award',
      category: 'Smart City',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours to schedule your lab visit.');
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
              <Badge variant="primary" className="mb-6 bg-primary-500/20 border border-primary-500/50 text-indigo-300">
 🚀 Innovation Lab
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Transform Ideas into <span className="text-gradient">Reality</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                World-class robotics and AI innovation lab with cutting-edge equipment, expert mentorship, and collaborative workspace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Book Lab Tour
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  View Equipment
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lab Features */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Our Facilities</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Everything you need to bring your innovative ideas to life, all under one roof.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ink-secondary mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-indigo-300 flex-shrink-0" />
                        <span className="text-sm text-ink-secondary">{spec}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Access Programs</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Choose Your Path
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Flexible programs for startups, researchers, corporations, and students.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    {program.title}
                  </h3>
                  <Badge size="sm" variant="info" className="mb-3">
                    <Clock size={12} className="mr-1" />
                    {program.duration}
                  </Badge>
                  <p className="text-ink-secondary mb-4 text-sm">{program.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {program.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-indigo-300 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-ink-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-dark-100">
                    <p className="text-sm font-semibold text-indigo-300 mb-3">{program.price}</p>
                    <Button variant="outline" size="sm" fullWidth>
                      Apply Now
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Equipment</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Professional-Grade Tools
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Access to industry-standard equipment worth over ₹10 Crores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {equipmentList.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Zap size={16} className="text-indigo-300 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ink-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">Success Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Innovations Born Here
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Real projects that made real impact, developed in our innovation lab.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full text-center">
                  <div className="w-11 h-11 rounded-[10px] border border-line bg-surface-field flex items-center justify-center mb-4"><Lightbulb className="w-5 h-5 text-indigo-400" aria-hidden="true" /></div>
                  <div className="text-5xl mb-4" aria-hidden="true">{story.image}</div>
                  <Badge size="sm" variant="primary" className="mb-3">{story.category}</Badge>
                  <h3 className="text-lg font-semibold text-ink mb-2">{story.name}</h3>
                  <p className="text-sm font-semibold text-ink-secondary mb-2">{story.project}</p>
                  <p className="text-xs text-ink-secondary mb-3">Duration: {story.duration}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-success-text font-semibold">{story.outcome}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 text-center text-ink">
              {/* <div>
                <div className="text-5xl font-semibold mb-2">₹10Cr+</div>
                <p className="text-ink-secondary">Equipment Value</p>
              </div> */}
              <div>
                <div className="text-5xl font-semibold mb-2">20+</div>
                <p className="text-ink-secondary">Active Projects</p>
              </div>
              <div>
                <div className="text-5xl font-semibold mb-2">10+</div>
                <p className="text-ink-secondary">Startups Incubated</p>
              </div>
              <div>
                <div className="text-5xl font-semibold mb-2">1000+</div>
                <p className="text-ink-secondary">Students Trained</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-8">
                <Badge variant="primary" className="mb-4">Get Started</Badge>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                  Book Your Lab Visit
                </h2>
                <p className="text-xl text-ink-secondary">
                  Schedule a tour and see how we can help bring your ideas to life.
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
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      icon={<Mail size={20} />}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                    <Input
                      label="Organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      icon={<Building size={20} />}
                      placeholder="Your company/college"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Project Type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select...' },
                        { value: 'startup', label: 'Startup Incubation' },
                        { value: 'research', label: 'Research Collaboration' },
                        { value: 'corporate', label: 'Corporate Innovation' },
                        { value: 'student', label: 'Student Project' },
                        { value: 'other', label: 'Other' },
                      ]}
                      required
                    />
                    <Select
                      label="Team Size"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select...' },
                        { value: '1', label: 'Individual' },
                        { value: '2-5', label: '2-5 people' },
                        { value: '6-10', label: '6-10 people' },
                        { value: '10+', label: '10+ people' },
                      ]}
                      required
                    />
                  </div>

                  <Input
                    label="Preferred Visit Date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    icon={<Calendar size={20} />}
                    required
                  />

                  <Textarea
                    label="Tell us about your project"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project idea, requirements, and goals..."
                    rows={4}
                    required
                  />

                  <Button type="submit" fullWidth size="lg">
                    Schedule Visit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <Card>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-6">
                  <MapPin className="inline w-6 h-6 text-indigo-300 mr-2" />
                  Visit Us
                </h3>
                <div className="space-y-4 text-ink-secondary">
                  <div>
                    <p className="font-semibold text-ink mb-1">Lab of Innovation</p>
                    <p>Technology Park, Sector 127</p>
                    <p>Noida, Uttar Pradesh 201301</p>
                    <p>India</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink mb-1">Operating Hours</p>
                    <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed (except for incubated teams)</p>
                  </div>
                  <Button className="mt-4">
                    Get Directions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="text-2xl font-heading font-semibold text-ink mb-6">
                  <Phone className="inline w-6 h-6 text-indigo-300 mr-2" />
                  Contact Information
                </h3>
                <div className="space-y-4 text-ink-secondary">
                  <div>
                    <p className="font-semibold text-ink mb-1">General Inquiries</p>
                    <p>Email: lab@labofinnovation.com</p>
                    <p>Phone: +91 120 456 7890</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink mb-1">Startup Incubation</p>
                    <p>Email: incubation@labofinnovation.com</p>
                    <p>Phone: +91 120 456 7891</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink mb-1">Corporate Partnerships</p>
                    <p>Email: corporate@labofinnovation.com</p>
                    <p>Phone: +91 120 456 7892</p>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Send Email
                    <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationLab;
