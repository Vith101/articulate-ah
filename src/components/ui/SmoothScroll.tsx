import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../../lib/lenis';

/**
 * Enables momentum (inertia) scrolling across the whole page — the main
 * ingredient behind a "buttery smooth" marketing site. Disabled for visitors
 * who ask for reduced motion, in which case native scrolling is left alone.
 */
const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      // Expo-style ease so scrolling glides to a stop instead of halting.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
};

export default SmoothScroll;
