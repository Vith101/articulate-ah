import React from 'react';
import { Link } from 'react-router-dom';

/** Rounded pink "pill" call-to-action button linking to an internal route. */
export const PillLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <div className="max-w-sm mx-auto flex justify-center">
    <Link
      to={to}
      className="
        inline-block bg-pink-950 text-white rounded-full px-8 py-2.5
        shadow-md transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-lg hover:bg-pink-900
        active:translate-y-0 active:shadow-md
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-100
      "
    >
      {children}
    </Link>
  </div>
);
