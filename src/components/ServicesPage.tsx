import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import ServicesWeProvideSection from './ServicesWeProvideSection';

const ServicesPage: React.FC = () => {
  return (
      <div className="flex flex-col font-sans text-gray-800 min-h-screen">
        <ServicesSection />
        <ServicesWeProvideSection />
      </div>
  );
};

export default ServicesPage;