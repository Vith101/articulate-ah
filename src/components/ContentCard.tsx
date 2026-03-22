import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type ContentCardProps = {
  title: React.ReactNode;
  className?: string;
  body?: React.ReactNode; 
  imageLink?: string; 
  desc?: React.ReactNode; 
  variant: 'hover' | 'flip';
};

export const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  className = '', 
  imageLink, 
  body, 
  desc, 
  variant 
}) => {

  // --- Hover Card Logic ---
  if (variant === 'hover') {
    return (
      <div 
        className={`
          bg-rose-100 text-gray-800 shadow-xl rounded-lg 
          transition-all duration-300 ease-in-out
          hover:shadow-2xl hover:border-pink-500 hover:-translate-y-1 
          border border-pink-200 h-full flex flex-col overflow-hidden ${className}
        `} 
      >
        {imageLink && (
          /* Removed bg-white/50 to let rose-100 show through */
          <div className="w-full h-[192px] shrink-0 overflow-hidden flex items-center justify-center p-6">
            <img
              src={imageLink}
              alt={`${typeof title === 'string' ? title : 'Card title'} illustration`}
              className="max-w-full max-h-full object-contain" 
            />
          </div>
        )}
        
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <h4 className="text-xl font-semibold mb-2 text-pink-900 leading-tight">
            {title}
          </h4>
          {body && <p className="text-md leading-relaxed">{body}</p>}
        </div>
      </div>
    );
  }

  // --- Flippable Card Logic ---
  const finalImageLink = imageLink || '';

  return (
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
            flex flex-col items-center
          `}
        >
          <div className="absolute top-4 right-4 text-pink-500/70 group-hover:opacity-0 transition-opacity">
            <ArrowPathIcon className="w-6 h-6" />
          </div>

          {/* Consistent Scaling for Flip Cards */}
          <div className="w-full flex-grow flex items-center justify-center overflow-hidden py-4">
            <img
              src={finalImageLink}
              alt={`${typeof title === 'string' ? title : 'Delivery step'} illustration`}
              className="max-w-[80%] max-h-full object-contain"
            />
          </div>

          <h4 className="text-xl font-semibold text-center mt-4">{title}</h4>
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
          <div className='text-sm leading-relaxed'>{desc}</div>
        </div>
      </div>
    </div>
  );
};