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

/** Jump to the top of the page, using Lenis when it's active. */
export const scrollToTop = (): void => {
  if (instance) {
    instance.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
};
