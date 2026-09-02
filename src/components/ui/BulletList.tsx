import React from 'react';

/** Disc bullet list matching the styling used throughout the service pages. */
export const BulletList: React.FC<{
  items: React.ReactNode[];
  className?: string;
}> = ({ items, className = '' }) => (
  <ul className={`text-left space-y-3 text-base md:text-lg list-disc pl-5 ${className}`}>
    {items.map((item, i) => (
      <li key={i} className="pl-2 tracking-wide">
        {item}
      </li>
    ))}
  </ul>
);
