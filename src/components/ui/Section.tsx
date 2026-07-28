import React from 'react';

/**
 * Shared layout primitives used across the marketing pages.
 * Centralises the Tailwind class strings that were previously
 * copy-pasted into nearly every section.
 */

type DivProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/** Pink page section wrapper. */
export const Section: React.FC<DivProps & { padding?: 'sm' | 'lg' }> = ({
  children,
  className = '',
  id,
  padding = 'sm',
}) => (
  <section id={id} className={`${padding === 'lg' ? 'py-20' : 'py-10'} bg-pink-100 ${className}`}>
    {children}
  </section>
);

/** Standard centered content container. */
export const Container: React.FC<DivProps> = ({ children, className = '' }) => (
  <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

/** Centered section heading. */
export const SectionHeading: React.FC<DivProps & { mb?: string }> = ({
  children,
  className = '',
  mb = 'mb-10',
}) => (
  <h3 className={`text-3xl font-semibold text-center ${mb} ${className}`}>{children}</h3>
);
