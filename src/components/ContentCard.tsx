import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type ContentCardProps = {
  // Common Props
  title: React.ReactNode;
  className?: string;
  
  // Props specific to 'hover' variant
  body?: React.ReactNode; 
  
  // Props specific to 'flip' variant
  imageLink?: string; // Required for 'flip' variant, optional for 'hover'
  desc?: React.ReactNode; // Used for the back face of 'flip' variant

  // Variant discriminator
  variant: 'hover' | 'flip';
};

/**
 * A versatile card component that can act as a simple hover effect card 
 * or a fully flippable 3D card, controlled by the 'variant' prop.
 */
export const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  className = '', 
  imageLink, 
  body, 
  desc, 
  variant 
}) => {
  
  // --- Hover Card Logic (Brighter, Informational Look) ---
  if (variant === 'hover') {
    return (
      <div 
        className={`
          bg-rose-100 text-gray-800 p-6 shadow-xl rounded-lg 
          transition-all duration-300 ease-in-out
          hover:shadow-2xl hover:border-pink-500 hover:-translate-y-1 
          border border-pink-200 h-full ${className}
        `} 
      >
        {imageLink && (
          <img
            src={imageLink}
            alt={`${typeof title === 'string' ? title : 'Card title'} illustration`}
            className="max-w-full h-auto mb-4 rounded" 
          />
        )}
        <h4 className="text-xl font-semibold mb-2 text-pink-900">{title}</h4>
        {body && <p className="text-md leading-relaxed">{body}</p>}
      </div>
    );
  }

  // --- Flippable Card Logic ('flip' variant: Dark, Interactive Look) ---
  const finalImageLink = imageLink || '';

  return (
    // Outer container for perspective
    <div className={`p-0 [perspective:1000px] w-full ${className}`}>
      <div
        className={`
          relative w-full h-80 sm:h-96 md:h-80 lg:h-96 xl:h-80
          group
          [transform-style:preserve-3d]
          transition-transform duration-700 ease-in-out
          rounded-lg shadow-lg
          border-4 border-pink-600
          hover:[transform:rotateY(180deg)]
        `}
      >
        {/* Front Face */}
        <div 
          className={`
            absolute w-full h-full
            bg-pink-950 text-white
            rounded-md p-6
            [backface-visibility:hidden]
            flex flex-col items-center justify-center
          `}
        >
          {/* --- Added Icon Here --- */}
          <div className="absolute top-4 right-4 text-pink-500/70 group-hover:opacity-0 transition-opacity">
            <ArrowPathIcon className="w-6 h-6" />
          </div>
          {/* ------------------------ */}

          <img
            src={finalImageLink}
            alt={`${typeof title === 'string' ? title : 'Delivery step'} illustration`}
            className="max-w-[70%] h-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-center mt-auto">{title}</h4>
        </div>

        {/* Back Face */}
        <div 
          className={`
            absolute w-full h-full
            bg-pink-950 text-white
            rounded-md p-6
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
            flex flex-col justify-start overflow-auto
            text-left
          `}
        >
          <h4 className="text-xl font-semibold mb-4 text-center border-b border-pink-700 pb-2">{title}</h4>
          <p className='text-sm leading-relaxed'>{desc}</p>
        </div>
      </div>
    </div>
  );
};