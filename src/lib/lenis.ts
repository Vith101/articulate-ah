import type Lenis from 'lenis';

/**
 * Module-level handle to the active Lenis instance so non-React code
 * (e.g. route-change scroll resets) can drive smooth scrolling.
 */
let instance: Lenis | null = null;

export const getLenis = (): Lenis | null => instance;
export const setLenis = (next: Lenis | null): void => {
  instance = next;
};

/**
 * Glide back to the top of the page. Uses Lenis for a smooth, eased scroll on
 * route changes; falls back to an instant jump when Lenis is inactive
 * (e.g. visitors who prefer reduced motion).
 */
export const scrollToTop = (): void => {
  if (instance) {
    instance.scrollTo(0, {
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  } else {
    window.scrollTo(0, 0);
  }
};
