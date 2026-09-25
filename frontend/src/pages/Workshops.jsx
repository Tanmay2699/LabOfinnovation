import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import PageSky from '../components/Space/PageSky';
import AnimatedSection from '../components/UI/AnimatedSection';
import Badge from '../components/UI/Badge';
import { DUR, EASE } from '../motion/variants';

// The grid loads 720px thumbnails; the lightbox loads the 1600px version on
// open. Same photos, same order as the live site's gallery.
const thumbs = import.meta.glob('../assets/img/workshops/thumb/*.webp', { eager: true, import: 'default' });
const fulls = import.meta.glob('../assets/img/workshops/full/*.webp', { eager: true, import: 'default' });

const ORDER = [
  '08',
  'DSC_1032',
  'IMG_20251213_111434117_HDR',
  'STEM_Blog_Banner_v01-3',
  'Screenshot_20251228-134730',
  'Screenshot_20251228-135012',
  'Screenshot_20251228-135828',
  'Screenshot_20260102-211929',
  'Screenshot_20260102-211945',
  'Screenshot_20260102-211949',
  'Screenshot_20260102-211954',
  'Screenshot_20260102-212019',
  'diverse-school-children-students-build-robotic-car-R4MM9JU-600x400',
  'img-20190323-wa0023',
  'kids-robotics',
];

const PHOTOS = ORDER.map((name) => ({
  name,
  thumb: thumbs[`../assets/img/workshops/thumb/${name}.webp`],
  full: fulls[`../assets/img/workshops/full/${name}.webp`],
}));

const Workshops = () => {
  const [open, setOpen] = useState(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next = useCallback(() => setOpen((i) => (i + 1) % PHOTOS.length), []);

  // Keyboard for the lightbox: Esc closes, arrows step.
  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, prev, next]);

  const fade = { duration: reduceMotion ? 0 : DUR.base, ease: EASE.entrance };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeUp">
              <Badge variant="primary" className="mb-6">
                📸 Our Workshops
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
                Workshop <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-xl text-ink-secondary max-w-2xl mx-auto">
                A glimpse into our hands-on robotics and STEM workshops — where students build,
                program, and innovate together.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <h2 className="text-4xl font-heading font-semibold text-ink mb-3">
              Moments from the <span className="text-gradient">Lab</span>
            </h2>
            <p className="text-lg text-ink-secondary">Click any photo to view it in full size</p>
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {PHOTOS.map((photo, i) => (
              <AnimatedSection key={photo.name} animation="fadeUp" delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden rounded-card border border-line-hairline bg-surface-inset
                    transition-[border-color,box-shadow] duration-base ease-standard hover:border-line-strong hover:shadow-lift"
                >
                  <img
                    src={photo.thumb}
                    alt={`Workshop ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="no-plate block w-full h-auto"
                  />
                  <span
                    className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
                      bg-gradient-to-t from-surface-void/80 via-transparent to-transparent transition-opacity duration-base ease-standard"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                      <ZoomIn className="w-5 h-5" aria-hidden="true" />
                      View Photo
                    </span>
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Workshop ${open + 1} of ${PHOTOS.length}`}
            className="fixed inset-0 z-overlay flex items-center justify-center p-4 bg-scrim/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full border border-line-strong bg-surface-raised/80 flex items-center justify-center text-ink hover:border-signal-300"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 w-11 h-11 rounded-full border border-line-strong bg-surface-raised/80 flex items-center justify-center text-ink text-xl font-semibold hover:border-signal-300"
            >
              ‹
            </button>
            <motion.img
              key={open}
              src={PHOTOS[open].full}
              alt={`Workshop ${open + 1}`}
              className="no-plate max-w-full max-h-[85vh] object-contain rounded-card shadow-overlay"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              transition={fade}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-10 w-11 h-11 rounded-full border border-line-strong bg-surface-raised/80 flex items-center justify-center text-ink text-xl font-semibold hover:border-signal-300"
            >
              ›
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 readout">
              {open + 1} / {PHOTOS.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Workshops;
