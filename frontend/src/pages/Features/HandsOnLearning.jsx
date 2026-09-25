import PageSky from '../../components/Space/PageSky';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import {
  Wrench,
  Users,
  Target,
  Lightbulb,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Code,
  Cpu,
  Settings,
  Brain,
} from 'lucide-react';
import lineFollowerRobot from '../../assets/img/line_follower_robot.webp';
import obstacleAvoidingCar from '../../assets/img/obstacle_avoiding_car.webp';
import roboticsArmControl from '../../assets/img/robotics_arm_control.webp';
import aiPoweredRobot from '../../assets/img/ai_powered_robot.webp';
import learnByBuilding from '../../assets/img/learn_by_building.webp';

const HandsOnLearning = () => {
  const learningApproach = [
    {
      icon: Wrench,
      title: 'Build Real Projects',
      description: 'Students construct actual robots from scratch, learning by doing rather than just theory.',
      benefits: ['Practical skills', 'Problem-solving', 'Creativity'],
    },
    {
      icon: Code,
      title: 'Code & Program',
      description: 'Write code to control robots, sensors, and actuators using industry-standard tools.',
      benefits: ['Programming logic', 'Debugging skills', 'Computational thinking'],
    },
    {
      icon: Settings,
      title: 'Test & Iterate',
      description: 'Experiment, fail, learn, and improve through continuous iteration cycles.',
      benefits: ['Resilience', 'Critical thinking', 'Innovation mindset'],
    },
    {
      icon: Target,
      title: 'Solve Challenges',
      description: 'Tackle real-world problems through project-based challenges and competitions.',
      benefits: ['Teamwork', 'Strategy', 'Goal achievement'],
    },
  ];

  const projectExamples = [
    {
      level: 'Beginner',
      image: lineFollowerRobot,
      title: 'Line Following Robot',
      description: 'Build an autonomous robot that follows a black line using IR sensors.',
      skills: ['Sensor integration', 'Basic programming', 'Circuit assembly'],
      duration: '2 weeks',
    },
    {
      level: 'Intermediate',
      image: obstacleAvoidingCar,
      title: 'Obstacle Avoiding Car',
      description: 'Create a smart vehicle that navigates around obstacles using ultrasonic sensors.',
      skills: ['Algorithm design', 'Sensor fusion', 'Motion control'],
      duration: '3 weeks',
    },
    {
      level: 'Advanced',
      image: roboticsArmControl,
      title: 'Robotic Arm Control',
      description: 'Design a multi-axis robotic arm with precision pick-and-place capabilities.',
      skills: ['Kinematics', 'Servo control', 'GUI programming'],
      duration: '4 weeks',
    },
    {
      level: 'Expert',
      image: aiPoweredRobot,
      title: 'AI-Powered Robot',
      description: 'Develop a robot with computer vision and machine learning for object recognition.',
      skills: ['Deep learning', 'Image processing', 'AI integration'],
      duration: '6 weeks',
    },
  ];

  const tools = [
    { name: 'Arduino', icon: Cpu, description: 'Microcontroller programming' },
    { name: 'Raspberry Pi', icon: Cpu, description: 'Single-board computing' },
    { name: 'Python', icon: Code, description: 'AI & automation' },
    { name: 'ROS', icon: Settings, description: 'Robot Operating System' },
    { name: 'CAD Software', icon: Lightbulb, description: '3D design & modeling' },
    { name: 'IoT Platforms', icon: Zap, description: 'Cloud connectivity' },
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Deep Understanding',
      description: 'Hands-on experience leads to better retention and deeper comprehension than passive learning.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Thinking',
      description: 'Building projects encourages innovative problem-solving and out-of-the-box thinking.',
    },
    {
      icon: Users,
      title: 'Collaborative Skills',
      description: 'Working in teams develops communication, leadership, and interpersonal abilities.',
    },
    {
      icon: Award,
      title: 'Portfolio Building',
      description: 'Every project becomes part of a tangible portfolio showcasing real-world skills.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={learnByBuilding} 
            alt="Learn by Building" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-surface-void/80 via-surface-void/85 to-surface-void"></div>
        </div>

        <PageSky />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Learn by <span className="text-gradient">Building</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Our project-based approach ensures students don't just learn about robotics—they build, program, and innovate real working systems.
              </p>
              <Button size="lg">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Our Methodology</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                How We Teach
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                A structured yet flexible approach that adapts to each student's learning pace.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningApproach.map((approach, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="w-8 h-8 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-ink-secondary mb-4">{approach.description}</p>
                  <div className="space-y-2">
                    {approach.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-ink-secondary">
                        <CheckCircle size={14} className="text-success-text" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Real Projects</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Build Amazing Robots
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                From simple bots to AI-powered systems, progress through exciting projects at your own pace.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projectExamples.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full fit-content transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge size="sm" variant={
                        project.level === 'Beginner' ? 'success' :
                        project.level === 'Intermediate' ? 'info' :
                        project.level === 'Advanced' ? 'warning' : 'danger'
                      }>
                        {project.level}
                      </Badge>
                      <Badge size="sm" variant="info">{project.duration}</Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-semibold text-ink mb-3">
                      {project.title}
                    </h3>
                    <p className="text-ink-secondary mb-4">{project.description}</p>

                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-indigo-300 mb-2">Skills You'll Learn:</h4>
                      <div className="space-y-1">
                        {project.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-indigo-300">
                            <CheckCircle size={14} />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Industry Tools</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Professional Tools
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Learn with the same tools used by professionals in the robotics industry.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-8 h-8 text-ink" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">{tool.name}</h3>
                  <p className="text-ink-secondary">{tool.description}</p>
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
              <Badge variant="success" className="mb-4">Why It Works</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Benefits of Hands-On Learning
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-ink-secondary">{benefit.description}</p>
                    </div>
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
                Start Building Today
              </h2>
              <p className="text-xl mb-8 text-ink-secondary">
                Join thousands of students who are learning robotics through hands-on projects.
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

export default HandsOnLearning;
