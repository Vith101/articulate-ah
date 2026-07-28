import React from 'react';
import { Link } from 'react-router-dom';

/** Rounded pink "pill" call-to-action button linking to an internal route. */
export const PillLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <div className="container max-w-sm bg-pink-950 rounded-full mx-auto px-4 py-2 flex justify-center space-x-6">
    <Link to={to} className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">
      {children}
    </Link>
  </div>
);
