import PageSky from '../components/Space/PageSky';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users } from 'lucide-react';
import AnimatedSection from '../components/UI/AnimatedSection';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';
import Textarea from '../components/UI/Textarea';
import Button from '../components/UI/Button';
import robot from '../assets/img/robot-with-clipboard.webp';
import contactUsImage from '../assets/img/contact_us.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="pt-20">
      <section className="section-padding band-atmospheric">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contactUsImage} 
            alt="Contact Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-void/80 via-surface-void/85 to-surface-void"></div>
        </div>

        <PageSky />

        <div className="container-custom relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-ink-secondary">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Us Image Section with Text */}
      <section className="bg-surface-base">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Text */}
            <AnimatedSection animation="slideLeft">
              <div>
                <span className="inline-block px-4 py-2 bg-primary-100 text-indigo-300 rounded-full text-sm font-semibold mb-6">
 💬 We're Here to Help
                </span>
                
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6">
                  Let's Start a <span className="text-gradient">Conversation</span>
                </h2>
                
                <p className="text-xl text-ink-secondary mb-8 leading-relaxed">
                  Whether you're interested in our robotics programs, need assistance with products, 
                  or want to explore partnership opportunities, our team is ready to assist you.
                </p>

                {/* Features */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-2">Quick Response</h3>
                      <p className="text-ink-secondary">We typically respond to all inquiries within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-2">Expert Support</h3>
                      <p className="text-ink-secondary">Our knowledgeable team is here to answer all your questions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-copper-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-2">Flexible Hours</h3>
                      <p className="text-ink-secondary">Monday - Saturday: 9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Image */}
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={robot} 
                    alt="Contact Lab of Innovation" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <AnimatedSection animation="slideLeft">
                <Card>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-ink-secondary">info.labofinnovation@gmail.com</p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft" delay={0.1}>
                <Card>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-ink-secondary">+91-8949247815</p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft" delay={0.2}>
                <Card>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-copper-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-ink-secondary">1169/25, Bhagwan Ganj, Ajmer, Rajasthan (305001)</p>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection animation="slideRight">
                <Card>
                  <div className="p-8">
                    <h2 className="text-2xl font-heading font-semibold mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                          label="Email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <Input
                          label="Subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <Textarea
                        label="Message"
                        required
                        rows={8}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />

                      <Button type="submit" size="lg" fullWidth>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-surface-base">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-4">
              Visit Our <span className="text-gradient">Location</span>
            </h2>
            <p className="text-xl text-ink-secondary max-w-2xl mx-auto">
              Find us at our innovation center in Ajmer, Rajasthan
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890!2d74.6370!3d26.4809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzUxLjIiTiA3NMKwMzgnMTMuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lab of Innovation Location"
                  className="map-embed w-full h-full"
                ></iframe>
              </div>
              
              {/* Address Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface-card/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink mb-2">Lab of Innovation</h3>
                    <p className="text-ink-secondary mb-3">
                      CJQM+8WG, Rambam Road, Nagra<br />
                      Ajmer, Rajasthan 305001
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://maps.google.com/?q=CJQM+8WG,Rambam+Road,Nagra,Ajmer,Rajasthan+305001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-ink rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </a>
                      <a
                        href="https://maps.google.com/?q=CJQM+8WG,Rambam+Road,Nagra,Ajmer,Rajasthan+305001&navigate=yes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-surface-card text-indigo-300 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
