import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import StarField from '../Space/StarField';
import NebulaWash from '../Space/NebulaWash';
import Button from '../UI/Button';
import Reveal from '../UI/Reveal';
import logo from '../../assets/img/Lab_Of_Innovation_Logo.jpeg';

/**
 * The footer is the only place the starfield may be visible at a glance —
 * the page has ended, so nothing is competing with it. It runs at `sparse`
 * because this mounts on every route and must stay quiet.
 *
 * Column headings are signal eyebrows, not ember: ember is rationed to one
 * element per page and the page above this one always spends it.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: 'School Programs', path: '/programs/school' },
      { name: 'College Programs', path: '/programs/college' },
      { name: 'Corporate Training', path: '/programs/corporate' },
    ],
    products: [
      { name: 'Robotics Kits', path: '/products?category=kits' },
      { name: 'Sensors & Controllers', path: '/products?category=sensors' },
      { name: 'Accessories', path: '/products?category=accessories' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Innovation Lab', path: '/innovation-lab' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lab-of-innovation', label: 'LinkedIn' },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/lab_of_innovation?igsh=MWpqejBtcDVqczFwdw==',
      label: 'Instagram',
    },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const linkClass =
    'text-[13px] leading-5 text-ink-body hover:text-ink transition-colors duration-quick flex items-center group';

  const columns = [
    { heading: 'Programs', links: footerLinks.programs },
    { heading: 'Products', links: footerLinks.products },
  ];

  return (
    <footer className="relative overflow-hidden bg-surface-void border-t border-line-hairline">
      <StarField density="sparse" />
      <NebulaWash tone="indigo" size={520} top={-180} right="6%" />

      <div className="relative z-content container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Lab of Innovation Logo"
                className="no-plate h-12 w-auto object-contain rounded-lg border border-line-hairline mb-4"
              />
              <h2 className="text-xl font-heading font-semibold text-ink">Lab of Innovation</h2>
              <p className="eyebrow mt-1.5">Robotics Excellence</p>
            </Link>

            <p className="text-[13px] leading-[22px] text-ink-body mb-6 max-w-sm">
              Leading the future of robotics education, training, and innovation.
              Empowering students, professionals, and organizations with cutting-edge technology.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info.labofinnovation@gmail.com"
                className="flex items-center gap-3 text-[13px] text-ink-body hover:text-ink transition-colors duration-quick"
              >
                <Mail className="w-4 h-4 text-signal-300 shrink-0" aria-hidden="true" />
                <span>info.labofinnovation@gmail.com</span>
              </a>
              <a
                href="tel:+918949247815"
                className="flex items-center gap-3 text-[13px] text-ink-body hover:text-ink transition-colors duration-quick"
              >
                <Phone className="w-4 h-4 text-signal-300 shrink-0" aria-hidden="true" />
                <span>+91-8949247815</span>
              </a>
              <div className="flex items-start gap-3 text-[13px] leading-[22px] text-ink-body">
                <MapPin className="w-4 h-4 text-signal-300 shrink-0 mt-1" aria-hidden="true" />
                <span>1169/25, Bhagwan Ganj, Ajmer, Rajasthan (305001)</span>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="eyebrow mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={linkClass}>
                      <ArrowRight
                        className="w-3.5 h-3.5 mr-2 text-signal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-quick"
                        aria-hidden="true"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company + social */}
          <div>
            <h3 className="eyebrow mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    <ArrowRight
                      className="w-3.5 h-3.5 mr-2 text-signal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-quick"
                      aria-hidden="true"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-overline uppercase font-semibold text-ink-muted mb-3">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.18 }}
                    className="w-11 h-11 rounded-control border border-line-hairline bg-surface-raised flex items-center justify-center text-ink-body hover:text-ink hover:border-line-strong transition-colors duration-quick"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative z-content border-t border-line-hairline">
        <div className="container-custom py-12">
          <Reveal className="max-w-2xl mx-auto text-center">
            <h3 className="text-heading-3 font-heading font-semibold text-ink mb-3">
              Stay Updated with Innovation
            </h3>
            <p className="text-sm leading-6 text-ink-body mb-6">
              Subscribe to our newsletter for the latest robotics insights, programs, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-h-[48px] px-4 rounded-control bg-surface-raised border border-line-hairline text-sm text-ink hover:border-line-strong focus:bg-surface-inset focus:border-signal-500 transition-[background-color,border-color] duration-quick"
              />
              <Button type="submit" variant="primary" size="lg">
                Subscribe
              </Button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-content border-t border-line-hairline">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-ink-muted">
              © {currentYear} Lab of Innovation. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link
                to="/privacy"
                className="text-ink-muted hover:text-ink-body transition-colors duration-quick"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-ink-muted hover:text-ink-body transition-colors duration-quick"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-ink-muted hover:text-ink-body transition-colors duration-quick"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
