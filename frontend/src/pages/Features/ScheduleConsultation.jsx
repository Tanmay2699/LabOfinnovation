import PageSky from '../../components/Space/PageSky';
import { useState } from 'react';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';
import Textarea from '../../components/UI/Textarea';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  Users,
  Video,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  MapPin,
  Briefcase,
} from 'lucide-react';

const ScheduleConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    interest: '',
    participants: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'video',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const consultationTypes = [
    {
      icon: Video,
      title: 'Video Call',
      duration: '30-45 mins',
      description: 'One-on-one video consultation with our expert advisors',
      features: ['Screen sharing', 'Live demo', 'Q&A session', 'Personalized recommendations'],
    },
    {
      icon: Phone,
      title: 'Phone Call',
      duration: '20-30 mins',
      description: 'Quick consultation over phone to discuss your requirements',
      features: ['Instant callback', 'Expert guidance', 'Program details', 'Pricing information'],
    },
    {
      icon: MapPin,
      title: 'In-Person Visit',
      duration: '1-2 hours',
      description: 'Visit our facility for a comprehensive tour and consultation',
      features: ['Lab tour', 'Meet instructors', 'See equipment', 'Try demos'],
    },
  ];

  const availableSlots = [
    { day: 'Monday - Friday', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'] },
    { day: 'Saturday', slots: ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM'] },
    { day: 'Sunday', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get advice from experienced counselors who understand your needs',
    },
    {
      icon: Briefcase,
      title: 'Tailored Solutions',
      description: 'Receive customized program recommendations based on your goals',
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free consultation with no pressure to enroll',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for your schedule',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      image: '👨',
      role: 'Parent',
      quote: 'The consultation helped us understand exactly what program would suit my son\'s learning style. Very professional and informative!',
      rating: 5,
    },
    {
      name: 'Sneha Patel',
      image: '👩‍💼',
      role: 'Corporate HR Manager',
      quote: 'Great experience! They understood our team\'s training needs and proposed a perfect solution. Highly recommend scheduling a consultation.',
      rating: 5,
    },
    {
      name: 'Dr. Amit Sharma',
      image: '👨‍🏫',
      role: 'College Dean',
      quote: 'Professional and knowledgeable team. They helped us set up a complete robotics lab for our college. The consultation was invaluable.',
      rating: 5,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        interest: '',
        participants: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: 'video',
        message: '',
      });
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="pt-20 section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="scale">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-success-text" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-ink">
 Consultation Scheduled! 🎉
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Thank you for scheduling a consultation with us. We'll contact you within 24 hours to confirm your slot.
              </p>
              
              <Card className="mb-8">
                <div className="text-left space-y-4">
                  <div>
                    <p className="text-sm text-ink-secondary mb-1">Name</p>
                    <p className="text-lg font-semibold text-ink">{formData.name}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-ink-secondary mb-1">Email</p>
                      <p className="text-base font-semibold text-ink">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-ink-secondary mb-1">Phone</p>
                      <p className="text-base font-semibold text-ink">{formData.phone}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-ink-secondary mb-1">Preferred Date</p>
                      <p className="text-base font-semibold text-ink">{formData.preferredDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-ink-secondary mb-1">Preferred Time</p>
                      <p className="text-base font-semibold text-ink">{formData.preferredTime}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Button onClick={() => setSubmitted(false)}>
                Schedule Another Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade">
              <Badge variant="primary" className="mb-6 bg-primary-500/20 border border-primary-500/50 text-indigo-300">
 📅 Schedule Consultation
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Let's <span className="text-gradient">Talk</span>
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Book a free consultation with our experts to discuss your robotics education or training needs. No obligation, just expert guidance.
              </p>
              <Button size="lg">
                Schedule Now
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Choose Your Format</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                How Would You Like to Connect?
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                Select the consultation format that suits you best.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-indigo-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-ink mb-2">
                    {type.title}
                  </h3>
                  <Badge size="sm" variant="info" className="mb-4">{type.duration}</Badge>
                  <p className="text-ink-secondary mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-ink-secondary">
                        <CheckCircle size={14} className="text-success-text" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <Badge variant="accent" className="mb-4">Book Your Slot</Badge>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                  Schedule Your Consultation
                </h2>
                <p className="text-xl text-ink-secondary">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-4">
                      Personal Information
                    </h3>
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
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
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
                        label="Company/Institution"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        icon={<Building size={20} />}
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  {/* Consultation Details */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-4">
                      Consultation Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        label="Area of Interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        options={[
                          { value: '', label: 'Select...' },
                          { value: 'school', label: 'School Programs' },
                          { value: 'college', label: 'College Partnerships' },
                          { value: 'corporate', label: 'Corporate Training' },
                          { value: 'products', label: 'Robotics Products' },
                          { value: 'lab', label: 'Innovation Lab Setup' },
                        ]}
                        required
                      />
                      <Select
                        label="Number of Participants"
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        options={[
                          { value: '', label: 'Select...' },
                          { value: 'individual', label: 'Individual' },
                          { value: '2-10', label: '2-10 people' },
                          { value: '11-50', label: '11-50 people' },
                          { value: '50+', label: '50+ people' },
                        ]}
                        required
                      />
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-4">
                      Preferred Schedule
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Preferred Date"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        icon={<Calendar size={20} />}
                        required
                      />
                      <Select
                        label="Preferred Time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        options={[
                          { value: '', label: 'Select time slot...' },
                          { value: '9:00 AM', label: '9:00 AM' },
                          { value: '11:00 AM', label: '11:00 AM' },
                          { value: '2:00 PM', label: '2:00 PM' },
                          { value: '4:00 PM', label: '4:00 PM' },
                          { value: '6:00 PM', label: '6:00 PM' },
                        ]}
                        required
                      />
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-4">
                      Consultation Type
                    </h3>
                    <Select
                      label="How would you like to connect?"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      options={[
                        { value: 'video', label: 'Video Call (Zoom/Google Meet)' },
                        { value: 'phone', label: 'Phone Call' },
                        { value: 'in-person', label: 'In-Person Visit' },
                      ]}
                      required
                    />
                  </div>

                  {/* Additional Information */}
                  <Textarea
                    label="Tell us about your requirements (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share any specific questions or requirements you'd like to discuss..."
                    rows={4}
                  />

                  <Button type="submit" fullWidth size="lg">
                    Confirm Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Available Slots */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="info" className="mb-4">Availability</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Consultation Slots
              </h2>
              <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
                We have flexible slots available throughout the week.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {availableSlots.map((slot, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-4">
                    {slot.day}
                  </h3>
                  <div className="space-y-2">
                    {slot.slots.map((time, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-ink-secondary">
                        <Clock size={16} className="text-indigo-300" />
                        <span>{time}</span>
                      </div>
                    ))}
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
              <Badge variant="success" className="mb-4">Why Schedule</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Benefits of Consultation
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="text-center h-full">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-secondary text-sm">{benefit.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">What People Say</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
                Consultation Reviews
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 shrink-0 rounded-full border border-line-strong bg-surface-field flex items-center justify-center text-4xl" aria-hidden="true">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold text-ink">{testimonial.name}</h4>
                      <p className="text-sm text-ink-secondary">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <CheckCircle key={idx} size={14} className="text-warning-text" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-ink-secondary italic">"{testimonial.quote}"</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-ink-secondary">
                Book your free consultation now and take the first step towards robotics excellence.
              </p>
              <Button size="lg">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ScheduleConsultation;
