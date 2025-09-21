import React from 'react';
import heroImage from "../../assets/hero-image.png";

const HeroSection: React.FC = () => (
  <section id="hero" className="bg-pink-100 py-10 text-center">
    <div className='flex-1 rounded-2xl max-w-7xl mx-auto flex items-center justify-center'>
      <img
          src={heroImage}
          alt="A placeholder image spanning all three rows"
          className="w-full h-full object-cover"
      />
    </div>
  </section>
);

export default HeroSection;
