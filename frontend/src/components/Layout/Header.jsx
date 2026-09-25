import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Button from '../UI/Button';
import logo from '../../assets/img/Lab_Of_Innovation_Logo.jpeg';

/**
 * Deep Field header.
 *
 * Always `.liquid-glass` (index.css): a light sheen over the hero film,
 * thickening past 40px of scroll. It slides away while a `[data-hide-nav]`
 * section (the home frame sequence) is pinned, and returns when it ends.
 *
 * The bar is exactly --layout-nav-height and collapses to
 * --layout-nav-height-scrolled, rather than being whatever the tallest child
 * plus padding happened to add up to. That is what makes the pages' `pt-20`
 * actually clear it.
 *
 * No ember anywhere in here. The header sits in every viewport, so spending
 * the page's one ember element on a nav underline or a cart badge would leave
 * nothing for the page's own key action. Nav labels are ink-body — the old
 * light/dark text branch (`darkHeroPages`) is gone now that every page is
 * dark; it hardcoded two routes and would have silently broken the next new
 * page.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTucked, setIsTucked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { getCartCount } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      // Any section marked data-hide-nav (the home frame sequence) gets the
      // full viewport: tuck the bar away from the moment it reaches the nav
      // until it unpins at its end.
      const r = document.querySelector('[data-hide-nav]')?.getBoundingClientRect();
      setIsTucked(!!r && r.top < 80 && r.bottom > window.innerHeight);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const hidden = isTucked && !isMobileMenuOpen;

  const navigation = [
    { name: 'Home', path: '/' },
    {
      name: 'Programs',
      dropdown: [
        { name: 'School Programs', path: '/programs/school' },
        { name: 'College Programs', path: '/programs/college' },
        { name: 'Corporate Training', path: '/programs/corporate' },
      ],
    },
    { name: 'Innovation Lab', path: '/innovation-lab' },
    {
      name: 'Features',
      dropdown: [
        { name: 'Hands-On Learning', path: '/features/hands-on-learning' },
        { name: 'Expert Instructors', path: '/features/expert-instructors' },
        { name: 'Certifications', path: '/features/certifications' },
        { name: 'Ongoing Support', path: '/features/ongoing-support' },
        { name: 'Schedule Consultation', path: '/features/schedule-consultation' },
      ],
    },
    { name: 'Workshops', path: '/workshops' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const cartCount = getCartCount();

  const isActive = (item) =>
    item.path
      ? location.pathname === item.path
      : item.dropdown?.some((sub) => sub.path === location.pathname);

  // Active items are signal with a signal underline. Everything else is
  // ink-body, which clears 4.5:1 on both the hero wash and the glass.
  const linkClass = (active) =>
    `text-sm transition-colors duration-quick ease-standard ${
      active
        ? 'text-signal-300 font-semibold border-b-2 border-signal-500 pb-1'
        : 'text-ink-body hover:text-ink'
    }`;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
      // Keyboard users tabbing into a tucked bar get it back.
      onFocusCapture={() => setIsTucked(false)}
      className={`liquid-glass fixed top-0 left-0 right-0 z-nav transition-[background,box-shadow,backdrop-filter] duration-base ease-standard ${
        isScrolled ? 'is-scrolled' : ''
      }`}
    >
      <div className="container-custom">
        <div
          className={`flex items-center justify-between gap-4 transition-[height] duration-base ease-standard ${
            isScrolled
              ? 'h-[var(--layout-nav-height-scrolled)]'
              : 'h-[var(--layout-nav-height)]'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 rounded-control">
            <img
              src={logo}
              alt="Lab of Innovation Logo"
              className="no-plate h-10 w-auto object-contain rounded-md border border-line-hairline"
            />
            <div className="hidden sm:block">
              <h1 className="text-[15px] leading-5 font-heading font-semibold text-ink">
                Lab of Innovation
              </h1>
              <p className="text-[10px] leading-[14px] uppercase tracking-[0.12em] text-ink-muted">
                Robotics Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navigation.map((item) => {
              const active = isActive(item);
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={activeDropdown === item.name}
                        className={`flex items-center gap-1 ${linkClass(active)}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.24, ease: [0.2, 0.6, 0.3, 1] }}
                            // An overlay surface, so it gets the overlay
                            // shadow — the same non-chromatic one
                            // .liquid-glass.is-scrolled uses. Nothing else in the nav
                            // carries a shadow.
                            className="absolute top-full left-0 mt-3 w-60 rounded-md bg-surface-overlay border border-line-hairline shadow-overlay p-1.5"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`flex items-center min-h-[44px] px-3 rounded-sm text-[13px] leading-5 transition-colors duration-quick ${
                                  location.pathname === subItem.path
                                    ? 'bg-surface-inset text-ink'
                                    : 'text-ink-body hover:bg-surface-inset hover:text-ink'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.path} className={linkClass(active)}>
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
              className="relative w-11 h-11 rounded-control border border-line-hairline bg-surface-raised flex items-center justify-center text-ink-body hover:text-ink hover:border-line-strong transition-colors duration-quick"
            >
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-pill bg-signal-500 text-ink-onSignal text-[11px] font-semibold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-11 h-11 rounded-control border border-line-hairline bg-surface-raised flex items-center justify-center text-ink hover:border-line-strong transition-colors duration-quick"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: [0.2, 0.6, 0.3, 1] }}
              className="lg:hidden mt-3 mb-4 rounded-card bg-surface-overlay border border-line-hairline shadow-overlay overflow-hidden"
            >
              <nav className="py-1.5">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.name ? null : item.name)
                          }
                          aria-expanded={activeDropdown === item.name}
                          className={`w-full flex items-center justify-between min-h-[48px] px-4 text-[15px] transition-colors duration-quick ${
                            isActive(item)
                              ? 'bg-surface-inset text-ink font-semibold border-l-2 border-signal-500'
                              : 'text-ink-body'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-signal-300 transition-transform duration-base ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.24, ease: [0.2, 0.6, 0.3, 1] }}
                              className="overflow-hidden bg-surface-inset"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="flex items-center min-h-[44px] pl-8 pr-4 text-sm text-ink-body hover:text-ink transition-colors duration-quick"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center min-h-[48px] px-4 text-[15px] transition-colors duration-quick ${
                          isActive(item)
                            ? 'bg-surface-inset text-ink font-semibold border-l-2 border-signal-500'
                            : 'text-ink-body'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              {/* Signal, not ember: the header is in every viewport, and the
                  page's one ember element belongs to the page. */}
              <div className="p-4 border-t border-line-hairline">
                <Link to="/contact" className="block rounded-control">
                  <Button variant="primary" size="lg" fullWidth magnetic={false}>
                    Request a quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
