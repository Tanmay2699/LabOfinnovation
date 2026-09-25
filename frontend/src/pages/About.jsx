import PageSky from '../components/Space/PageSky';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Heart, Zap, CheckCircle, Rocket } from 'lucide-react';
import AnimatedSection from '../components/UI/AnimatedSection';
import Card from '../components/UI/Card';
import MissionPath from '../components/UI/MissionPath';
import aboutUsImage from '../assets/img/about_us.webp';
import kaushaliyaDevi from '../assets/img/Kaushaliya_Devi.webp';
import abhishekKundara from '../assets/img/Abhishek_Kundara.webp';
import yashJain from '../assets/img/Yash_Color.webp';

const About = () => {
  const leadership = [
    { name: 'Mrs Kaushaliya Devi', role: 'Director', image: kaushaliyaDevi },
    { name: 'Abhishek Kundara', role: 'Chief Executive Officer(CEO)', image: abhishekKundara },
    { name: 'Yash Jain', role: 'Chief Technology Officer(CTO)', image: yashJain },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries and embracing cutting-edge technology to deliver transformative solutions.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Committed to the highest standards in education, products, and customer service.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with students, educators, and industry leaders.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Creating meaningful change in communities through robotics and STEM education.',
      color: 'from-primary-400 to-secondary-400'
    }
  ];

  const achievements = [
    { value: '1,000+', label: 'Students Trained', icon: Users },
    { value: '20+', label: 'Partner Organizations', icon: TrendingUp },
    { value: '100+', label: 'Innovation Projects', icon: Rocket },
    { value: '98%', label: 'Success Rate', icon: Award }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Founded',
      description: 'Lab of Innovation was established with a vision to revolutionize robotics education in India.'
    },
    {
      year: '2025',
      title: 'First Programs Launch',
      description: 'Successfully launched robotics programs for schools and colleges across Rajasthan.'
    },
    {
      year: '2025',
      title: 'Innovation Lab Setup',
      description: 'Established state-of-the-art innovation lab with advanced robotics and AI facilities.'
    },
    {
      year: '2026',
      title: 'Growing Recognition',
      description: 'Expanding programs and building strong partnerships with educational institutions and industries.'
    }
  ];

  const whyChooseUs = [
    'Industry-certified curriculum designed by experts',
    'Hands-on learning with real-world projects',
    'State-of-the-art robotics and AI facilities',
    'Expert mentorship and ongoing support',
    'Strong industry partnerships and placements',
    'Flexible learning programs for all age groups'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutUsImage} 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-void/80 via-surface-void/85 to-surface-void"></div>
        </div>

        <PageSky />

        <div className="container-custom relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full text-indigo-300 text-sm font-semibold backdrop-blur-sm mb-6"
            >
 🚀 Our Story
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-ink mb-6 leading-tight">
              Transforming Education Through
 <span className="block text-gradient">
                Innovation & Technology
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink-secondary leading-relaxed">
              Empowering the next generation with world-class robotics education, 
              cutting-edge technology, and innovative solutions since 2025.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <Card className="h-full">
                <div className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-ink" />
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-ink mb-4">Our Mission</h2>
                  <p className="text-lg text-ink-secondary leading-relaxed mb-4">
                    To democratize access to quality robotics and STEM education by providing 
                    innovative, hands-on learning experiences that prepare students for the future of technology.
                  </p>
                  <p className="text-lg text-ink-secondary leading-relaxed">
                    We strive to bridge the gap between theoretical knowledge and practical application, 
                    fostering creativity, critical thinking, and problem-solving skills in learners of all ages.
                  </p>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.2}>
              <Card className="h-full">
                <div className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-ink" />
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-ink mb-4">Our Vision</h2>
                  <p className="text-lg text-ink-secondary leading-relaxed mb-4">
                    To become India's leading platform for robotics innovation and education, 
                    creating a community of skilled technologists and innovators who drive positive change.
                  </p>
                  <p className="text-lg text-ink-secondary leading-relaxed">
                    We envision a future where every student has access to world-class robotics education 
                    and the opportunity to transform their ideas into reality through cutting-edge technology.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                <Card className="text-center h-full">
                  <div className="p-6 md:p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-indigo-300" />
                    </div>
 <div className="text-4xl md:text-5xl font-semibold text-gradient mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-ink-secondary font-medium">{achievement.label}</div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                      <value.icon className="w-7 h-7 text-ink" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink mb-3">{value.title}</h3>
                    <p className="text-ink-secondary leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
              Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
              Meet the visionaries driving innovation and excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((member, index) => (
              <AnimatedSection key={member.name} animation="fadeUp" delay={index * 0.1}>
                <Card className="h-full overflow-hidden !p-0">
                  <div className="aspect-square overflow-hidden bg-surface-inset">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="no-plate w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6 text-center border-t border-line-hairline">
                    <h3 className="text-xl font-semibold text-ink mb-2">{member.name}</h3>
                    <p className="text-sm font-semibold text-signal-300">{member.role}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
              Milestones that shaped our story
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <MissionPath
              steps={milestones.map((m) => ({ tag: m.year, title: m.title, copy: m.description }))}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6">
                  Why Choose <span className="text-gradient">Lab of Innovation?</span>
                </h2>
                <p className="text-xl text-ink-secondary mb-8 leading-relaxed">
                  We combine academic excellence with practical innovation to deliver 
                  unparalleled learning experiences.
                </p>
                
                <div className="space-y-4">
                  {whyChooseUs.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mt-1">
                        <CheckCircle className="w-4 h-4 text-ink" />
                      </div>
                      <p className="text-ink-secondary text-lg">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="relative">
                <img 
                  src={aboutUsImage} 
                  alt="Why Choose Lab of Innovation" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl text-indigo-300 mb-8">
              Join thousands of students and professionals who are transforming their future with robotics education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/programs/school" 
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-card text-indigo-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Programs
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-line-strong text-ink rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
