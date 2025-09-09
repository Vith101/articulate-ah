// src/components/DeliveryCard.tsx
import React from 'react';

const FlipabbleCard: React.FC<{
  title: React.ReactNode;
  desc: React.ReactNode;
  className?: string;
  imageLink: string;
}> = ({ title, desc, className, imageLink }) => {
  return (
    <div className={`p-4 [perspective:1000px] ${className}`}>
      <div
        className={`
          relative w-full h-80 sm:h-96 md:h-80 lg:h-96 xl:h-80
          group
          [transform-style:preserve-3d]
          transition-transform duration-700 ease-in-out
          rounded-lg shadow-lg
          border border-gray-100
          hover:[transform:rotateY(180deg)]
        `}
      >
        <div className={`
          absolute w-full h-full
          bg-pink-950 text-white
          rounded-lg p-6
          backface-hidden
          flex flex-col items-center justify-center
        `}>
          <img
            src={imageLink}
            alt={`${typeof title === 'string' ? title : 'Delivery step'} illustration`}
            className="max-w-[70%] h-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-center mt-auto">{title}</h4>
        </div>

        <div className={`
          absolute w-full h-full
          bg-pink-950 text-white
          rounded-lg p-6
          backface-hidden
          [transform:rotateY(180deg)]
          flex flex-col items-center justify-center
          overflow-auto
        `}>
          <h4 className="text-xl font-semibold mb-2 text-center">{title}</h4>
          <p className='text-left text-sm leading-relaxed'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipabbleCard;