import PageSky from '../../components/Space/PageSky';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import {
  HeadphonesIcon,
  MessageCircle,
  BookOpen,
  Users,
  Clock,
  Video,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Star,
  Award,
} from 'lucide-react';

const OngoingSupport = () => {
  const supportChannels = [
    {
      icon: HeadphonesIcon,
      title: '24/7 Help Desk',
      description: 'Round-the-clock technical support for all your queries and issues.',
      availability: 'Always Available',
      responseTime: '< 2 hours',
      features: ['Live chat', 'Phone support', 'Email tickets'],
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Connect with fellow students, share projects, and get peer support.',
      availability: 'Open 24/7',
      responseTime: '< 30 mins',
      features: ['Q&A discussions', 'Project showcase', 'Study groups'],
    },
    {
      icon: Video,
      title: 'Video Sessions',
      description: 'One-on-one video calls with instructors for personalized guidance.',
      availability: 'Mon-Sat, 9 AM - 8 PM',
      responseTime: 'Scheduled',
      features: ['Screen sharing', 'Live coding', 'Project reviews'],
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Access to extensive documentation, tutorials, and learning materials.',
      availability: 'Always Available',
      responseTime: 'Instant',
      features: ['Video tutorials', 'Code samples', 'eBooks & guides'],
    },
  ];

  const supportLevels = [
    {
      level: 'During Course',
      icon: Zap,
      features: [
        'Unlimited doubt clearing sessions',
        'Daily instructor availability',
        'Real-time project help',
        'Weekly progress reviews',
        'Class recordings access',
        'Assignment support',
      ],
    },
    {
      level: 'Post-Course (3 Months)',
      icon: Heart,
      features: [
        'Free doubt resolution',
        'Community forum access',
        'Resource library access',
        'Project consultation',
        'Career guidance',
        'Alumni network',
      ],
    },
    {
      level: 'Post-Course (6-12 Months)',
      icon: Star,
      features: [
        'Discounted extended support',
        'Advanced workshops access',
        'Job referral support',
        'Skill upgrade sessions',
        'Industry connect events',
        'Refresher courses',
      ],
    },
  ];

  const supportTeam = [
    {
      name: 'Technical Support Team',
 icon: '🛠️',
      size: '20+ experts',
      specialization: 'Hardware, software, and programming issues',
      languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    },
    {
      name: 'Academic Counselors',
 icon: '👨‍🏫',
      size: '15+ counselors',
      specialization: 'Learning path guidance and career advice',
      languages: ['English', 'Hindi', 'Kannada'],
    },
    {
      name: 'Project Mentors',
 icon: '🎯',
      size: '30+ mentors',
      specialization: 'Project ideation and implementation',
      languages: ['English', 'Hindi', 'Bengali'],
    },
  ];

  const successMetrics = [
    { metric: '95%', label: 'Satisfaction Rate', icon: Star },
    { metric: '< 2 hrs', label: 'Avg Response Time', icon: Clock },
    { metric: '1,000+', label: 'Issues Resolved Monthly', icon: CheckCircle },
    { metric: '4.8/5', label: 'Support Rating', icon: Award },
  ];

  const faqs = [
    {
      question: 'How do I get help if I\'m stuck on a project?',
      answer: 'You can reach out via live chat, email, or schedule a video call with an instructor. We also have a community forum where you can get quick responses from peers.',
    },
    {
      question: 'Is support available after course completion?',
      answer: 'Yes! We provide 3 months of free support after course completion, and you can extend it further at discounted rates.',
    },
    {
      question: 'Can I access learning materials after the course?',
      answer: 'Absolutely! You\'ll have lifetime access to all course materials, video recordings, and our resource library.',
    },
    {
      question: 'What if I need to pause my learning?',
      answer: 'We offer flexible pause options. You can resume from where you left off within 6 months without any additional charges.',
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
              <Badge variant="primary" className="mb-6 bg-primary-500/20 border border-primary-500/50 text-indigo-300">
 🤝 Ongoing Support
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 We're Here <span className="text-gradient">Every Step</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Learning doesn't stop after class. Get continuous support throughout your robotics journey and beyond.
              </p>
              <Button size="lg">
                Get Support Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Support Channels</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Multiple Ways to Get Help
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <channel.icon className="w-7 h-7 text-indigo-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-ink mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-ink-secondary mb-3">{channel.description}</p>
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1 text-ink-secondary">
                          <Clock size={14} className="text-indigo-300" />
                          <span>{channel.availability}</span>
                        </div>
                        <div className="flex items-center gap-1 text-ink-secondary">
                          <Zap size={14} className="text-indigo-300" />
                          <span>{channel.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-indigo-300 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {channel.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-indigo-300">
                          <CheckCircle size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Support Timeline</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Continuous Support Journey
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                From enrollment to career success, we're with you all the way.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <level.icon className="w-6 h-6 text-ink" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-ink">
                      {level.level}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-ink-secondary">
                        <CheckCircle size={18} className="text-indigo-300 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">Our Team</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Expert Support Team
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Dedicated professionals ready to assist you 24/7.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTeam.map((team, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center">
                  <div className="text-6xl mb-4">{team.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    {team.name}
                  </h3>
                  <Badge size="sm" variant="primary" className="mb-4">{team.size}</Badge>
                  <p className="text-ink-secondary mb-3">{team.specialization}</p>
                  <div>
                    <p className="text-sm text-ink-tertiary mb-2">Languages:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {team.languages.map((lang, idx) => (
                        <Badge key={idx} size="sm" variant="info">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center text-ink mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
                Support by the Numbers
              </h2>
              <p className="text-xl text-ink-secondary">
                Our commitment to your success, measured.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {successMetrics.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center bg-white/10 backdrop-blur-lg border border-white/20">
                  <item.icon className="w-12 h-12 text-ink mx-auto mb-4" />
                  <div className="text-4xl font-semibold text-ink mb-2">{item.metric}</div>
                  <div className="text-ink-secondary">{item.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="info" className="mb-4">Common Questions</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-ink-secondary">{faq.answer}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6">
                Need Help? We're Just a Click Away
              </h2>
              <p className="text-xl text-ink-secondary mb-8">
                Join our supportive learning community and never feel stuck again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <HeadphonesIcon className="mr-2 w-5 h-5" />
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Join Community
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default OngoingSupport;
