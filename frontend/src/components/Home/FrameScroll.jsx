import { useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

// public/frames/f_001.webp … f_300.webp — every 2nd source frame at 1920w.
const FRAME_COUNT = 300;
const frameSrc = (i) => `/frames/f_${String(i + 1).padStart(3, '0')}.webp`;

const drawFrame = (canvas, images, index) => {
  // Fall back to the nearest earlier frame that has loaded.
  let img;
  for (let i = index; i >= 0 && !img; i--) {
    if (images[i]?.complete && images[i].naturalWidth) img = images[i];
  }
  if (!canvas || !img) return;

  const dpr = window.devicePixelRatio || 1;
  const w = Math.round(canvas.clientWidth * dpr);
  const h = Math.round(canvas.clientHeight * dpr);
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  // object-fit: cover
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
};

/**
 * Scroll-scrubbed frame sequence. The section is tall; a sticky canvas stays
 * pinned while scroll progress picks the frame. Canvas instead of swapping an
 * <img> src, so there's no decode flash between frames.
 */
const FrameScroll = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const images = useRef([]);
  const current = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    images.current = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(i);
      if (i === 0) img.onload = () => drawFrame(canvasRef.current, images.current, current.current);
      return img;
    });
    const onResize = () => drawFrame(canvasRef.current, images.current, current.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const index = Math.min(FRAME_COUNT - 1, Math.floor(p * FRAME_COUNT));
    if (index === current.current) return;
    current.current = index;
    requestAnimationFrame(() => drawFrame(canvasRef.current, images.current, index));
  });

  return (
    <section ref={sectionRef} data-hide-nav className="relative h-[400vh] bg-surface-void" aria-label="Robot assembly sequence">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface-void to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-void to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default FrameScroll;
