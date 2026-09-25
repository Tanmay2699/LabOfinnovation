import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Pointer tilt plus the glint that tracks it.
 *
 * The card rotates up to 4 degrees on each axis toward the pointer with a
 * travel-xs lift, and a soft signal highlight follows the cursor at 12%
 * opacity behind the content. The glint is what makes the tilt read as a
 * physical surface catching light rather than as a CSS transform — without it
 * the rotation just looks like a bug.
 *
 * Past 4 degrees it stops reading as depth and starts reading as a toy.
 *
 * Touch pointers are ignored and prefers-reduced-motion disables the tilt
 * entirely (the glint goes with it, since it has nothing to catch).
 *
 * The card is measured once per hover, not per move: measuring a card that is
 * already tilted returns the tilted box, which feeds back into the next tilt
 * and makes the card chase itself. Writes are batched to one per frame.
 *
 * Spread the returned handlers onto the card and put `group` in its class list
 * so `.card-glint` picks up the hover.
 */
export default function useCardMotion(enabled = true) {
  const ref = useRef(null);
  const box = useRef(null); // { left, top, width, height, scrollY }
  const pointer = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const reduceMotion = useReducedMotion();
  const active = enabled && !reduceMotion;

  const apply = useCallback(() => {
    raf.current = 0;
    const el = ref.current;
    const b = box.current;
    if (!el || !b) return;
    const top = b.top - (window.scrollY - b.scrollY);
    const px = Math.min(1, Math.max(0, (pointer.current.x - b.left) / b.width));
    const py = Math.min(1, Math.max(0, (pointer.current.y - top) / b.height));
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    if (!active) return;
    el.style.transform =
      `perspective(1000px) rotateX(${((0.5 - py) * 8).toFixed(2)}deg) ` +
      `rotateY(${((px - 0.5) * 8).toFixed(2)}deg) translate3d(0,-8px,0)`;
  }, [active]);

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || e.pointerType === 'touch') return;
      if (!box.current) {
        const r = el.getBoundingClientRect();
        box.current = { left: r.left, top: r.top, width: r.width, height: r.height, scrollY: window.scrollY };
      }
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      if (!raf.current) raf.current = requestAnimationFrame(apply);
    },
    [apply]
  );

  const onPointerLeave = useCallback(() => {
    box.current = null;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = 0;
    const el = ref.current;
    if (el) el.style.transform = '';
  }, []);

  useEffect(() => () => raf.current && cancelAnimationFrame(raf.current), []);

  return { ref, onPointerMove, onPointerLeave };
}
